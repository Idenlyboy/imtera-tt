<?php

namespace App\Dto\Subject;

use App\Exceptions\ServerException;
use App\Http\Requests\SubjectCreateRequest;

class SubjectCreateDTO
{
    public readonly string $url;
    public readonly int $user_id;

    public function __construct($data)
    {
        $this->url = $data['url'] ?? null;
        $this->user_id = $data['user_id'] ?? null;
    }

    /**
     * Create DTO from SubjectCreateRequest
     * @param SubjectCreateRequest $request
     * @return self
     */
    public static function fromRequest(SubjectCreateRequest $request): self
    {
        $data = $request->validated();

        $data['user_id'] = session('user_id');
        $numbersOnly = preg_replace('/\D+/', '', $data['url']);

        if (empty($numbersOnly)) {
            throw new ServerException('Неподходящий формат ссылки!');
        }

        return new self($data);
    }

    /**
     * Returns DTO in array
     * @return array{url: string}
     */
    public function toArray(): array
    {
        return array_filter([
            'url' => $this->url,
            'user_id' => $this->user_id,
        ], function ($value) {
            return $value !== null;
        });
    }
}
