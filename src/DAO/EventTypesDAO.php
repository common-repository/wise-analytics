<?php

namespace Kainex\WiseAnalytics\DAO;

use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\EventType;
use Kainex\WiseAnalytics\Options;

/**
 * EventTypesDAO.
 *
 * @author Kainex <contact@kaine.pl>
 */
class EventTypesDAO extends AbstractDAO {
	
	/** @var Options */
	private $options;

	protected function getTable(): string {
		return Installer::getEventTypesTable();
	}

	public function __construct(Options $options) {
		$this->options = $options;
	}

	/**
	 * @param integer $id
	 *
	 * @return EventType|null
	 */
	public function get(int $id): ?EventType {
		return $this->populateData($this->getByField('id', (string) $id));
	}

	/**
	 * @param string $slug
	 *
	 * @return EventType|null
	 */
	public function getBySlug(string $slug): ?EventType {
		return $this->populateData($this->getByField('slug', (string) $slug));
	}

	/**
	 * @param EventType $eventType
	 *
	 * @return EventType
	 * @throws \Exception On validation error
	 */
	public function save(EventType $eventType): EventType {
		global $wpdb;

		// low-level validation:
		if ($eventType->getSlug() === null) {
			throw new \Exception('Empty slug');
		}
		if ($eventType->getName() === null) {
			throw new \Exception('Empty name');
		}

		$columns = array(
			'slug' => $eventType->getSlug(),
			'name' => $eventType->getName(),
			'data' => json_encode($eventType->getData())
		);

		if ($eventType->getId() !== null) {
			$wpdb->update($this->getTable(), $columns, array('id' => $eventType->getId()), '%s', '%d');
		} else {
			$wpdb->insert($this->getTable(), $columns);
			$eventType->setId($wpdb->insert_id);
		}

		return $eventType;
	}

	/**
	 * @param object $rawData
	 *
	 * @return EventType
	 */
	private function populateData(?object $rawData): ?EventType {
		if (!$rawData) {
			return null;
		}
		$eventType = new EventType();
		$eventType->setId(intval($rawData->id));
		$eventType->setSlug($rawData->slug);
		$eventType->setName($rawData->name);
		$eventType->setData(json_decode($rawData->data, true));

		return $eventType;
	}

}