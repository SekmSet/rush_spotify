<?php
use App\Tools\Router;

require '../vendor/autoload.php';

session_start();
$uri = $_SERVER['REQUEST_URI'];

$router = new Router($uri);
$router->loadRoute();