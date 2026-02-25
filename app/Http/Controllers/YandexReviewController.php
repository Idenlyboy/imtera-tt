<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Services\YandexReviewService;
use App\Traits\NoticeTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Dto\Review\ReviewsFetchDTO;

class YandexReviewController extends Controller
{
    use NoticeTrait;

    /**
     * Get Paginated Yandex Reviews with Subject and Aspects
     * @param Request $request
     * @param YandexReviewService $yandexReviewService
     * @return JsonResponse
     */
    public function getItems(Request $request, YandexReviewService $yandexReviewService): JsonResponse
    {
        $page = (int) $request->get('page', 1);
        $perPage = (int) $request->get('per_page', 10);
        $url = (string) $request->get('url', null);

        $subject = Subject::where('url', $url)->firstOrFail();
        $businessID = $subject->yandex_business_id;

        $dto = new ReviewsFetchDTO([
            'businessId' => $businessID,
            'page' => $page,
            'perPage' => $perPage
        ]);

        return $yandexReviewService->getReviews($dto, $subject);
    }
}
