<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    protected $table='news';
    protected $guarded=['id'];

    public function images()
    {
        return $this->hasMany('App\image');
    }

}
