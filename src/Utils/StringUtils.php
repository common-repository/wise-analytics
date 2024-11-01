<?php

namespace Kainex\WiseAnalytics\Utils;

class StringUtils {

	/**
	 * Creates a UUID for the user
	 *
	 * @return string UUID
	 */
	public static function createUuid() {
		$microTime = microtime();
		list($a_dec, $a_sec) = explode(" ", $microTime);
		$dec_hex = sprintf("%x", $a_dec * 1000000);
		$sec_hex = sprintf("%x", $a_sec);
		self::ensureLength($dec_hex, 5);
		self::ensureLength($sec_hex, 6);
		$uuid = "";
		$uuid .= $dec_hex;
		$uuid .= self::createUuidSection(3);
		$uuid .= '-';
		$uuid .= self::createUuidSection(4);
		$uuid .= '-';
		$uuid .= self::createUuidSection(4);
		$uuid .= '-';
		$uuid .= self::createUuidSection(4);
		$uuid .= '-';
		$uuid .= $sec_hex;
		$uuid .= self::createUuidSection(6);

		return $uuid;
	}

	/**
	 * @param integer $characters Number of characters
	 * @return string UUID Section
	 */
	private static function createUuidSection($characters) {
		$return = "";
		for ($i = 0; $i < $characters; $i++) {
			$return .= sprintf("%x", mt_rand(0, 15));
		}

		return $return;
	}

	/**
	 * @param string $string UUID Segment
	 * @param integer $length Required Length
	 */
	private static function ensureLength(string &$string, int $length) {
		$stringLength = strlen($string);
		if ($stringLength < $length) {
			$string = str_pad($string, $length, "0");
		} else if ($stringLength > $length) {
			$string = substr($string, 0, $length);
		}
	}

}