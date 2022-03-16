@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas Anuales</h2>
        <p class="card-text"> ¡Hola En esta pantalla podrás visualizar un reporte de las ventas realizadas de la semana anterior.</p>
        <hr>

        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioAgentes">Año</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f;" name="cmbAnioAgentes" id="cmbAnioAgentes">
                                <option value="0">Selecione</option>
                                <option value="2020">Año 2020</option>
                                <option value="2021">Año 2021</option>
                                <option value="2022">Año 2022</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioAgentesSemanaInicio">Semana Inicio</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f;" name="cmbAnioAgentesSemanaInicio" id="cmbAnioAgentesSemanaInicio">
                                <option value="0">Selecione</option>
                                @forelse(range(1,50) as $dia)
                                <option value="{{$dia}}">Semana {{$dia}}</option>
                                @empty
                                @endforelse
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioAgentesSemanaFin">Semana Fin</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f;" name="cmbAnioAgentesSemanaFin" id="cmbAnioAgentesSemanaFin">
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
                            <label for="btnBuscarAgentes"></label>
                            <br>
                            <button id="btnBuscarAgentes" name="btnBuscarAgentes" type="button" class="btn btn-info mt-2"> <i class="fa fa-search" aria-hidden="true"></i> Consultar</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-3">
                <!--<h4 class="card-subtitle"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem nulla quasi enim, aperiam sint ut minima deleniti sed corrupti sunt distinctio accusamus maiores voluptates, illum, aut laboriosam! Molestias, pariatur?</b></h4>-->
            </div>
            <div class="col-3">
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
            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#tablaVentasAnuales" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-table-large"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-table-large"></i> Tabla</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasAnuales" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i> Gráfica de barras</span></a> </li>
            <li class="nav-item" hidden> <a class="nav-link" data-toggle="tab" href="#graCirVentasAnuales" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-pie"></i> Gráfica de pastel</span></a> </li>
        </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasAnuales" role="tabpanel">
            <div class="row">
                <div class="col-11">
                    <h2 class="card-title text-center">VENTAS ANUALES EFECTUADAS {{ strtoupper(Auth::user()->name)}}</h2>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                    </button>
                </div>
            </div>
            <div class="table-responsive collapse show" id="collapseExample">
                <div class="container-fluid">
                    <table id="tblReporteVentasAnualesAgentes" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th style="width: 30%;">Clave del producto</th>
                                <th style="width: 30%;">Descripcion del Producto</th>
                                <th style="width: 30%;">Cliente</th>
                                <th>Unidades Vendidas</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th class="text-right">Total</th>
                                <th></th>
                            </tr>
                        </tfoot>
                        <tbody class="mr-auto">
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        </div>
        <div class="tab-pane p-20" id="graBarraVentasAnuales" role="tabpanel">
            <div class="row">
                <div class="col-11">
                    <h3 class="card-title text-center">VENTAS ANUALES EFECTUADAS POR AGENTE</h3>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasAnualesAgentes1" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="container-fluid show" id="ventasAnualesAgentes1">
                <figure class="highcharts-figure">
                    <div id="containerVentasAnualesPastelAgentesUnidades" style="height: 100%;"></div>
                </figure>
            </div>
        </div>
        <div class="tab-pane p-20" id="graCirVentasAnuales" role="tabpanel" hidden>
            <div class="row">
                <div class="col-11">
                    <h3 class="card-title text-center">VENTAS ANUALES EFECTUADAS POR AGENTE</h3>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasAnualesAgentes2" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="container-fluid show" id="ventasAnualesAgentes2">
                <figure class="highcharts-figure">
                    <div id="containerVentasAnualesPastelGerenciaUnidades"></div>
                </figure>
            </div>
        </div>
    </div>
</div>
@endsection