<?php

namespace Kainex\WiseAnalytics\Services\Users;

use Kainex\WiseAnalytics\Services\Commons\DataAccess;

class MappingsService {
	use DataAccess;

	const CF7_SHORTCODE_REGEX = '/(\[?)\[(\S*)(?:[\r\n\t ](.*?))?(?:[\r\n\t ](\/))?\](?:([^[]*?)\[\/\2\])?(\]?)/';
	const CF7_UNSUPPORTED_FIELD_TYPES = ['submit', 'captchac', 'captchar', 'honeypot', 'file'];

	public function getObjectsAndFields() {
		return [
			[
				'type' => 'plugins.cf7.form',
				'typeName' => 'Plugins / ContactForm7',
				'actions' => $this->getContactForm7Actions(),
			]
		];
	}

	private function getContactForm7Actions(): array {
		$forms = $this->query('posts', [
			'alias' => 'po',
			'select' => [
				'po.ID', 'po.post_title'
			],
			'where' => ["po.post_type = 'wpcf7_contact_form'"],
			'order' => ['po.post_title ASC'],
		]);

		$ids = [];
		foreach ($forms as $form) {
			$ids[] = $form->ID;
		}

		$fields = $ids ? $this->query('postmeta', [
			'alias' => 'pm',
			'select' => [
				'pm.post_id',
				'pm.meta_value'
			],
			'where' => ["pm.meta_key = '_form'", "pm.post_id IN (".implode(',', array_fill(0, count($ids), '%d')).")"],
			'whereArgs' => $ids
		]) : [];

		$fieldsList = [];
		foreach ($fields as $fieldDefinition) {
			preg_match_all(self::CF7_SHORTCODE_REGEX, $fieldDefinition->meta_value, $matches);
			foreach ($matches[2] as $matchOffset => $matchedField) {
				if (!in_array($matchedField, self::CF7_UNSUPPORTED_FIELD_TYPES)) {
					$formField = explode(' ', $matches[3][$matchOffset]);
					$fieldsList[$fieldDefinition->post_id][] = [
						'name' => $formField[0],
						'id' => $formField[0]
					];
				}
			}
		}

		$out = [];
		foreach ($forms as $form) {
			$out[] = [
				'id' => $form->ID,
				'name' => 'form submission',
				'item' => $form->post_title,
				'fields' => isset($fieldsList[$form->ID]) ? $fieldsList[$form->ID] : []
			];
		}

		return $out;
	}

}