<?php

return [
    'user' => [
        'routes' => [
            '/',
            '/settings/',
        ],
        'access' => 'limited',
    ],
    'admin' => [
        'routes' => [],
        'access' => 'full',
    ],
];
