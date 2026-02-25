<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $appends = [
        'yandex_business_id',
    ];

    protected $fillable = [
        'user_id',
        'url',
    ];

    public function aspects()
    {
        return $this->hasMany(Aspect::class, 'subject_id', 'id');
    }

    public function getYandexBusinessIdAttribute(): ?string
    {
        if (!$this->url) {
            return null;
        }

        $numbersOnly = preg_replace('/\D+/', '', $this->url);

        return $numbersOnly;
    }

    public function getOwnerEntity()
    {
        return 'user';
    }

    public function getOwnerID()
    {
        return $this->user_id;
    }
}
