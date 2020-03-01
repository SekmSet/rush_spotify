<?php

use App\Tools\Database;
use App\Tools\Pagination;
use App\Tools\Router;

require '../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');

$uri = $_SERVER['REQUEST_URI'];

new Database();
new Pagination();
$router = new Router($uri);
$router->loadRoute();