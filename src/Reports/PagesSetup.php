<?php

namespace Kainex\WiseAnalytics\Reports;

use Kainex\WiseAnalytics\Reports\Pages\Overview;

class PagesSetup {

	/** @var Overview */
	private $overviewPage;

	/**
	 * PagesSetup constructor.
	 * @param Overview $overviewPage
	 */
	public function __construct(Overview $overviewPage)
	{
		$this->overviewPage = $overviewPage;
	}

	public function install() {
		add_menu_page('Analytics', 'Analytics', 'manage_options', 'wise-analytics', '', 'dashicons-chart-bar', 2);
		add_submenu_page('wise-analytics-overview', 'Overview', 'Overview', 'manage_options', 'wise-analytics', array($this, 'overviewAction'));
	}

	public function overviewAction() {
		$this->overviewPage->render();
	}

}