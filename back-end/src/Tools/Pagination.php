<?php

namespace App\Tools;

//https://stackoverflow.com/questions/34179401/paginating-eloquent-4-2-models-outside-of-laravel
use Illuminate\Pagination\Paginator;

class Pagination {

    public function __construct()
    {
        $page = $_GET['page'] ?? 1;
        Paginator::currentPageResolver(function() use($page) { return $page; });
    }
}