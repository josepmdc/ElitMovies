<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use GuzzleHttp\Client;//Necesario para solicitudes
class PeliculasController extends Controller
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
        $this->urlPopulares = "https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=es&sort_by=popularity.desc";
        $this->urlValoradas = "https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=es&sort_by=vote_average.desc&include_adult=false&include_video=true&vote_count.gte=9000";
    }


    public function index() //De forma predeterminada al controlador devolvemos los populares
    {
        return $this->Populares();  
    }


    public function Populares() //De forma descendiente los titulos Populares
    {   
        $datos = $this->DameDatos($this->urlPopulares,"");
        return $datos;
    }
    public function Valoradas()
    {
         $datos = $this->DameDatos($this->urlValoradas,"");
        return $datos;
    }


    public function DameDatos($url,$datos1) //Para optimizar codigo, le pasamos url a api externa
    {
        $client = new Client();
        $res = $client->request('POST', $url);
        if ($res->getStatusCode() == 200)
        {
            return (array) json_decode($res->getBody());
            
        } else {
            return 0;
        }
    }
    public function PopularesPagina($pagina)

    {
        $datos = $this->DameDatos($this->urlPopulares."&page=".$pagina,"");
        return $datos;
    }
    public function ValoradasPagina($pagina)

    {
        $datos = $this->DameDatos($this->urlValoradas."&page=".$pagina,"");
        return $datos;
    }

    
    public function GetPoster($path) //Devuelve la URL del poster de la peli a pertir del valor path de la api
    {
        $base = "https://image.tmdb.org/t/p/w185";
        return $base.$path;
    }


    public function GetFondoPeli($path) //Devuelve el URL del FONDO de la pelicula a partir del valor path de la api
    {
        $base ="https://image.tmdb.org/t/p/w185";
        return $base.$path;
    }
    
}