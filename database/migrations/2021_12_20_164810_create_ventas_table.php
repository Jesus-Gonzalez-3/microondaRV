<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->integer('clave_bodega');
            $table->string('desc_bodega');
            $table->string('folio_documento');
            $table->string('documento');
            $table->integer('linea');
            $table->string('clave_producto');
            $table->string('desc_producto');
            $table->integer('clave_agente');
            $table->string('nombre_agente');
            $table->integer('cantidad_unidades');
            $table->double('paridad')->nullable();
            $table->double('precio_pesos');
            $table->string('clave_cliente');
            $table->string('nombre_cliente');
            $table->string('clave_zona');
            $table->string('desc_zona');
            $table->string('fecha_documento');
            $table->string('mes');
            $table->string('semana');
            $table->string('periodo');
            $table->string('orden_cliente')->nullable();
            $table->string('maquilador')->nullable();
            $table->string('dir_maqulador')->nullable();
            $table->string('fecha_alta_cliente');
            $table->integer('clave_gerente_x_cliente');
            $table->string('gerente_x_cliente');
            $table->string('comercializadora');
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
        Schema::dropIfExists('ventas');
    }
}
