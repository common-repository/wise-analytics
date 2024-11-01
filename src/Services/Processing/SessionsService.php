<?php

namespace Kainex\WiseAnalytics\Services\Processing;

use Kainex\WiseAnalytics\DAO\Stats\SessionsDAO;
use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\Stats\Session;
use Kainex\WiseAnalytics\Services\Commons\DataAccess;
use Kainex\WiseAnalytics\Services\Events\EventsService;
use Kainex\WiseAnalytics\Utils\Logger;

class SessionsService {
	use DataAccess;
	
	const SESSION_GAP = 1800;
	const DEFAULT_EVENT_DURATION = 2;
	const MAX_EVENT_DURATION = 10 * 60;

	/** @var int Average duration of the last event in a session */
	const EXTRA_SECONDS = 5;

	/** @var SessionsDAO */
	private $sessionsDAO;
	private EventsService $eventsService;

	/** @var Logger */
	private $logger;

	/** @var int[] Event types applicable for calculating durations */
	private array $durationEventTypes = [];

	/**
	 * @param SessionsDAO $sessionsDAO
	 * @param EventsService $eventsService
	 * @param Logger $logger
	 */
	public function __construct(SessionsDAO $sessionsDAO, EventsService $eventsService, Logger $logger) {
		$this->sessionsDAO = $sessionsDAO;
		$this->eventsService = $eventsService;
		$this->logger = $logger;
	}

	/**
	 * Refreshes sessions of a given day.
	 * TODO: safety limit of the sessions or offset
	 *
	 * @param \DateTime $day The day to refresh the sessions
	 * @throws \Exception
	 */
	public function refresh(\DateTime $day, int $spanDays = 1) {
		$this->durationEventTypes = [$this->eventsService->getOrCreateEventType('page-view')->getId()];

		$startDate = clone $day;
		$startDate->setTime(0, 0, 0);
		$startDate->modify('-'.$spanDays.' days');
		$endDate = clone $day;
		$endDate->setTime(23, 59, 59);

		$startDateStr = $startDate->format('Y-m-d H:i:s');
		$endDateStr = $endDate->format('Y-m-d H:i:s');
		$endDate->modify('-'.$endDate->format('i').' days');
		
		try {
			$args = ['table' => Installer::getEventsTable(), 'select' => ['DISTINCT user_id'], 'where' => ["created >= %s", "created <= %s"], 'whereArgs' => [$startDateStr, $endDateStr]];
			$this->logger->info('Refreshing sessions, time range: ' . $startDateStr . ' - ' . $endDateStr);

			$users = $this->queryEvents($args);
			$args['where'][0] = str_replace(['>'], ['<'], $args['where'][0]);
			$args['whereArgs'][0] = $endDate->format('Y-m-d H:i:s');
			$totalEvents = 0;
			foreach ($users as $user) {
				$totalEvents += $this->refreshUserSessions($user->user_id, $startDateStr, $endDateStr);
			}
			$args['type'] = 'delete';
			$this->execute($args);

			$this->logger->info('Refreshed users: ' . count($users) . ', events processed: ' . $totalEvents);
			$args['table'] = Installer::getSessionsTable();
			$args['where'][0] = str_replace('created', 'start', $args['where'][0]);
			array_pop($args['where']);
			array_pop($args['whereArgs']);
			$this->execute($args);

		} catch (\Exception $exception) {
			$this->logger->error('Error when refreshing sessions: ' . $exception->getMessage());
		}
	}

	private function refreshUserSessions(int $userId, string $startDate, string $endDate): int {
		$this->sessionsDAO->deleteByUserAndDate($userId, $startDate, $endDate);

		$events = $this->queryEvents([
			'select' => ['*'],
			'where' => ["user_id = %d", "created >= %s", "created <= %s"],
			'whereArgs' => [$userId, $startDate, $endDate]
		]);

		$this->createSessions($userId, $this->getGroupedEvents($events));

		return count($events);
	}

