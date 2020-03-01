<?php

namespace App\Controller;

class BaseController
{
    /**
     * @param $list
     */
    protected function checkErrorId($list)
    {
        if ($list === null) {
            echo json_encode([
                'error' => 'no valid id'
            ]);
            die;
        }
    }
}