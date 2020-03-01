<?php


namespace App\Controller;


use App\Model\Albums;

class AlbumController extends BaseController
{
    public function list ()
    {
        $albums = Albums::with('artist', 'genres', 'tracks')->paginate(50);
        echo $albums->toJson();
    }

    public function get($id)
    {
        $album = Albums::with('artist', 'genres', 'tracks')->find($id);

        $this->checkErrorId($album);

        echo $album->toJson();
    }
}
