<?php

namespace Kainex\WiseAnalytics\Services\Reporting\Events;

use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\EventResource;
use Kainex\WiseAnalytics\Services\Reporting\ReportingService;
use Kainex\WiseAnalytics\Utils\TimeUtils;

class EventsReportsService extends ReportingService {

	public function getEvents(array $queryParams): array {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$filters = $queryParams['filters'];
		$offset = intval($queryParams['offset'] ?? 0);
		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');

		$conditionsArgs = [$startDateStr, $endDateStr];
		$conditions = ["ev.created >= %s", "ev.created <= %s"];
		if (isset($filters['visitorId'])) {
			$conditions[] = 'ev.user_id = %d';
			$conditionsArgs[] = intval($filters['visitorId']);
		}

		$result = $this->queryEvents([
			'alias' => 'ev',
			'select' => [
				'ev.uri',
				'ev.created',
				'ev.user_id as visitorId',
				'us.first_name as visitorFirstName',
				'us.last_name as visitorLastName',
				'ev.type_id as typeId',
				'et.name as typeName',
				're.text_value as title'
			],
			'join' => [
				[Installer::getEventTypesTable(), 'et', ['ev.type_id = et.id']],
				[Installer::getUsersTable(), 'us', ['ev.user_id = us.id']],
				[Installer::getEventResourcesTable(), 're', ['re.text_key = ev.uri', 're.type_id = '.EventResource::TYPE_URI_TITLE]]
			],
			'where' => $conditions,
			'whereArgs' => $conditionsArgs,
			'order' => ['created DESC'],
			'limit' => self::RESULTS_LIMIT,
			'offset' => $offset
		]);

		$output = [];
		foreach ($result as $record) {
			$record->createdPretty = TimeUtils::formatTimestamp($record->created);
			$output[] = $record;
		}

		$count = $this->queryEvents([
			'alias' => 'ev',
			'select' => [
				'count(ev.id) as total'
			],
			'where' => $conditions,
			'whereArgs' => $conditionsArgs
		]);

		return [
			'events' => $output,
			'total' => $count ? (int) $count[0]->total : 0,
			'limit' => self::RESULTS_LIMIT,
			'offset' => $offset
		];
	}

}