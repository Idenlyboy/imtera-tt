<?php

namespace App\Http\Controllers;

use App\Services\SubjectService;
use App\Dto\Subject\SubjectCreateDTO;
use App\Http\Requests\SubjectCreateRequest;

class SubjectController extends Controller
{
    /**
     * Store Subject
     * @param SubjectCreateRequest $request
     * @param SubjectService $subjectService
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(SubjectCreateRequest $request, SubjectService $subjectService)
    {
        $dto = SubjectCreateDTO::fromRequest($request);

        return $subjectService->store($dto);
    }
}
