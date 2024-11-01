<?php

namespace Kainex\WiseAnalytics\Services\Users;

use Kainex\WiseAnalytics\DAO\UsersDAO;
use Kainex\WiseAnalytics\Model\User;
use Kainex\WiseAnalytics\Options;
use Kainex\WiseAnalytics\Utils\IPUtils;
use Kainex\WiseAnalytics\Utils\StringUtils;

class VisitorsService {

	const UUID_COOKIE = 'wa';
	const UUID_COOKIE_TIME = 15552000;  // 60 seconds * 60 minutes * 24 hours * 180 days = 6 months(ish)

	const DEVICE_MOBILE = 3;
	const DEVICE_TABLET = 2;
	const DEVICE_DESKTOP = 1;

	private const FIELDS = [
		['id' => 'email', 'name' => 'E-mail'],
		['id' => 'firstName', 'name' => 'First Name'],
		['id' => 'lastName', 'name' => 'Last Name'],
	];

	/** @var Options */
	private $options;

	/** @var UsersDAO */
	private $usersDAO;

	/**
	 * UsersService constructor.
	 * @param Options $options
	 * @param UsersDAO $usersDAO
	 */
	public function __construct(Options $options, UsersDAO $usersDAO)
	{
		$this->options = $options;
		$this->usersDAO = $usersDAO;
	}

	/**
	 * @param array $configuration
	 * @return User
	 * @throws \Exception
	 */
	public function getOrCreate(array $configuration = []): User {
		$ip = IPUtils::getIpAddress();
		if ($ip) {
			$configuration['ip'] = $ip;
		}

		if (!isset($_COOKIE[VisitorsService::UUID_COOKIE])) {
			return $this->create($configuration);
		} else {
			$visitor = $this->usersDAO->getByUuid(sanitize_text_field($_COOKIE[VisitorsService::UUID_COOKIE]));
			if (!$visitor) {
				return $this->create($configuration);
			}

			$changed = false;
			if (isset($configuration['language']) && $configuration['language'] && $configuration['language'] !== $visitor->getLanguage()) {
				$visitor->setLanguage($configuration['language']);
				$changed = true;
			}
			if (isset($configuration['ip']) && $configuration['ip'] && $configuration['ip'] !== $visitor->getIp()) {
				$visitor->setIp($configuration['ip']);
				$changed = true;
			}

			$screenSizeChanged = false;
			if (isset($configuration['screenHeight']) && is_numeric($configuration['screenHeight']) && $configuration['screenHeight'] !== $visitor->getScreenHeight()) {
				$visitor->setScreenHeight(intval($configuration['screenHeight']));
				$changed = true;
				$screenSizeChanged = true;
			}
			if (isset($configuration['screenWidth']) && is_numeric($configuration['screenWidth']) && $configuration['screenWidth'] !== $visitor->getScreenWidth()) {
				$visitor->setScreenWidth(intval($configuration['screenWidth']));
				$changed = true;
				$screenSizeChanged = true;
			}

			if ($screenSizeChanged) {
				$this->determineDeviceType($visitor);
			}

			if ($changed) {
				$visitor = $this->usersDAO->save($visitor);
			}

			return $visitor;
		}
	}

	public function save(User $user): User {
		return $this->usersDAO->save($user);
	}

	/**
	 * @param array $configuration
	 * @return User
	 * @throws \Exception
	 */
	private function create(array $configuration = []): User {
		$visitor = new User();
		$visitor->setUuid(StringUtils::createUuid());
		$visitor->setCreated(new \DateTime());
		if (isset($configuration['language'])) {
			$visitor->setLanguage($configuration['language']);
		}
		if (isset($configuration['ip'])) {
			$visitor->setIp($configuration['ip']);
		}
		if (isset($configuration['screenHeight']) && is_numeric($configuration['screenHeight'])) {
			$visitor->setScreenHeight(intval($configuration['screenHeight']));
		}
		if (isset($configuration['screenWidth']) && is_numeric($configuration['screenWidth'])) {
			$visitor->setScreenWidth(intval($configuration['screenWidth']));
		}
		$this->determineDeviceType($visitor);
		$visitor = $this->usersDAO->save($visitor);

		setcookie(self::UUID_COOKIE, $visitor->getUuid(), time() + self::UUID_COOKIE_TIME, '/');
		$_COOKIE[self::UUID_COOKIE] = $visitor->getUuid();

		return $visitor;
	}

	/**
	 * @return string[][]
	 */
	public function getVisitorFields(): array {
		return self::FIELDS;
	}

	/**
	 * TODO: allow to set the strategy
	 *
	 * @param User $visitor
	 * @param array $update Plain update array
	 */
	public function saveWithPlainArray(User $visitor, array $update) {
		$updated = false;

		foreach ($update as $fieldId => $value) {
			if (!$value) {
				continue;
			}

			switch ($fieldId) {
				case 'email':
					$visitor->setEmail($value);
					// TODO: validation
					break;
				case 'firstName':
					$visitor->setFirstName($value);
					break;
				case 'lastName':
					$visitor->setLastName($value);
					break;
			}

			$updated = true;
		}

		if ($updated) {
			$this->save($visitor);
		}
	}

	private function determineDeviceType(User $visitor) {
		if (!$visitor->getScreenWidth()) {
			return;
		}

		if ($visitor->getScreenWidth() <= 480) {
			$visitor->setDevice(self::DEVICE_MOBILE);
		} else if ($visitor->getScreenWidth() <= 768) {
			$visitor->setDevice(self::DEVICE_TABLET);
		} else {
			$visitor->setDevice(self::DEVICE_DESKTOP);
		}
	}

}