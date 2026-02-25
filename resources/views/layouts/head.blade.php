<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="author" content="t.me/idenlyboy">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <script async>
    window.sessionToken = "{{ session('token') }}";
  </script>

  <title>@yield('title')</title>

  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  @stack('styles')
</head>