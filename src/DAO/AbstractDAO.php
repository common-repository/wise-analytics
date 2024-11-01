<?php

namespace Kainex\WiseAnalytics\DAO;

abstract class AbstractDAO {

	abstract protected function getTable(): string;

	public function updateRaw(int $key, array $updates) {
		global $wpdb;

		$wpdb->update($this->getTable(), $updates, array('id' => $key), '%s', '%d');
	}

	/**
	 * @param string $fieldName
	 * @param string $fieldValue
	 *
	 * @return object|null
	 */
	protected function getByField(string $fieldName, string $fieldValue): ?object {
		global $wpdb;

		$sql = $wpdb->prepare("SELECT * FROM %i WHERE %i = %s;", $this->getTable(), $fieldName, $fieldValue);
		$results = $wpdb->get_results($sql);
		if (is_array($results) && count($results) > 0) {
			return $results[0];
		}

		return null;
	}

	/**
	 * @param array $fields
	 * @return object[]
	 */
	protected function getByFields(array $fields): array {
		global $wpdb;

		$conditions = [];
		foreach ($fields as $fieldName => $fieldValue) {
			$conditions[] = $wpdb->prepare("%i = %s", $fieldName, $fieldValue);
		}

		$sql = $wpdb->prepare("SELECT * FROM %i WHERE ".implode(' AND ', $conditions), $this->getTable());
		$results = $wpdb->get_results($sql);
		if (is_array($results)) {
			return $results;
		}

		return [];
	}

	/**
	 * @param array $conditions Percentage notation @see wpdb::prepare()
	 * @param array $arguments
	 */
	protected function deleteByConditions(array $conditions, array $arguments) {
		global $wpdb;

		$sql = $wpdb->prepare("DELETE FROM %i WHERE ".implode(' AND ', $conditions), array_merge([$this->getTable()], $arguments));
		$wpdb->get_results($sql);
	}

}