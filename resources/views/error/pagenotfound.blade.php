@extends('layout.layout2')
@section('contenido')
<div class="fix-header fix-sidebar card-no-border">
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <section id="wrapper" class="error-page">
        <div class="error-box">
            <div class="error-body text-center">
                <h1 class="text-info">404</h1>
                <h3 class="text-uppercase">Recurso no disponible !</h3>
                <p class="text-muted m-t-30 m-b-30">
                    PARECE ESTAR TRATANDO DE ENCONTRAR SU CAMINO A CASA</p>
                <a href="{{URL::to('/paginaPrincipal')}}" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Volver a casa</a> </div>
                <footer class="footer text-center" style="color: #184F4F;">
                © 2021 Envases Microonda S.A de C.V
            </footer>
        </div>
    </section>
</div>

@endsection