<?php

namespace Kainex\WiseAnalytics;

class Loader {

	const PREFIX = 'Kainex\WiseAnalytics';

	/**
	 * A plain class loader.
	 */
	public static function install() {
		spl_autoload_register(function (string $class) {
			if (strpos($class, self::PREFIX) !== 0) {
				return;
			}
			$class = str_replace(self::PREFIX, '', $class);

			$filename = WISE_ANALYTICS_ROOT . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
			include($filename);
		});
	}

}