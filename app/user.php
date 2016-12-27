<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    protected $table='users';
    protected $guarded=['id'];
    protected $hidden=['password'];
}
