<?php


namespace App\Controller;


use App\Model\Artists;

class ArtistsController extends BaseController
{
    public function list ()
    {
        $artists = Artists::with('albums')->get();
        echo $artists->toJson();
    }

    public function get($id)
    {
        $artists = Artists::with('albums')->find($id);

        echo $artists->toJson();
    }
}