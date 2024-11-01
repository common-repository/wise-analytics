<?php

namespace Kainex\WiseAnalytics\DAO;

use Kainex\WiseAnalytics\Installer;
use Kainex\WiseAnalytics\Model\User;
use Kainex\WiseAnalytics\Options;

/**
 * UsersDAO.
 *
 * @author Kainex <contact@kaine.pl>
 */
class UsersDAO extends AbstractDAO {
	
	/** @var Options */
	private $options;

	/** @var User[] */
	private $usersCache;
	
	/** @var User[] */
	private $usersSetCache;

	public function __construct(Options $options) {
		$this->options = $options;
		$this->usersCache = [];
		$this->usersSetCache = [];
	}

	protected function getTable(): string {
		return Installer::getUsersTable();
	}

	/**
	 * @param integer $id
	 *
	 * @return User|null
	 */
	public function get(int $id): ?User {
		if (array_key_exists($id, $this->usersCache)) {
			return $this->usersCache[$id];
		}

		return $this->usersCache[$id] = $this->populateData($this->getByField('id', (string) $id));
	}

	/**
	 * @param string $uuid
	 *
	 * @return User|null
	 */
	public function getByUuid(string $uuid): ?User {
		return $this->populateData($this->getByField('uuid', (string) $uuid));
	}

	/**
	 * Returns users by IDs.
	 *
	 * @param integer[] $ids Array of IDs
	 *
	 * @return User[]
	 */
	public function getAll($ids): array {
		global $wpdb;

		if (!is_array($ids) || count($ids) == 0) {
			return array();
		}
        $idsFiltered = array();
        foreach ($ids as $id) {
            if ($id > 0) {
                $idsFiltered[] = $id;
            }
        }

		if (count($idsFiltered) === 0) {
			return array();
		}

		$key = sha1(implode(',', $idsFiltered));
		if (array_key_exists($key, $this->usersSetCache)) {
			return $this->usersSetCache[$key];
		}

		$users = array();
		$que = implode(',', array_fill(0, count($idsFiltered), '%d'));

		$sql = $wpdb->prepare('SELECT * FROM %i WHERE id IN ('.$que.');', array_merge([$this->getTable()], $idsFiltered));
		$results = $wpdb->get_results($sql);
		if (is_array($results)) {
			foreach ($results as $result) {
				$users[] = $this->populateData($result);
			}
		}

		$this->usersSetCache[$key] = $users;

		return $users;
	}

	/**
	 * Creates or updates the user and returns it.
	 *
	 * @param User $user
	 *
	 * @return User
	 * @throws \Exception On validation error
	 */
	public function save(User $user): User {
		global $wpdb;

		// low-level validation:
		if ($user->getUuid() === null) {
			throw new \Exception('Uuid of the user cannot equal null');
		}
		if ($user->getCreated() === null) {
			throw new \Exception('Create date of the user cannot equal null');
		}

		$columns = [
			'uuid' => $user->getUuid(),
			'first_name' => $user->getFirstName(),
			'last_name' => $user->getLastName(),
			'email' => $user->getEmail(),
			'company' => $user->getCompany(),
			'language' => $user->getLanguage(),
			'ip' => $user->getIp(),
			'screen_height' => $user->getScreenHeight(),
			'screen_width' => $user->getScreenWidth(),
			'device' => $user->getDevice(),
			'data' => json_encode($user->getData()),
			'created' => $user->getCreated()->format('Y-m-d H:i:s')
		];

		// update or insert:
		if ($user->getId() !== null) {
			$wpdb->update($this->getTable(), $columns, array('id' => $user->getId()), '%s', '%d');
		} else {
			$wpdb->insert($this->getTable(), $columns);
			$user->setId($wpdb->insert_id);
		}

		// refresh cache:
		$this->usersCache[$user->getId()] = $user;

		return $user;
	}

	/**
	 * @param object|null $rawUserData
	 *
	 * @return User|null
	 */
	private function populateData(?object $rawUserData): ?User {
		if (!$rawUserData) {
			return null;
		}

		$user = new User();
		if ($rawUserData->id) {
			$user->setId(intval($rawUserData->id));
		}
        if ($rawUserData->uuid) {
            $user->setUuid($rawUserData->uuid);
        }
		$user->setData(json_decode($rawUserData->data, true));
		$user->setFirstName($rawUserData->first_name);
		$user->setLastName($rawUserData->last_name);
		$user->setEmail($rawUserData->email);
		$user->setLanguage($rawUserData->language);
		$user->setIp($rawUserData->ip);
		$user->setCompany($rawUserData->company);
		$user->setCreated(\DateTime::createFromFormat('Y-m-d H:i:s', $rawUserData->created));

		if ($rawUserData->screen_height) {
			$user->setScreenHeight(intval($rawUserData->screen_height));
		}
		if ($rawUserData->screen_width) {
			$user->setScreenWidth(intval($rawUserData->screen_width));
		}
		if ($rawUserData->device) {
			$user->setDevice($rawUserData->device);
		}

		return $user;
	}

}