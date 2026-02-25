<?php

return [
    'user' => [
        'entities' => [
            'subjects' => ['store'],
            'yandexreviews' => ['getItems'],
        ],
        'access' => 'limited',
    ],
    'admin' => [
        'entities' => [],
        'access' => 'full',
    ],
];
