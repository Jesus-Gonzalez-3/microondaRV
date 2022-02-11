<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVentas2017Otras extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_ventas_2017_otras', function (Blueprint $table) {
            $table->id();
            $table->integer('LINEA')->nullable();
            $table->string('PRODUCTO', 100)->nullable();
            $table->string('DESCRIPCIÓN')->nullable();
            $table->integer('CLAVE')->nullable();
            $table->string('CLIENTE', 255)->nullable();
            $table->string('AGENTE')->nullable();
            $table->integer('BODEGA')->nullable();
            $table->integer('SEMANA')->nullable();
            $table->integer('PERIODO')->nullable();
            $table->integer('MES')->nullable();
            $table->integer('DIA')->nullable();
            $table->integer('ORDEN')->nullable();
            $table->integer('FACTURA')->nullable();
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
        Schema::dropIfExists('table_ventas_2017_otras');
    }
}
