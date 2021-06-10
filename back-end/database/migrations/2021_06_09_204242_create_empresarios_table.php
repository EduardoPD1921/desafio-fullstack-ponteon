<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresarios', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('celular', 11);
            $table->char('estado', 2);
            $table->string('cidade');
            $table->string('pai_empresarial')->nullable();
            $table->foreignId('pai_empresarial_id')->nullable()->constrained('empresarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresarios');
    }
}
