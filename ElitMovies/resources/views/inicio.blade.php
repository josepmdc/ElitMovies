@extends('base')
@section('tituloPagina') {{$datos['Titulo']}} @endsection
@section('EstiloPlus')
<link rel = "stylesheet" type = "text/css" href="{{url('css/'.$datos['Estilo'].'.css')}}">
@endsection