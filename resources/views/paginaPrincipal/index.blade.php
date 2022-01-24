@extends('layout.layout')

@section('contenido')
<div class="card">
    <div class="card-header">
    <center>
        <img class="card-img-top" src="{{asset('/img/logo_mc2.3.1.1.png')}}" style="height: 40%; width: 20%;" alt="logo Microondas">
    </center>
    </div>
    <div class="card-body">
    <h1 class="card-title text-center">Envases Microonda S.A. de C.V © </h1>
    <br>
    <br>
        <h3 class="text-center" >POLÍTICA INTEGRAL</h3>
        <div class="row">
            <div class="col-3">
            </div>
            <div class="col-6">
                <p class="card-text text-dark text-justify">
                    En ENVASES MICROONDA nos dedicamos a la fabricación de empaques de cartón y estamos comprometidos a cumplir los requisitos legales y reglamentarios aplicables establecidos
                    con nuestros clientes apoyándonos en nuestro sistema de gestión integral que dentro de nuestro contexto nos ayude a proteger la inocuidad de nuestros productos, cuidar el
                    medio ambiente, la competencia y seguridad de nuestros colaboradores, la rentabilidad de la empresa a través de la mejora continua, estableciendo canales de comunicación
                    interna y externa para satisfacer a las partes interesadas.
                </p>
            </div>
            <div class="col-3">

            </div>
        </div>
        <br>
        <div class="row text-center">
            <div class="col-md-4">
                <h1><i class="fas fa-bullseye" aria-hidden="true"></i></h1>
                <h3 class="card-text">Misión</h3>
                <p class="card-text text-dark text-justify" style="color: #184F4F;">
                    Fabricamos de cajas de cartón para la imagen y protección del producto de nuestros clientes.
                </p>
            </div>
            <div class="col-md-4">
                <h1><i class="fa fa-eye" aria-hidden="true"></i></h1>
                <h3 class="card-text">Visión</h3>
                <p class="card-text text-dark text-justify" style="color: #184F4F;">
                    Ser la empresa líder en el mercado de cajas de cartón, altamente confiable mediante tecnología de vanguardia y niveles de competitividad mundial.
                </p>
            </div>
            <div class="col-md-4">
                <h1><i class="fas fa-list-alt" aria-hidden="true"></i></h1>
                <h3 class="card-text" >Valores</h3>
                <ul class="list-group text-dark">
                    <li class="list-group-item  border-0" > <i class="fa fa-check-circle" aria-hidden="true"></i> &nbsp; Responsabilidad.</li>
                    <li class="list-group-item  border-0" > <i class="fa fa-check-circle" aria-hidden="true"></i> &nbsp; Respeto</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-footer">
        <center>
            <img class="card-img-bottom" src="{{asset('/img/Unbooxing_smiles_2.png')}}" style="height: 80%; width: 20%; " alt="Microonda">
        </center>
    </div>
</div>
@endsection