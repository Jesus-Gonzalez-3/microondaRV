@extends('layout.layout')

@section('contenido')
@if(Auth::user()->rol =="Direccion" || Auth::user()->rol == "Admin")
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas Anuales</h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name}}! En esta pantalla podrás visualizar un reporte de las ventas anuales.</p>
        <hr>
        <br />
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioDirección">Año</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioDirección" id="cmbAnioDirección">
                                <option value="0">Selecione</option>
                                <option value="2020">Año 2020</option>
                                <option value="2021">Año 2021</option>
                                <option value="2022">Año 2022</option>
                                <option value="2023">Año 2023</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label for="cmbAnioDirecciónSemanaInicio">Semana Inicio</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioDirecciónSemanaInicio" id="cmbAnioDirecciónSemanaInicio">
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
                            <label for="cmbAnioDirecciónSemanaFin">Semana Fin</label>
                            <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbAnioDirecciónSemanaFin" id="cmbAnioDirecciónSemanaFin">
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
                            <label for="btnBuscarDireccion"></label>
                            <br>
                            <button id="btnBuscarDireccion" name="btnBuscarDireccion" type="button" class="btn btn-info mt-2"> <i class="fa fa-search" aria-hidden="true"></i> Consultar</button>
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
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasAnuales" role="tab" hidden><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i> Gráfica de barras</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graCirVentasAnuales" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-pie"></i> Gráfica de pastel</span></a> </li>
        </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasAnuales" role="tabpanel">
            <div class="row">
                <div class="col-11">
                    <h2 class="card-title text-center">VENTAS ANUALES EFECTUADAS POR AGENTE</h2>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i> <span class="caret"></span>
                    </button>
                </div>
            </div>
            <div class="table-responsive collapse show" id="collapseExample">
                <div class="container-fluid">
                    <table id="tblReporteVentasAnualesDireccion" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th style="width: 40%;">Nombre del Agente</th>
                                <th style="width: 15%;">Unidades</th>
                                <th style="width: 15%;">Importe</th>
                                <th>Participación Unidades %</th>
                                <th>Participación Importe %</th>
                                <th>Participación Unidades %</th>
                                <th>Participación Importe %</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th class="text-right">Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
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
        <div class="tab-pane p-20" id="graBarraVentasAnuales" role="tabpanel" hidden>
            <figure class="highcharts-figure">
                <div id="containerVentasAnualesBarra"></div>
            </figure>
        </div>
        <div class="tab-pane p-20" id="graCirVentasAnuales" role="tabpanel">
            <div class="row">
                <div class="col-11">
                    <h3 class="card-title text-center">VENTAS ANUALES EFECTUADAS POR AGENTE</h3>
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasAnualesAgentes" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="container-fluid show" id="ventasAnualesAgentes">
                <figure class="highcharts-figure">
                    <div id="containerVentasAnualesPastelDireccionUnidades"></div>
                </figure>
                <hr>
                <figure class="highcharts-figure">
                    <div id="containerVentasAnualesPastelDireccionImporte"></div>
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