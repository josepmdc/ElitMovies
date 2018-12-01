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

//Controlador de pagina 1
Route::get('/populares',	'Pagina1Controller@index');
Route::get('/',				'Pagina1Controller@index');

//Controlador Simple
Route::get('/simple',		'DiseñoSimpleController@index');


//FACEBOOK
Route::get('/redirect', 'SocialAuthFacebookController@redirect');
Route::get('/callback', 'SocialAuthFacebookController@callback');


Route::get('/politica-privacidad', 'HomeController@privacidad');










//Route::get('/', 'PrimeraPaginaController@index');
