<?php


namespace App\Command;


use App\Tools\Database;
use PDO;

class BaseModel
{
    /**
     * @var PDO
     */
    protected $db;

    /**
     * BaseController constructor.
     */
    public function __construct()
    {
        $database = new Database();
        $this->db = $database->connect_to_sql();
    }
}