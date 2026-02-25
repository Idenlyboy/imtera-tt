<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];

    public function subjects()
    {
        return $this->hasMany(Subject::class, 'user_id', 'id');
    }
}
