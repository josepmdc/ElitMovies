<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



/*--------------------------------COMENTARIOS-------------------------*/
//Comentario por pelicula
Route::get('/Comentarios',							'ComentariosController@ListadoComentarios'); 
//Comentario por pelicula y comentario (para obtener los comentarios de comentarios)
Route::get('/SubComentarios',						'ComentariosController@ListadoSubComentarios'); 




/*--------------------------------USUARIO-----------------------------*/



/*--------------------------------PELICULAS---------------------------*/
Route::get('/pelicula/{Id}',		'PeliculasController@PeliId');			//Pelicula por Id
Route::get('/trailer	',			'PeliculasController@Trailer');			//Devuelve trailer de película
Route::get('/populares',			'PeliculasController@Populares');		//Nos devuelve populares
Route::get('/populares/{pagina}',	'PeliculasController@PopularesPagina');	//Especificamos numero pagina populares
Route::get('/valoradas',			'PeliculasController@Valoradas');		//Mejor valoradas
Route::get('/valoradas/{pagina}',	'PeliculasController@ValoradasPagina');	//Especificamos numero pagina valoradas






/*--------------------------------ACTORES-----------------------------*/
//Comentario por pelicula
Route::get('/pelicula/actores/{Id}',				'PeliculasController@GetActores'); 



// Aún no funciona el método del controlador así que lo dejo comentado
// Route::get('/guardarComentario', 'EditorController@create'); //Guardamos los comentarios

