<?php

namespace Kainex\WiseAnalytics\Utils;

/**
 * TODO: rotate logs
 *
 * Class Logger
 * @package Kainex\WiseAnalytics\Utils
 */
class Logger {

	public function info(string $text) {
		$text = sprintf('[%s] [wa] [info] %s', date('Y-m-d H:i:s'), $text);
		$this->publish($text);
	}

	public function error(string $text) {
		$text = sprintf('[%s] [wa] [error] %s', date('Y-m-d H:i:s'), $text);
		$this->publish($text);
	}

	private function publish(string $text) {
		if ($this->setupPrimary()) {
			$this->publishPrimary($text);
		} else {
			$this->publishFallback($text);
		}
	}

	private function setupPrimary(): bool {
		if (defined('WP_CONTENT_DIR')) {
			$path = $this->getLogDirectory();
			if (is_writable($path)) {
				return true;
			}

			if (!file_exists($path)) {
				if (!@mkdir($path, 0755)) {
					return false;
				}
				if (is_writable($path)) {
					return true;
				}
			}
		}

		return false;
	}

	private function publishPrimary(string $text) {
		error_log($text."\n", 3, $this->getLogFile());
	}

	private function getLogFile(): string {
		return $this->getLogDirectory().DIRECTORY_SEPARATOR.'wa.log';
	}

	private function getLogDirectory(): string {
		return WP_CONTENT_DIR.DIRECTORY_SEPARATOR.'wa-logs';
	}

	private function publishFallback(string $text) {
		error_log($text);
	}

}