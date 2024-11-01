<?php

namespace Kainex\WiseAnalytics\Services\Processing;

use Kainex\WiseAnalytics\Options;

class ProcessingService {

	/** @var SessionsService */
	private $sessionsService;

	/**
	 * ProcessingService constructor.
	 * @param SessionsService $sessionsService
	 */
	public function __construct(SessionsService $sessionsService)
	{
		$this->sessionsService = $sessionsService;
	}

	public function process() {
		$this->sessionsService->refresh(new \DateTime());
	}

}