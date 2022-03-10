@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas por Periodo</h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name}}! En esta pantalla podrás visualizar un reporte de las ventas realizadas por periodo.</p>
        <hr>
        <br />
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioGerenciaPeriodo">Año</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioGerenciaPeriodo" id="cmbAnioGerenciaPeriodo">
                                <option value="0">Selecione</option>
                                <option value="2020">Año 2020</option>
                                <option value="2021">Año 2021</option>
                                <option value="2022">Año 2022</option>
                                <option value="2023">Año 2023</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioGerenciaSemanaInicioPeriodo">Semana Inicio</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioGerenciaSemanaInicioPeriodo" id="cmbAnioGerenciaSemanaInicioPeriodo">
                                <option value="0">Selecione</option>
                                @forelse(range(1,50) as $dia)
                                <option value="{{$dia}}">Semana {{$dia}}</option>
                                @empty
                                @endforelse
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioGerenciaSemanaFinPeriodo">Semana Fin</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioGerenciaSemanaFinPeriodo" id="cmbAnioGerenciaSemanaFinPeriodo">
                                <option value="0">Selecione</option>
                                @forelse(range(1,50) as $dia)
                                <option value="{{$dia}}">Semana {{$dia}}</option>
                                @empty
                                @endforelse
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="btnBuscarGerenciaPeriodo"></label>
                            <br>
                            <button id="btnBuscarGerenciaPeriodo" name="btnBuscarGerenciaPeriodo" type="button" class="btn btn-info mt-2"> <i class="fa fa-search" aria-hidden="true"></i> Consultar</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-4">
                <div class="btn-group dropdown" hidden>
                    <button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-file-excel"></i> Exportar información
                    </button>
                    <div class="dropdown-menu animated flipInX">
                        <a class="dropdown-item themecolor" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar solo datos</a>
                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos con gráfico de barras</a>
                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos co gráfico de pastel</a>
                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos con ambas gráficas</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#tablaVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-table-large"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-table-large"></i> Tabla</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i> Gráfica de barras</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graCirVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-pie"></i> Gráfica de pastel</span></a> </li>
        </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasPeriodo" role="tabpanel">
            <div id="tableVentasPeriodoUnidades">
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS EN UNIDADES POR PERIODO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>
                </div>
                <div class="table-responsive collapse show" id="collapseExample">
                    <div class="container-fluid">
                        <table id="tblReporteVentasPeriodoGerencia" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Periodo</th>
                                    <th>Calzado</th>
                                    <th>Alimentos</th>
                                    <th>Autopartes</th>
                                    <th>Eletrodomesticos</th>
                                    <th>Varios Caja</th>
                                    <th>Varios Varios</th>
                                    <th>Total</th>
                                    <th>% Participación</th>
                                    <th>Promedio Semanal</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th class="text-right">Total <br /> <br /> <br />% de Participación</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                            <tbody>
                            </tbody>
                        </table>
                        <br />
                    </div>
                </div>
            </div>
            <hr>
            <div id="ventasSemanalCalzado" hidden>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS EN PESOS POR PERIODO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>

                </div>
                <div class="table-responsive collapse show" id="collapseExample2">
                    <div class="container-fluid">
                        <table id="tblReporteVentasPeriodoGerenciaImporte" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Periodo</th>
                                    <th>Calzado</th>
                                    <th>Alimentos</th>
                                    <th>Autopartes</th>
                                    <th>Eletrodomesticos</th>
                                    <th>Varios Caja</th>
                                    <th>Varios Varios</th>
                                    <th>Total</th>
                                    <th>% Participación</th>
                                    <th>Promedio Semanal</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Total <br /> <br /><br /> % de Participación</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        <div class="tab-pane  p-20" id="graBarraVentasPeriodo" role="tabpanel">
            <div>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS EN UNIDADES POR PERIODO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasOtrasIndustriasBarra" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <hr>
                <div class="container-fluid show" id="ventasOtrasIndustriasBarra">
                    <figure class="highcharts-figure">
                        <div id="containerVentasPeriodoBarra"></div>
                    </figure>
                </div>
                <hr>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS EN PESOS POR PERIODO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasCalzadoBarra" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>
                </div>
                <div class="container-fluid show" id="ventasCalzadoBarra">
                    <figure class="highcharts-figure">
                        <div id="containerVentasPeriodoBarraImporte"></div>
                    </figure>

                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane p-20" id="graCirVentasPeriodo" role="tabpanel">
        <figure class="highcharts-figure">
            <div id="containerVentasPeriodoPastel"></div>
        </figure>
    </div>
</div>
</div>
@endsection