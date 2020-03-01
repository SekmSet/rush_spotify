<?php
/**
 * https://medium.com/@kshitij206/use-eloquent-without-laravel-7e1c73d79977
 */
namespace App\Tools;

use Illuminate\Database\Capsule\Manager;


class Database
{
    public function __construct() {
        $eloquentManager = new Manager;
        $eloquentManager->addConnection([
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'spotify',
            'username' => 'root',
            'password' => 'root'
        ]);
        $eloquentManager->setAsGlobal();
        $eloquentManager->bootEloquent();
    }
}