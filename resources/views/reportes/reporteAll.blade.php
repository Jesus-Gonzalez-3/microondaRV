@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Reporte de Ventas</h2>
        <p class="card-text"> ¡Hola En esta pantalla podrás visualizar un reporte de todas las ventas realizadas</p>
        <hr>
        <br />

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
                    <div class="row">
                        <div class="col-5">
                            <div class="row">
                                <div class="btn-group dropdown col-md-6 ">
                                    <button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-file-excel"></i> Exportar información Excel
                                    </button>
                                    <div class="dropdown-menu animated flipInX">
                                        <a class="dropdown-item themecolor" href="#" onclick="GenerarPDF();"> <i class="fas fa-file-excel"></i> &nbsp; Exportar solo datos</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos con gráfico de barras</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos co gráfico de pastel</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-excel"></i> &nbsp; Exportar datos con ambas gráficas</a>
                                    </div>
                                </div>
                                <div class="btn-group dropdown col-md-6">
                                    <button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-file-pdf"></i> Exportar información PDF
                                    </button>
                                    <div class="dropdown-menu animated flipInX">
                                        <a class="dropdown-item themecolor" href="#" onclick="GenerarPDF();"> <i class="fas fa-file-pdf"></i> &nbsp; Exportar solo datos</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-pdf"></i> &nbsp; Exportar datos con gráfico de barras</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-pdf"></i> &nbsp; Exportar datos co gráfico de pastel</a>
                                        <a class="dropdown-item" href="#"> <i class="fas fa-file-pdf"></i> &nbsp; Exportar datos con ambas gráficas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                        </div>
                        <div class="col-6">
                        </div>

                    </div>
                    <table id="tblReporteVentasAll" class="table table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Folio documento</th>
                                <th>Documento</th>
                                <th>Clave del Producto</th>
                                <th>Producto</th>
                                <th>Agente</th>
                                <th>Unidades Vendidas</th>
                                <th>Precio Unidad</th>
                                <th>Total Venta</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Folio documento</th>
                                <th>Documento</th>
                                <th>Clave del Producto</th>
                                <th>Producto</th>
                                <th>Agente</th>
                                <th>Unidades Vendidas</th>
                                <th>Precio Unidad</th>
                                <th>Total Venta</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            @forelse($ventas as $venta)
                            <tr>
                                <td>{{$venta->folio_documento}}</td>
                                <td>{{$venta->documento}}</td>
                                <td>{{$venta->clave_producto}}</td>
                                <td>{{$venta->desc_producto}}</td>
                                <td>{{$venta->nombre_agente}}</td>
                                <td>{{$venta->cantidad_unidades}}</td>
                                <td>{{$venta->precio_pesos}}</td>
                                <td>$ {{$venta->cantidad_unidades * $venta->precio_pesos}}</td>
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
                <div id="containerVentasAllBarra"></div>
            </figure>
            <div id="tester">
            </div>
        </div>
        <div class="tab-pane p-20" id="graCirVentasPeriodo" role="tabpanel">
            <figure class="highcharts-figure">
                <div id="containerVentasAllPastel"></div>
            </figure>
        </div>
    </div>
</div>
@endsection