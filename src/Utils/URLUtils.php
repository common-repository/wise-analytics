<?php

namespace Kainex\WiseAnalytics\Utils;

use Kainex\WiseAnalytics\Options;

class URLUtils {

	/** @var Options */
	private $options;

	/**
	 * URLUtils constructor.
	 * @param Options $options
	 */
	public function __construct(Options $options)
	{
		$this->options = $options;
	}

	public function toPathAndQuery(string $url): string {
		$url = str_replace($this->options->getBaseURL(), '', $url);
		if (!$url) {
			$url = '/';
		}

		return $url;
	}

	public static function getRefererURL(): string {
		if (isset($_SERVER['HTTP_REFERER'])) {
			return sanitize_text_field($_SERVER['HTTP_REFERER']);
		}

		return self::getCurrentURL();
	}

	public static function getCurrentURL(): string {
	    if (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] === 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	        $protocol = 'https://';
	    } else {
	        $protocol = 'http://';
	    }

	    return $protocol . sanitize_text_field($_SERVER['HTTP_HOST']) . sanitize_text_field($_SERVER['REQUEST_URI']);
	}

}