@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-body">
        <h2 class="card-title">Ctrl. de Usuarios </h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name}}. En esta pantalla podrás visualizar un reporte de todas las ventas realizadas</p>
        <hr>
        <br />

        <!-- Nav tabs -->
        <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#tablaVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-table-large"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-table-large"></i> Tabla</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graBarraVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-bar"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-bar"></i> Gráfica de barras</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#graCirVentasPeriodo" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-chart-pie"></i></span> <span class="hidden-xs-down"> <i class="mdi mdi-chart-pie"></i> Gráfica de pastel</span></a> </li>
        </ul>
    </div>
    <div class="table-responsive ">
        <div class="container-fluid">
            <!--<div class="row">
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

            </div>-->
            <table id="tblUsuarios" class="table table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Email</th>
                        <th>Estatus</th>
                        <th>Rol</th>
                        <th>Avatar</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Email</th>
                        <th>Estatus</th>
                        <th>Rol</th>
                        <th>Avatar</th>
                        <th>Acciones</th>
                    </tr>
                </tfoot>
                <tbody>
                    @forelse($Usuarios as $usuario)
                    <tr>
                        <td>{{$usuario->name}}</td>
                        <td>{{$usuario->email}}</td>
                        <td> <i class="fa fa-check-circle" aria-hidden="true"></i> {{$usuario->estatus}}</td>
                        <td>{{$usuario->rol}}</td>
                        @if(isset($usuario->avatar))
                        <td><img src="{{$usuario->avatar}}" alt="User" style="width: 30%; height: 30%;"></td>
                        @else
                        <td></td>
                        @endif
                        <form action="" method="POST">
                            @csrf
                            <td class="text-center"><button class="btn btn-warning waves-effect btn-circle waves-light" type="button" onclick="detalleUsuario(<?= $usuario->id ?>)">
                                    <i class="fa fa-edit"></i></button></td>
                            <td class="text-center"><button class="btn btn-danger waves-effect btn-circle waves-light" type="button" onclick="eliminarUsuario(<?= $usuario->id ?>)">
                                    <i class="fa fa-trash"></i></button></td>
                        </form>
                    </tr>
                    @empty

                    @endforelse
                </tbody>
            </table>
            <br />
        </div>
    </div>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="tablaVentasPeriodo" role="tabpanel">

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