<?php


namespace App\Controller;


use App\Model\Tracks;

class TracksController extends BaseController
{
    public function list ()
    {
        $tracks = Tracks::with('album')->get();
        echo $tracks->toJson();
    }

    public function get($id)
    {
        $track = Tracks::with('album')->find($id);

        echo $track->toJson();
    }
}