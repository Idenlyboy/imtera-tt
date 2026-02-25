<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;

Route::get('/reg', [AuthController::class, 'regPage'])->name('reg.page');
Route::get('/login', [AuthController::class, 'loginPage'])->name('login.page');

Route::get('/admin/login', [AuthController::class, 'adminLoginPage'])->name('admin.login.page');

Route::group(['middleware' => 'web.route.access'], function () {
    Route::get('/', [HomeController::class, 'homePage'])->name('home.page');
    Route::get('/settings', [HomeController::class, 'settingsPage'])->name('settings.page');
});
