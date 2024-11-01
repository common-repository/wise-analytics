<?php

namespace Kainex\WiseAnalytics\Services\Events;

use Kainex\WiseAnalytics\DAO\EventsDAO;
use Kainex\WiseAnalytics\DAO\EventTypesDAO;
use Kainex\WiseAnalytics\DAO\EventResourcesDAO;
use Kainex\WiseAnalytics\Model\Event;
use Kainex\WiseAnalytics\Model\EventResource;
use Kainex\WiseAnalytics\Model\EventType;
use Kainex\WiseAnalytics\Model\User;
use Kainex\WiseAnalytics\Utils\URLUtils;

class EventsService extends EventsDAO {

	const STANDARD_TYPES = [
		'page-view' => 'Page View',
		'wp-user-log-in' => 'User Log In',
		'form-submission' => 'Form Submission'
	];

	/** @var URLUtils */
	private $urlUtils;

	/** @var EventTypesDAO */
	private $eventTypesDAO;

	/** @var EventResourcesDAO */
	private $eventResourcesDAO;

	/**
	 * EventsService constructor.
	 * @param URLUtils $urlUtils
	 * @param EventTypesDAO $eventTypesDAO
	 * @param EventResourcesDAO $resourcesDAO
	 */
	public function __construct(URLUtils $urlUtils, EventTypesDAO $eventTypesDAO, EventResourcesDAO $resourcesDAO)
	{
		$this->urlUtils = $urlUtils;
		$this->eventTypesDAO = $eventTypesDAO;
		$this->eventResourcesDAO = $resourcesDAO;
	}

	/**
	 * @param User $user
	 * @param string $typeSlug
	 * @param string $checksum
	 * @param array $inputData
	 * @return Event
	 * @throws \Exception
	 */
	public function createEventWithChecksum(User $user, string $typeSlug, string $checksum, array $inputData): Event {
		if (!$checksum) {
			throw new \Exception('Missing checksum');
		}
		if ($this->getByChecksum($checksum)) {
			throw new \Exception('Invalid checksum');
		}

		$eventType = $this->getOrCreateEventType($typeSlug);

		$event = new Event();
		$event->setUri($this->convertUri($typeSlug, $inputData));
		$event->setCreated(new \DateTime());
		$event->setUserId($user->getId());
		$event->setTypeId($eventType->getId());
		$event->setChecksum($checksum);
		$event->setData($this->convertData($typeSlug, $inputData));

		$this->save($event);

		$this->postCreateActions($typeSlug, $event, $inputData);

		return $event;
	}

	/**
	 * @param User $user
	 * @param string $typeSlug
	 * @param array $inputData
	 * @return Event
	 * @throws \Exception
	 */
	public function createEvent(User $user, string $typeSlug, array $inputData): Event {
		$eventType = $this->getOrCreateEventType($typeSlug);

		$event = new Event();
		$event->setUri($this->convertUri($typeSlug, $inputData));
		$event->setCreated(new \DateTime());
		$event->setUserId($user->getId());
		$event->setTypeId($eventType->getId());
		$event->setData($this->convertData($typeSlug, $inputData));

		$this->save($event);

		$this->postCreateActions($typeSlug, $event, $inputData);

		return $event;
	}

	/**
	 * @param string $typeSlug
	 * @return EventType
	 * @throws \Exception
	 */
	public function getOrCreateEventType(string $typeSlug): EventType {
		$eventType = $this->eventTypesDAO->getBySlug($typeSlug);
		if (!$eventType) {
			if (isset(self::STANDARD_TYPES[$typeSlug])) {
				$eventType = new EventType();
				$eventType->setName(self::STANDARD_TYPES[$typeSlug]);
				$eventType->setSlug($typeSlug);
				$eventType = $this->eventTypesDAO->save($eventType);
			} else {
				throw new \Exception('Unsupported type of event');
			}
		}

		return $eventType;
	}

	/**
	 * Converts input data into event type format.
	 *
	 * @param string $eventTypeSlug
	 * @param array $inputData
	 * @return array
	 */
	private function convertData(string $eventTypeSlug, array $inputData): array {
		$output = [];

		switch ($eventTypeSlug) {
			case 'page-view':
				$output = array_filter([
					'uri' => $inputData['uri'],
					'referer' => $inputData['referer']
				]);
				break;
			case 'wp-user-log-in':
				$output = array_filter([
					'id' => $inputData['id'],
					'login' => $inputData['login'],
					'ip' => $inputData['ip']
				]);
				break;
		}

		if (isset($inputData['time']) && is_numeric($inputData['time'])) {
			$output['time'] = (int) $inputData['time'];
		}
		if (isset($inputData['tz']) && is_numeric($inputData['tz'])) {
			$output['tz'] = (int) $inputData['tz'];
		}

		return $output;
	}


	/**
	 * Converts input data into event URI.
	 *
	 * @param string $eventTypeSlug
	 * @param array $inputData
	 * @return string|null
	 * @throws \Exception
	 */
	private function convertUri(string $eventTypeSlug, array $inputData): ?string {
		$output = null;

		switch ($eventTypeSlug) {
			case 'page-view':
				if (isset($inputData['canonicalUri']) && $inputData['canonicalUri']) {
					$output = $this->urlUtils->toPathAndQuery($inputData['canonicalUri']);
				} else if (isset($inputData['uri']) && $inputData['uri']) {
					$output = $this->urlUtils->toPathAndQuery($inputData['uri']);
				} else {
					throw new \Exception('Missing URI');
				}

				break;
			default:
				if (isset($inputData['uri']) && $inputData['uri']) {
					$output = $this->urlUtils->toPathAndQuery($inputData['uri']);
				}
		}

		return $output;
	}

	/**
	 *
	 * TODO: save the resource only if created date is old enough
	 *
	 * @param string $eventTypeSlug
	 * @param Event $event
	 * @param array $inputData
	 * @throws \Exception
	 */
	private function postCreateActions(string $eventTypeSlug, Event $event, array $inputData) {
		if ($eventTypeSlug === 'page-view') {
			if (!isset($inputData['title']) || !$inputData['title']) {
				return;
			}

			$resources = $this->eventResourcesDAO->getByTypeAndTextKey(EventResource::TYPE_URI_TITLE, $event->getUri());
			if (count($resources) > 0) {
				$resources[0]->setTextValue($inputData['title']);
				$this->eventResourcesDAO->save($resources[0]);
			} else {
				$es = new EventResource();
				$es->setTypeId(EventResource::TYPE_URI_TITLE);
				$es->setTextKey($event->getUri());
				$es->setTextValue($inputData['title']);
				$this->eventResourcesDAO->save($es);
			}
		}
	}

}