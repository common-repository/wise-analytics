<?php

namespace Kainex\WiseAnalytics;

use Kainex\WiseAnalytics\Admin\Settings;

/**
 * Installer
 *
 * @author Kainex <contact@kainex.pl>
 */
class Installer {

	/**
	 * Installs all plugin activation hooks.
	 *
	 * @param string $pluginFile
	 */
	public static function setup(string $pluginFile) {
		register_activation_hook($pluginFile, [Installer::class, 'activate']);
		register_deactivation_hook($pluginFile, [Installer::class, 'deactivate']);
		register_uninstall_hook($pluginFile, [Installer::class, 'uninstall']);
		add_action('wpmu_new_blog', [Installer::class, 'newBlog'], 10, 6);
		add_action('delete_blog', [Installer::class, 'deleteBlog'], 10, 6);
		add_action('admin_init', [Installer::class, 'onUpgrade'], 10, 6);
	}

	public static function getUsersTable() {
		global $wpdb;

		return $wpdb->prefix.'wise_analytics_users';
	}

	public static function getEventTypesTable() {
		global $wpdb;

		return $wpdb->prefix.'wise_analytics_event_types';
	}

	public static function getEventResourcesTable() {
		global $wpdb;

		return $wpdb->prefix.'wise_analytics_resources';
	}

	public static function getEventsTable() {
		global $wpdb;
		
		return $wpdb->prefix.'wise_analytics_events';
	}

	public static function getSessionsTable() {
		global $wpdb;

		return $wpdb->prefix.'wise_analytics_sessions';
	}

	/**
	 * Plugin's activation action. Creates database structure (if does not exist), upgrades database structure and
	 * initializes options. Supports WordPress multisite.
	 *
	 * @param boolean $networkWide True if it is a network activation - if so, run the activation function for each blog id
	 */
	public static function activate($networkWide) {
		global $wpdb;

		if (function_exists('is_multisite') && is_multisite()) {
			if ($networkWide) {
				$oldBlogID = $wpdb->blogid;
				$blogIDs = $wpdb->get_col($wpdb->prepare("SELECT blog_id FROM %i", $wpdb->blogs));
				foreach ($blogIDs as $blogID) {
					switch_to_blog($blogID);
					self::doActivation();
				}
				switch_to_blog($oldBlogID);
				return;
			}
		}
		self::doActivation();
	}

	/**
	 * Executed when admin creates a site in mutisite installation.
	 *
	 * @param integer $blogID
	 * @param integer $userID
	 * @param string $domain
	 * @param string $path
	 * @param string $siteID
	 * @param mixed $meta
	 */
	public static function newBlog($blogID, $userID, $domain, $path, $siteID, $meta) {
		global $wpdb;

		if (is_plugin_active_for_network('wise-analytics/wise-analytics-core.php')) {
			$oldBlogID = $wpdb->blogid;
			switch_to_blog($blogID);
			self::doActivation();
			switch_to_blog($oldBlogID);
		}
	}

	/**
	 * Executed when admin deletes a site in mutisite installation.
	 *
	 * @param int $blogID Blog ID
	 * @param bool $drop True if blog's table should be dropped. Default is false.
	 */
	public static function deleteBlog($blogID, $drop) {
		global $wpdb;

		$oldBlogID = $wpdb->blogid;
		switch_to_blog($blogID);
		self::doUninstall('deleteblog_'.$blogID);
		switch_to_blog($oldBlogID);
	}

	private static function doActivation() {
		self::createDbSchema();
		self::addRewriteRules();
		
		// set default options after installation:
		$container = Container::getInstance();
		/** @var Settings $settings */
		$settings = $container->get(Settings::class);
		$settings->setDefaultSettings();
	}

	public static function createDbSchema() {
		global $wpdb;

		$charsetCollate = $wpdb->get_charset_collate();

		$tableName = self::getUsersTable();
		$sql = "CREATE TABLE ".$tableName." (
				id bigint(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				uuid text NOT NULL,
				first_name text,
				last_name text,
				email text,
				company text,
				language text,
				ip text,
				screen_width int,
				screen_height int,
				device int,
				created datetime NOT NULL default now(),
				data json
		) $charsetCollate;";
		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);

