<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVentas2018Otras extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas_2018_otras', function (Blueprint $table) {
            $table->id();
            $table->integer('LINEA')->nullable();
            $table->string('PRODUCTO', 100)->nullable();
            $table->string('DESCRIPCIÓN')->nullable();
            $table->string('CLAVE',255)->nullable();
            $table->string('CLIENTE', 255)->nullable();
            $table->string('AGENTE',255)->nullable();
            $table->string('BODEGA',255)->nullable();
            $table->integer('SEMANA')->nullable();
            $table->string('PERIODO',255)->nullable();
            $table->string('MES',255)->nullable();
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
        Schema::dropIfExists('table_ventas_2018_otras');
    }
}
