<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use GuzzleHttp\Client;//Necesario para solicitudes
class ComentariosController extends Controller
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
    function __construct() //Inicializamos variables de URL's de apis externas
    {
        
    }


    public function index() 
    {
        
    }

    public function ListadoComentarios(Request $request) //Listado de comentarios
    {
        return $request->input('body');
    }


    
}




































