@extends('layouts.app.user')

@section('title', 'Главная')

@section('sidebars')
    @include('components.sidebars.layout')
@endsection

@section('content')
    <div class="flex flex-col flex-1 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 p-6">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Отзывы по объектам</h2>
            <subject-tabs :subjects='@json($subjects)'></subject-tabs>
        </div>
    </div>
@endsection
