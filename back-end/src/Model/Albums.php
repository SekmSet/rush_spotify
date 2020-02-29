<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Albums extends Model
{
    public function artist()
    {
        return $this->belongsTo(Artists::class, 'artist_id', 'id');
    }

    public function genres() {
        return $this->belongsToMany(Genres::class, 'genres_albums', 'album_id', 'genre_id');
    }

    public function tracks()
    {
        return $this->hasMany(Tracks::class, 'album_id', 'id');
    }
}