<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Página de Login">
    <meta name="author" content="Jesús Gp Gaona">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/img/logo_mc2.2.png')}}">
    <title>Envases Microonda S.A de C.V</title>

    <!-- Bootstrap Core CSS -->
    <link href="{{asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <!--alerts CSS -->
    <link href="{{asset('assets/plugins/sweetalert/sweetalert.css')}}" rel="stylesheet" type="text/css">
    <!-- chartist CSS -->
    <link href="{{asset('assets/plugins/chartist-js/dist/chartist.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/plugins/chartist-js/dist/chartist-init.css')}}" rel="stylesheet">
    <link href="{{asset('assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css')}}" rel="stylesheet">
    <link href="{{asset('assets/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css')}}" rel="stylesheet" />

    <link href="{{asset('assets/plugins/switchery/dist/switchery.min.css')}}" rel="stylesheet" />
    <!--This page css - Morris CSS -->
    <link href="{{asset('assets/plugins/c3-master/c3.min.css')}}" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
    <!-- You can change the theme colors from here -->
    <link href="{{asset('css/colors/themeMicro.css')}}" id="theme" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('assets/plugins/dropify/dist/css/dropify.min.css')}}">

    <!--<link href="{{asset('assets/plugins/select2/dist/css/select2.min.css')}}" rel="stylesheet" type="text/css" />-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" integrity="sha256-FdatTf20PQr/rWg+cAKfl6j4/IY3oohFAJ7gVC3M34E=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.min.css" />
    <!-- Or for RTL support -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.rtl.min.css" />
    <script src="https://cdn.plot.ly/plotly-2.8.3.min.js"></script>



</head>

