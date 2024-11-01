<?php

namespace Kainex\WiseAnalytics\Admin;

use Kainex\WiseAnalytics\Admin\Tabs\Tabs;
use Kainex\WiseAnalytics\Options;

class Settings {

	const OPTIONS_GROUP = 'wise_analytics_options_group';
	const MENU_SLUG = 'wise-analytics-admin';

	const PAGE_TITLE = 'Settings Admin';
	const MENU_TITLE = WISE_ANALYTICS_NAME;

	const SECTION_FIELD_KEY = '_section';

	/** @var Tabs */
	private $tabs;

	/**
	* @var array Generated sections
	*/
	private $sections = [];

	/**
	 * Settings constructor.
	 * @param Tabs $tabs
	 */
	public function __construct(Tabs $tabs) {
		$this->tabs = $tabs;
	}

	/**
	* Initializes settings page link in admin menu.
	*/
	public function install() {
		add_action('admin_menu', array($this, 'addAdminMenu'));
		add_action('admin_enqueue_scripts', array($this, 'enqueueScripts'));
		add_action('admin_init', array($this, 'pageInit'));
	}

	public function addAdminMenu() {
		add_options_page(self::PAGE_TITLE, self::MENU_TITLE, 'manage_options', self::MENU_SLUG, array($this, 'renderAdminPage'));
		$this->handleActions();
	}

	public function enqueueScripts() {
		wp_enqueue_style('wp-color-picker');
		wp_enqueue_script('wise-analytics-settings', plugins_url('assets/js/settings/wise-analytics-settings.js', WISE_ANALYTICS_ROOT.'/src'), array('jquery'), WISE_ANALYTICS_VERSION, true);
		wp_enqueue_style('wise-analytics-settings', plugins_url('assets/css/settings/wise-analytics-settings.css', WISE_ANALYTICS_ROOT.'/src'), array(), WISE_ANALYTICS_VERSION);
	}

	public function pageInit() {
		register_setting(self::OPTIONS_GROUP, Options::OPTIONS_NAME, array($this, 'getSanitizedFormValues'));

		foreach ($this->tabs->getTabs() as $key => $tabObject) {
			$sectionKey = "section_{$key}";

			foreach ($tabObject->getFields() as $field) {
				$id = $field[0];
				$name = $field[1];

				if (strpos($id, self::SECTION_FIELD_KEY) === 0) {
					$sectionKey = "section_{$key}_".md5($name);
					add_settings_section($sectionKey, $name, null, $key);
					$this->sections[$key][] = array(
						'id' => $sectionKey,
						'sectionId' => $id,
						'name' => $name,
						'hint' => array_key_exists(2, $field) ? $field[2] : '',
						'options' => array_key_exists(3, $field) ? $field[3] : array()
					);
				} else {
					$args = array(
						'id' => $id,
						'name' => $name,
						'hint' => array_key_exists(4, $field) ? $field[4] : '',
						'options' => array_key_exists(5, $field) ? $field[5] : array()
					);

					add_settings_field($id, $name, array($tabObject, $field[2]), $key, $sectionKey, $args);
				}
			}
		}
	}

	/**
	* Sets the default values of all configuration fields.
	* It should be used right after the activation of the plugin.
	*/
	public function setDefaultSettings() {
		$options = get_option(Options::OPTIONS_NAME, array());

		foreach ($this->tabs->getTabs() as $key => $tabObject) {
			foreach ($tabObject->getDefaultValues() as $fieldKey => $value) {
				if (!array_key_exists($fieldKey, $options)) {
					$options[$fieldKey] = $value;
				}
			}
		}
		update_option(Options::OPTIONS_NAME, $options);
	}

