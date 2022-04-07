<?php

use App\Http\Controllers\UsuarioController;
use Facade\FlareClient\Report;
use Illuminate\Support\Facades\Auth;
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

//Esta ruta no hay que moverla para nada
Route::get('/iniciarSesion', 'UsuarioController@showlogin')->name('login');

Route::get('/', function () {
    return view('login.login');
});

Route::group(['prefix' => 'usuarios/acciones'], function () {
    Route::post('/registrar', 'UsuarioController@registrar');
    Route::post('/login', 'UsuarioController@login');
});
Route::get('/ventasPeriodo', 'ReportesController@ventasPeriodo');

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
         * Reportes Direccion
         */
        Route::get('/reporteSemanalDireccion', function () {
            return view('direccion.reporteSemanal');
        });

        Route::get('/reporteAnualDireccion', function () {
            return view('direccion.reporteAnual');
        });
        Route::get('/reportePeriodoDireccion', function () {
            return view('direccion.reportePeriodo');
        });

        Route::group(['prefix' => 'direccion/reportes'], function () {
            Route::get('/top20', 'ReportesController@ObtenerTop20');
            Route::get('/top50', 'ReportesController@ObtenerTop50');
            Route::get('/ventasAnuales', 'ReportesController@ventasAnuales');
            Route::get('/ventasPeriodo', 'ReportesController@ventasPeriodo');
        });

        /**
         * Reportes Gerencia
         */
        Route::get('/reporteSemanalGerentes', function () {
            return view('gerencia.reporteSemanal');
        });

        Route::get('/reporteAnualGerencia', function () {
            return view('gerencia.reporteAnual');
        });
        Route::get('/reportePeriodoGerencia', function () {
            return view('gerencia.reportePeriodo');
        });

        Route::group(['prefix' => 'gerencia/reportes'], function () {
            Route::get('/top20', 'ReportesController@ObtenerTop20');
            Route::get('/top50', 'ReportesController@ObtenerTop50');
            Route::get('/ventasAnuales', 'ReportesController@ventasAnuales');
            Route::get('/ventasPeriodo', 'ReportesController@ventasPeriodo');
        });

        /**
         * Reportes Agentes
         */
        Route::get('/reporteSemanalAgentes', function () {
            return view('reportes.reporteSemanal');
        });

        Route::get('/reportePeriodoAgentes', function () {
            return view('reportes.reportePeriodo');
        });

        Route::get('/reporteAnualAgentes', function () {
            return view('reportes.reporteAnual');
        });

        Route::group(['prefix' => 'agentes/reportes'], function () {
            Route::get('/ventasSemanales', 'ReportesController@VentasSemanalesAgentes');
            Route::get('/ventasAnuales', 'ReportesController@VentasAnualesAgentes');
            /*Route::get('/top50', 'ReportesController@ObtenerTop50');
            Route::get('/ventasPeriodo', 'ReportesController@ventasPeriodo');*/
        });

        //

        /**
         * Index
         */
        Route::get('/paginaPrincipal', function () {
            return view('paginaPrincipal.index');
        });
    });
} catch (Exception $ex) {
    return view('error.pagenotfound',[],404);
}
