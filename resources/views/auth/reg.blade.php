@extends('layouts.guest')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-gray-100">

        <form method="POST" class="bg-white p-8 rounded-2xl shadow w-96">
            @csrf

            <h1 class="text-2xl font-bold mb-6 text-center">Регистрация</h1>

            <input name="name" placeholder="Имя" class="w-full mb-4 border rounded-lg px-3 py-2">

            <input name="email" placeholder="Почта" class="w-full mb-4 border rounded-lg px-3 py-2">

            <input type="password" name="password" placeholder="Пароль" class="w-full mb-4 border rounded-lg px-3 py-2">

            <input type="password" name="password_confirmation" placeholder="Подтверждение пароля"
                class="w-full mb-6 border rounded-lg px-3 py-2">

            <button class="btn bg-green-600 text-white w-full">
                Зарегистрироваться
            </button>

        </form>
    </div>
@endsection
