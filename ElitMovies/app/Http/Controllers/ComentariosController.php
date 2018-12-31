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

    public function ListadoComentarios(Request $request) 
    //Listado de comentarios por Id de pelicula sin ser SubComentario de ninguno
    {


        $comentarios =  
        DB::table('Comentario')
            ->where('Pelicula_Id',          '=',$request->input('IdPelicula'))
            ->where('id_SubComentarioDe',   '=',0)
            ->orWhere('id_SubComentarioDe', '=',null)
            ->Paginate(15);
        return $comentarios;

    }


    public function ListadoSubComentarios(Request $request) 
    //Listado de comentarios por Id de Pelicula y de Comentario padre
    {
        $comentarios =  
        DB::table('Comentario')
            ->where('Pelicula_Id',          '=',$request->input('IdPelicula'))
            ->where('id_SubComentarioDe',   '=',$request->input('IdComentario'))
            ->Paginate(15);
        return $comentarios;
    }


    
}




































