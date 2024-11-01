<?php

namespace Kainex\WiseAnalytics\Model;

class EventType {

	 /** @var integer|null */
    private $id;

    /** @var string */
    private $name;

    /** @var string */
    private $slug;

    /** @var array */
    private $data;

	/**
	 * EventType constructor.
	 */
	public function __construct() {
		$this->data = [];
	}

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
	 * @return string
	 */
	public function getName(): string
	{
		return $this->name;
	}

	/**
	 * @param string $name
	 */
	public function setName(string $name): void
	{
		$this->name = $name;
	}

	/**
	 * @return string
	 */
	public function getSlug(): string
	{
		return $this->slug;
	}

	/**
	 * @param string $slug
	 */
	public function setSlug(string $slug): void
	{
		$this->slug = $slug;
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

}