<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'celular',
        'estado',
        'cidade',
        'pai_empresarial',
        'pai_empresarial_id'
    ];

    protected $guarded = [];

    // public function parent() {
    //     // return $this->hasOne(Empresario::class, 'pai_empresarial_id');
    //     return $this->hasMany(Empresario::class, 'id');
    // }

    public function children() {
        return $this->hasMany(Empresario::class, 'pai_empresarial_id')->with('children');
    }
}
