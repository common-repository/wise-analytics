<?php

namespace Kainex\WiseAnalytics\Admin\Tabs;

use Kainex\WiseAnalytics\Admin\Settings;
use Kainex\WiseAnalytics\Options;

/**
 * Wise Analytics admin abstract tab class.
 *
 * @author Kainex <contact@kaine.pl>
 */
abstract class AbstractTab {

	/** @var Options */
	protected $options;

	/**
	 * AbstractTab constructor.
	 * @param Options $options
	 */
	public function __construct(Options $options)
	{
		$this->options = $options;
	}
	
	/**
	 * Shows the message.
	 *
	 * @param string $message
	 */
	protected function addMessage($message) {
		set_transient("kainex_wiseanalytics_admin_settings_message", $message, 10);
	}

	/**
	 * Shows error message.
	 *
	 * @param string $message
	 */
	protected function addErrorMessage($message) {
		set_transient("kainex_wiseanalytics_admin_settings_error_message", $message, 10);
	}
	
	/**
	* Returns an array of fields displayed on the tab.
	*
	* @return array
	*/
	public abstract function getFields(): array;
	
	/**
	* Returns an array of default values of fields.
	*
	* @return array
	*/
	public abstract function getDefaultValues(): array;

	/**
	 * @return string
	 */
	public abstract function getName(): string;
	
	/**
	* Returns an array of parent fields.
	*
	* @return array
	*/
	public function getParentFields() {
		return array();
	}

	/**
	* @return array
	*/
	public function getRadioGroups() {
		return array();
	}
	
	/**
	* Filters values of fields.
	*
	* @param array $inputValue
	*
	* @return null
	*/
	public function sanitizeOptionValue($inputValue) {
		$newInputValue = array();
		if (!is_array($inputValue)) {
			$inputValue = [];
		}
		
		foreach ($this->getFields() as $field) {
			$id = $field[0];
			if ($id === Settings::SECTION_FIELD_KEY) {
				continue;
			}

			$type = isset($field[3]) ? $field[3] : '';
			$value = array_key_exists($id, $inputValue) ? $inputValue[$id] : '';
			
			switch ($type) {
				case 'boolean':
					$newInputValue[$id] = isset($inputValue[$id]) && $value == '1' ? 1 : 0;
					break;
				case 'integer':
					if (isset($inputValue[$id])) {
						if (intval($value).'' != $value) {
							$newInputValue[$id] = '';
						} else {
							$newInputValue[$id] = absint($value);
						}
					}
					break;
				case 'string':
					if (isset($inputValue[$id])) {
						$newInputValue[$id] = sanitize_text_field($value);
					}
					break;
				case 'multilinestring':
				case 'rawString':
					if (isset($inputValue[$id])) {
						$newInputValue[$id] = $value;
					}
					break;
				case 'multivalues':
					if (isset($inputValue[$id]) && is_array($inputValue[$id])) {
						$newInputValue[$id] = $inputValue[$id];
					} else {
						$newInputValue[$id] = array();
					}
					
					break;
				case 'json':
					$newInputValue[$id] = is_array($value) ? json_encode($value) : '{}';
					break;
			}
		}
		
		return $newInputValue;
	}
	
	/**
	* Callback method for displaying plain text field with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name and hint
	*/
	public function stringFieldCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$parentId = $this->getFieldParent($id);
	
