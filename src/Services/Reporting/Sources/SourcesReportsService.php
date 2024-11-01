<?php

namespace Kainex\WiseAnalytics\Services\Reporting\Sources;

use Kainex\WiseAnalytics\Services\Reporting\ReportingService;
use Kainex\WiseAnalytics\Utils\TimeUtils;

class SourcesReportsService extends ReportingService {

	public function getSourceCategories(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$sources = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'count(distinct se.user_id) AS totalVisitors',
				'SUM(se.duration) / COUNT(*) as avgSessionTime',
				'COUNT(*) AS totalSessions',
				'SUM(JSON_LENGTH(se.events)) / COUNT(*) AS eventsPerSession',
				'SUM(JSON_LENGTH(se.events)) AS totalEvents',
				'se.source_category AS source'
			],
			'where' => ["se.start >= %s", "se.start <= %s", 'se.source_category IS NOT NULL', "se.source_category <> ''"],
			'whereArgs' => [$startDateStr, $endDateStr],
			'group' => ['se.source_category']
		]);

		foreach ($sources as $key => $source) {
			$source->avgSessionTime = $source->avgSessionTime > 0 ? TimeUtils::formatDuration($source->avgSessionTime, 'suffixes') : '0s';
			$source->eventsPerSession = round($source->eventsPerSession, 1);
		}

		return [
			'sourceCategories' => $sources
		];
	}

	public function getSocialNetworks(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$sources = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'count(distinct se.user_id) AS totalVisitors',
				'SUM(se.duration) / COUNT(*) as avgSessionTime',
				'COUNT(*) AS totalSessions',
				'SUM(JSON_LENGTH(se.events)) / COUNT(*) AS eventsPerSession',
				'SUM(JSON_LENGTH(se.events)) AS totalEvents',
				'se.source_group AS socialNetwork'
			],
			'where' => ["se.start >= %s", "se.start <= %s", 'se.source_category = %s'],
			'whereArgs' => [$startDateStr, $endDateStr, 'Organic Social'],
			'group' => ['se.source_group']
		]);

		foreach ($sources as $key => $source) {
			$source->avgSessionTime = $source->avgSessionTime > 0 ? TimeUtils::formatDuration($source->avgSessionTime, 'suffixes') : '0s';
			$source->eventsPerSession = round($source->eventsPerSession, 1);
		}

		return [
			'socialNetworks' => $sources
		];
	}

	public function getOrganicSearch(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$sources = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'count(distinct se.user_id) AS totalVisitors',
				'se.source_group AS searchEngine'
			],
			'where' => ["se.start >= %s", "se.start <= %s", 'se.source_category = %s'],
			'whereArgs' => [$startDateStr, $endDateStr, 'Organic Search'],
			'group' => ['se.source_group']
		]);

		return [
			'organic' => $sources
		];
	}

	public function getSourceCategoriesDaily(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$result = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'DATE_FORMAT(se.start, \'%%Y-%%m-%%d\') as date',
				'se.source_category',
				'count(*) as sessions'
			],
			'where' => ["se.start >= %s", "se.start <= %s", 'se.source_category IS NOT NULL', "se.source_category <> ''"],
			'whereArgs' => [$startDateStr, $endDateStr],
			'group' => ['DATE_FORMAT(se.start, \'%%Y-%%m-%%d\')', 'se.source_category']
		]);

		$output = [];
		$allCategories = [];
		foreach ($result as $record) {
			$sourceCategory = $record->source_category ?? 'Unknown';
			$output[$record->date][$sourceCategory] = intval($record->sessions);
			$allCategories[] = $sourceCategory;
		}

		$allCategories = array_values(array_unique($allCategories));

		$sourceCategories = [];
		$endDate->modify('+1 day');
		while ($startDate->format('Y-m-d') !== $endDate->format('Y-m-d')) {
			$dateStr = $startDate->format('Y-m-d');

			$entry = [
				'date' => $dateStr
			];
			foreach ($allCategories as $category) {
				$entry[$category] = $output[$dateStr][$category] ?? 0;
			}

			$sourceCategories[] = $entry;

			$startDate->modify('+1 day');
		}

		// get all categories:
		$categories = $this->querySessions([
			'alias' => 'se',
			'select' => [
				'se.source_category'
			],
			'where' => ['se.source_category IS NOT NULL', "se.source_category <> ''"],
			'order' => ['se.source_category asc'],
			'group' => ['se.source_category']
		]);
		$allCategories = [];
		foreach ($categories as $category) {
			$allCategories[] = $category->source_category;
		}

		return [
			'categories' => $allCategories,
			'sourceCategories' => $sourceCategories
		];
	}

	/**
	 * Queries sessions of particular source category.
	 *
	 * @param array $queryParams
	 * @return array
	 * @throws \Exception
	 */
	public function getSources(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');
		$offset = intval($queryParams['offset'] ?? 0);
		$category = $queryParams['filters']['category'];

		$args = [
			'alias' => 'se',
			'select' => [
				'count(distinct se.user_id) AS totalVisitors',
				'SUM(se.duration) / COUNT(*) as avgSessionTime',
				'COUNT(*) AS totalSessions',
				'SUM(JSON_LENGTH(se.events)) / COUNT(*) AS eventsPerSession',
				'SUM(JSON_LENGTH(se.events)) AS totalEvents',
			],
			'where' => ["se.start >= %s", "se.start <= %s", "se.source_category = %s"],
			'whereArgs' => [$startDateStr, $endDateStr, $category],
			'order' => ["totalSessions DESC"],
			'limit' => self::RESULTS_LIMIT,
			'offset' => $offset
		];

		if (in_array($category, ['Social Network', 'Organic'])) {
			$args['select'][] = 'se.source_group AS sourceGroup';
			$args['group'] = ['se.source_group'];
		} else if ($category === 'Referral') {
			$args['select'][] = 'se.source AS sourceGroup';
			$args['group'] = ['se.source'];
		}

		$count = $this->querySessions([
			'alias' => 'se',
			'select' => [
				$args['group'][0]
			],
			'group' => $args['group'],
			'where' => $args['where'],
			'whereArgs' => $args['whereArgs'],
			'outerQuery' => 'SELECT COUNT(*) AS total FROM (%s) innerSQL'
		]);

		$sources = $this->querySessions($args);
		foreach ($sources as $key => $source) {
			$source->avgSessionTime = $source->avgSessionTime > 0 ? TimeUtils::formatDuration($source->avgSessionTime, 'suffixes') : '0s';
			$source->eventsPerSession = round($source->eventsPerSession, 1);
		}

		return [
			'sources' => $sources,
			'total' => $count ? (int) $count[0]->total : 0,
			'limit' => self::RESULTS_LIMIT,
			'offset' => $offset
		];
	}

}