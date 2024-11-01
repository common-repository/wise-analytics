<?php

namespace Kainex\WiseAnalytics\Integrations;

use Kainex\WiseAnalytics\Integrations\Plugins\Plugins;

class Integrations {

	/** @var WordPressIntegrations */
	private $wordPressIntegrations;

	/** @var Plugins */
	private $pluginsIntegrations;

	/**
	 * Integrations constructor.
	 * @param WordPressIntegrations $wordPressIntegrations
	 * @param Plugins $pluginsIntegrations
	 */
	public function __construct(WordPressIntegrations $wordPressIntegrations, Plugins $pluginsIntegrations)
	{
		$this->wordPressIntegrations = $wordPressIntegrations;
		$this->pluginsIntegrations = $pluginsIntegrations;
	}

	public function install() {
		$this->wordPressIntegrations->install();
		$this->pluginsIntegrations->install();
	}

}