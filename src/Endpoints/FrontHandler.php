<?php

namespace Kainex\WiseAnalytics\Endpoints;

use Kainex\WiseAnalytics\Services\Events\EventsService;
use Kainex\WiseAnalytics\Services\Users\VisitorsService;
use Kainex\WiseAnalytics\Utils\IPUtils;

/**
 * FrontHandler
 *
 * @author Kainex <contact@kainex.pl>
 */
class FrontHandler {
	
	/** @var VisitorsService */
	private $visitorsService;

	/** @var EventsService */
	private $eventsService;

	/**
	 * FrontHandler constructor.
	 * @param VisitorsService $usersService
	 * @param EventsService $eventsService
	 */
	public function __construct(VisitorsService $usersService, EventsService $eventsService)
	{
		$this->visitorsService = $usersService;
		$this->eventsService = $eventsService;
	}

	public function registerEndpoints() {
		$this->registerEventsEndpoint();
	}
	
	public function registerHandlers($query) {
		if (isset($query->query_vars['_wa_api_action'])) {
			$this->handleRequest($query->query_vars['_wa_api_action']);
			die();
		}
	}
	
	/**
	 * Registers API endpoints using rewrite rules.
     */
	private function registerEventsEndpoint() {
		add_rewrite_tag('%_wa_api_action%', '([a-zA-Z\d\-_+]+)');
		add_rewrite_rule('wa-api/([a-zA-Z\d\-_+]+)/?', 'index.php?_wa_api_action=$matches[1]', 'top');
	}
	
	private function handleRequest($command) {
		switch ($command) {
			case 'event';
				$this->handleEvent();
				break;
		}
	}
	
	private function handleEvent() {
		try {
			$language = $this->getRequestParam('la');
			$screenHeight = $this->getRequestParam('sh');
			$screenWidth = $this->getRequestParam('sw');

			$event = $this->eventsService->createEventWithChecksum(
				$this->visitorsService->getOrCreate([
					'language' => $language,
					'screenHeight' => $screenHeight,
					'screenWidth' => $screenWidth
				]),
				$this->getRequestParam('ty'),
				$this->getRequestParam('cs'), [
					'ip' => IPUtils::getIpAddress(),
					'uri' => $this->getRequestParam('ur'),
					'canonicalUri' => $this->getRequestParam('cur'),
					'title' => $this->getRequestParam('ti'),
					'userAgent' => sanitize_text_field($_SERVER['HTTP_USER_AGENT']),
					'referer' => $this->getRequestParam('re'),
					'language' => $language,
					'time' => $this->getRequestParam('t'),
					'tz' => $this->getRequestParam('tz')
				]
			);

			$this->endResponse("event ok: " . $event->getId());
		} catch (\Exception $e) {
			$this->endResponse("event error: " . $e->getMessage());
		}
	}

	/**
	 * Returns GET parameter value.
	 *
	 * @param string $name
	 * @param string $default
	 *
	 * @return mixed
	 */
	private function getRequestParam($name, $default = null) {
		return array_key_exists($name, $_GET) ? sanitize_text_field($_GET[$name]) : $default;
	}

	/**
	 * Outputs 1x1 transparent GIF image together with "X-WA-Api-Response" header
	 *
	 * @param string $headerMessage
	 */
	private function endResponse($headerMessage = null) {
		$imageSource = 'R0lGODlhAQABAID/AP///wAAACwAAAAAAQABAAACAkQBADs=';
		$image = base64_decode($imageSource);
		nocache_headers();
		header("Content-type: image/gif");
		header("Content-Length: ".strlen($image));
		if ($headerMessage) {
			header("X-WA-Api-Response: {$headerMessage}");
		}
		echo base64_decode(esc_attr($imageSource));
		die();
	}
	
}