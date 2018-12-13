@extends('base')
@section('tituloPagina') Editor @endsection
@section('EstiloPlus')
<link rel = "stylesheet" type = "text/css" href="{{url('css/'.$datos['Estilo'].'.css')}}">
@endsection