<?php

namespace App\Tools;

use App\Controller\Home;
use App\Controller\Search;
use App\Controller\User;

class Router
{

    private $uri;

    /**
     * Router constructor.
     */
    public function __construct(string $uri)
    {
        $this->uri = $uri;
    }

    public function loadRoute()
    {
        $array_uri = explode('?', $this->uri);
        $uri2 = $array_uri[0];

        switch($uri2) {
            case '/' :
                $controller = new Home();
                $controller->index();
                break;

            default:
                echo 'ERROR 404 - Page introuvable';
        }
    }

}