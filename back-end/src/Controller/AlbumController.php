<?php


namespace App\Controller;


use App\Model\Albums;

class AlbumController extends BaseController
{
    public function list ()
    {
        $albums = Albums::all();
        echo $albums->toJson();
    }

    public function get($id)
    {
        $album = Albums::find($id);
        echo $album->toJson();
    }
}
