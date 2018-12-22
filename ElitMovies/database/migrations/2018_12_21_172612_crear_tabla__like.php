<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaLike extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Like_Commentario', function (Blueprint $table) {
            $table->integer('IdUsuario')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('IdComentario')
                ->references('id')
                ->on('Comentario')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->boolean('Like')->nullable();
            $table->timestamps();

            
                
           
                
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Like_Commentario');
    }
}
