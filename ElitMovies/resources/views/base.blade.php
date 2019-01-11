<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <link rel="shortcut icon" href="{{{ asset('images/logo.png') }}}">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
        <title>@yield('tituloPagina')</title>

        <!-- Fonts -->
        <link href="/css/app.css" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel = "stylesheet" type = "text/css" href="{{url('css/Base.css')}}">
        <!-- Styles -->
        @yield('EstiloPlus')

    </head>
    <body>
    <div id = "root" data = "{{json_encode($datos)}}"></div>
        <script src="/js/app.js"></script>
    </body>
</html>