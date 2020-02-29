<?php


namespace App\Controller;


use App\Model\Albums;

class AlbumController extends BaseController
{
    public function list ()
    {
        $albums = Albums::with('artist', 'genres', 'tracks')->get();
        echo $albums->toJson();
    }

    public function get($id)
    {
        $album = Albums::with('artist', 'genres', 'tracks')->find($id);
        echo $album->toJson();
    }
}
