<?php

namespace Kainex\WiseAnalytics\Integrations\Plugins;

class Plugins {

	/** @var ContactForm7 */
	private $contactForm7;

	/**
	 * Plugins constructor.
	 * @param ContactForm7 $contactForm7
	 */
	public function __construct(ContactForm7 $contactForm7)
	{
		$this->contactForm7 = $contactForm7;
	}

	public function install() {
		$this->contactForm7->install();
	}

}