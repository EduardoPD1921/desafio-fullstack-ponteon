<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmpresarioController;

Route::get('/empresarios', [EmpresarioController::class, 'show']);
