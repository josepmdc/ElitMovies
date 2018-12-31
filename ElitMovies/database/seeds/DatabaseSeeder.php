<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       
        for ($i=0; $i < 200 ; $i++) { 
            # code...
            DB::table('Comentario')->insert([

                'Titulo'                => str_random(10),
                'id_SubComentarioDe'    => 0,
                'contenido'             => 'Mi comentario es'.str_random(10),
                'user_id'               => random_int ( 1 , 200 ),
                'Pelicula_Id'           => random_int ( 155 , 190 ),
                
        ]);
        }

         for ($i=0; $i < 200 ; $i++) { 
            # code...
            DB::table('users')->insert([

                'name'          => str_random(10),
                'email'         =>  str_random(10).'@gmail.com',
                'password' => bcrypt('secret'),
                
        ]);
         
        }
    }
}
