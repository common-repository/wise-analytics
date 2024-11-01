<?php

namespace Kainex\WiseAnalytics;

use Kainex\WiseAnalytics\Services\Users\VisitorsService;

/**
 * Analytics core.
 *
 * @author Kainex <contact@kainex.pl>
 */
class Analytics {

	/**
	 * Registers and enqueues all necessary resources (scripts or styles).
	 */
	public function enqueueResources() {
		$config = [
			'url' => get_site_url(),
			'cookie' => VisitorsService::UUID_COOKIE
		];

		if (getenv('WC_ENV') === 'DEV') {
			wp_enqueue_script('wise-analytics-core', plugins_url('assets/js/frontend/wise-analytics-frontend.js', dirname(__FILE__)), array('jquery'), WISE_ANALYTICS_VERSION, false);
		} else {
			wp_enqueue_script('wise-analytics-core', plugins_url('assets/js/frontend/wise-analytics-frontend.min.js', dirname(__FILE__)), array('jquery'), WISE_ANALYTICS_VERSION, false);
		}
		wp_localize_script('wise-analytics-core', 'waConfig', $config);
	}

	public function enqueueAdminResources() {
		wp_enqueue_script('wise-analytics-admin-vendor', plugins_url('assets/js/admin/wise-analytics-vendor.min.js', dirname(__FILE__)), array('jquery'), WISE_ANALYTICS_VERSION.'.'.filemtime(WISE_ANALYTICS_ROOT.'/assets/js/admin/wise-analytics-vendor.min.js'), true);
		wp_enqueue_script('wise-analytics-admin-libs', plugins_url('assets/js/admin/wise-analytics-libs.min.js', dirname(__FILE__)), array('jquery'), WISE_ANALYTICS_VERSION.'.'.filemtime(WISE_ANALYTICS_ROOT.'/assets/js/admin/wise-analytics-vendor.min.js'), true);

		if (getenv('WC_ENV') === 'DEV') {
			wp_enqueue_script('wise-analytics-admin-core', plugins_url('assets/js/admin/wise-analytics.js', dirname(__FILE__)), array('jquery', 'wise-analytics-admin-vendor', 'wise-analytics-admin-libs'), WISE_ANALYTICS_VERSION.'.'.filemtime(WISE_ANALYTICS_ROOT.'/assets/js/admin/wise-analytics.js'), true);
			wp_enqueue_style('wise-analytics-core', plugins_url('assets/css/admin/wise-analytics.css', dirname(__FILE__)), array(), WISE_ANALYTICS_VERSION);
		} else {
			wp_enqueue_script('wise-analytics-admin-core', plugins_url('assets/js/admin/wise-analytics.min.js', dirname(__FILE__)), array('jquery', 'wise-analytics-admin-vendor', 'wise-analytics-admin-libs'), WISE_ANALYTICS_VERSION, true);
			wp_enqueue_style('wise-analytics-core', plugins_url('assets/css/admin/wise-analytics.min.css', dirname(__FILE__)), array(), WISE_ANALYTICS_VERSION);
		}
		wp_localize_script('wise-analytics-admin-core', 'waAdminConfig', [
			'apiBase' => site_url().'/wp-json/wise-analytics/v1'
		]);
	}
	
}