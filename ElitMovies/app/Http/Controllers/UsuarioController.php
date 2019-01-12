<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class UsuarioController extends Controller
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
       $this->retorno = array(
        'exito' => false, 
        'user'  => null,

        );
    }


    public function index() 
    {   
       if($this->EstaConectado())
       {

        $this->retorno['user'] =  Auth::user();

       } 

       return json_encode($this->retorno);
    }

    public function EstaConectado()
    {

        if(Auth::check())
        {
            $this->retorno['exito'] = true;
            return true; 
        }       
    }
    public function logout () {
    //logout user
    auth()->logout();
    // redirect to homepage
    return redirect('/');
    }
}
