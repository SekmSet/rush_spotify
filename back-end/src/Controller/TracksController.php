<?php


namespace App\Controller;


use App\Model\Tracks;

class TracksController extends BaseController
{
    public function list ()
    {
        $tracks = Tracks::with('album')->paginate(50);
        echo $tracks->toJson();
    }

    public function get($id)
    {
        $track = Tracks::with('album')->find($id);

        $this->checkErrorId($track);


        echo $track->toJson();
    }
}