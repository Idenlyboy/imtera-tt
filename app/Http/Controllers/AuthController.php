<?php

namespace App\Http\Controllers;

use App\Dto\User\UserLoginDTO;
use App\Dto\User\UserRegDTO;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\View\View;
use App\Http\Requests\UserRegRequest;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\UserLoginRequest;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    /**
     * User registration Page
     * @return View
     */
    public function regPage(): View
    {
        return view('auth.reg');
    }

    /**
     * Login Page
     * @return View|RedirectResponse
     */
    public function loginPage(): RedirectResponse|View
    {
        if (Session::get('token', false)) {
            return redirect(route('home.page'));
        }

        return view('auth.user.login');
    }

    /**
     * Login admin page
     * @return View|RedirectResponse
     */
    public function adminLoginPage(): RedirectResponse|View
    {
        if (Session::get('token', false)) {
            return redirect(route('home.page'));
        }

        return view('auth.admin.login');
    }

    /**
     * User register
     * @param UserRegRequest $request
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function register(UserRegRequest $request, AuthService $authService): JsonResponse
    {
        $userRegDTO = UserRegDTO::fromRequest($request);

        return $authService->register($userRegDTO);
    }

    /**
     * Authenticate user
     * @param UserLoginRequest $request
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function auth(UserLoginRequest $request, AuthService $authService): JsonResponse
    {
        $userLoginDTO = UserLoginDTO::fromRequest($request);

        return $authService->login($userLoginDTO);
    }

    /**
     * Logout user
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function logout(AuthService $authService): JsonResponse
    {
        return $authService->logout();
    }
}
