<?php


namespace App\Controller;


use App\Model\Genres;

class GenresController extends BaseController
{
    public function list ()
    {
        $genres = Genres::with('albums')->get();
        echo $genres->toJson();
    }

    public function get($id)
    {
        $genre = Genres::with('albums')->find($id);

        echo $genre->toJson();
    }
}