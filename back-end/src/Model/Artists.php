<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;

class Artists extends Model
{
    public function albums()
    {
        return $this->hasMany(Albums::class, 'artist_id', 'id'); // leftjoin
    }
}