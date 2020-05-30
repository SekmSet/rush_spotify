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
        $config = [
            'driver' => 'mysql',
            'host' => $_ENV['DB_HOST'],
            'database' => $_ENV['DB_NAME'],
            'username' => $_ENV['DB_USERNAME'],
            'password' => $_ENV['DB_PWD'],
        ];

        // for google cloud
        if ($_ENV['DB_SOCKET']) {
            $config['unix_socket'] = $_ENV['DB_SOCKET'];
        }
        $eloquentManager->addConnection($config);
        $eloquentManager->setAsGlobal();
        $eloquentManager->bootEloquent();
    }
}