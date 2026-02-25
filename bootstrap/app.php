<?php

use Illuminate\Foundation\Application;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        health: '/up',
        then: function () {
            Route::pattern('id', '[0-9]+');
        }
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->append(StartSession::class);
        $middleware->alias([
            'web.route.access' => \App\Http\Middleware\WebRouteAccessMiddleware::class,
            'api.route.access' => \App\Http\Middleware\ApiRouteAccessMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
