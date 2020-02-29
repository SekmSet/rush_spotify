<?php

namespace App\Tools;

use App\Controller\HomeController;
use App\Controller\ArtistsController;

class Router
{

    private $uri;

    /**
     * Router constructor.
     * @param string $uri
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
                $controller = new HomeController();
                $controller->index();
                break;

            case '/artists':
                $controller = new ArtistsController();
                $id = $_GET['id'] ?? null;
                if ($id){
                    $controller->get($id);
                }else{
                    $controller->list();
                }
                break;

            default:
                echo 'ERROR 404 - Page introuvable';
        }
    }

}