<?php


namespace App\Controller;


use App\Model\Artists;

class ArtistsController extends BaseController
{
    public function list ()
    {
        $artists = Artists::all();
        echo $artists->toJson();
    }

    public function get($id)
    {
        $artists = Artists::find($id);
        echo $artists->toJson();
    }
}