<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function pizzas()
    {
    	return $this->hasMany(Pizza::class);
    }
}