	public function renderAdminPage() {
		?>
			<div class="wrap">
				<h2><?php echo esc_html(self::MENU_TITLE) ?></h2>

				<form method="post" action="options.php" class="metabox-holder">
					<!-- Disabling autocomplete: -->
					<input type="text" style="display: none" />
					<input type="password" style="display: none" />

					<?php settings_fields(self::OPTIONS_GROUP); ?>

					<?php $this->renderMenu(); ?>

					<?php
						$isFirstContainer = true;
						foreach ($this->tabs->getTabs() as $tabId => $tabObject) {
							$hideContainer = $isFirstContainer ? '' : 'display:none';
							echo "<div id='".esc_attr($tabId)."Container' class='wcAdminTabContainer' style='".esc_attr($hideContainer)."'>";

							$sections = $this->sections[$tabId];
							foreach ($sections as $sectionKey => $section) {
								echo "<div data-section-id='".esc_attr($section['sectionId'])."' class='postbox'>";
								echo "<h3 class='hndle'><span>".esc_html($section['name'])."</span></h3>";
								echo "<div class='inside'>";
								echo '<table class="form-table">';
								if (strlen($section['hint']) > 0) {
									echo '<tr><td colspan="2" style="padding:0"><p class="description">'.esc_html($section['hint']).'</p></td></tr>';
								}
								do_settings_fields($tabId, $section['id']);
								echo '<tr><td colspan="2">';
								if (!array_key_exists('hideSubmitButton', $section['options']) || $section['options']['hideSubmitButton'] !== true) {
									submit_button('', 'primary large', 'submit', false, array('id' => "submit_{$tabId}_{$sectionKey}", 'onclick' => 'wise_analytics_append_tab(\'' . str_replace('wise-analytics-', '', $tabId) . '\')'));
								}
								echo '</td></tr>';
								echo '</table>';
								echo "</div></div>";
							}

							echo "</div>";
							$isFirstContainer = false;
						}
					?>

					<br class="wcAdminCb" />
				</form>
			</div>
		<?php
	}

	private function renderMenu() {
		echo '<div class="wcAdminMenu wcAdminFl">';
		echo '<ul>';
		$isFirstTab = true;
		foreach ($this->tabs->getTabs() as $key => $tabObject) {
			$isActive = $isFirstTab ? 'wcAdminMenuActive' : '';
			echo '<li><a id="'.esc_attr($key).'" class="'.esc_attr($isActive).'" href="javascript://">'.esc_html($tabObject->getName()).'</a></li>';
			$isFirstTab = false;
		}
		echo '</ul>';
		echo '</div>';
	}

	/**
	* Detects actions passed in parameters and delegates to an action method.
	*/
	public function handleActions() {
		if (isset($_GET['wa_action'])) {
			foreach ($this->tabs->getTabs() as $tabKey => $tabObject) {
				$actionMethod = sanitize_text_field($_GET['wa_action']).'Action';
				if (method_exists($tabObject, $actionMethod)) {
					$tabObject->$actionMethod();
					break;
				}
			}

			$redirURL = admin_url("options-general.php?page=".self::MENU_SLUG).(isset($_GET['tab']) ? '#wc_tab='.urlencode(sanitize_text_field($_GET['tab'])) : '');
			wp_add_inline_script( 'wise-analytics-admin-core', 'location.replace('.json_encode($redirURL).')');
		} else {
			$this->showUpdatedMessage();
			$this->showErrorMessage();
		}
	}

	/**
	* Filters form input using filters from each tab object.
	*
	* @param array $input A key-value list of form values
	*
	* @return array Filtered array
	*/
	public function getSanitizedFormValues($input) {
		$sanitized = array();
		foreach ($this->tabs->getTabs() as $tabKey => $tabObject) {
			$sanitized = array_merge($sanitized, $tabObject->sanitizeOptionValue($input));
		}
		$sanitized = array_merge(get_option(Options::OPTIONS_NAME, array()), $sanitized);

		return $sanitized;
	}

	/**
	 * Shows a message stored in the transient.
	 */
	private function showUpdatedMessage() {
		$message = get_transient('kainex_wiseanalytics_admin_settings_message');
		if (is_string($message) && strlen($message) > 0) {
			add_settings_error(md5($message), esc_attr('settings_updated'), strip_tags($message), 'updated');
			delete_transient('kainex_wiseanalytics_admin_settings_message');
		}
	}

	/**
	 * Shows a message stored in the transient.
	 */
	private function showErrorMessage() {
		$message = get_transient('kainex_wiseanalytics_admin_settings_error_message');
		if (is_string($message) && strlen($message) > 0) {
			add_settings_error(md5($message), esc_attr('settings_updated'), strip_tags($message), 'error');
			delete_transient('kainex_wiseanalytics_admin_settings_error_message');
		}
	}

}