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
                url: "/usuarios/acciones/registrar",
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
                            location.href = window.location.origin;
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
                            location.href = window.location.origin;
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
                        location.href = window.location.origin;
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

        $.ajax({
            url: "/usuarios/acciones/login",
            method: "POST",
            data: datos,
        }).done(function (res) {
            if (res.startsWith('OK')) {
                swal(
                    {
                        type: "success",
                        title: "Bienvenido",
                        text: res.split('¬')[1],
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/paginaPrincipal";
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
                        location.href = window.location.origin;
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
                    location.href =window.location.origin;
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
                url: "/usuarios/acciones/agregar",
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
                            location.href = "/usuarios";
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
                            location.href = "/usuarios";
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
                        location.href = "/usuarios";
                    }
                );
            });
        });
    }
}

const detalleUsuario = (uid) => {
    datos = {
        id: uid,
        _token: $('input[name="_token"]').val()
    };

    $.ajax({
        url: "/usuarios/acciones/consultar",
        method: "POST",
        data: datos,
    }).done(function (res) {
        if (res != null || res != undefined) {
            $('#txtNombreUpdate').val(res.name);
            $('#txtusuarioUpdate').val(res.email);
            switch (res.rol) {
                case 'Gerente':
                    $('#cmbRolUpdate').val(res.rol).change();
                    break;
                case 'Agente':
                    $('#cmbRolUpdate').val(res.rol).change();
                    break;
            }

            $('#idUser').val(res.id);
            $('#updateInformation').modal('show');
        } else {
            swal(
                {
                    type: "info",
                    title: "Aviso",
                    text: "No existe un usuario para visualizar",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/usuarios";
                }
            );
        }
    }).fail(function (res) {
        swal(
            {
                type: "error",
                title: "Error",
                text: "Ha ocurrido un error al momento de realizar su petición, intente de nuevo.",
                confirmButtonText: "OK",
            },
            function () {
                location.href = "/usuarios";
            }
        );
    });
}

const updatedatauser = () => {
    let nombre = $('#txtNombreUpdate').val();
    let usuario = $('#txtusuarioUpdate').val();
    let password = $('#txtpasswordUpdate').val();
    let rol = $('#cmbRolUpdate').val();
    let uid = $('#idUser').val();

    let result = '';
    if (!usuario.includes('@') || usuario == '' || usuario == undefined) {
        if (validarEmail(usuario) == 'error') {
            showNotification("bg-red", 'El correo no es un correo valido', "bottom", "right", "", "");
            result = 'error';
        } else {
            showNotification("bg-red", 'Tiene que ingresar un correo valido', "bottom", "right", "", "");
            result = 'error';
        }
    }

    if ($('#switchCambioContraseña').checked == true) {
        if (password == '' || password == undefined) {
            showNotification("bg-red", 'Tiene que ingresar una contraseña', "bottom", "right", "", "");
            result = 'error';
        } else if (password.length < 8) {
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

    if (result != 'error') {
        datos = {
            id: uid,
            nombre: validarCamposLetras(nombre),
            email: usuario,
            password: password,
            rol: rol,
            _token: $('input[name="_token"]').val(),
        };
        swal({
            title: "¿Deseas continuar?",
            text:
                "Por favor, confirma que deseas modificar el registro",
            type: "info",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#184f4f",
            confirmButtonText: "Si, Modificar",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function () {
            $.ajax({
                url: "/usuarios/acciones/updateDataUser",
                method: "POST",
                data: datos,
            }).done(function (res) {

                if (res == "OK") {
                    swal(
                        {
                            type: "success",
                            title: "Correcto",
                            text: "Se modifico correctamente el registro.",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/usuarios";
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
                            location.href = "/usuarios";
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
                        location.href = "/usuarios";
                    }
                );
            });
        });
    }

}

const eliminarUsuario = (uid) => {
    datos = {
        id: uid,
        _token: $('input[name="_token"]').val(),
    };

    swal({
        title: "¿Deseas continuar?",
        text:
            "Por favor, confirma que deseas eliminar el registro",
        type: "info",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, Eliminar",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        $.ajax({
            url: "/usuarios/acciones/delete",
            method: "POST",
            data: datos,
        }).done(function (res) {
            if (res == "OK") {
                swal(
                    {
                        type: "success",
                        title: "Correcto",
                        text: "Se elimino correctamente el registro.",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/usuarios";
                    }
                );
            } else {
                swal(
                    {
                        type: "error",
                        title: "Error",
                        text: "Ha ocurrido un error al momento de eliminar",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/usuarios";
                    }
                );
            }
        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error al momento de eliminar",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/usuarios";
                }
            );
        });
    });

}

const ActivarUsuario = (uid) => {
    datos = {
        id: uid,
        _token: $('input[name="_token"]').val(),
    };

    swal({
        title: "¿Deseas continuar?",
        text:
            "Por favor, confirma que deseas eliminar el registro",
        type: "info",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#184f4f",
        confirmButtonText: "Si, Activar",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        $.ajax({
            url: "/usuarios/acciones/active",
            method: "POST",
            data: datos,
        }).done(function (res) {
            if (res == "OK") {
                swal(
                    {
                        type: "success",
                        title: "Correcto",
                        text: "Se activo correctamente el registro.",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/usuarios";
                    }
                );
            } else {
                swal(
                    {
                        type: "error",
                        title: "Error",
                        text: "Ha ocurrido un error al momento de activar",
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/usuarios";
                    }
                );
            }
        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error al momento de activar",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/usuarios";
                }
            );
        });
    });
}

const MostrarDivContraseña = () => {
    let divCon = $('#divContraseña')[0];
    divCon.hidden = !divCon.hidden;
}

const limpiarCamposAgregar = () => {
    $('#txtNombre').val('');
    $('#txtusuarioregistro').val('');
    $('#txtpasswordregistro').val('');
    $('#cmbRol').val(0).change();
}
const limpiarCamposModificar = () => {
    $('#divContraseña')[0].hidden = true;
    $('#txtNombreUpdate').val('');
    $('#txtusuarioUpdate').val('');
    $('#txtpasswordUpdate').val('');
    $('#cmbRolUpdate').val(0).change();
    $('#switchCambioContraseña')[0].checked = false;
    /**
     *  @if(isset($usuario->avatar))
     * <td> <a href="{{$usuario->avatar}}"> <img src="{{$usuario->avatar}}" alt="User" style="width: 10%; height: 10%;"></a></td>
     * @else<td><a href="{{$usuario->avatar}}"> <img src="{{asset('img/user.png')}}" style="width: 10%; height:10%;" alt="Usuario"></a></td>endif
     */
}
