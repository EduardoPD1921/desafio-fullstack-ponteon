<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresario extends Model
{
    use HasFactory;

    public function empresario() {
        $this->hasOne(Empresario::class, 'pai_empresarial_id');
    }
}
