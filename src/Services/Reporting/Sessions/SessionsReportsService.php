<?php

namespace Kainex\WiseAnalytics\Services\Reporting\Sessions;

use Kainex\WiseAnalytics\Services\Reporting\ReportingService;
use Kainex\WiseAnalytics\Utils\TimeUtils;

class SessionsReportsService extends ReportingService {

	public function getAverageTime(\DateTime $startDate, \DateTime $endDate): array {
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$result = $this->querySessions([
			'select' => ['SUM(duration) / COUNT(*) as avgSessionTime'],
			'where' => ["start >= %s", "start <= %s"],
			'whereArgs' => [$startDateStr, $endDateStr]
		]);

		$avgSessionTime = count($result) > 0 ? (int) $result[0]->avgSessionTime : 0;

		list($startDate, $endDate) = $this->getDatesToCompare($startDate, $endDate);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');
		$result = $this->querySessions([
			'select' => ['SUM(duration) / COUNT(*) as avgSessionTime'],
			'where' => ["start >= %s", "start <= %s"],
			'whereArgs' => [$startDateStr, $endDateStr]
		]);
		$previousAvgSessionTime = count($result) > 0 ? (int) $result[0]->avgSessionTime : 0;

		return [
			'time' => TimeUtils::formatDuration($avgSessionTime, 'suffixes'),
			'previousTime' => TimeUtils::formatDuration($previousAvgSessionTime, 'suffixes'),
			'timeDiffPercent' => $previousAvgSessionTime > 0 ? round((($avgSessionTime - $previousAvgSessionTime) / $previousAvgSessionTime * 100), 2) : null
		];
	}

	public function getSessionsAvgTimeDaily($queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$result = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'SUM(duration) / COUNT(*) as avgSessionTime',
				'DATE_FORMAT(se.start, \'%%Y-%%m-%%d\') as date',
			],
			'where' => ["se.start >= %s", "se.start <= %s"],
			'whereArgs' => [$startDateStr, $endDateStr],
			'group' => ['DATE_FORMAT(se.start, \'%%Y-%%m-%%d\')']
		]);

		$output = [];
		foreach ($result as $record) {
			$output[$record->date] = intval($record->avgSessionTime);
		}

		$sessions = [];
		$endDate->modify('+1 day');
		while ($startDate->format('Y-m-d') !== $endDate->format('Y-m-d')) {
			$dateStr = $startDate->format('Y-m-d');

			$sessions[] = [
				'date' => $dateStr,
				'time' => $output[$dateStr] ?? 0,
				'timeFormatted' => TimeUtils::formatDuration($output[$dateStr] ?? 0)
			];

			$startDate->modify('+1 day');
		}

		return [
			'sessions' => $sessions
		];
	}

	public function getSessionsDaily(array $queryParams) {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$result = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'DATE_FORMAT(se.start, \'%%Y-%%m-%%d\') as date',
				'count(*) as sessions'
			],
			'where' => ["se.start >= %s", "se.start <= %s"],
			'whereArgs' => [$startDateStr, $endDateStr],
			'group' => ['DATE_FORMAT(se.start, \'%%Y-%%m-%%d\')']
		]);


		$output = [];
		foreach ($result as $record) {
			$output[$record->date] = intval($record->sessions);
		}

		$sessions = [];
		$endDate->modify('+1 day');
		while ($startDate->format('Y-m-d') !== $endDate->format('Y-m-d')) {
			$dateStr = $startDate->format('Y-m-d');

			$sessions[] = [
				'date' => $dateStr,
				'sessions' => isset($output[$dateStr]) ? $output[$dateStr] : 0
			];

			$startDate->modify('+1 day');
		}

		return [
			'sessions' => $sessions
		];
	}

	public function getSessionsOfVisitorHourly(array $params): array {
		if (!isset($params['filters']['visitorId'])) {
			throw new \Exception('Missing ID');
		}

		$visitorId = intval($params['filters']['visitorId']);

		$result = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'DATE_FORMAT(se.local_time, \'%%H\') as hour',
				'count(*) as totalSessions'
			],
			'where' => ["se.user_id = %d", 'local_time IS NOT NULL'],
			'whereArgs' => [$visitorId],
			'group' => ['DATE_FORMAT(se.local_time, \'%%H\')'],
			'order' => ['hour ASC']
		]);

		$map = [];
		foreach ($result as $hour) {
			$map[intval($hour->hour)] = $hour;
		}

		$output = [];
		for ($i = 0; $i < 24; $i++) {
			$output[] = $map[$i] ?? [
				'hour' => str_pad($i, 2, '0', STR_PAD_LEFT),
				'totalSessions' => 0
			];
		}

		return ['hourly' => $output];
	}

}