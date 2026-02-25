@php
    $baseClasses = 'btn w-full text-left py-2 px-4 rounded-lg transition';
    $inactive =
        'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600';
    $active = 'bg-blue-600 text-white hover:bg-blue-700';
@endphp

<aside class="w-64 bg-white dark:bg-gray-800 shadow-md min-h-screen p-4 flex flex-col">
    <h2 class="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">Меню</h2>

    <nav class="flex flex-col gap-2">
        <a href="{{ route('home.page') }}"
            class="{{ request()->routeIs('home.page') ? $active : $inactive }} {{ $baseClasses }}">
            Отзывы по объектам
        </a>

        <a href="{{ route('settings.page') }}"
            class="{{ request()->routeIs('settings.page') ? $active : $inactive }} {{ $baseClasses }}">
            Настройки
        </a>
    </nav>
</aside>
