<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;

class Artists extends Model
{
    /**
     * The attributes that are mass assignable.
     * do not change var name "fillable" because it's a rule for eloquent
     *
     * @var array
     */

    protected $fillable = [
        'artist_id',
        'name',
        'description',
        'cover',
        'cover_small',
        'release_date',
        'popularity'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

}