		printf(
			'<input type="text" id="%s" name="'.esc_attr(Options::OPTIONS_NAME).'[%s]" value="%s" %s data-parent-field="%s" />',
			esc_attr($id), esc_attr($id),
			esc_attr($this->fixImunify360Rule($id, $this->options->getEncodedOption($id, $defaultValue))),
			esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
			$parentId != null ? esc_attr($parentId) : ''
		);
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}

	/**
	 * Callback method for displaying plain text field with a hint. If the property is not defined the default value is used.
	 *
	 * @param array $args Array containing keys: id, name and hint
	 */
	public function rawStringFieldCallback($args) {
		$this->stringFieldCallback($args);
	}
	
	/**
	* Callback method for displaying multiline text field with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name and hint
	*/
	public function multilineFieldCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$parentId = $this->getFieldParent($id);
		
		printf(
			'<textarea id="%s" name="'.esc_attr(Options::OPTIONS_NAME).'[%s]" cols="70" rows="6" %s data-parent-field="%s">%s</textarea>',
			esc_attr($id), esc_attr($id),
			esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
			$parentId != null ? esc_attr($parentId) : '',
			esc_html($this->fixImunify360Rule($id, $this->options->getEncodedOption($id, $defaultValue)))
		);
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}

	/**
	 * @see https://blog.imunify360.com/waf-rules-v.3.43-released  (rule #77142267)
	 * @param string $id
	 * @param string $value
	 * @return string
	 */
	protected function fixImunify360Rule($id, $value) {
		$affectedFields = array('spam_report_subject', 'spam_report_content');
		if (!in_array($id, $affectedFields)) {
			return $value;
		}

		return $this->fixImunify360RuleText($value);
	}

	protected function fixImunify360RuleText($value) {
		return str_replace('${', '{', $value);
	}
	
	/**
	* Callback method for displaying color selection text field with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name and hint
	*/
	public function colorFieldCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$parentId = $this->getFieldParent($id);
	
		printf(
			'<input type="text" id="%s" name="'.esc_attr(Options::OPTIONS_NAME).'[%s]" value="%s" %s data-parent-field="%s" class="wc-color-picker" />',
			esc_attr($id), esc_attr($id),
			esc_attr($this->options->getEncodedOption($id, $defaultValue)),
			esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
			$parentId != null ? esc_attr($parentId) : ''
		);
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}
	
	/**
	* Callback method for displaying boolean field (checkbox) with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name and hint
	*/
	public function booleanFieldCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$parentId = $this->getFieldParent($id);
	
		printf(
			'<input type="checkbox" id="%s" name="'.esc_attr(Options::OPTIONS_NAME).'[%s]" value="1" %s  %s data-parent-field="%s" />',
			esc_attr($id), esc_attr($id), 
			esc_attr($this->options->isOptionEnabled($id, $defaultValue == 1) ? ' checked="1" ' : ''),
			esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
			$parentId != null ? esc_attr($parentId) : ''
		);
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}
	
	/**
	* Callback method for displaying select field with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name, hint, options
	*/
	public function selectCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$options = $args['options'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$value = $this->options->getEncodedOption($id, $defaultValue);
		$parentId = $this->getFieldParent($id);
		
		$optionsHtml = '';
		foreach ($options as $name => $label) {
			$optionsHtml .= sprintf("<option value='%s' %s>%s</option>", esc_attr($name), esc_attr($name == $value ? 'selected' : ''), esc_html($label));
		}
		
		printf(
			'<select id="%s" name="'.esc_attr(Options::OPTIONS_NAME).'[%s]" %s data-parent-field="%s">%s</select>',
			esc_attr($id), esc_attr($id),
			esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
			$parentId != null ? esc_attr($parentId) : '',
			wp_kses($optionsHtml, array('option' => array('value' => array(), 'selected' => array())))
		);
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}

	/**
	* Callback method for displaying radio group with a hint. If the property is not defined the default value is used.
	*
	* @param array $args Array containing keys: id, name, hint, options
	*/
	public function radioCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$options = $args['options'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$value = $this->options->getEncodedOption($id, $defaultValue);
		$parentId = $this->getFieldParent($id);
		$groups = $this->getRadioGroups();
		$groupDef = array();
		if (array_key_exists($id, $groups)) {
			$groupDef = $groups[$id];
		}

		foreach ($options as $optionValue => $optionDisplay) {
			$optionLabel = is_array($optionDisplay) ? $optionDisplay[0] : $optionDisplay;
			$radioId = $id.'_'.$optionValue;

			printf(
				"<label><input id='%s' class='wc-radio-option' data-radio-group-id='%s' type='radio' name='%s[%s]' value='%s' %s %s data-parent-field='%s' data-group-def='%s'/>%s&nbsp;&nbsp;&nbsp;&nbsp;</label>",
				esc_attr($radioId), esc_attr($id), esc_attr(Options::OPTIONS_NAME), esc_attr($id), esc_attr($optionValue),
				esc_attr($optionValue == $value ? 'checked' : ''),
				esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
				$parentId != null ? esc_attr($parentId) : '',
				esc_attr(array_key_exists($optionValue, $groupDef) ? implode(',', $groupDef[$optionValue]) : ''),
				esc_html($optionLabel)
			);
		}

		foreach ($options as $optionValue => $optionDisplay) {
			$radioId = $id.'_'.$optionValue;

			if (is_array($optionDisplay) && count($optionDisplay) > 1) {
				printf(
					'<p class="description wc-radio-hint-group-%s wc-radio-hint-%s" %s>%s</p>',
					esc_attr($id), esc_attr($radioId), $optionValue == $value ? '' : 'style="display: none"', esc_html($optionDisplay[1])
				);
			}
		}

		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}
	
	/**
	* Callback method for displaying list of checkboxes with a hint.
	*
	* @param array $args Array containing keys: id, name, hint, options
	*/
	public function checkboxesCallback($args) {
		$id = $args['id'];
		$hint = $args['hint'];
		$options = $args['options'];
		$defaults = $this->getDefaultValues();
		$defaultValue = array_key_exists($id, $defaults) ? $defaults[$id] : '';
		$values = $this->options->getOption($id, $defaultValue);
		$parentId = $this->getFieldParent($id);

		foreach ($options as $key => $value) {
			printf(
				'<label><input type="checkbox" value="%s" name="%s[%s][]" %s %s data-parent-field="%s" />%s</label>&nbsp;&nbsp; ', 
				esc_attr($key), esc_attr(Options::OPTIONS_NAME), esc_attr($id),
				esc_attr(in_array($key, (array) $values) ? 'checked' : ''),
				esc_attr($parentId != null && !$this->options->isOptionEnabled($parentId, false) ? 'disabled' : ''),
				$parentId != null ? esc_attr($parentId) : '',
				esc_html($value)
			);
		}
		
		if ($hint) {
			printf('<p class="description">%s</p>', esc_html($hint));
		}
	}
	
	/**
	* Callback method for displaying separator.
	*
	* @param array $args Array containing keys: name
	*/
	public function separatorCallback($args) {
		$name = $args['name'];
		
		printf(
			'<p class="description">%s</p>',
			esc_html($name)
		);
	}
	
	protected function getFieldParent($fieldId) {
		$parents = $this->getParentFields();
		if (is_array($parents) && array_key_exists($fieldId, $parents)) {
			return $parents[$fieldId];
		}
		
		return null;
	}

}