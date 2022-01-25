<?php

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



Route::group(['prefix' => 'usuarios/acciones'], function () {
    Route::post('/agregar', 'UsuarioController@registrar');
    Route::post('/login', 'UsuarioController@login');
    Route::post('/update', 'UsuarioController@updateUser');
    Route::get('/logout', 'UsuarioController@logout');
});

Route::get('/reportepdf', 'GeneradorReportesExcel@GenerarReportePDF');
try {
    Route::group(['middleware' => ['auth']], function () {

        Route::get('/reporteSemanal', function () {
            return view('reportes.reporteSemanal');
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

        Route::get('/paginaPrincipal', function () {
            return view('paginaPrincipal.index');
        });

        Route::get('/usuarios', function(){
            return view('users/users');
        });


        
    });
} catch (Exception $ex) {
    return view('error.pagenotfound');
}
