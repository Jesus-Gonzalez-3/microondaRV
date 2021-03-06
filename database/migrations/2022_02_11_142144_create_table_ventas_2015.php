<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVentas2015 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas_2015', function (Blueprint $table) {
            $table->id();
            $table->integer('LINEA');
            $table->string('PRODUCTO', 100)->nullable();
            $table->string('DESCRIPCIÓN')->nullable();
            $table->string('CLAVE',255)->nullable();
            $table->string('CLIENTE', 255)->nullable();
            $table->string('AGENTE')->nullable();
            $table->integer('BODEGA')->nullable();
            $table->integer('SEMANA')->nullable();
            $table->integer('PERIODO')->nullable();
            $table->integer('MES')->nullable();
            $table->string('DIA',255)->nullable();
            $table->string('ORDEN',255)->nullable();
            $table->string('FACTURA',255)->nullable();
            $table->integer('UNIDADES')->nullable();
            $table->double('IMPORTE')->nullable();
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
        Schema::dropIfExists('table_ventas_2015');
    }
}
