<?php

namespace Kainex\WiseAnalytics\Services\Reporting\Highlights;

use Kainex\WiseAnalytics\Services\Reporting\Pages\PagesReportsService;
use Kainex\WiseAnalytics\Services\Reporting\ReportingService;
use Kainex\WiseAnalytics\Services\Reporting\Sessions\SessionsReportsService;
use Kainex\WiseAnalytics\Services\Reporting\Visitors\VisitorsReportsService;

class HighlightsService extends ReportingService {

	/** @var VisitorsReportsService */
	private $visitorsReportsService;

	/** @var PagesReportsService */
	private $pagesReportsService;

	/** @var SessionsReportsService */
	private $sessionsReportsService;

	/**
	 * HighlightsService constructor.
	 * @param VisitorsReportsService $usersReportsService
	 * @param PagesReportsService $pagesReportsService
	 * @param SessionsReportsService $sessionsReportsService
	 */
	public function __construct(VisitorsReportsService $usersReportsService, PagesReportsService $pagesReportsService, SessionsReportsService $sessionsReportsService)
	{
		$this->visitorsReportsService = $usersReportsService;
		$this->pagesReportsService = $pagesReportsService;
		$this->sessionsReportsService = $sessionsReportsService;
	}

	public function getHighlights(array $queryParams) {
		list($startDate, $endDate) = $this->getDatesFilters($queryParams);
		$totalVisits = $this->visitorsReportsService->getVisitorsHighlights($startDate, $endDate);
		$totalPageViews = $this->pagesReportsService->getTotalPageViews($startDate, $endDate);

		$avgPagesPerVisit = $totalVisits['total'] ? round($totalPageViews['total'] / $totalVisits['total'], 2) : 0.0;
		$previousAvgPagesPerVisit = $totalVisits['previousTotal'] ? round($totalPageViews['previousTotal'] / $totalVisits['previousTotal'], 2) : 0.0;

		return [
			'visitors' => $totalVisits,
			'pageViews' => $totalPageViews,
			'avgPagesPerVisit' => [
				'ratio' => $avgPagesPerVisit,
				'previousRatio' => $previousAvgPagesPerVisit,
				'ratioDiffPercent' => $previousAvgPagesPerVisit > 0 ? round((($avgPagesPerVisit - $previousAvgPagesPerVisit) / $previousAvgPagesPerVisit * 100), 2) : null
			],
			'avgSessionTime' => $this->sessionsReportsService->getAverageTime($startDate, $endDate)
		];
	}

}