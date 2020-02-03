<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ===========================FAVICO ICON============================================= -->
    <link rel="shortcut icon" href="/media/logo.png" type="image/x-icon">
    <!-- =========================FAVICO ICO ENDS=========================================== -->

    <meta name="theme-color" content="#db3a3a">
    <meta name="keywords" 
    content="iPizza, Pizza, Pizza Application,Ishola Oluwatobi,">

    <meta name="description" 
    content="This is iPizza, A pizza ordering system created with laravel, react, tailwind et al. Developed with love by Ishola Oluwatobi.0 @ TobbyWeb, Co-Founder of CreativeDev's. Oluwatobi is a young innovative Full Stak Web developer.">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'iPizza') }}</title>

    <!-- Scripts -->
    <script src="{{ secure_asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    {{-- Font aWesome --}}
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">

        <main class="">
            @yield('content')
        </main>
    </div>
</body>
</html>