<body class="fix-header fix-sidebar card-no-border">
    <div class='modal fade' id='ventanaCarga' tabindex='-1' role='dialog' aria-labelledby="vcenter" data-backdrop="static" data-keyboard="false" aria-hidden='true'>
        <div class='modal-dialog modal-dialog-centered' role='document'>
            <div class='modal-content'>
                <div class="modal-header btn-info text-center">
                    <center>
                        <img src="{{asset('/img/2.png')}}" style="width: 50%; height: 50%;" class="light-logo" alt="homepage" />
                    </center>
                </div>
                <div class='modal-body text-center'>
                    <h2 class='modal-title text-center'>Generando Reporte</h2>
                    <br>
                    <center>
                        <h1>
                            <i class='fa fa-redo fa-spin' aria-hidden='true'></i>
                        </h1>
                    </center>
                    <br>
                    <h5 class="card-text text-center">¡ Espere un momento, mientras se realiza su petición !</h5>
                </div>
            </div>
        </div>
    </div>
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
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="/microondaRV/public/paginaPrincipal">
                        <!-- Logo icon -->
                        <b>
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                            <img src="{{asset('/img/logo_mc.2.png')}}" style="width: 50%; height: 50%;" alt="homepage" class="dark-logo" />
                            <!-- Light Logo icon -->
                            <img src="{{asset('/img/logo_mc.2.png')}}" style="width: 50%; height: 50%;" alt="homepage" class="light-logo" />
                        </b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span>
                            <!-- dark Logo text -->
                            <img src="{{asset('/img/logo_mc1.png')}}" style="width: 50%; height: 50%;" alt="homepage" class="dark-logo" />
                            <!-- Light Logo text -->
                            <img src="{{asset('/img/logo_mc1.png')}}" style="width: 50%; height: 50%;" class="light-logo" alt="homepage" />
                        </span>
                    </a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto mt-md-0">
                        <!-- This is  -->
                        <li class="nav-item">
                            <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)">
                                <i class="mdi mdi-menu"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)">
                                <i class="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav my-lg-0">
                        <!-- ============================================================== -->
                        <!-- Comment -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-message"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox scale-up">
                                <ul>
                                    <li>
                                        <div class="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div class="message-center">
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-danger btn-circle"><i class="fa fa-link"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>Luanch Admin</h5> <span class="mail-desc">Just see the my new admin!</span> <span class="time">9:30 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-success btn-circle"><i class="ti-calendar"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>Event today</h5> <span class="mail-desc">Just a reminder that you have event</span> <span class="time">9:10 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-info btn-circle"><i class="ti-settings"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>Settings</h5> <span class="mail-desc">You can customize this template as you want</span> <span class="time">9:08 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-primary btn-circle"><i class="ti-user"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Comment -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Profile -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <center>
                                    @if(Auth::user()->avatar !='')
                                    <img src="{{Auth::user()->avatar}}" style="width: 60px; height: 6   0px;" alt="user" class="profile-pic" />
                                    @else
                                    <img src="{{asset('/img/logo_mc.2.png')}}" style="width: 50%; height: 50%;" alt="user" class="profile-pic" />
                                    @endif
                                </center>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right scale-up text-center">
                                <ul class="dropdown-user">
                                    <li>
                                        <div class="dw-user-box">
                                            <center>
                                                @if(Auth::user()->avatar !='')
                                                <div class="row">
                                                    <div class="u-img col-4">
                                                        <img src="{{Auth::user()->avatar}}" style="width: 60px; height: 60px;" alt="user" class="profile-pic" />
                                                    </div>
                                                    <h4 class="u-text col-md-8">{{Auth::user()->name}}</h4>
                                                </div>
                                                <hr>
                                                @else
                                                <div class="row">
                                                    <div class="u-img col-4">
                                                        <img src="{{asset('/img/logo_mc2.2.png')}}" style="width: 50%; height: 50%;" alt="user" class="profile-pic" />
                                                    </div>
                                                    <h4 class="u-text col-md-8">{{Auth::user()->name}}</h4>
                                                </div>
                                                <hr>
                                                @endif
                                            </center>

                                            <div class="u-text text-center">
                                                <center>
                                                    <h6 class="text-center" style="text-align: center;">ROL: {{Auth::user()->rol}}</h6>
                                                </center>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" data-toggle="modal" data-target="#infoUser"><i class="ti-user"></i> Mi Perfil</a></li>
                                    <li><a href="{{URL::to('usuarios/acciones/logout')}}"><i class="fa fa-power-off"></i> Salir </a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <br>
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        @if(Auth::user()->rol == 'Gerente')
                        <li class="nav-small-cap">Reporte de Ventas</li>
                        <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                                <i class="fas fa-chart-bar"></i>
                                <span class="hide-menu">Reportes</span>
                            </a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{URL::to('/reporteSemanal')}}">Reporte Semanal</a></li>
                                <li><a href="{{URL::to('/reportePeriodo')}}">Reporte Periodo</a></li>
                                <li><a href="{{URL::to('/reporteAnual')}}">Reporte Anual</a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        @endif
                        @if(Auth::user()->rol == 'Agente')
                        <li class="nav-small-cap">Reporte de Ventas</li>
                        <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                                <i class="fas fa-chart-bar"></i>
                                <span class="hide-menu">Reportes</span>
                            </a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{URL::to('/reporteSemanal')}}">Reporte Semanal</a></li>
                                <li><a href="{{URL::to('/reportePeriodo')}}">Reporte Periodo</a></li>
                                <li><a href="{{URL::to('/reporteAnual')}}">Reporte Anual</a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        @endif
                        @if(Auth::user()->rol === 'Admin')
                        <li class="nav-small-cap">Usuarios</li>
                        <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                                <i class="fas fa-user-circle"></i>
                                <span class="hide-menu">Gestión de Usuarios</span>
                            </a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{URL::to('/usuarios')}}">Usuarios Activos</a></li>
                                <li><a href="{{URL::to('/usuariosInactivos')}}">Usuarios Inactivos</a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        @endif

                        @if(Auth::user()->rol === 'Direccion' || Auth::user()->rol === 'Admin')
                        <li class="nav-small-cap">Reportes Dirección</li>
                        <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                                <i class="fab fa-yelp"></i>
                                <span class="hide-menu">Reportes</span>
                            </a>
                            <ul aria-expanded="false" class="collapse">
                            <li><a href="{{URL::to('/reporteSemanalDireccion')}}">Reporte Semanal</a></li>
                                <li><a href="{{URL::to('/reportePeriodoDireccion')}}">Reporte Periodo</a></li>
                                <li><a href="{{URL::to('/reporteAnualDireccion')}}">Reporte Anual</a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        @endif
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row -->
                <div class="row page-titles">

                </div>
                <!-- Row -->
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                @yield('contenido')
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer text-center" style="color: #184F4F;">
                © 2021 Envases Microonda S.A de C.V
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- Modal -->
    <div class="modal fade" id="infoUser" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" data-keyboard="false" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header btn-info text-white ">
                    <center>
                        <h5 class="card-title text-center text-white text-uppercase">Información del Usuario</h5>
                    </center>
                    <button type="button" class="close text-white   " data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5">
                            <center>
                                @if(Auth::user()->avatar!= '')
                                <img src="{{Auth::user()->avatar}}" alt="Usuario" style="width:80%; height: 80%;">
                                <br>
                                <br>
                                <br>
                                <input type="file" id="input-file-now-custom-1" style="border-radius: 10px;" class="dropify profile-pic" src="{{Auth::user()->avatar}}" data-default="{{Auth::user()->avatar}}" alt="usuario" />
                                @else
                                <input type="file" id="input-file-now-custom-1" style="border-radius: 10px;" class="dropify profile-pic" data-default-file="{{asset('/img/logo_mc2.3.png')}}" alt="usuario" />
                                @endif
                            </center>
                        </div>
                        <div class="col-md-7">
                            <form class="form-horizontal" role="form">
                                @csrf
                                <input type="hidden" name="txtuid" id="txtuid" value="{{Auth::user()->id}}">
                                <div class="form-body">
                                    <center>
                                        <h3 class="box-title text-center text-uppercase">Información Personal</h3>
                                    </center>
                                    <hr class="m-t-0 m-b-40">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div class="row">
                                                <div class="form-group col-12">
                                                    <label class="control-label text-center col-md-12">Nombre:</label>
                                                    <div class="col-md-12">
                                                        <p class="form-control-static text-center"> {{Auth::user()->name}} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!--/span-->
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="form-group col-12">
                                                    <label class="control-label text-center col-md-12">Usuario</label>
                                                    <div class="col-md-12">
                                                        <p class="form-control-static text-center" style="white-space: initial; white-space: initial;">{{Auth::user()->email}} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->

                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div class="form-group row">
                                            <label class="control-label text-center col-md-12">Rol</label>
                                            <div class="col-md-12 text-center">
                                                <p class="form-control-static text-center"> {{Auth::user()->rol}} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                        </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="fa fa-times" aria-hidden="true"></i> Cerrar</button>
                    <button type="button" class="btn btn-info" onclick="GuardarImagen();"> <i class="fas fa-save " aria-hidden="false"></i> Guardar</button>
                </div>
            </div>
        </div>
    </div>



    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="{{asset('assets/plugins/jquery/jquery.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('assets/plugins/popper/popper.min.js')}}"></script>
    <script src="{{asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset('js/jquery.slimscroll.js')}}"></script>
    <!--Wave Effects -->
    <script src="{{asset('js/waves.js')}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset('js/sidebarmenu.js')}}"></script>
    <!--stickey kit -->
    <script src="{{asset('assets/plugins/sticky-kit-master/dist/sticky-kit.min.js')}}"></script>
    <script src="{{asset('assets/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
    <script src="{{asset('assets/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
    <!-- Sweet-Alert  -->
    <script src="{{asset('assets/plugins/sweetalert/sweetalert.min.js')}}"></script>

    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('assets/plugins/bootstrap-notify/bootstrap-notify.js')}}"></script>
    <script src="{{asset('assets/plugins/bootstrap-notify/notifications.js')}}"></script>
    <!-- ============================================================== -->
    <!--Custom JavaScript -->
    <script src="{{asset('js/custom.min.js')}}"></script>
    <!-- Custom Theme JavaScript -->
    <!-- ============================================================== -->
    <!-- This page plugins -->
    <!-- ============================================================== -->
    <script src="{{asset('js/jasny-bootstrap.js')}}"></script>
    <!-- chartist chart -->
    <!-- <script src="{{asset('assets/plugins/chartist-js/dist/chartist.min.js')}}"></script>
    <script src="{{asset('assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js')}}"></script> -->
    <!--c3 JavaScript -->
    <script src="{{asset('assets/plugins/d3/d3.min.js')}}"></script>
    <script src="{{asset('assets/plugins/c3-master/c3.min.js')}}"></script>
    <!-- Chart JS -->
    <!--<script src="{{asset('js/dashboard1.js')}}"></script>-->
    <!-- ============================================================== -->
    <!-- This is data table -->
    <script src="{{asset('assets/plugins/datatables/datatables.min.js')}}"></script>
    <!-- start - This is for export functionality only 
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>-->
    <!-- end - This is for export functionality only -->
    <!-- ============================================================== -->
    <!-- Style switcher -->
    <!-- ============================================================== -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js" integrity="sha256-AFAYEOkzB6iIKnTYZOdUf9FFje6lOTYdwRJKwTN5mks=" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.min.css" />
    <!-- Or for RTL support -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.2.0/dist/select2-bootstrap-5-theme.rtl.min.css" />

    <script src="{{asset('js_aplicacion/general.js')}}"></script>
    <script src="{{asset('js_aplicacion/login.js')}}"></script>
    <script src="{{asset('js_aplicacion/reportes.js')}}"></script>



    <script src="{{asset('assets/plugins/dropify/dist/js/dropify.min.js')}}"></script>
    <script src="{{asset('assets/plugins/highcharts/highstock.js')}}"></script>
    <script src="{{asset('assets/plugins/highcharts/exporting.js')}}"></script>
    <script src="{{asset('assets/plugins/jspdf/jspdf.min.js')}}"></script>


    <!-- jspdf -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.6/jspdf.plugin.autotable.js"></script>


    <script src="{{asset('assets/plugins/styleswitcher/jQuery.style.switcher.js')}}"></script>
    <script src="{{asset('assets/plugins/switchery/dist/switchery.min.js')}}"></script>

</body>

</html>