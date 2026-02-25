<?php

namespace App\Dto\Review;

use App\Http\Requests\ReviewsFetchRequest;

class ReviewsFetchDTO
{
    public readonly string $businessId;
    public readonly int $page;
    public readonly int $perPage;

    public function __construct($data)
    {
        $this->businessId = $data['businessId'] ?? null;
        $this->page = $data['page'] ?? 1;
        $this->perPage = $data['perPage'] ?? 10;
    }

    /**
     * Create DTO from ReviewsFetchRequest
     * @param ReviewsFetchRequest $request
     * @return self
     */
    public static function fromRequest(ReviewsFetchRequest $request): self
    {
        $data = $request->validated();
        return new self($data);
    }

    /**
     * Returns DTO in array
     * @return array{businessId: string, page: int, perPage: int}
     */
    public function toArray(): array
    {
        return array_filter([
            'businessId' => $this->businessId,
            'page' => $this->page,
            'perPage' => $this->perPage,
        ], function ($value) {
            return $value !== null;
        });
    }
}