	/**
	 * Group events into sessions.
	 *
	 * @param array $events
	 * @return array
	 */
	private function getGroupedEvents(array $events): array {
		if (count($events) === 0) {
			return [];
		}

		$sessions = [];
		$sessionEvents = [];
		$previousEvent = null;
		foreach ($events as $event) {
			if ($previousEvent && (strtotime($event->created) - strtotime($previousEvent->created)) > self::SESSION_GAP) {
				$sessions[] = $sessionEvents;
				$sessionEvents = [];
			}
			$sessionEvents[] = $event;
			$previousEvent = $event;
		}

		$sessions[] = $sessionEvents;

		return $sessions;
	}

	/**
	 * Creates user sessions based on grouped events.
	 *
	 * @param int $userId
	 * @param array $groupedEvents
	 * @throws \Exception
	 */
	private function createSessions(int $userId, array $groupedEvents) {
		foreach ($groupedEvents as $group) {
			$ids = array_map(function($event) { return (int) $event->id; }, $group);

			$firstEvent = $group[0];
			$lastEvent = count($group) > 1 ? $group[count($group) - 1] : $group[0];

			$duration = strtotime($lastEvent->created) - strtotime($firstEvent->created) + self::EXTRA_SECONDS;

			$startDate = \DateTime::createFromFormat('Y-m-d H:i:s', $firstEvent->created);
			$endDate = \DateTime::createFromFormat('Y-m-d H:i:s', $lastEvent->created);
			$endDate->modify("+".self::EXTRA_SECONDS." seconds");

			$session = new Session();
			$session->setUserId($userId);
			$session->setEvents($ids);
			$session->setDuration($duration);
			$session->setStart($startDate);
			$session->setEnd($endDate);
			$session->setFirstEvent($firstEvent->id);
			$session->setLastEvent($lastEvent->id);
			$eventData = $this->getDataOfEventWithLocalTime($group);
			if ($eventData) {
				$time = $eventData['time'] - (($eventData['tz'] ?? 0) * 60);
				$session->setLocalTime(new \DateTime('@' . $time));

				if (isset($eventData['tz'])) {
					$session->setLocalTimeZone($eventData['tz']);
				}
			}

			$this->setSources($session, $firstEvent);

			$this->sessionsDAO->save($session);

			$this->processEventsOfSession($group, $ids);
		}
	}

	/**
	 * Returns source domain.
	 *
	 * @param object $firstEvent
	 * @return string|null
	 */
	private function getSource(object $firstEvent): ?string {
		$data = json_decode($firstEvent->data, true);
		if (!is_array($data) || !isset($data['referer']) || !$data['referer']) {
			return null;
		}

		$sourceDomain = parse_url($data['referer'], PHP_URL_HOST);
		if ($sourceDomain && filter_var($sourceDomain, FILTER_VALIDATE_DOMAIN)) {
			return preg_replace('/^www\./', '', $sourceDomain);
		}

		return null;
	}

	private function setSources(Session $session, object $firstEvent) {
		$domain = $this->getSource($firstEvent);

		if (!$domain) {
			$session->setSourceCategory('Direct');
			return;
		}
		$session->setSource($domain);

		// social networks:
		foreach (self::SOCIAL_NETWORKS as $pattern => $networkName) {
			if (preg_match('/'.$pattern.'$/', $domain)) {
				$session->setSourceCategory($this->isPaid($firstEvent) ? 'Paid Social' : 'Organic Social');
				$session->setSourceGroup($networkName);
				return;
			}
		}

		// search engines:
		foreach (self::SEARCH_ENGINES as $pattern => $engineName) {
			if (preg_match('/'.$pattern.'$/', $domain)) {
				$session->setSourceCategory($this->isPaid($firstEvent) ? 'Paid Search' : 'Organic Search');
				$session->setSourceGroup($engineName);
				return;
			}
		}

		$session->setSourceCategory('Referral');
	}

	const SEARCH_ENGINES = [
		'google.[a-z]{2,3}' => 'Google',
		'yahoo.com' => 'Yahoo',
		'yandex.ru' => 'Yandex',
		'yandex.com' => 'Yandex',
		'ya.ru' => 'Yandex',
		'duckduckgo.com' => 'DuckDuckGo',
		'bing.com' => 'Bing',
		'naver.com' => 'Naver',
		'baidu.com' => 'Baidu',
		'ecosia.org' => 'Ecosia',
		'seznam.cz' => 'Seznam',
		'aol.com' => 'AOL',
		'qwant.com' => 'Qwant',
		'search.brave.com' => 'Brave Search',
		'startpage.com' => 'StartPage',
		'you.com' => 'You.com',
		'sogou.com' => 'Sogou',
		'coccoc.com' => 'Cốc Cốc Search',
		'so.com' => 'Haosou',
		'dogpile.com' => 'Dogpile',
		'swisscows.com' => 'Swisscows',
		'ask.com' => 'Ask',
		'yippyinc.com' => 'Yippy',
		'gibiru.com' => 'Gibiru'
	];

