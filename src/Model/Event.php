<?php

namespace Kainex\WiseAnalytics\Model;

class Event {

	 /** @var integer */
    private $id;

    /** @var integer */
    private $userId;

    /** @var integer */
    private $typeId;

    /** @var string|null */
    private $uri;

    /** @var string|null */
    private $checksum;

    /** @var \DateTime */
    private $created;

	/** @var array */
    private $data;

	private int $duration = 0;

	/**
	 * @return int|null
	 */
	public function getId(): ?int
	{
		return $this->id;
	}

	/**
	 * @param int|null $id
	 */
	public function setId(?int $id): void
	{
		$this->id = $id;
	}

	/**
	 * @return int
	 */
	public function getUserId(): int
	{
		return $this->userId;
	}

	/**
	 * @param int $userId
	 */
	public function setUserId(int $userId): void
	{
		$this->userId = $userId;
	}

	/**
	 * @return int
	 */
	public function getTypeId(): int
	{
		return $this->typeId;
	}

	/**
	 * @param int $typeId
	 */
	public function setTypeId(int $typeId): void
	{
		$this->typeId = $typeId;
	}

	/**
	 * @return string|null
	 */
	public function getUri(): ?string
	{
		return $this->uri;
	}

	/**
	 * @param string|null $uri
	 */
	public function setUri(?string $uri): void
	{
		$this->uri = $uri;
	}

	/**
	 * @return \DateTime
	 */
	public function getCreated(): \DateTime
	{
		return $this->created;
	}

	/**
	 * @param \DateTime $created
	 */
	public function setCreated(\DateTime $created): void
	{
		$this->created = $created;
	}

	/**
	 * @return array
	 */
	public function getData(): array
	{
		return $this->data;
	}

	/**
	 * @param array $data
	 */
	public function setData(array $data): void
	{
		$this->data = $data;
	}

	/**
	 * @return string|null
	 */
	public function getChecksum(): ?string
	{
		return $this->checksum;
	}

	/**
	 * @param string|null $checksum
	 */
	public function setChecksum(?string $checksum): void
	{
		$this->checksum = $checksum;
	}

	public function getDuration(): int {
		return $this->duration;
	}

	public function setDuration(int $duration): void {
		$this->duration = $duration;
	}

}