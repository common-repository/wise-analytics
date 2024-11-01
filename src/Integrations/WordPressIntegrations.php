<?php

namespace Kainex\WiseAnalytics\Integrations;

use Kainex\WiseAnalytics\Services\Events\EventsService;
use Kainex\WiseAnalytics\Services\Users\VisitorsService;
use Kainex\WiseAnalytics\Utils\IPUtils;
use Kainex\WiseAnalytics\Utils\URLUtils;

class WordPressIntegrations {

	/** @var VisitorsService */
	private $visitorsService;

	/** @var EventsService */
	private $eventsService;

	/**
	 * WordPressIntegrations constructor.
	 * @param VisitorsService $visitorsService
	 * @param EventsService $eventsService
	 */
	public function __construct(VisitorsService $visitorsService, EventsService $eventsService)
	{
		$this->visitorsService = $visitorsService;
		$this->eventsService = $eventsService;
	}

	public function install() {
		add_action('wp_login', [$this, 'onWpLogin'], 10, 2);
	}

	/**
	 * Maps WordPress user details to visitor record. Registers "log in" event with details.
	 *
	 * @param string $userLogin
	 * @param \WP_User $wpUser
	 * @throws \Exception
	 */
	public function onWpLogin(string $userLogin, \WP_User $wpUser) {
		$visitor = $this->visitorsService->getOrCreate();
		if ($wpUser->first_name) {
			$visitor->setFirstName($wpUser->first_name);
		}
		if ($wpUser->last_name) {
			$visitor->setLastName($wpUser->last_name);
		}
		$visitor->setEmail($wpUser->user_email);
		$data = $visitor->getData();
		$data['wpUserId'] = $wpUser->ID;
		$visitor->setData($data);
		$this->visitorsService->save($visitor);

		$this->eventsService->createEvent(
			$visitor,
			'wp-user-log-in', [
				'uri' => URLUtils::getCurrentURL(),
				'ip' => IPUtils::getIpAddress(),
				'id' => $wpUser->ID,
				'login' => $userLogin,
			]
		);
	}

}