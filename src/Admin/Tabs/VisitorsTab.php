<?php

namespace Kainex\WiseAnalytics\Admin\Tabs;

use Kainex\WiseAnalytics\Options;
use Kainex\WiseAnalytics\Services\Users\MappingsService;
use Kainex\WiseAnalytics\Services\Users\VisitorsService;

/**
 * @author Kainex <contact@kaine.pl>
 */
class VisitorsTab extends AbstractTab {

	/** @var MappingsService */
	private $mappingsService;

	/** @var VisitorsService */
	private $visitorsService;

	/**
	 * VisitorsTab constructor.
	 * @param Options $options
	 * @param MappingsService $mappingsService
	 * @param VisitorsService $visitorsService
	 */
	public function __construct(Options $options, MappingsService $mappingsService, VisitorsService $visitorsService)
	{
		parent::__construct($options);
		$this->mappingsService = $mappingsService;
		$this->visitorsService = $visitorsService;
	}

	public function getName(): string {
		return 'Visitors';
	}

	public function getFields(): array 	{
		return [
			['_section', 'Fields Mapping', 'Auto-update visitor fields based on actions taken in other services like plugins (e.g. form submission in Contact Form 7 plugin)'],
			['mappings', 'Mappings', 'mappingsCallback', 'void'],
			['mappings_exclude_authenticated', 'Exclude Authenticated Users', 'booleanFieldCallback', 'boolean', 'Do not map fields of logged-in WordPress users'],
		];
	}

	public function getDefaultValues(): array {
		return [
			'mappings_exclude_authenticated' => true,
			'mappings' => []
		];
	}

	/**
	* Filters values of fields.
	*
	* @param array $inputValue
	*
	* @return null
	*/
	public function sanitizeOptionValue($inputValue) {
		$currentOptions = get_option(Options::OPTIONS_NAME, []);
		$sanitized = parent::sanitizeOptionValue($inputValue); // no 'visitors_mappings' key

		// merge other mappings with the new one:
		if (isset($inputValue['visitors_mappings'])) {
			$sanitized['visitors_mappings'] = isset($currentOptions['visitors_mappings'])
				? array_merge($currentOptions['visitors_mappings'], $inputValue['visitors_mappings'])
				: $inputValue['visitors_mappings'];

		} else {
			$sanitized['visitors_mappings'] = isset($currentOptions['visitors_mappings'])
				? $currentOptions['visitors_mappings']
				: [];
		}

		return $sanitized;
	}

	public function mappingsCallback() {
		$objects = $this->mappingsService->getObjectsAndFields();

		if (isset($_GET['visitors-mapping-edit'])) {
			foreach ($objects as $definition) {
				if ($definition['type'] === sanitize_text_field($_GET['visitors-mapping-edit'])) {
					$this->mappingEdit($definition, sanitize_text_field($_GET['action-id']));
				}
			}
		} else {
			foreach ($objects as $definition) {
				print '<p>Click and set mappings for each of the items below in order to gather as much visitors data as possible</p>';
				print '<h3>' . esc_html($definition['typeName']) . '</h3>';
				print '<ul>';
				foreach ($definition['actions'] as $action) {
					$mappedRatio = $this->getCurrentMappingRatio($definition['type'], $action['id'], $action['fields']);
					$mappedStatus = '<span style="color:red">Not Mapped</span>';
					if ($mappedRatio === 100) {
						$mappedStatus = '<span style="color:green">Fully Mapped</span>';
					} else if ($mappedRatio > 0) {
						$mappedStatus = '<span style="color:green">Partially Mapped</span>';
					}
					$url = sprintf('options-general.php?page=wise-analytics-admin&visitors-mapping-edit=%s&action-id=%s#wa_tab=visitors', $definition['type'], urlencode($action['id']));
					print '<li><a href="' . esc_url($url) . '">' . esc_html($action['item']) . '</a> ['.wp_kses($mappedStatus, array('span' => array('style' => array()))).']</li>';
				}
				print '</ul>';
			}
		}
	}

	private function mappingEdit(array $typeDefinition, string $actionId) {
		$action = null;

		foreach ($typeDefinition['actions'] as $actionSearch) {
			if ($actionSearch['id'] === $actionId) {
				$action = $actionSearch;
				break;
			}
		}

		if (!$action) {
			return;
		}

		$mappingKey = $typeDefinition['type'].'.'.$actionId;
		$visitorsConfiguration = (array) $this->options->getOption('visitors_mappings', []);
		$currentMappings = isset($visitorsConfiguration[$mappingKey]) ? $visitorsConfiguration[$mappingKey] : [];

		print '<h3>' . esc_html($typeDefinition['typeName']) . '</h3>';
		print '<h4>"' . esc_html($action['item']) .'" ' . esc_html($action['name']) . '</h4>';
		print '<p>Fill as much as possible mappings below, but only those who hold the same information.</p>';
		print '<table class="wp-list-table widefat emotstable">';
		print '<thead><tr><th>&nbsp;' . esc_html($action['item']) . ' Field</th><th>Maps To Visitor Field</th></tr></thead>';

		print '<tbody>';
		foreach ($action['fields'] as $field) {
			print '<tr><td>'.esc_html($field['name']).'</td><td>'.wp_kses($this->getVisitorFieldsSelect($typeDefinition['type'], $actionId, $field['id'], $currentMappings), array('select' => array('name' => array()), 'option' => array('value' => array(), 'selected' => array()))).'</td></tr>';
		}
		print '</tbody>';

		print '</table>';

		print '<br /><a href="options-general.php?page=wise-analytics-admin#wa_tab=visitors">Go Back</a>';
	}

	private function getVisitorFieldsSelect(string $actionsSource, string $actionId, string $actionFieldId, array $currentMappings): string {
		$currentFieldId = isset($currentMappings[$actionFieldId]) ? $currentMappings[$actionFieldId] : null;

		$html = sprintf('<select name="%s[visitors_mappings][%s][%s]"><option value="">-- not mapped --</option>', Options::OPTIONS_NAME, esc_attr($actionsSource.'.'.$actionId), esc_attr($actionFieldId));
		foreach ($this->visitorsService->getVisitorFields() as $visitorField) {
			$html .= sprintf('<option %s value="%s">%s</option>', $currentFieldId === $visitorField['id'] ? 'selected' : '', esc_attr($visitorField['id']), esc_html($visitorField['name']));
		}
		$html .= '</select>';

		return $html;
	}

	private function getCurrentMappingRatio(string $actionsSource, string $actionId, array $actionFields): int {
		$mappingKey = $actionsSource.'.'.$actionId;
		$visitorsConfiguration = (array) $this->options->getOption('visitors_mappings', []);
		$currentMappings = isset($visitorsConfiguration[$mappingKey]) ? $visitorsConfiguration[$mappingKey] : [];

		$totalMapped = 0;
		foreach ($actionFields as $actionField) {
			$actionFieldId = $actionField['id'];
			if (isset($currentMappings[$actionFieldId]) && $currentMappings[$actionFieldId]) {
				$totalMapped++;
			}
		}

		return intval($totalMapped / count($actionFields) * 100);
	}

}