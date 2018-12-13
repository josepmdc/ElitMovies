<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    // Table Name
    protected $table = 'com';
    // Primary Key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;
}