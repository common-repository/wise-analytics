<?php

namespace Kainex\WiseAnalytics\Tracking;

use Kainex\WiseAnalytics\Options;

/**
 * Core tracking code.
 *
 * @author Kainex <contact@kainex.pl>
 */
class Core {

	public function install() {
		add_action('wp_enqueue_scripts', array($this, 'printPageViewTrackingCode'));
	}
	
	/**
	 * Prints JS tracking code for all non-404 pages.
     */
	public function printPageViewTrackingCode() {
		if (!is_404()) {
			wp_add_inline_script( 'wise-analytics-core', 'wa.track("page-view")');
		}
	}
	
}