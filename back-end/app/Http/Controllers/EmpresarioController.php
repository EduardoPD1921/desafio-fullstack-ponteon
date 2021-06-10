<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Empresario;
use Exception;

class EmpresarioController extends Controller
{
    public function show() {
        try {
            $empresarios = Empresario::all();

            return response($empresarios, 200);
        } catch(Exception $e) {
            $errorResponse = [
                'message' => 'Cadastros não encontrados',
                'error-log' => $e->getMessage()
            ];

            return response($errorResponse, 404);
        }
    }
}
