<?php

namespace App\Services;

use App\Models\Subject;
use App\Dto\Review\ReviewsFetchDTO;
use App\Exceptions\ServerException;
use App\Traits\NoticeTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Http;

class YandexReviewService
{
    use NoticeTrait;

    protected array $config;
    protected string $path;
    protected bool $workOnMockData;

    public function __construct()
    {
        $this->config = config('yandex-reviews');
        $this->workOnMockData = $this->config['work_on_mock_data'];
        $this->path = database_path($this->config['mock_data_name']);
    }

    /**
     * Get Yandex Reviews from Yandex API or Mock Data file (./database/yandexResponse.json)
     * @param ReviewsFetchDTO $dto
     * @param Subject $subject
     * @throws ServerException
     * @return JsonResponse
     */
    public function getReviews(ReviewsFetchDTO $dto, Subject $subject): JsonResponse
    {
        $offset = ($dto->page - 1) * $dto->perPage;
        $json = [];

        if ($this->workOnMockData) {
            if (!file_exists($this->path)) {
                throw new ServerException('Ошибка запроса к Mock данным!');
            }

            $json = json_decode(file_get_contents($this->path), true);
            if (!$json || !isset($json['data'])) {
                throw new ServerException('Ошибка структуры Mock данных!');
            }

            $json = $json['data'];
            $allReviews = $json['reviews'];

            $total = count($allReviews);

            $reviews = array_slice(
                $allReviews,
                $offset,
                $dto->perPage
            );

            $json['reviews'] = $reviews;

            $json['params']['count'] = $total;
        }

        if (!$this->workOnMockData) {
            $response = Http::acceptJson()
                ->withToken($this->config['api_key'])
                ->get($this->config['api_url'], [
                    'business_id' => $dto->businessId,
                    'limit' => $dto->perPage,
                    'offset' => $offset,
                ]);

            if ($response->failed()) {
                throw new ServerException('Ошибка запроса к Yandex API!');
            }

            $json = $response->json();
        }

        $this->syncAspects($subject, $json['aspects']);

        $result = [
            'subject' => $subject,
            'aspects' => $json['aspects'],
            'reviews' => $json['reviews'],
        ];

        $paginator = new LengthAwarePaginator($result, $json['params']['count'], $dto->perPage, $dto->page);

        return $this->notice(200, 'Успешно!', $paginator);
    }

    /**
     * Sync Aspects with Subject Aspects
     * @param Subject $subject
     * @param array $aspects
     * @return void
     */
    protected function syncAspects(Subject $subject, array $aspects): void
    {
        $subject->aspects()->delete();

        foreach ($aspects as $aspect) {
            $subject->aspects()->create([
                'text' => $aspect['text'],
                'count' => $aspect['count'],
                'positive' => $aspect['positive'],
                'negative' => $aspect['negative'],
            ]);
        }
    }
}
