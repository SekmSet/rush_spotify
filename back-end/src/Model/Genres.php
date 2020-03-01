<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Genres extends Model
{
    public function albums() {
        return $this->belongsToMany(Albums::class, 'genres_albums', 'genre_id', 'album_id');
    }
}