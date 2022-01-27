const mostrarIniciarSesion = () => {
    $('#card-login')[0].hidden = false;
    $('#card-register')[0].hidden = true;
}

const mostrarRegistro = () => {
    $('#card-register')[0].hidden = false;
    $('#card-login')[0].hidden = true;
}

const registrarUsuario = () => {

    let nombre = $('#txtNombre').val();
    let usuario = $('#txtusuarioregistro').val();
    let password = $('#txtpasswordregistro').val();
    let rol = $('#cmbRol').val();

    let result = '';
    if (!usuario.includes('@') || usuario == '' || usuario == undefined) {
        showNotification("bg-red", 'Tiene que ingresar un correo valido', "bottom", "right", "", "");
        result = 'error';
    }

    if (password == '' || password == undefined) {
        showNotification("bg-red", 'Tiene que ingresar una contraseña', "bottom", "right", "", "");
        result = 'error';
    } else {
        if (password.length < 8) {
            showNotification("bg-red", 'La contraseña debe contener al menos 8 carácteres', "bottom", "right", "", "");
            result = 'error';
        }
    }

    if (nombre == '' || nombre == undefined) {
        showNotification("bg-red", 'Tiene que ingresar un nombre', "bottom", "right", "", "");
        result = 'error';
    }

    if (rol == '0') {
        showNotification("bg-red", 'Debe seleccionar un rol', "bottom", "right", "", "");
        result = 'error';
    }

    if (validarEmail(usuario) == 'error') {
        showNotification("bg-red", 'El correo no es un correo valido', "bottom", "right", "", "");
        result = 'error';
    }

    if (result != 'error') {

        datos = {
            nombre: validarCamposLetras(nombre),
            email: usuario,
            password: password,
            rol: rol,
            _token: $('input[name="_token"]').val(),
        };
        swal({
            title: "¿Deseas continuar?",
            text:
                "Por favor, confirma que deseas agregar el registro",
            type: "info",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#184f4f",
            confirmButtonText: "Si, Agregar",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function () {
            $.ajax({
                url: "/public/usuarios/acciones/agregar",
                method: "POST",
                data: datos,
            }).done(function (res) {
                if (res == "OK") {
                    swal(
                        {
                            type: "success",
                            title: "Correcto",
                            text: "Se agrego correctamente el registro.",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public";
                        }
                    );
                } else {
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de guardar",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public";
                        }
                    );
                }
            }).fail(function (res) {
                swal(
                    {
                        type: "error",
                        title: "Error",
                        text: "Ha ocurrido un error al momento de guardar",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/public";
                    }
                );
            });
        });
    }
}

const iniciarSesion = () => {
    let email = $('#txtusuario').val();
    let password = $('#txtpassword').val();
    let result = '';

    if (validarEmail(email) != 'ok') {
        showNotification("bg-red", 'Tiene que ingresar un correo valido', "bottom", "right", "", "")
        result = 'error';
    }

    if (email == '' || email == undefined) {
        showNotification("bg-red", 'Tiene que ingresar un correo valido', "bottom", "right", "", "")
        result = 'error';
    }

    if (password == '' || password == undefined) {
        showNotification("bg-red", 'Debe ingesar una contraseña', "bottom", "right", "", "")
        result = 'error';
    }

    if (result != 'error') {
        datos = {
            email: email,
            password: password,
            _token: $('input[name="_token"]').val(),
        };

        console.log(datos);
        $.ajax({
            url: "/public/usuarios/acciones/login",
            method: "POST",
            data: datos,
        }).done(function (res) {
            console.log(res);
            if (res.startsWith('OK')) {
                swal(
                    {
                        type: "success",
                        title: "Bienvenido",
                        text: res.split('¬')[1],
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/public/paginaPrincipal";
                    }
                );
            } else {
                swal(
                    {
                        type: "error",
                        title: "Error",
                        text: res,
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/public";
                    }
                );
            }
        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error al momento de procesar su solicitud",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public";
                }
            );
        });
    }
}

const RegistrarUsuarioAdmin = () => {

    let nombre = $('#txtNombre').val();
    let usuario = $('#txtusuarioregistro').val();
    let password = $('#txtpasswordregistro').val();
    let rol = $('#cmbRol').val();

    let result = '';
    if (!usuario.includes('@') || usuario == '' || usuario == undefined) {
        showNotification("bg-red", 'Tiene que ingresar un correo valido', "bottom", "right", "", "");
        result = 'error';
    }

    if (password == '' || password == undefined) {
        showNotification("bg-red", 'Tiene que ingresar una contraseña', "bottom", "right", "", "");
        result = 'error';
    } else if (password.length < 8) {
        showNotification("bg-red", 'La contraseña debe contener al menos 8 carácteres', "bottom", "right", "", "");
        result = 'error';
    }

    if (nombre == '' || nombre == undefined) {
        showNotification("bg-red", 'Tiene que ingresar un nombre', "bottom", "right", "", "");
        result = 'error';
    }

    if (rol == '0') {
        showNotification("bg-red", 'Debe seleccionar un rol', "bottom", "right", "", "");
        result = 'error';
    }

    if (validarEmail(usuario) == 'error') {
        showNotification("bg-red", 'El correo no es un correo valido', "bottom", "right", "", "");
        result = 'error';
    }

    if (result != 'error') {

        datos = {
            nombre: validarCamposLetras(nombre),
            email: usuario,
            password: password,
            rol: rol,
            _token: $('input[name="_token"]').val(),
        };
        swal({
            title: "¿Deseas continuar?",
            text:
                "Por favor, confirma que deseas agregar el registro",
            type: "info",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#184f4f",
            confirmButtonText: "Si, Agregar",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function () {
            $.ajax({
                url: "/public/usuarios/acciones/agregar",
                method: "POST",
                data: datos,
            }).done(function (res) {
                if (res == "OK") {
                    swal(
                        {
                            type: "success",
                            title: "Correcto",
                            text: "Se agrego correctamente el registro.",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/usuarios";
                        }
                    );
                } else {
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de guardar",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/usuarios";
                        }
                    );
                }
            }).fail(function (res) {
                swal(
                    {
                        type: "error",
                        title: "Error",
                        text: "Ha ocurrido un error al momento de guardar",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/public/usuarios";
                    }
                );
            });
        });
    }
}

const detalleUsuario = (uid) => {

}

const eliminarUsuario = (uid) => {

}

const MostrarDivContraseña = () => {
    let divCon = $('#divContraseña')[0];
    divCon.hidden = !divCon.hidden;
}

const limpiarCamposAgregar = () => {

}
const limpiarCamposModificar = () => {
    $('#divContraseña')[0].hidden=true;
    $('#txtNombreUpdate').val('');
    $('#txtusuarioUpdate').val('');
    $('#txtpasswordUpdate').val('');
    $('#cmbRolUpdate').val(0);
    $('#switchCambioContraseña')[0].checked = false;
     /**
      *  @if(isset($usuario->avatar))
      * <td> <a href="{{$usuario->avatar}}"> <img src="{{$usuario->avatar}}" alt="User" style="width: 10%; height: 10%;"></a></td>
      * @else<td><a href="{{$usuario->avatar}}"> <img src="{{asset('img/user.png')}}" style="width: 10%; height:10%;" alt="Usuario"></a></td>endif
      */
}
