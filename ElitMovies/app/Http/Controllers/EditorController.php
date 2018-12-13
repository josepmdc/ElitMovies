<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Comentario;

class EditorController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        //Devolvemos la vista con todos los datos previos que le habremos de pasar a React, en este caso se pasan los datos del usuario actual y los datos de las peliculas y de su hoja de estilo
        $datos =  
        array(
            'Estilo'    => "Estilo",                        //Estilo
            'React'     => "Editor",                        //base de React
        );
        //Creo que el estilo será más bien una constante por diseño, por tanto sería una variable de la clase en el constructor, ya se cambiará en un futuro
        //Vista con datos
        return view('editor')->with('datos', $datos);
    }

    /**
     * Crea un nuevo comentario
     * 
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) 
    {
        // Crear Comentario
        $comentario = new Comentario();
        $comentario->title = $request->titulo;
        $comentario->body = $request->contenido;
        $comentario->user_id = auth()->user()->id;
        $comentario->save();
    }
}