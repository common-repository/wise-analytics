<?php

namespace Kainex\WiseAnalytics\Admin\Tabs;

class Tabs {

	/** @var GeneralTab */
	private $generalTab;

	/** @var VisitorsTab */
	private $visitorsTab;

	/**
	 * Tabs constructor.
	 * @param GeneralTab $generalTab
	 * @param VisitorsTab $visitorsTab
	 */
	public function __construct(GeneralTab $generalTab, VisitorsTab $visitorsTab)
	{
		$this->generalTab = $generalTab;
		$this->visitorsTab = $visitorsTab;
	}

	/**
	 * @return AbstractTab[]
	 */
	public function getTabs(): array {
		return [
			'wise-analytics-general' => $this->generalTab,
			'wise-analytics-visitors' => $this->visitorsTab
		];
	}


}