<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/reg', [AuthController::class, 'regPage'])->name('reg.page');
Route::get('/login', [AuthController::class, 'loginPage'])->name('login.page');


Route::get('/admin/login', [AuthController::class, 'adminLoginPage'])->name('admin.login.page');
