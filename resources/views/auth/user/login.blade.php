@extends('layouts.guest')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-gray-100">

        <form method="POST" class="bg-white p-8 rounded-2xl shadow w-96">
            @csrf

            <h1 class="text-2xl font-bold mb-6 text-center">Вход</h1>

            <input name="role" type="text" value="user" class="hidden">

            <input name="email" placeholder="почта" class="w-full mb-4 border rounded-lg px-3 py-2">

            <input type="password" name="password" placeholder="пароль" class="w-full mb-6 border rounded-lg px-3 py-2">

            <button class="btn bg-blue-600 text-white w-full">
                Войти
            </button>

            <a href="/reg" class="block text-center mt-4 text-sm text-blue-500">
                Создать аккаунт
            </a>

        </form>
    </div>
@endsection
