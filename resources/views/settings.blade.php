@extends('layouts.app.user')

@section('title', 'Главная')

@section('sidebars')
    @include('components.sidebars.layout')
@endsection

@section('content')
    <div class="flex flex-col flex-1 min-h-screen bg-gray-50 dark:bg-gray-900">
        <subject-create></subject-create>
    </div>
@endsection
