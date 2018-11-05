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



//Route::get('/inicio', 'primerdisenyoController');




//Rutas necesarias para login de usuarios, uso de AUTH
//Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/', 'primerdisenyoController@index');

Route::get('/ejemplo', 'primerdisenyoController@index');



/*
Route::group(array('domain' => '/patata'), function() {
   
   Route::get('/ejemplo', function () {
    return view('welcome');
});
});

  */
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
