<?php

use App\Http\Controllers\UsuarioController;
use Facade\FlareClient\Report;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/iniciarSesion', 'UsuarioController@showlogin')->name('login');

Route::get('/', function () {
    return view('login.login');
});


Route::get('/reportepdf', 'GeneradorReportesExcel@GenerarReportePDF');

Route::group(['prefix' => 'usuarios/acciones'], function () {
    Route::post('/registrar', 'UsuarioController@registrar');
    Route::post('/login', 'UsuarioController@login');
    Route::get('/logout', 'UsuarioController@logout');
});


try {
    Route::group(['middleware' => ['auth']], function () {

        /**
         * Gestión de Usuarios
         */
        Route::group(['prefix' => 'usuarios/acciones'], function () {
            Route::post('/agregar', 'UsuarioController@registrar');
            Route::get('/logout', 'UsuarioController@logout');
            Route::post('/update', 'UsuarioController@updateUser');
            Route::post('/updateDataUser', 'UsuarioController@updateDataUser');
            Route::post('/delete', 'UsuarioController@EliminarUser');
            Route::post('/active', 'UsuarioController@ActivarUser');
            Route::post('/consultar', 'UsuarioController@Consultar');
        });

        Route::get('/usuarios', 'UsuarioController@GetAll');
        Route::get('/usuariosInactivos', 'UsuarioController@GetAllInactivos');

        /**
         * Reportes
         */

         Route::group(['prefix' => 'direccion/reportes'], function () {
            Route::get('/top20', 'ReportesController@ObtenerTop20');
         });
        
        Route::get('/reportePeriodo', function () {
            return view('reportes.reportePeriodo');
        });
        Route::get('/reporteAnual', function () {
            return view('reportes.reporteAnual');
        });
        Route::get('/reporteAll', 'ReportesController@GetAll');
        Route::get('/reporteunidadgrafica', 'ReportesController@ReporteVentasUnidadGrafica');
        Route::get('/exportarExcel', 'GeneradorReportesExcel@ExportarExcel2');
        Route::get('/reporteSemanalDireccion', function () {
            return view('direccion.reporteSemanal');
        });
        Route::get('/reporteSemanal', function () {
            return view('reportes.reporteSemanal');
        });

        /**
         * Index
         */

        Route::get('/paginaPrincipal', function () {
            return view('paginaPrincipal.index');
        });
    });
} catch (Exception $ex) {
    return view('error.pagenotfound');
}
