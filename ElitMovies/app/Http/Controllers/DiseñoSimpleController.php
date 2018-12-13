<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\PeliculasController;

class DiseñoSimpleController extends Controller
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
    function __construct()
    {
        //Inicializamos un objeto de Peliculas Controller, ya que se utilizarán en muchas funciones de diseño
        $this->Peliculas = new PeliculasController();
    }
    public function index()
    {
        //Devolvemos la vista con todos los datos previos que le habremos de pasar a React, en este caso se pasan los datos del usuario actual y los datos de las peliculas y de su hoja de estilo
        $datos =  
        array(
            'Titulo'    => "Inicio",                        //Titulo de la página
            'Usuario'   => "User",                          //usuario
            'Populares' => $this->Peliculas->Populares(),   //Peliculas
            'Valoradas' => $this->Peliculas->Valoradas(),
            'Estilo'    => "Netflix",                       //Estilo
            'React'     => "BaseSimple",                    //base de React
        );
        //Creo que el estilo será más bien una constante por diseño, por tanto sería una variable de la clase en el constructor, ya se cambiará en un futuro
        //Vista con datos
        return view('inicio')->with('datos', $datos);
    }



    
    public function Ejemplo()
    {
        return view('inicio');
    }





    public function PeliculaId($Id)
    {
        //Devolvemos la vista con todos los datos previos que le habremos de pasar a React, en este caso se pasan los datos del usuario actual y los datos de las peliculas y de su hoja de estilo
        $datos =  
        array(
            'Titulo'    => "Inicio",                        //Titulo de la página
            'Usuario'   => "User",                          //usuario
            'IdPelicula'=> $Id,                             //Id de Pelicula
            'Pelicula'  => $this->Peliculas->PeliId($Id),   //La pelicula
            'Estilo'    => "Netflix",                       //Estilo
            'React'     => "BasePeli",                      //base de React
        );
        //Creo que el estilo será más bien una constante por diseño, por tanto sería una variable de la clase en el constructor, ya se cambiará en un futuro
        //Vista con datos
        return view('inicio')->with('datos', $datos);
    }




}



















