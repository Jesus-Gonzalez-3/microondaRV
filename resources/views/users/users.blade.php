@extends('layout.layout')

@section('contenido')
<div class="card text-dark">
    <div class="card-body">
        <h2 class="card-title">Ctrl. de Usuarios </h2>
        <p class="card-text"> ¡Hola {{Auth::user()->name}}. En esta pantalla podrás visualizar los usuarios activos del sistema</p>
        <hr>
    </div>
    <div class="table-responsive ">
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <center>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modelId">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp; Agregar
                    </button>
                </center>
            </div>
        </div>
        <div class="container-fluid">
            <table id="tblUsuarios" class="table table-striped table-bordered table-condensed table-hover text-center text-dark" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Email</th>
                        <th>Estatus</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Email</th>
                        <th>Estatus</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </tfoot>
                <tbody>
                    @forelse($usuarios as $usuario)
                    <tr>
                        <td>{{$usuario->name}}</td>
                        <td>{{$usuario->email}}</td>
                        <td> <i class="fa fa-check-circle text-gray" aria-hidden="true"></i> {{$usuario->estatus}}</td>
                        <td>{{$usuario->rol}}</td>

                        <form action="" method="POST">
                            @csrf
                            <td class="text-center">
                                <button class="btn btn-warning waves-effect btn-circle waves-light" type="button" onclick="detalleUsuario(<?= $usuario->id ?>)">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button class="btn btn-danger waves-effect btn-circle waves-light" type="button" onclick="eliminarUsuario(<?= $usuario->id ?>)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </form>
                    </tr>
                    @empty

                    @endforelse
                </tbody>
            </table>
            <br />
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" data-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header btn-info text-white ">
                <h3 class="text-center text-white " style="text-align: center;">Gestión de Usuarios</h3>
                <button type="button" class="close text-white" onclick="limpiarCamposAgregar();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid text-dark">
                    <form class="form-horizontal form-material text-dark" id="registerform" action="#">
                        @csrf
                        <div class="row">
                            <div class="col-md-2 offset-2">
                                <img src="{{asset('img/user.png')}}" style="width: 100%; height:100%;" alt="Usuario">
                            </div>
                            <div class="col-md-8">
                                <h2 class="card-title text-uppercase" id="txtTitulo" name="txtTitulo">Registro de usuarios</h2>
                                <h4 class="card-text"> Ingrese los siguentes datos</h4>
                            </div>
                        </div>
                        <div class="form-group m-t-40">
                            <div class="col-xs-12">
                                <label for="txtNombre">Nombre</label>
                                <input class="form-control" type="text" required="" id="txtNombre" name="txtNombre">
                                <small id="helpId" class="form-text text-muted">Introduzca su nombre completo</small>
                            </div>
                        </div>
                        <div class="form-group m-t-40">
                            <div class="col-xs-12">
                                <label for="txtusuario">Usuario</label>
                                <input class="form-control" type="email" required="" id="txtusuarioregistro" autocomplete="username" name="txtusuarioregistro">
                                <small id="helpId" class="form-text text-muted">Introduzca su correo empresarial</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <label for="txtpassword">Contraseña</label>
                                <input class="form-control" type="password" required="" id="txtpasswordregistro" autocomplete="current-password" name="txtpasswordregistro">
                                <small id="helpId" class="form-text text-muted">Introduzca su contraseña, diferenciando mayúsculas y minúsculas</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="cmbRol">Rol del Usuario</label>
                            <div class="d-flex no-block align-items-center">
                                <select class="js-example-basic-single" style="width: 100%;" name="cmbRol" id="cmbRol">
                                    <option value="0">Seleccione</option>
                                    <option value="Gerente">Gerente</option>
                                    <option value="Agente">Agente</option>
                                </select>
                            </div>
                            <small id="helpId" class="form-text text-muted">Seleccione el rol al que pertenece este usuario</small>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="limpiarCamposAgregar();"> <i class="fa fa-times-circle" aria-hidden="true"></i> &nbsp; Cerrar</button>
                <button type="button" class="btn waves-effect waves-light text-white" style="background-color:#184F4F;" onclick="RegistrarUsuarioAdmin();"> <i class="fa fa-save" aria-hidden="true"></i>&nbsp; Guardar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="updateInformation" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" data-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header btn-info text-white ">
                <h3 class="text-center text-white " style="text-align: center;">Gestión de Usuarios</h3>
                <button type="button" class="close text-white" onclick="limpiarCamposModificar();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-dark">
                <div class="container-fluid text-dark">
                    <form class="form-horizontal form-material text-dark" id="registerform" action="#">
                        @csrf
                        <div class="row">
                            <div class="col-md-2 offset-2">
                                <img src="{{asset('img/user.png')}}" style="width: 100%; height:100%;" alt="Usuario">
                                <input type="hidden" name="idUser" id="idUser">
                            </div>
                            <div class="col-md-8">
                                <h2 class="card-title text-uppercase" id="txtTitulo" name="txtTitulo">Modificación de usuarios</h2>
                                <h4 class="card-text"> Ingrese los siguentes datos</h4>
                            </div>
                        </div>
                        <div class="form-group m-t-40">
                            <div class="col-xs-12">
                                <label for="txtNombreUpdate">Nombre</label>
                                <input class="form-control" type="text" required="" id="txtNombreUpdate" name="txtNombreUpdate">
                                <small id="helpId" class="form-text text-muted">Introduzca su nombre completo</small>
                            </div>
                        </div>
                        <div class="form-group m-t-40">
                            <div class="col-xs-12">
                                <label for="txtusuario">Usuario</label>
                                <input class="form-control" type="email" required="" id="txtusuarioUpdate" autocomplete="username" name="txtusuarioUpdate">
                                <small id="helpId" class="form-text text-muted">Introduzca su correo empresarial</small>
                            </div>
                        </div>
                        <div class="form-group m-t-40">
                            <div id="divCambioContraseña" class="col-xs-12">
                                <label for="switchCambioContraseña">¿Desea cambiar la contraseña?</label>
                                <br>
                                <input type="checkbox" name="switchCambioContraseña" onchange="MostrarDivContraseña();" id="switchCambioContraseña" class="js-switch" data-color="#184f4f" data-secondary-color="#f62d51" />
                            </div>
                            <div id="divContraseña" class="col-xs-12" hidden>
                                <br>
                                <label for="txtpasswordUpdate">Contraseña</label>
                                <input class="form-control" type="password" required="" id="txtpasswordUpdate" autocomplete="current-password" name="txtpasswordUpdate">
                                <small id="helpId" class="form-text text-muted">Introduzca su contraseña, diferenciando mayúsculas y minúsculas</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="cmbRolUpdate">Rol del Usuario</label>
                            <div class="d-flex no-block align-items-center">
                                <select class="js-example-basic-single" style="width: 100%;"" name=" cmbRolUpdate" id="cmbRolUpdate">
                                    <option value="0">Seleccione</option>
                                    <option value="Gerente">Gerente</option>
                                    <option value="Agente">Agente</option>
                                    @if(Auth::user()->rol === 'Admin')
                                    <option value="Direccion">Direccion</option>
                                    @endif
                                </select>
                            </div>
                            <small id="helpId" class="form-text text-muted">Seleccione el rol al que pertenece este usuario</small>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="limpiarCamposModificar();"> <i class="fa fa-times-circle" aria-hidden="true"></i> &nbsp; Cerrar</button>
                <button type="button" class="btn waves-effect waves-light text-white" style="background-color:#184F4F;" onclick="updatedatauser();"> <i class="fa fa-save" aria-hidden="true"></i>&nbsp; Guardar</button>
            </div>
        </div>
    </div>
</div>
@endsection