		$tableName = self::getEventResourcesTable();
		$sql = "CREATE TABLE ".$tableName." (
				id bigint(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				type_id bigint(11),
				text_key text,
				text_value text,
				int_key int,
				int_value int,
				created datetime not null default now()
		) $charsetCollate;";
		dbDelta($sql);

		$tableName = self::getEventsTable();
		$sql = "CREATE TABLE ".$tableName." (
				id bigint(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				user_id bigint(11),
				type_id bigint(11),
				uri text,
				created datetime not null default now(),
				checksum text,
				data json,
				duration int default 0
		) $charsetCollate;";
		dbDelta($sql);

		$tableName = self::getSessionsTable();
		$sql = "CREATE TABLE ".$tableName." (
				id bigint(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				user_id bigint(11),
				start datetime not null,
				end datetime not null,
				local_time datetime,
				local_timezone int,
				first_event int,
				last_event int,
				duration int default 0,
				events json,
				source text,
				source_group text,
				source_category text
		) $charsetCollate;";
		dbDelta($sql);

		$tableName = self::getEventTypesTable();
		$sql = "CREATE TABLE ".$tableName." (
				id bigint(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				name text NOT NULL,
				slug text NOT NULL,
				data json
		) $charsetCollate;";
		dbDelta($sql);
	}

	/**
	 * Plugin's deactivation action.
	 */
	public static function deactivate() {
		global $wpdb;

		if (function_exists('is_multisite') && is_multisite()) {
			$blogIDs = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
			foreach ($blogIDs as $blogID) {
				self::uninstallCron($blogID);
			}
			return;
		}

		self::uninstallCron($wpdb->blogid);
	}

	/**
	 * Plugin's uninstall action. Deletes all database tables and plugin's options.
	 * Supports WordPress multisite.
	 */
	public static function uninstall() {
		global $wpdb;

		if (function_exists('is_multisite') && is_multisite()) {
			$oldBlogID = $wpdb->blogid;
			$blogIDs = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
			foreach ($blogIDs as $blogID) {
				switch_to_blog($blogID);
				self::doUninstall();
			}
			switch_to_blog($oldBlogID);
			return;
		}
		self::doUninstall();
	}

	public static function onUpgrade() {
		$oldVersion = get_option('wa_version', '1.0');

		if (!(version_compare($oldVersion, WISE_ANALYTICS_VERSION) < 0)) {
			return ;
		}
		self::createDbSchema();
		update_option('wa_version', WISE_ANALYTICS_VERSION);
	}

	private static function doUninstall($refererCheck = null) {
		if (!current_user_can('activate_plugins')) {
			return;
		}
		if ($refererCheck !== null) {
			check_admin_referer($refererCheck);
		}
		
		self::dropTable(self::getEventTypesTable());
		self::dropTable(self::getEventsTable());
		self::dropTable(self::getSessionsTable());
		self::dropTable(self::getUsersTable());
		self::dropTable(self::getEventResourcesTable());
		
		//WiseAnalyticsOptions::getInstance()->dropAllOptions();
	}

	private static function dropTable($tableName) {
		global $wpdb;

		$wpdb->query($wpdb->prepare("DROP TABLE IF EXISTS %i", $tableName));
	}

	/**
	 * Registers API endpoints using rewrite rules.
     */
	private static function addRewriteRules() {
		add_rewrite_tag('%_wa_api_action%', '([a-zA-Z\d\-_+]+)');
		add_rewrite_rule('wa-api/([a-zA-Z\d\-_+]+)/?', 'index.php?_wa_api_action=$matches[1]', 'top');
		flush_rewrite_rules();
	}

	private static function uninstallCron($blogId) {
		if (wp_next_scheduled('wa_processing_hook_'.$blogId)) {
			$timestamp = wp_next_scheduled('wa_processing_hook_' . $blogId);
			wp_unschedule_event($timestamp, 'wa_processing_hook_' . $blogId);
		}
	}

}