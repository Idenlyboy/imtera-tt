<?php

return [
    'user' => [
        'routes' => [
            '/example/',
            '/example/{uuid}/',
        ],
        'access' => 'limited',
    ],
    'admin' => [
        'routes' => [],
        'access' => 'full',
    ],
];
