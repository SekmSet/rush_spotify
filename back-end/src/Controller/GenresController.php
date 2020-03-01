<?php


namespace App\Controller;


use App\Model\Genres;

class GenresController extends BaseController
{
    public function list ()
    {
        $genres = Genres::with('albums')->paginate(50);
        echo $genres->toJson();
    }

    public function get($id)
    {
        $genre = Genres::with('albums')->find($id);

        $this->checkErrorId($genre);

        echo $genre->toJson();
    }
}