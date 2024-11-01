<?php

namespace Kainex\WiseAnalytics\Reports\Pages;

class Overview {

	public function render() {
		$config = [
			'baseUrl' => site_url()
		];
		?>
			<div class="waContainer" data-wa-config='<?php echo wp_json_encode($config); ?>'></div>
		<?php
	}

}