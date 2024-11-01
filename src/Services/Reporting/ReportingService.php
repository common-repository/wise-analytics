<?php

namespace Kainex\WiseAnalytics\Services\Reporting;

use Kainex\WiseAnalytics\Services\Commons\DataAccess;
use Kainex\WiseAnalytics\Utils\TimeUtils;

/**
 * Class ReportingService
 * @package Kainex\WiseAnalytics\Services\Reporting
 */
abstract class ReportingService {
	use DataAccess;

	const RESULTS_LIMIT = 20;

	/**
	 * @param array $queryParams
	 * @return \DateTime[]
	 * @throws \Exception
	 */
	protected function getDatesFilters(array $queryParams): array {
		if (!isset($queryParams['filters'])) {
			throw new \Exception('Missing filters');
		}

		$filters = $queryParams['filters'];
		if (!isset($filters['endDate'])) {
			throw new \Exception('Missing filters');
		}
		if (!isset($filters['startDate'])) {
			throw new \Exception('Missing filters');
		}

		$startDate = \DateTime::createFromFormat("Y-m-d", $filters['startDate']);
		$endDate = \DateTime::createFromFormat("Y-m-d", $filters['endDate']);
		if ($startDate === false || $endDate === false) {
			throw new \Exception('Invalid dates format');
		}

		$startDate->setTime(0, 0, 0);
		$endDate->setTime(23, 59, 59);

		if ($startDate >= $endDate) {
			throw new \Exception('Invalid dates');
		}

		return [$startDate, $endDate];
	}

	/**
	 * @param \DateTime $startDate
	 * @param \DateTime $endDate
	 * @return \DateTime[]
	 */
	protected function getDatesToCompare(\DateTime $startDate, \DateTime $endDate): array {
		$interval = $startDate->diff($endDate);

		$date1 = clone $startDate;
		$date1->modify('-'.($interval->days + 1).' days');
		$date2 = clone $startDate;
		$date2->modify('-1 days');

		$date1->setTime(0, 0, 0);
		$date2->setTime(23, 59, 59);

		return [$date1, $date2];
	}

	protected function formatResults(array $results, array $defs): array {
		foreach ($results as $result) {
			foreach ($defs as $fieldName => $formatter) {
				if (!property_exists($result, $fieldName)) {
					continue;
				}
				switch ($formatter) {
					case 'duration':
						$result->$fieldName = $result->$fieldName > 0 ? TimeUtils::formatDuration($result->$fieldName, 'suffixes') : '0s';
						break;
					case 'timestamp':
						$result->$fieldName = TimeUtils::formatTimestamp($result->$fieldName);
						break;
				}
			}
		}

		return $results;
	}

}