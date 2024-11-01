<?php

namespace Kainex\WiseAnalytics\Utils;

class IPUtils {

    /** @var bool */
    private static $useProxy = true;

    /** @var string */
    private static $proxyHeader = 'HTTP_X_FORWARDED_FOR';

    /**
     * Returns client IP address.
     *
     * @return string IP address.
     */
    public static function getIpAddress() {
        $ip = self::getIpAddressFromProxy();
        if ($ip) {
            return $ip;
        }

        if (isset($_SERVER['REMOTE_ADDR'])) {
            return sanitize_text_field($_SERVER['REMOTE_ADDR']);
        }

        return '';
    }

    /**
     * @return false|string
     */
    private static function getIpAddressFromProxy() {
        if (!self::$useProxy) {
            return false;
        }

        $header = self::$proxyHeader;
        if (!isset($_SERVER[$header]) || empty($_SERVER[$header])) {
            return false;
        }

        $ips = explode(',', sanitize_text_field($_SERVER[$header]));
        $ips = array_map('trim', $ips);

        if (empty($ips)) {
            return false;
        }

	    return array_pop($ips);
    }

}