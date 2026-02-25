<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/login', [AuthController::class, 'auth']);
Route::post('/reg', [AuthController::class, 'register']);
