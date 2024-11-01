<?php

namespace Kainex\WiseAnalytics\Endpoints;

use Kainex\WiseAnalytics\Services\Reporting\Events\EventsReportsService;
use Kainex\WiseAnalytics\Services\Reporting\Highlights\HighlightsService;
use Kainex\WiseAnalytics\Services\Reporting\Pages\PagesReportsService;
use Kainex\WiseAnalytics\Services\Reporting\Sessions\SessionsReportsService;
use Kainex\WiseAnalytics\Services\Reporting\Sources\SourcesReportsService;
use Kainex\WiseAnalytics\Services\Reporting\Visitors\VisitorsReportsService;

class ReportsEndpoint {

	private HighlightsService $highlightsService;
	private PagesReportsService $pagesReportsService;
	private VisitorsReportsService $visitorsReportsService;
	private EventsReportsService $eventsReportsService;
	private SessionsReportsService $sessionsReportsService;
	private SourcesReportsService $sources;

	/**
	 * @param HighlightsService $highlightsService
	 * @param PagesReportsService $pagesReportsService
	 * @param VisitorsReportsService $visitorsReportsService
	 * @param EventsReportsService $eventsReportsService
	 * @param SessionsReportsService $sessionsReportsService
	 * @param SourcesReportsService $sources
	 */
	public function __construct(HighlightsService $highlightsService, PagesReportsService $pagesReportsService, VisitorsReportsService $visitorsReportsService, EventsReportsService $eventsReportsService, SessionsReportsService $sessionsReportsService, SourcesReportsService $sources) {
		$this->highlightsService = $highlightsService;
		$this->pagesReportsService = $pagesReportsService;
		$this->visitorsReportsService = $visitorsReportsService;
		$this->eventsReportsService = $eventsReportsService;
		$this->sessionsReportsService = $sessionsReportsService;
		$this->sources = $sources;
	}

	public function registerEndpoints() {
		register_rest_route( 'wise-analytics/v1', '/report', array(
			'methods' => 'GET',
			'callback' => [$this, 'reportEndpoint'],
			'permission_callback' => function() {
				return true; // TODO: check the permissions
			}
		));
	}

	// TODO: report all errors through exceptions
	public function reportEndpoint(\WP_REST_Request $request) {
		$queryParams = $request->get_query_params();

		try {
			switch ($queryParams['name']) {
				case 'overview.highlights';
					return $this->highlightsService->getHighlights($queryParams);
				case 'pages.top';
					return $this->pagesReportsService->getTopPagesViews($queryParams);
				case 'pages.views.daily';
					return $this->pagesReportsService->getPagesViewsDaily($queryParams);
				case 'visitors.last';
					return $this->visitorsReportsService->getLastVisitors($queryParams);
				case 'visitors.daily';
					return $this->visitorsReportsService->getVisitorsDaily($queryParams);
				case 'visitors.languages';
					return $this->visitorsReportsService->getLanguages($queryParams);
				case 'visitors.hourly';
					return $this->visitorsReportsService->getHourlyStats($queryParams);
				case 'visitors.devices';
					return $this->visitorsReportsService->getDevices($queryParams);
				case 'visitors.screens';
					return $this->visitorsReportsService->getScreens($queryParams);
				case 'visitor.information';
					return $this->visitorsReportsService->getInformation($queryParams);
				case 'sessions.daily';
					return $this->sessionsReportsService->getSessionsDaily($queryParams);
				case 'sessions.visitor.hourly';
					return $this->sessionsReportsService->getSessionsOfVisitorHourly($queryParams);
				case 'sessions.avg.time.daily';
					return $this->sessionsReportsService->getSessionsAvgTimeDaily($queryParams);
				case 'sources.categories.overall';
					return $this->sources->getSourceCategories($queryParams);
				case 'sources.social.overall';
					return $this->sources->getSocialNetworks($queryParams);
				case 'sources.organic.overall';
					return $this->sources->getOrganicSearch($queryParams);
				case 'sources.categories.daily';
					return $this->sources->getSourceCategoriesDaily($queryParams);
				case 'sources';
					return $this->sources->getSources($queryParams);
				case 'events';
					return $this->eventsReportsService->getEvents($queryParams);
				case 'behaviour.pages';
					return $this->pagesReportsService->getPages($queryParams);
			}

		} catch (\Exception $e) {
			return new \WP_Error('endpoint_error', 'Endpoint error: '.$e->getMessage(), ['status' => 500]);
		}

		return new \WP_Error('invalid_report', 'Invalid report', ['status' => 404]);
	}

}