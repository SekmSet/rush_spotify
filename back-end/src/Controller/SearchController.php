<?php


namespace App\Controller;

use App\Model\Tracks;

class SearchController extends BaseController
{
    function search_elements() {
        $name = $_GET['name']?? null;
        $album = $_GET['album']?? null;
        $artist = $_GET['artist']?? null;
        $genre = $_GET['genre']?? null;

        $results = Tracks::query();

        if($name){
            $results = $results->where('name','like', "%$name%");
        }

        if($album){
            $results = $results->whereHas('album', function ($query) use ($album) {
                $query->where('name', 'like', "%$album%");
            });
        }

        if($artist){
            $results = $results->whereHas('album.artist', function ($query) use ($artist) {
                $query->where('name', 'like', "%$artist%");
            });
        }

        if($genre){
            $results = $results->whereHas('album.genres', function ($query) use ($genre) {
                $query->where('name', 'like', "%$genre%");
            });
        }
        
        echo $results->paginate(50)->toJson();
    }
}