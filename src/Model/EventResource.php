<?php

namespace Kainex\WiseAnalytics\Model;

class EventResource {

	public const TYPE_URI_TITLE = 1;

	/** @var integer */
    private $id;

    /** @var integer */
    private $typeId;

    /** @var string|null */
    private $textKey;

    /** @var string|null */
    private $textValue;

    /** @var integer|null */
    private $intKey;

    /** @var integer|null */
    private $intValue;

    /** @var \DateTime */
    private $created;

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
	public function getTextKey(): ?string
	{
		return $this->textKey;
	}

	/**
	 * @param string|null $textKey
	 */
	public function setTextKey(?string $textKey): void
	{
		$this->textKey = $textKey;
	}

	/**
	 * @return string|null
	 */
	public function getTextValue(): ?string
	{
		return $this->textValue;
	}

	/**
	 * @param string|null $textValue
	 */
	public function setTextValue(?string $textValue): void
	{
		$this->textValue = $textValue;
	}

	/**
	 * @return int|null
	 */
	public function getIntKey(): ?int
	{
		return $this->intKey;
	}

	/**
	 * @param int|null $intKey
	 */
	public function setIntKey(?int $intKey): void
	{
		$this->intKey = $intKey;
	}

	/**
	 * @return int|null
	 */
	public function getIntValue(): ?int
	{
		return $this->intValue;
	}

	/**
	 * @param int|null $intValue
	 */
	public function setIntValue(?int $intValue): void
	{
		$this->intValue = $intValue;
	}

	/**
	 * @return \DateTime|null
	 */
	public function getCreated(): ?\DateTime
	{
		return $this->created;
	}

	/**
	 * @param \DateTime|null $created
	 */
	public function setCreated(?\DateTime $created): void
	{
		$this->created = $created;
	}

}