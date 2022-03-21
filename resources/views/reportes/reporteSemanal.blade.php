@extends('layout.layout')
<? $semanas = 52 ?>
@section('contenido')
@if(Auth::user()->rol =="Agente")
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas Semanal</h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name;}}¡ En esta pantalla podrás visualizar un reporte de las ventas realizadas de la semana anterior.</p>
        <hr>
        <br />
        <div class="row">
            <div class="col-3">
                <div class="form-group">
                    <label for="cmbSemanaAgentes">Semana</label>
                    <select class="js-example-basic-single" style="width: 100%;" name="cmbSemanaAgentes" id="cmbSemanaAgentes">
                        <option value="0">Selecione</option>
                        @forelse(range(1,52) as $dia)
                        <option value="{{$dia}}">Semana {{$dia}}</option>
                        @empty
                        @endforelse
                    </select>
                </div>
            </div>
            <div class="col-6">
                <h4 class="card-subtitle"></h4>
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
            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#tablaVentasSemanal" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-table-large"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-table-large"></i> Tabla</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasSemanal" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i><i class="mdi mdi-chart-pie"></i> Gráficos</span></a> </li>
        </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasSemanal" role="tabpanel">
            <div>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS SEMANALES {{strtoupper(Auth::user()->name)}}</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>
                </div>

                <hr>
                <div class="table-responsive collapse show" id="collapseExample">
                    <div class="container-fluid">
                        <table id="tableVentasSemanalAgentes" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Clave Producto</th>
                                    <th style="width: 30%;">Producto</th>
                                    <th style="width: 30%;">Cliente</th>
                                    <th>Unidades Vendidad </th>
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
                            <tbody>

                            </tbody>
                        </table>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane  p-20" id="graBarraVentasSemanal" role="tabpanel">
            <div class="row">
                <div class="col-11">
                    <h3 class="card-title text-center">VENTAS SEMANALES {{strtoupper(Auth::user()->name)}}</h3>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasSemanalAgentesBarra" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-1 offset-2 collapse show" id="ventasSemanalAgentesBarra">
                    <figure class="highcharts-figure">
                        <center>
                            <div id="containerVentasSemanalBarraAgentes">
                            </div>
                        </center>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-11">
                    <h3 class="card-title text-center">VENTAS SEMANALES {{strtoupper(Auth::user()->name)}}</h3>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasSemanalAgentesPastel" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-1 offset-2 collapse show" id="ventasSemanalAgentesPastel">
                <figure class="highcharts-figure" style="width: 100%; height: 100%;">
                    <center>
                        <div id="containerVentasSemanalPastelAgentes"></div>
                    </center>
                </figure>
            </div>
        </div>
    </div>
</div>
@else
<div class="card">
    <center>
        <img class="card-img-top" src="{{asset('/img/logo_mc2.3.1.png')}}" style="width: 30%; height: 100%;" alt="Home" />
    </center>
    <div class="card-body text-center">
        <h4 class="card-title">Recurso no Disponible</h4>
        <p class="card-text">Usted no tiene permiso de visualizar este contenido</p>
        <a href="{{URL::to('/paginaPrincipal')}}" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Volver a casa</a>
    </div>
</div>
@endif
@endsection