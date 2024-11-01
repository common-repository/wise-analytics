<?php
/*
	Plugin Name: Wise Analytics
	Version: 1.1.4
	Plugin URI: https://kainex.pl/projects/wp-plugins/wise-analytics
	Description: Manage your own stats!
	Author: Kainex
	Author URI: https://kainex.pl
	Text Domain: wise-analytics
	License: GPL v2 or later
	License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

use Kainex\WiseAnalytics\Admin\Settings;
use Kainex\WiseAnalytics\Analytics;
use Kainex\WiseAnalytics\Container;
use Kainex\WiseAnalytics\Endpoints\FrontHandler;
use Kainex\WiseAnalytics\Endpoints\ReportsEndpoint;
use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Integrations\Integrations;
use Kainex\WiseAnalytics\Loader;
use Kainex\WiseAnalytics\Reports\PagesSetup;
use Kainex\WiseAnalytics\Services\Processing\ProcessingService;
use Kainex\WiseAnalytics\Tracking\Core;

if (!defined('ABSPATH')) {
	exit;
} // Exit if accessed directly

define('WISE_ANALYTICS_VERSION', '1.1.4');
define('WISE_ANALYTICS_ROOT', dirname(__FILE__));
define('WISE_ANALYTICS_NAME', 'Wise Analytics');

// class loader:
require_once(dirname(__FILE__).'/src/Loader.php');
Loader::install();

// DI container:
$container = Container::getInstance();

add_action('wp_enqueue_scripts', [$container->get(Analytics::class), 'enqueueResources']);

// reporting:
add_action('admin_menu', [$container->get(PagesSetup::class), 'install']);
add_action('rest_api_init', [$container->get(ReportsEndpoint::class), 'registerEndpoints']);

// tracking:
add_action('init', [$container->get(Core::class), 'install']);
add_action('init', [$container->get(FrontHandler::class), 'registerEndpoints']);
add_action('pre_get_posts', [$container->get(FrontHandler::class), 'registerHandlers']);

if (is_admin()) {
	Installer::setup(__FILE__);
	add_action('admin_enqueue_scripts', [$container->get(Analytics::class), 'enqueueAdminResources']);

	/** @var Kainex\WiseAnalytics\Admin\Settings $settings */
	$settings = $container->get(Settings::class);
	$settings->install();
}

// install cron tasks:
// install cron tasks:
if (!wp_next_scheduled('wa_processing_hook_'.get_current_blog_id())) {
	wp_schedule_event(time(), 'twicedaily', 'wa_processing_hook_'.get_current_blog_id());
}
add_action('wa_processing_hook_'.get_current_blog_id(), [$container->get(ProcessingService::class), 'process']);
if (isset($_GET['wa_processing_hook'])) {
	$container->get(ProcessingService::class)->process();
}

// integrations:
/** @var Kainex\WiseAnalytics\Integrations\Integrations $integrations */
$integrations = $container->get(Integrations::class);
$integrations->install();