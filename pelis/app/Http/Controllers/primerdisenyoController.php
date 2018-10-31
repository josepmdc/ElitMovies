<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class primerdisenyoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('inicio');
    }
    public function Ejemplo()
    {
        return view('inicio');
    }
}
