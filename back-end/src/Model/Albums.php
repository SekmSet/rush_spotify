<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Albums extends Model
{
    protected $appends = [
        'release_year_date',
        'tracks_number',
    ];

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

    public function getReleaseYearDateAttribute(){
        return (int) date('Y', $this->release_date);
    }

    public function getTracksNumberAttribute(){
        return count($this->tracks);
    }
}