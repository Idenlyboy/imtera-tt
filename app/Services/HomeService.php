<?php

namespace App\Services;

use App\Exceptions\ServerException;
use App\Models\Subject;

class HomeService
{
    /**
     * Get data for Home Page
     */
    public function getHomePageData()
    {
        try {
            $userID = session('user_id');

            $subjects = Subject::where('user_id', $userID)
                ->orderBy('created_at', 'desc')
                ->get();

            return [
                'subjects' => $subjects
            ];
        } catch (\Exception $e) {
            $exception = new ServerException('Произошла ошибка при загрузке объектов!', ['message' => $e->getMessage()], $e->getCode());

            $exception->report();
            throw $exception;
        }
    }
}
