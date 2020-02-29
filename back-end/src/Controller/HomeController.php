<?php


namespace App\Controller;


class HomeController extends BaseController
{
    function index(){
        echo json_encode([
            'api_version' => 1
        ]);
    }

}