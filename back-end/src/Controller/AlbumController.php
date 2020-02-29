<?php


namespace App\Controller;


use App\Model\Artists;

class AlbumController extends BaseController
{
    public function list ()
    {
        $albums = Artists::all();
        echo $albums->toJson();
    }

    public function get($id)
    {
        $album = Artists::find($id);
        echo $album->toJson();
    }
}
