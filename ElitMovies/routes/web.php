<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes(); //Rutas de login y registro

Route::get('/home',		 	'HomeController@index')->name('home');






//Controlador Simple
Route::get('/',				'DiseñoSimpleController@index');
Route::get('/pelicula/{id}','DiseñoSimpleController@PeliculaId');//Buscar peli por id
Route::get('/pelicula/{$Nombre}','DiseñoSimpleController@index');//Buscar peli por Nombre




//FACEBOOK
Route::get('/redirect', 'SocialAuthFacebookController@redirect');
Route::get('/callback', 'SocialAuthFacebookController@callback');


Route::get('/politica-privacidad', 'HomeController@privacidad');
Route::get('/editor', 'EditorController@index');








//Route::get('/', 'PrimeraPaginaController@index');
