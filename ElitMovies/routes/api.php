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


Route::get('/populares',			'PeliculasController@Populares');		//Nos devuelve populares
Route::get('/populares/{pagina}',	'PeliculasController@PopularesPagina');	//Especificamos numero pagina populares
Route::get('/valoradas',			'PeliculasController@Valoradas');		//Mejor valoradas
Route::get('/valoradas/{pagina}',	'PeliculasController@ValoradasPagina');	//Especificamos numero pagina valoradas

