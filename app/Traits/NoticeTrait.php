<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait NoticeTrait
{
    /**
     * Return json response with message, code and data (optional)
     * @param mixed $code
     * @param mixed $message
     * @param mixed $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function notice($code, $message, $data = []): JsonResponse
    {
        return response()->json([
            'message' => $message,
            'data' => $data
        ], $code);
    }
}
