<?php

return [
    'user' => [
        'entities' => [
            'subjects' => ['store', 'destroy', 'getItems'],
        ],
        'access' => 'limited',
    ],
    'admin' => [
        'entities' => [],
        'access' => 'full',
    ],
];
