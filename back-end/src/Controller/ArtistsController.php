<?php


namespace App\Controller;


use App\Model\Artists;

class ArtistsController extends BaseController
{
    public function list ()
    {
        $artists = Artists::with('albums')->paginate(50);
        echo $artists->toJson();
    }

    public function get($id)
    {
        $artists = Artists::with('albums')->find($id);

        $this->checkErrorId($artists);

        echo $artists->toJson();
    }
}