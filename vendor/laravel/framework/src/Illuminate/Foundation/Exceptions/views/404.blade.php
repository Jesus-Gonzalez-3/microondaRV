@extends('layout.layout2')

@section('title', __('Not Found'))
@section('contenido')
<div class="fix-header fix-sidebar card-no-border">
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <section id="wrapper" class="error-page">
        <div class="error-box container-fluid">
            <div class="error-body text-center">
                <div class="card text-left">
                    <div class="card-header">
                        <center>
                            <img class="card-img-top" src="{{asset('/img/logo_mc2.3.1.png')}}" style="width: 15%; height: 10%;" alt="Home" />
                        </center>
                    </div>
                    <div class="card-body text-center">
                        <h1 class="card-title text-info">404</h1>
                        <h3 class="text-uppercase">Recurso no disponible !</h3>
                        <p class="text-muted m-t-30 m-b-30">
                            PARECE ESTAR TRATANDO DE ENCONTRAR SU CAMINO A CASA</p>
                        <a href="{{URL::to('/paginaPrincipal')}}" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Volver a casa</a>
                    </div>
                    <div class="card-footer">
                        <center>
                            <img class="card-img-bottom" src="{{asset('/img/Unbooxing_smiles_2.png')}}" style="height: 80%; width: 15%; " alt="Microonda">
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection