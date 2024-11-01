<?php

namespace Kainex\WiseAnalytics\Utils;

class TimeUtils {

	/**
	 * @param string $timestamp
	 * @param bool $shortToday
	 * @return string
	 */
	public static function formatTimestamp(string $timestamp, bool $shortToday = true): string {
		static $now = null;
		if ($shortToday && !$now) {
			$now = date('M j, Y ');
		}

		$formatted = date('M j, Y H:i', strtotime($timestamp));

		return $shortToday ? preg_replace('/^'.$now.'/', '', $formatted) : $formatted;
	}

	/**
	 * @param integer $seconds
	 * @param string|null $mode
	 * @param bool $roundSeconds
	 * @return string
	 */
	public static function formatDuration(int $seconds, ?string $mode = null, bool $roundSeconds = false): string {
		if ($seconds === 0) {
			return '0s';
		}

		$periods = [
			'centuries' => 3155692600,
			'decades' => 315569260,
			'years' => 31556926,
			'months' => 2629743,
			'weeks' => 604800,
			'days' => 86400,
			'hours' => 3600,
			'minutes' => 60,
			'seconds' => 1
		];

		$periods_shortcuts = [
			'centuries' => 'c',
			'decades' => 'd',
			'years' => 'y',
			'months' => 'm',
			'weeks' => 'w',
			'days' => 'd',
			'hours' => 'h',
			'minutes' => 'm',
			'seconds' => 's'
		];

		$durations = [];

		foreach ($periods as $period => $seconds_in_period) {
			if ($seconds >= $seconds_in_period) {
				$durations[$period] = floor($seconds / $seconds_in_period);
				$seconds -= $durations[$period] * $seconds_in_period;
			}
		}

		if ($roundSeconds && array_key_exists('seconds', $durations) && array_key_exists('minutes', $durations)) {
			if ($durations['seconds'] > 50) {
				$durations['minutes'] += 1;
			}

			$durations['seconds'] = 0;
		}

		$duration_elements = [];

		foreach (array_reverse($periods) as $period => $value) {
			if (array_key_exists($period, $durations) && $durations[$period] > 0) {
				$duration_value = $durations[$period];
				if (strlen(trim($duration_value)) != 2) {
					$duration_value = str_pad($duration_value, 2, '0', STR_PAD_LEFT);
				}
				$duration_elements[$period] = $duration_value;
			}
		}

		if ($mode === 'suffixes') {
			$duration_elements = array_reverse($duration_elements);
			$first = true;
			foreach ($duration_elements as $period => $value) {
				if (array_key_exists($period, $periods_shortcuts)) {
					if ($first) {
						$value = intval($value);
						$first = false;
					}
					$duration_elements[$period] = $value.$periods_shortcuts[$period];
				}
			}

			return implode(' ', $duration_elements);
		} else {
			if (count($duration_elements) < 3) {
				$duration_elements = array_pad($duration_elements, 3, '00');
			}
			if (array_key_exists('hours', $duration_elements) && $duration_elements['hours'] === '00') {
				unset($duration_elements['hours']);
			}

			return implode(':', array_reverse($duration_elements));
		}
	}

}