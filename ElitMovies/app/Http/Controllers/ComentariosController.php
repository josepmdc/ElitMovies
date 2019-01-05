<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;//Necesario para solicitudes
use DB; 
use App;


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

    //Listado de comentarios por Id de pelicula sin ser SubComentario de ninguno
    public function ListadoComentarios(Request $request) 
    {
        $comentarios =  
        DB::table('Comentario')
            ->where('Pelicula_Id',          '=',$request->input('IdPelicula'))
            ->where('id_SubComentarioDe',   '=',0)
            ->orWhere('id_SubComentarioDe', '=',null)
            ->Paginate(15);

        // Convertimos el JSON a array para poder añadir los subcomentarios
        $comentariosArray = json_decode($comentarios->toJson(), true);
        $data = $comentariosArray['data'];

        // Por cada comentario busca los subcomentarios y los añade al array
        foreach ($data as &$comentario) {
            $comentario['subComentarios'] =  $this->ListadoSubComentarios($comentario);
        }

        $comentariosArray['data'] = $data;
        
        // Devuelve el array codificado a JSON otra vez
        return json_encode($comentariosArray);
    }


    //Listado de comentarios por Id de Pelicula y de Comentario padre
    public function ListadoSubComentarios($comentario) 
    {
        $comentarios =  
        DB::table('Comentario')
            ->where('Pelicula_Id',          '=',$comentario['Pelicula_Id'])
            ->where('id_SubComentarioDe',   '=',$comentario['id'])
            ->get();
        
        return json_decode($comentarios);
    }
    
}
