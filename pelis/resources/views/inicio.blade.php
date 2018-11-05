@extends('base')
@section('tituloPagina') Inicio @endsection
@section('EstiloPlus') 
<link rel="stylesheet" type="text/css" href="{{url('css/'.$datos['Estilo'].'.css')}}">
@endsection
@section('DirectorioReact')
 {{$datos['React']}}
@endsection
