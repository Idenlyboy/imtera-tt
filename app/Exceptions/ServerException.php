<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class ServerException extends Exception
{
    protected $details;
    protected $internalCode;

    public function __construct(
        string $message = "Internal Server Error",
        array $details = [],
        string $internalCode = null,
        Exception $previous = null
    ) {
        parent::__construct($message, 500, $previous);

        $this->details = $details;
        $this->internalCode = $internalCode;
    }

    public function getDetails(): array
    {
        return $this->details;
    }

    public function getInternalCode(): ?string
    {
        return $this->internalCode;
    }

    /**
     * Render the exception into an HTTP response.
     */
    public function render(): Response
    {
        $response = [
            'message' => $this->getMessage(),
            'type' => 'ServerException'
        ];

        return response($response, 500);
    }

    /**
     * Report the exception.
     */
    public function report(): void
    {
        \Log::error('ServerException: ' . $this->getMessage(), [
            'details' => $this->details,
            'internal_code' => $this->internalCode,
            'file' => $this->getFile(),
            'line' => $this->getLine(),
            'trace' => $this->getTraceAsString()
        ]);
    }
}