	const SOCIAL_NETWORKS = [
		'wordpress.org' => 'WordPress.org',
		'facebook.com' => 'Facebook',
		'instagram.com' => 'Instagram',
		'twitter.com' => 'X',
		'whatsapp.com' => 'Whatsapp',
		'tiktok.com' => 'TikTok',
		'reddit.com' => 'Reddit',
		'linkedin.com' => 'LinkedIn',
		'vk.com' => 'VK',
		'pinterest.com' => 'Pinterest',
		'discord.com' => 'Discord',
		'ok.ru' => 'OK',
		'zhihu.com' => 'Zhihu',
		'line.me' => 'Line',
		'messenger.com' => 'Messenger',
		'telegram.org' => 'Telegram',
		'peachavocado.com' => 'Peachavocado',
		'snapchat.com' => 'Snapchat',
		'namu.wiki' => 'Namuwiki',
		'tumblr.com' => 'Tumblr',
		'ameblo.jp' => 'Ameba',
		'nextdoor.com' => 'Nextdoor',
		'heylink.me' => 'HeyLink',
		'xiaohongshu.com' => 'XiaoHongShu',
		'weibo.com' => 'Sina Weibo',
		'zalo.me' => 'Zalo',
		'patreon.com' => 'Patreon',
		'slack.com' => 'Slack',
		'zaloapp.com' => 'Zalo App',
		'hatenablog.com' => 'Hatenablog',
		'threads.net' => 'Threads',
		'pinterest.es' => 'Pinterest',
		'livejournal.com' => 'LiveJournal',
		'discordapp.com' => 'Discord',
		'pinterest.com.mx' => 'Pinterest',
		'atid.me' => 'Atid',
		'slideshare.net' => 'SlideShare',
		'kwai.com' => 'Kwai',
		'ssstik.io' => 'SSSTik',
		'bakusai.com' => 'Bakusai',
		'fb.com' => 'Facebook',
		'snaptik.app' => 'SnapTik',
		'pinterest.co.uk' => 'Pinterest',
		'ptt.cc' => 'Ptt',
		'saveinsta.app' => 'Saveinsta',
		'redd.it' => 'Reddit',
		'pinterest.fr' => 'Pinterest',
		'youtubekids.com' => 'YouTube Kids',
		'pinterest.de' => 'Pinterest',
		'feishu.cn' => 'Feishu',
		'pinterest.ca' => 'Pinterest',
	];

	private function isPaid(object $firstEvent): bool {
		$data = json_decode($firstEvent->data, true);
		if (!is_array($data) || !isset($data['uri']) || !$data['uri']) {
			return false;
		}

		if (str_contains($data['uri'], 'gad_source')) { // Google Ads
			return true;
		}
		if (str_contains($data['uri'], 'fbclid')) { // Facebook Ads
			return true;
		}

		return false;
	}

	private function getDataOfEventWithLocalTime($group): ?array {
		foreach ($group as $event) {
			$data = json_decode($event->data, true);
			if (isset($data['time']) && is_numeric($data['time'])) {
				return $data;
			}
		}

		return null;
	}

	private function processEventsOfSession(array $rawEvents, array $ids) {
		$filtered = [];
		foreach ($rawEvents as $event) {
			if (in_array($event->type_id, $this->durationEventTypes)) {
				$filtered[] = $event;
			}
		}

		$previous = null;
		foreach ($filtered as $event) {
			if ($previous !== null) {
				$diff = min(self::MAX_EVENT_DURATION, abs(strtotime($event->created) - strtotime($previous->created)));
				$this->eventsService->updateRaw($previous->id, ['duration' => $diff]);
			}
			$previous = $event;
		}
		if ($previous) {
			$this->eventsService->updateRaw($previous->id, ['duration' => self::DEFAULT_EVENT_DURATION]);
		}
	}

}