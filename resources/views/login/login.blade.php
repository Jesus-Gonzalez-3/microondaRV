<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de Login">
    <meta name="author" content="Jesús Gp Gaona">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/img/logo_mc2.2.png')}}">
    <title>Envases Microonda</title>
    <!-- Bootstrap Core CSS -->
    <link href="{{asset('/assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('/css/spinners.css')}}">

    <!--alerts CSS -->
    <link href="{{asset('assets/plugins/sweetalert/sweetalert.css')}}" rel="stylesheet" type="text/css">

    <!--<link href="{{asset('assets/plugins/select2/dist/css/select2.min.css')}}" rel="stylesheet" type="text/css" />-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" integrity="sha256-FdatTf20PQr/rWg+cAKfl6j4/IY3oohFAJ7gVC3M34E=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css">
</head>

<body style="background:#184F4F;">
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div class="container-fluid" class="login-register login-sidebar" style="margin-top: 2%;">
        <div class="row" style="background-color:#184F4F;">
            <div class="col-md-9">

                <div class="card">
                    <div class="card-header">   
                        <h1 class="text-center micro" style="color: #184F4F;"> ENVASES MICROONDA S.A DE C.V </h1>
                    </div>
                    <div class="card-body">
                        <center>
                            <video src="{{asset('/img/Montaje-microonda_web_FINAL-1.mp4')}}" style="height: 100%; width: 90%; align-items: center; align-content: center;" autoplay muted loop></video>
                        </center>
                    </div>
                    <div class="card-footer">
                        <center>
                            <img class="card-img-bottom" src="{{asset('/img/Unbooxing_smiles_2.png')}}" style="height: 80%; width: 20%; " alt="Microonda">
                        </center>
                    </div>
                </div>
            </div>
            <div class="col-md-3 card">
                <div>
                    <div class="card-body" id="card-login">
                        <form class="form-horizontal form-material" id="loginform" action="{{URL::to('/paginaPrincipal')}}">
                            @csrf
                            <br>
                            <br>
                            <br>
                            <br>
                            <a href="javascript:void(0)" class="text-center db">
                                <center>
                                    <img src="{{asset('/img/logo_mc2.3.1.png')}}" style="width: 100%; height: 100%;" alt="Home" />
                                </center>
                            </a>

                            <h4 class="text-center card-title text-uppercase" style="color:#184F4F">Inicio de Sesión</h4>
                            <h6 class="text-center card-text text-uppercase" style="color: #184F4F;"> Ingrese sus Credenciales</h6>
                            <div class="form-group m-t-40">
                                <div class="col-xs-12">
                                    <label for="txtusuario">Usuario</label>
                                    <input class="form-control" type="email" required="true" id="txtusuario" autocomplete="off" name="txtusuario" placeholder="Correo">
                                    <small id="helpId" class="form-text text-muted">Introduzca su correo empresarial</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label for="txtpassword">Contraseña</label>
                                    <input class="form-control" type="password" required="true" id="txtpassword" autocomplete="off" name="txtpassword" autocomplete="current-password" placeholder="Contraseña">
                                    <small id="helpId" class="form-text text-muted">Introduzca su contraseña, diferenciando mayúsculas y minúsculas</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-flex no-block align-items-center">
                                    <div class="checkbox checkbox-primary p-t-0">
                                        <input id="checkbox-signup" type="checkbox">
                                        <label for="checkbox-signup"> Recuerdame </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-block text-uppercase waves-effect waves-light text-white" id="btnIniciarSesion" name="btnIniciarSesion" style="background-color:#184F4F;" type="button" onclick="iniciarSesion();"> <i class="fas fa-sign-in-alt"></i> Inciar sesión</button>
                                </div>
                            </div>
                        </form>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                No tienes una Cuenta? <a href="#" onclick="mostrarRegistro()" class="text-info m-l-5"><b>Registrate</b></a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" id="card-register" hidden>
                        <form class="form-horizontal form-material" id="registerform" action="#">
                            @csrf
                            <br>
                            <br>
                            <br>
                            <br>
                            <a href="javascript:void(0)" class="text-center db">
                                <center>
                                    <img src="{{asset('/img/logo_mc2.3.1.png')}}" style="width: 100%; height: 100%;" alt="Home" />
                                </center>
                            </a>
                            <h4 class="text-center card-title text-uppercase" style="color:#184F4F">Registro de usuarios</h4>
                            <h6 class="text-center card-text text-uppercase" style="color: #184F4F;"> Ingrese los siguentes datos</h6>
                            <div class="form-group m-t-40">
                                <div class="col-xs-12">
                                    <label for="txtNombre">Nombre</label>
                                    <input class="form-control" type="text" required="" id="txtNombre" name="txtNombre" autocomplete="off" placeholder="Nombre">
                                    <small id="helpId" class="form-text text-muted">Introduzca su nombre completo</small>
                                </div>
                            </div>
                            <div class="form-group m-t-40">
                                <div class="col-xs-12">
                                    <label for="txtusuario">Usuario</label>
                                    <input class="form-control" type="email" required="" id="txtusuarioregistro" autocomplete="username" autocomplete="off" name="txtusuarioregistro" placeholder="Correo">
                                    <small id="helpId" class="form-text text-muted">Introduzca su correo empresarial</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label for="txtpassword">Contraseña</label>
                                    <input class="form-control" type="password" required="" id="txtpasswordregistro" autocomplete="off" name="txtpasswordregistro" placeholder="Contraseña">
                                    <small id="helpId" class="form-text text-muted">Introduzca su contraseña, diferenciando mayúsculas y minúsculas</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-flex no-block align-items-center">
                                    <select class="js-example-basic-single" style="width: 100%;" name="cmbRol" id="cmbRol">
                                        <option value="0">Seleccione</option>
                                        <option value="Gerente">Gerente</option>
                                        <option value="Agente">Agente</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-block text-uppercase waves-effect waves-light text-white" style="background-color:#184F4F;" type="button" onclick="registrarUsuario();"> <i class="fas fa-user-circle"></i> Registrarse</button>
                                </div>
                            </div>
                        </form>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Ya tienes una cuenta? <a href="#" onclick="mostrarIniciarSesion()" class="text-info m-l-5"><b>Iniciar sesión</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="{{asset('/assets/plugins/jquery/jquery.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('/assets/plugins/popper/popper.min.js')}}"></script>
    <script src="{{asset('/assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset('js/jquery.slimscroll.js')}}"></script>
    <!-- Sweet-Alert  -->
    <script src="{{asset('assets/plugins/sweetalert/sweetalert.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('assets/plugins/bootstrap-notify/bootstrap-notify.js')}}"></script>
    <script src="{{asset('assets/plugins/bootstrap-notify/notifications.js')}}"></script>
    <!--Wave Effects -->
    <script src="{{asset('js/waves.js')}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset('js/sidebarmenu.js')}}"></script>
    <!--stickey kit -->
    <script src="{{asset('/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js')}}"></script>
    <script src="{{asset('/assets/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
    <!--Custom JavaScript -->
    <script src="{{asset('js/custom.min.js')}}"></script>
    <!-- This is data table -->
    <script src="{{asset('assets/plugins/datatables/datatables.min.js')}}"></script>
    <!-- start - This is for export functionality only -->
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>
    <!-- ============================================================== -->
    <!-- Style switcher -->
    <!-- ============================================================== -->
    <script src="{{asset('/assets/plugins/styleswitcher/jQuery.style.switcher.js')}}"></script>
    <script src="{{asset('js_aplicacion/login.js')}}"></script>
    <script src="{{asset('js_aplicacion/general.js')}}"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js" integrity="sha256-AFAYEOkzB6iIKnTYZOdUf9FFje6lOTYdwRJKwTN5mks=" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.min.css" />
    <!-- Or for RTL support -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.rtl.min.css" />

</body>

</html>