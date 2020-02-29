<?php

namespace App\Tools;

use PDO;
use PDOException;

class Database
{
    private $user = 'root';
    private $pwd = 'Obrigada';
    private $dsn = 'mysql:dbname=my_meetic;host=localhost';

    private $connexion_sql;

    public function connect_to_sql() {
        try {
            $this->connexion_sql = new PDO($this->dsn, $this->user, $this->pwd);
            return $this->connexion_sql;
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
            die();
        }
    }
}