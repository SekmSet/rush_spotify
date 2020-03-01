<?php


namespace App\Controller;
use App\Model\Albums;

class HomeController extends BaseController
{
    function index(){
        echo json_encode([
            'api_version' => 1
        ]);
    }

    function random(){
        $randomAlbums = Albums::all()->random(10);
        echo $randomAlbums->toJson();
    }

}