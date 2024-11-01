<?php

namespace Kainex\WiseAnalytics\Admin\Tabs;

/**
 * @author Kainex <contact@kaine.pl>
 */
class GeneralTab extends AbstractTab {

	public function getName(): string
	{
		return 'General';
	}

	public function getFields(): array
	{
		return [
			['_section', 'General Settings']
		];
	}

	public function getDefaultValues(): array
	{
		return [];
	}
}