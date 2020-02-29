<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Tracks extends Model
{
    public function album(){
        return $this->hasOne(Albums::class, 'id', 'album_id');
    }
}