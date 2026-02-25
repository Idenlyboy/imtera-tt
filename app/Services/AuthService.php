<?php
namespace App\Services;

use App\Http\Resources\AuthResource;
use Exception;
use App\Models\User;
use App\Models\Token;
use App\Traits\NoticeTrait;
use Illuminate\Support\Str;
use App\Dto\User\UserRegDTO;
use App\Dto\User\UserLoginDTO;
use Illuminate\Http\JsonResponse;
use App\Exceptions\ServerException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthService
{
    use NoticeTrait;

    /**
     * Login user
     * @param UserLoginDTO $dto
     * @return JsonResponse
     */
    public function login(UserLoginDTO $dto): JsonResponse
    {
        try {
            $user = User::where('email', $dto->email)
                ->where('role', $dto->role)
                ->where('status', 'active')
                ->first();

            if (!$user) {
                return $this->notice(422, 'Неверный логин или пароль!');
            }

            if (!Hash::check($dto->password, $user->password)) {
                return $this->notice(422, 'Неверный логин или пароль!');
            }

            $token = $this->createToken($user->id);

            Session::put('token', $token->value);
            Session::put('user_id', $user->id);
            Session::put('role', $dto->role);

            $auth = new AuthResource([
                'user_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'token' => $token->value,
                'role' => $dto->role,
            ]);

            return $this->notice(200, 'Успешно!', $auth);
        } catch (Exception $e) {
            $exception = new ServerException('Произошла ошибка при авторизации!', ['message' => $e->getMessage()], $e->getCode());

            $exception->report();
            throw $exception;
        }
    }

    /**
     * Create token model for user login
     * @param mixed $userID
     * @return Token
     */
    public function createToken($userID): Token
    {
        try {
            $token = Token::where('user_id', $userID)
                ->first();

            if (!$token) {
                $token = Token::create([
                    'value' => Str::random(60),
                    'user_id' => $userID,
                ]);
            } else {
                $token->value = Str::random(60);
                $token->save();
            }

            return $token;
        } catch (Exception $e) {
            $exception = new ServerException('Произошла ошибка при создании токена!', ['message' => $e->getMessage()], $e->getCode());

            $exception->report();
            throw $exception;
        }
    }

    /**
     * Register user
     * @param UserRegDTO $userRegDTO
     * @return JsonResponse
     */
    public function register(UserRegDTO $dto): JsonResponse
    {
        try {
            $data = $dto->toArray();
            $data['status'] = 'active';
            $data['role'] = 'user';

            $user = User::create($data);
            $token = $this->createToken($user->id);

            Session::put('token', $token->value);
            Session::put('user_id', $user->id);
            Session::put('role', 'user');

            $auth = new AuthResource([
                'user_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'token' => $token->value,
                'role' => 'user',
            ]);

            return $this->notice(200, 'Успешно!', $auth);
        } catch (Exception $e) {
            $exception = new ServerException('Произошла ошибка при регистрации!', ['message' => $e->getMessage()], $e->getCode());

            $exception->report();
            throw $exception;
        }
    }

    /**
     * Logout user
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        try {
            $sessionToken = Session::get('token', null);

            Session::forget('token');
            Session::forget('user_id');
            Session::forget('role');

            if (is_null($sessionToken)) {
                return $this->notice(200, 'Успешно!');
            }

            $auth = Token::where('value', $sessionToken)->first();

            if (is_null($auth)) {
                return $this->notice(200, 'Успешно!');
            }

            $auth->delete();

            return $this->notice(200, 'Успешно!');
        } catch (Exception $e) {
            $exception = new ServerException('Произошла ошибка при выходе!', ['message' => $e->getMessage()], $e->getCode());

            $exception->report();
            throw $exception;
        }
    }
}
