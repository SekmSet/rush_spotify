<?php

namespace App\Tools;

use App\Controller\AlbumController;
use App\Controller\GenresController;
use App\Controller\HomeController;
use App\Controller\ArtistsController;
use App\Controller\SearchController;
use App\Controller\TracksController;

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

            case '/albums/random' :
                $controller = new HomeController();
                $controller->random();
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

            case '/albums':
                $controller = new AlbumController();
                $id = $_GET['id'] ?? null;

                if ($id){
                    $controller->get($id);
                }else{
                    $controller->list();
                }
                break;

            case '/tracks':
                $controller = new TracksController();
                $id = $_GET['id'] ?? null;

                if ($id){
                    $controller->get($id);
                }else{
                    $controller->list();
                }
                break;

            case '/genres':
                $controller = new GenresController();
                $id = $_GET['id'] ?? null;

                if ($id){
                    $controller->get($id);
                }else{
                    $controller->list();
                }
                break;

            case '/search':
                $controller = new SearchController();
                $controller->search_elements();
                break;

            default:
                echo 'ERROR 404 - Page introuvable';
        }
    }

}