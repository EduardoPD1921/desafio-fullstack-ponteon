<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmpresarioController;

Route::group(['prefix' => 'empresario'], function() {
    Route::post('/register', [EmpresarioController::class, 'store']);
    Route::get('/show-all', [EmpresarioController::class, 'show']);
});

Route::post('/test', [EmpresarioController::class, 'destroy']);
