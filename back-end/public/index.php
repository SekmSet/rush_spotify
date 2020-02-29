<?php

use App\Tools\Database;
use App\Tools\Router;

require '../vendor/autoload.php';

session_start();
$uri = $_SERVER['REQUEST_URI'];

new Database();
$router = new Router($uri);
$router->loadRoute();