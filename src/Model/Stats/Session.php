<?php

namespace Kainex\WiseAnalytics\Model\Stats;

class Session {

	 /** @var integer|null */
    private $id;

    /** @var integer */
    private $userId;

    /** @var \DateTime */
    private $start;

	private ?\DateTime $localTime = null;

	private ?int $localTimeZone = null;

    /** @var \DateTime */
    private $end;

	/** @var array */
    private $events;

    /** @var integer */
    private $duration;

    /** @var string|null */
    private $source;

    /** @var string|null */
    private $sourceGroup;

    /** @var string|null */
    private $sourceCategory;

	private ?int $firstEvent;
	private ?int $lastEvent;

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
	 * @return \DateTime
	 */
	public function getStart(): \DateTime
	{
		return $this->start;
	}

	/**
	 * @param \DateTime $start
	 */
	public function setStart(\DateTime $start): void
	{
		$this->start = $start;
	}

	/**
	 * @return \DateTime
	 */
	public function getEnd(): \DateTime
	{
		return $this->end;
	}

	/**
	 * @param \DateTime $end
	 */
	public function setEnd(\DateTime $end): void
	{
		$this->end = $end;
	}

	/**
	 * @return array
	 */
	public function getEvents(): array
	{
		return $this->events;
	}

	/**
	 * @param array $events
	 */
	public function setEvents(array $events): void
	{
		$this->events = $events;
	}

	/**
	 * @return int
	 */
	public function getDuration(): int
	{
		return $this->duration;
	}

	/**
	 * @param int $duration
	 */
	public function setDuration(int $duration): void
	{
		$this->duration = $duration;
	}

	/**
	 * @return string|null
	 */
	public function getSource(): ?string
	{
		return $this->source;
	}

	/**
	 * @param string|null $source
	 */
	public function setSource(?string $source): void
	{
		$this->source = $source;
	}

	/**
	 * @return string|null
	 */
	public function getSourceCategory(): ?string
	{
		return $this->sourceCategory;
	}

	/**
	 * @param string|null $sourceCategory
	 */
	public function setSourceCategory(?string $sourceCategory): void
	{
		$this->sourceCategory = $sourceCategory;
	}

	/**
	 * @return string|null
	 */
	public function getSourceGroup(): ?string
	{
		return $this->sourceGroup;
	}

	/**
	 * @param string|null $sourceGroup
	 */
	public function setSourceGroup(?string $sourceGroup): void
	{
		$this->sourceGroup = $sourceGroup;
	}

	public function getLocalTime(): ?\DateTime {
		return $this->localTime;
	}

	public function setLocalTime(?\DateTime $localTime): void {
		$this->localTime = $localTime;
	}

	public function getLocalTimeZone(): ?int {
		return $this->localTimeZone;
	}

	public function setLocalTimeZone(?int $localTimeZone): void {
		$this->localTimeZone = $localTimeZone;
	}

	public function getFirstEvent(): ?int {
		return $this->firstEvent;
	}

	public function setFirstEvent(?int $firstEvent): void {
		$this->firstEvent = $firstEvent;
	}

	public function getLastEvent(): ?int {
		return $this->lastEvent;
	}

	public function setLastEvent(?int $lastEvent): void {
		$this->lastEvent = $lastEvent;
	}

}