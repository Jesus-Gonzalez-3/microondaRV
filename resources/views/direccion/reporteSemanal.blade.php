@extends('layout.layout')
<? $semanas = 52 ?>
@section('contenido')
<div class="card" onload="alert('Hola desde el onload');" onloadstart="alert('Hola desde el onloadstart');" onprogress="alert('hola desde el onprogess');">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas Semanal</h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name;}}¡ En esta pantalla podrás visualizar un reporte de las ventas realizadas de la semana anterior.</p>
        <hr>
        <br />
        <div class="row">
            <div class="col-3">
                <div class="form-group">
                    <label for="cmbSemanaDireccion">Semana</label>
                    <select class="js-example-basic-single" style="width: 100%;" name="cmbSemanaDireccion" id="cmbSemanaDireccion">
                        <option value="">Selecione</option>
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
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasSemanal" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i> Gráfica de barras</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graCirVentasSemanal" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-pie"></i> Gráfica de pastel</span></a> </li>
        </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasSemanal" role="tabpanel">
            <div id="ventasSemanalOtrasIndustrias">
                <br>
                <hr>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 20 MEJORES CLIENTES DE OTRAS INDUSTRIAS</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>

                </div>

                <hr>
                <div class="table-responsive collapse show" id="collapseExample">
                    <div class="container-fluid">
                        <table id="tblReporteVentasSemanalDireccion" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Orden</th>
                                    <th>Clave</th>
                                    <th>Nombre del Cliente</th>
                                    <th>Promedio Semanal Acumulado Unidades 2020</th>
                                    <th>Promedio Semanal Acumulado Unidades 2021</th>
                                    <th>Promedio Semanal Acumulado Unidades 2022</th>
                                    <th>Unidades Semana Consultada</th>
                                    <th>Promedio Semanal Acumulado Importe 2020</th>
                                    <th>Promedio Semanal Acumulado Importe 2021</th>
                                    <th>Promedio Semanal Acumulado Importe 2022</th>
                                    <th>Importe Semana Consultada</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Orden</th>
                                    <th></th>
                                    <th>Total</th>
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
            <div id="ventasSemanalCalzado">
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 50 MEJORES CLIENTES DE CALZADO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>

                </div>
                <div class="table-responsive collapse show" id="collapseExample2">
                    <div class="container-fluid">
                        <table id="tblReporteVentasSemanalDireccionCalzado" class="table table-striped table-bordered table-condensed table-hover text-dark" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Orden</th>
                                    <th>Clave</th>
                                    <th>Nombre del Cliente</th>
                                    <th>Promedio Semanal Acumulado Unidades 2020</th>
                                    <th>Promedio Semanal Acumulado Unidades 2021</th>
                                    <th>Promedio Semanal Acumulado Unidades 2022</th>
                                    <th>Unidades Semana Consultada</th>
                                    <th>Promedio Semanal Acumulado Importe 2020</th>
                                    <th>Promedio Semanal Acumulado Importe 2021</th>
                                    <th>Promedio Semanal Acumulado Importe 2022</th>
                                    <th>Importe Semana Consultada</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Orden</th>
                                    <th></th>
                                    <th>Total</th>
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
        </div>
        <div class="tab-pane  p-10" id="graBarraVentasSemanal" role="tabpanel">
            <div>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 20 MEJORES CLIENTES DE OTRAS INDUSTRIAS</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasOtrasIndustriasBarra" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>

                </div>
                <br>
                <hr>
                <br>

                <div class="container-fluid" id="ventasOtrasIndustriasBarra">

                    <figure class="highcharts-figure">
                        <div id="containerVentasSemanalBarra"></div>
                    </figure>
                    <br>
                    <hr>
                    <br>
                    <figure class="highcharts-figure">
                        <div id="containerVentasSemanalBarraPromedio"></div>
                    </figure>
                </div>
                <div class="row">
                    <div class="col-11">
                        <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 50 MEJORES CLIENTES DE CALZADO</h3>
                    </div>
                    <div class="col-1">
                        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#ventasCalzadoBarra" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> <span class="caret"></span>
                        </button>
                    </div>

                </div>
                <div class="container-fluid" id="ventasCalzadoBarra">
                    <figure class="highcharts-figure">
                        <div id="containerVentasSemanalBarraCalzado"></div>
                    </figure>
                    <br>
                    <hr>
                    <br>
                    <figure class="highcharts-figure">
                        <div id="containerVentasSemanalBarraPromedioCalzado"></div>
                    </figure>
                </div>
            </div>
        </div>
        <div class="tab-pane p-20" id="graCirVentasSemanal" role="tabpanel">
            <div class="container-fluid" id="ventasOtrasIndustriasPastel">
                <br>
                <hr>
                <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 20 MEJORES CLIENTES DE OTRAS INDUSTRIAS</h3>
                <hr>
                <figure class="highcharts-figure" style="width: 100%; height: 100%;">
                    <div id="containerVentasSemanalOtrasPastel"></div>
                </figure>
            </div>
            <div class="container-fluid" id="ventasCalzadoPastel">
                <br>
                <hr>
                <h3 class="card-title text-center">VENTAS SEMANALES DE LOS 50 MEJORES CLIENTES DE CALZADO</h3>
                <hr>
                <figure class="highcharts-figure" style="width: 100%; height: 100%;">
                    <div id="containerVentasSemanalCalzadoPastel"></div>
                </figure>
            </div>
        </div>
    </div>
</div>
@endsection