@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas por Periodo</h2>
        <p class="card-text"> ¡Hola En esta pantalla podrás visualizar un reporte de las ventas realizadas de la semana anterior.</p>
        <hr>
        <br />
        <div class="row">
            <div class="col-3">
                <div class="form-group">
                    <label for="cmbPeriodo">Periodo</label>
                    <select class="js-example-basic-single" style="width: 100%; color:#184f4f; background-color:#184f4f;" name="cmbPeriodo" id="cmbPeriodo">
                        <option value="">Selecione</option>
                        <option>Op1</option>
                        <option>Op2</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <h4 class="card-subtitle"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem nulla quasi enim, aperiam sint ut minima deleniti sed corrupti sunt distinctio accusamus maiores voluptates, illum, aut laboriosam! Molestias, pariatur?</b></h4>
            </div>
            <div class="col-3">
                <div class="btn-group dropdown ">
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
            <div class="table-responsive ">
                <div class="container-fluid">
                    <table id="tblReporteVentas" class="table table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            @forelse($insumos_compras = [] as $insumo_compra)
                            <tr>
                                <td>{{$insumo_compra->codigo}}</td>
                                <td>{{$insumo_compra->nombre}}</td>
                                <td>{{$insumo_compra->descripcion}}</td>
                                <td>{{$insumo_compra->cantidad}}</td>
                            </tr>
                            @empty

                            @endforelse
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        </div>
        <div class="tab-pane  p-20" id="graBarraVentasPeriodo" role="tabpanel">
            <figure class="highcharts-figure">
                <div id="containerVentasPeriodoBarra"></div>
            </figure>
        </div>
        <div class="tab-pane p-20" id="graCirVentasPeriodo" role="tabpanel">
            <figure class="highcharts-figure">
                <div id="containerVentasPeriodoPastel"></div>
            </figure>
        </div>
    </div>
</div>
@endsection