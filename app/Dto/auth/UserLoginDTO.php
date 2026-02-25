<?php
namespace App\Dto\User;

use App\Http\Requests\UserLoginRequest;

class UserLoginDTO
{
    public readonly string $email;
    public readonly string $password;
    public readonly string $role;

    public function __construct($data)
    {
        $this->email = $data['email'] ?? null;
        $this->password = $data['password'] ?? null;
        $this->role = $data['role'] ?? null;
    }

    /**
     * Create DTO from UserRegRequest
     * @param UserLoginRequest $request
     * @return self
     */
    public static function fromRequest(UserLoginRequest $request): self
    {
        $data = $request->validated();
        return new self($data);
    }

    /**
     * Returns DTO in array
     * @return array{email: string, password: string, role: string}
     */
    public function toArray(): array
    {
        return array_filter([
            'email' => $this->email,
            'password' => $this->password,
            'role' => $this->role,
        ], function ($value) {
            return $value !== null;
        });
    }
}
