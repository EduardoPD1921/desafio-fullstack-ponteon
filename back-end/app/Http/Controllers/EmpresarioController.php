<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Empresario;
use Exception;

class EmpresarioController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|string',
            'celular' => 'required|string|min:11|max:11|unique:empresarios',
            'estado' => 'required|string|min:2|max:2',
            'cidade' => 'required|string',
            'pai_empresarial' => 'string|nullable',
            'pai_empresarial_id' => 'nullable'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();

            return response($errors, 400);
        }

        $empresario = new Empresario;
        $empresario->create($request->all());

        return response('empresario-created', 201);
    }

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

    public function getEmpresarioById(Request $request) {
        try {
            $empresario = Empresario::findOrFail($request->id);

            return response($empresario, 200);
        } catch(Exception $e) {
            $errorResponse = [
                'message' => 'Usuário não encontrado',
                'error-log' => $e->getMessage()
            ];

            return response($errorResponse, 404);
        }
    }

    // public function destroy(Request $request) {
    //     $empresario = Empresario::findOrFail($request->id);

    //     $empresario->destroy($empresario->id);

    //     return 'boa';
    // }
}
