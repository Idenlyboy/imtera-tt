<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aspect extends Model
{
    protected $fillable = [
        'subject_id',
        'text',
        'text',
        'count',
        'positive',
        'negative',
    ];
}
