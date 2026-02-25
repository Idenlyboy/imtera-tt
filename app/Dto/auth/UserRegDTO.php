<?php
namespace App\Dto\User;

use App\Http\Requests\UserRegRequest;

class UserRegDTO
{
    public readonly string $name;
    public readonly string $password;
    public readonly string $email;

    public function __construct($data)
    {
        $this->name        = $data['name'] ?? null;
        $this->password    = $data['password'] ?? null;
        $this->email       = $data['email'] ?? null;
    }

    /**
     * Create DTO from UserRegRequest
     * @param UserRegRequest $request
     * @return self
     */
    public static function fromRequest(UserRegRequest $request): self
    {
        $data = $request->validated();
        return new self($data);
    }

    /**
     * Returns DTO in array
     * @return array{email: string, name: string, password: string}
     */
    public function toArray(): array
    {
        return array_filter([
            'name'        => $this->name,
            'password'    => $this->password,
            'email'       => $this->email,
        ], function ($value) {
            return $value !== null;
        });
    }
}
