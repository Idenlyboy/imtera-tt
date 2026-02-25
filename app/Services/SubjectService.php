<?php

namespace App\Services;

use App\Models\Subject;
use App\Traits\NoticeTrait;
use Illuminate\Http\JsonResponse;
use App\Dto\Subject\SubjectCreateDTO;

class SubjectService
{
    use NoticeTrait;

    /**
     * Store Subject
     * @param SubjectCreateDTO $dto
     * @return JsonResponse
     */
    public function store(SubjectCreateDTO $dto): JsonResponse
    {
        try {
            $subject = Subject::create($dto->toArray());

            return $this->notice(200, 'Успешно!', $subject);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());

            return $this->notice(500, 'Произошла ошибка при создании!');
        }
    }
}