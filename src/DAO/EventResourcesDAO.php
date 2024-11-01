<?php

namespace Kainex\WiseAnalytics\DAO;

use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\EventResource;

/**
 * EventResourcesDAO.
 *
 * @author Kainex <contact@kaine.pl>
 */
class EventResourcesDAO extends AbstractDAO {

	protected function getTable(): string {
		return Installer::getEventResourcesTable();
	}

	/**
	 * @param integer $id
	 *
	 * @return EventResource|null
	 */
	public function get(int $id): ?EventResource {
		return $this->populateData($this->getByField('id', (string) $id));
	}

	/**
	 * @param int $typeId
	 * @param string $textKey
	 *
	 * @return EventResource[]
	 */
	public function getByTypeAndTextKey(int $typeId, string $textKey): array {
		$rawResults = $this->getByFields([
			'type_id' => $typeId,
			'text_key' => $textKey
		]);

		$results = [];
		foreach ($rawResults as $rawResult) {
			$results[] = $this->populateData($rawResult);
		}

		return $results;
	}

	/**
	 * @param EventResource $resource
	 * @return EventResource
	 * @throws \Exception
	 */
	public function save(EventResource $resource): EventResource {
		global $wpdb;

		if ($resource->getTypeId() === null) {
			throw new \Exception('Empty type ID');
		}
		if ($resource->getTextKey() === null && $resource->getIntKey() === null) {
			throw new \Exception('Missing keys');
		}

		$columns = array(
			'type_id' => $resource->getTypeId(),
			'text_key' => $resource->getTextKey(),
			'text_value' => $resource->getTextValue(),
			'int_key' => $resource->getIntKey(),
			'int_value' => $resource->getIntValue(),
			'created' => $resource->getCreated() ? $resource->getCreated()->format('Y-m-d H:i:s') : date('Y-m-d H:i:s')
		);

		if ($resource->getId() !== null) {
			$wpdb->update($this->getTable(), $columns, array('id' => $resource->getId()), '%s', '%d');
		} else {
			$wpdb->insert($this->getTable(), $columns);
			$resource->setId($wpdb->insert_id);
		}

		return $resource;
	}

	/**
	 * @param object $rawData
	 *
	 * @return EventResource
	 */
	private function populateData(?object $rawData): ?EventResource {
		if (!$rawData) {
			return null;
		}
		$resource = new EventResource();
		$resource->setId(intval($rawData->id));
		$resource->setTypeId($rawData->type_id);
		$resource->setTextKey($rawData->text_key);
		$resource->setTextValue($rawData->text_value);
		$resource->setIntKey($rawData->int_key);
		$resource->setIntValue($rawData->int_value);
		$resource->setCreated(\DateTime::createFromFormat('Y-m-d H:i:s', $rawData->created));

		return $resource;
	}

}