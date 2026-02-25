<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\YandexReviewController;

Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/login', [AuthController::class, 'auth']);
Route::post('/reg', [AuthController::class, 'register']);

Route::group(['middleware' => 'api.route.access'], function () {
    Route::post('/subject/get-items/', [YandexReviewController::class, 'getItems']);
    Route::post('/subject/', [SubjectController::class, 'store']);
});
