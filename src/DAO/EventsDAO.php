<?php

namespace Kainex\WiseAnalytics\DAO;

use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\Event;

/**
 * EventsDAO.
 *
 * @author Kainex <contact@kaine.pl>
 */
class EventsDAO extends AbstractDAO {

	protected function getTable(): string {
		return Installer::getEventsTable();
	}

	/**
	 * @param integer $id
	 *
	 * @return Event|null
	 */
	public function get(int $id): ?Event {
		return $this->populateData($this->getByField('id', (string) $id));
	}

	/**
	 * @param string $checksum
	 *
	 * @return Event|null
	 */
	public function getByChecksum(string $checksum): ?Event {
		return $this->populateData($this->getByField('checksum', (string) $checksum));
	}

	/**
	 * @param Event $event
	 *
	 * @return Event
	 * @throws \Exception On validation error
	 */
	public function save(Event $event): Event {
		global $wpdb;

		if ($event->getTypeId() === null) {
			throw new \Exception('Type ID cannot equal null');
		}
		if ($event->getCreated() === null) {
			throw new \Exception('Create date cannot equal null');
		}
		if ($event->getUserId() === null) {
			throw new \Exception('User ID cannot equal null');
		}

		$table = Installer::getEventsTable();
		$columns = [
			'type_id' => $event->getTypeId(),
			'user_id' => $event->getUserId(),
			'checksum' => $event->getChecksum(),
			'uri' => $event->getUri(),
			'data' => json_encode($event->getData()),
			'created' => $event->getCreated()->format('Y-m-d H:i:s'),
			'duration' => $event->getDuration()
		];

		if ($event->getId() !== null) {
			$wpdb->update($table, $columns, array('id' => $event->getId()), '%s', '%d');
		} else {
			$wpdb->insert($table, $columns);
			$event->setId($wpdb->insert_id);
		}

		return $event;
	}

	/**
	 * @param object|null $rawData
	 *
	 * @return Event|null
	 */
	private function populateData(?object $rawData): ?Event {
		if (!$rawData) {
			return null;
		}

		$event = new Event();
		$event->setId(intval($rawData->id));
		$event->setTypeId(intval($rawData->type_id));
		$event->setUserId(intval($rawData->user_id));
        $event->setUri($rawData->uri);
		$event->setData(json_decode($rawData->data, true));
		$event->setChecksum($rawData->checksum);
		$event->setDuration($rawData->duration);
		$event->setCreated(\DateTime::createFromFormat('Y-m-d H:i:s', $rawData->created));

		return $event;
	}

}