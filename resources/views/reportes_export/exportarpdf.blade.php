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
    <title>Envases Microonda</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
    <!-- You can change the theme colors from here -->
    <link href="{{asset('css/colors/themeMicro.css')}}" id="theme" rel="stylesheet">
    <style>
        table {
            border-collapse: collapse;
            border-spacing: 0;
            font-family: Arial !important;
            font-size: 6.5pt;
        }

        .footer {
            position: fixed;
            bottom: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            color: white;
            text-align: center;
            line-height: 35px;
            mask-image:'http://192.168.5.200:8081/public/img/Unboxing_smiles_2.png';
        }
    </style>

</head>

<body class="fix-header fix-sidebar card-no-border">
    <div class="header text-center">
        <div class="col-md-4 text-center">
            <img src="http://192.168.5.200:8081/public/img/Imagen1.png" style="float: left; clear:left;" alt="Logo Microonda" />
            <h1 class="text-dark">Envases Microonda S.A. de C.V.</h1>
        </div>
    </div>
    <div class="body">
        <table class="table table-bordered mb-5">
            <thead>
                <tr class="table-danger">
                    <th>Folio documento</th>
                    <th>Documento</th>
                    <th>Clave del Producto</th>
                    <th>Producto</th>
                    <th>Agente</th>
                    <th>Unidades Vendidas</th>
                    <th>Precio Unidad</th>
                </tr>
            </thead>
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
                </tr>
                @empty

                @endforelse
            </tbody>
        </table>
    </div>
    <div class="footer text-center">
    </div>

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
</body>

</html>