/****************************************************
 * Notificaciones
 ****************************************************/
function showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') {
        colorName = 'bg-black';
    }
    if (text === null || text === '') {
        text = 'Turning standard Bootstrap alerts';
    }
    if (animateEnter === null || animateEnter === '') {
        animateEnter = 'animated fadeInDown';
    }
    if (animateExit === null || animateExit === '') {
        animateExit = 'animated fadeOutUp';
    }
    var allowDismiss = true;

    $.notify({
        message: text
    },
        {
            type: 'alert-info',
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 100,
            z_index: 1500,
            placement: {
                from: placementFrom,
                align: placementAlign
            },
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            template: '<div class="alert alert-info text-uppercase">' + text +
                ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                '</div>'
        });
}

/****************************************************
 *              Validaciones
 ****************************************************/
function validarCamposLetras(valor) {
    const WHITE_LIST_MAY = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const WHITE_LIST_MIN = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const WHITE_LIST_NUM = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", " ", "@", "_"];
    const WHITE_LIST_EXC = ["Á", "É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];

    str = '';

    if (valor.length > 0) {
        for (let i of valor) {
            str += WHITE_LIST_MAY.indexOf(i) > -1 ? i : '';
            str += WHITE_LIST_MIN.indexOf(i) > -1 ? i : '';
            str += WHITE_LIST_NUM.indexOf(i) > -1 ? i : '';
            str += WHITE_LIST_EXC.indexOf(i) > -1 ? i : '';
        }
    } else
        str = '0';

    return str;
}

function validarEmail(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(valor)) {
        return "error";
    }
    else {
        return "ok";
    };
}

const GuardarImagen = () => {
    if (document.getElementsByClassName('dropify-render')[0].children[0] !== undefined) {
        let img = document.getElementsByClassName('dropify-render')[0].children[0].src;
        let uid = $('#txtuid').val();

        datos = {
            id: uid,
            imagen: img,
            _token: $('input[name="_token"]').val()
        };

        $.ajax({
            url: "/public/usuarios/acciones/update",
            method: "POST",
            data: datos,
        }).done(function (res) {
            if (res == 'OK') {
                swal(
                    {
                        type: "success",
                        title: "Correcto",
                        text: "Imagen guardada con éxito",
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
                        location.href = "/public/paginaPrincipal";
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
                    location.href = "/public/paginaPrincipal";
                }
            );
        });
    } else {
        swal({
            type: 'info',
            title: 'Aviso',
            text: 'Debe de agregar una nueva imagen para poder guardar, compruebe !!!',
            confirmButtonText: 'OK'
        });
    }
}

/**
 * Uso de Datatables
 */
$(document).ready(function () {
    $('#txtpassword').bind('keyup', function (e) {
        var key = e.keyCode || e.which;
        if (key === 13) {
            iniciarSesion();
        };
    });

    /**
     * Uso de Select2
     */
    $('#cmbRol').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbRolUpdate').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });
    $('#cmbSemanaDireccion').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbSemanaGerentes').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });


    /***
     * Uso de Dropify
     */
    // Basic
    $('.dropify').dropify();
    // Used events
    var drEvent = $('#input-file-events').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

    drEvent.on('dropify.errors', function (event, element) {
        console.log('Has Errors');
    });

    var drDestroy = $('#input-file-to-destroy').dropify();
    drDestroy = drDestroy.data('dropify')
    $('#toggleDropify').on('click', function (e) {
        e.preventDefault();
        if (drDestroy.isDropified()) {
            drDestroy.destroy();
        } else {
            drDestroy.init();
        }
    })


    /**
     * Uso de Datatables
     */
    $('#tblReporteVentas').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend: 'copyHtml5',
            text: '<i class="fa fa-table"></i>  Copy',
            titleAttr: 'copy',
            className: 'btn btn-outline-info'
        }, {
            extend: 'excelHtml5',
            text: '<i class="fas fa-file-excel"></i>  EXCEL',
            titleAttr: 'Excel',
            className: 'btn btn-outline-info',
            style: 'background-color:#184f4f;'
        },
        {
            extend: 'csvHtml5',
            text: '<i class="fas fa-file-alt"></i>  CSV',
            titleAttr: 'CSV',
            className: 'btn btn-outline-info'
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="fas fa-file-pdf"></i>  PDF',
            titleAttr: 'PDF',
            className: 'btn btn-outline-info'
        }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i>  IMPRIMIR',
            titleAttr: 'print',
            className: 'btn btn-outline-info'
        }
        ],
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": true,
        /*  "footerCallback": function (row, data, start, end, display) {
             var api = this.api(),
                 data;
 
             // Remove the formatting to get integer data for summation
             var intVal = function (i) {
                 return typeof i === 'string' ?
                     i.replace(/[\$,]/g, '') * 1 :
                     typeof i === 'number' ?
                         i : 0;
             };
 
             // Total over all pages
             total = api
                 .column(7)
                 .data()
                 .reduce(function (a, b) {
                     return intVal(a) + intVal(b);
                 }, 0);
 
             // Total over this page
             pageTotal = api
                 .column(7, {
                     page: 'current'
                 })
                 .data()
                 .reduce(function (a, b) {
                     return intVal(a) + intVal(b);
                 }, 0);
 
             // Update footer
             $(api.column(7).footer()).html(
                 'Total de lo Mostrado  $' + pageTotal +
                 '\n Total de todo lo mostrado: $' + total
             );
         } */
    });

    $('#tblReporteVentasAll').DataTable({
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": true,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            // Total over all pages
            total = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            pageTotal = api
                .column(7, {
                    page: 'current'
                })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(7).footer()).html(
                'Total de lo Mostrado  $' + pageTotal +
                '\n Total de todo lo mostrado: $' + total
            );
        }
    })

    $('#tblUsuarios').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend: 'copyHtml5',
            text: '<i class="fa fa-table"></i>  Copy',
            titleAttr: 'copy',
            className: 'btn btn-outline-info'
        }, {
            extend: 'excelHtml5',
            text: '<i class="fas fa-file-excel"></i>  EXCEL',
            titleAttr: 'Excel',
            className: 'btn btn-outline-info',
            style: 'background-color:#184f4f;'
        },
        {
            extend: 'csvHtml5',
            text: '<i class="fas fa-file-alt"></i>  CSV',
            titleAttr: 'CSV',
            className: 'btn btn-outline-info'
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="fas fa-file-pdf"></i>  PDF',
            titleAttr: 'PDF',
            className: 'btn btn-outline-info'
        }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i>  IMPRIMIR',
            titleAttr: 'print',
            className: 'btn btn-outline-info'
        }
        ],
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": true,
        "responsive": true,
        "sPaginationType": "full_numbers",
    });

    /**
     * Uso de Switchery
     */

    // Switchery
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    $('.js-switch').each(function () {
        new Switchery($(this)[0], $(this).data());
    });

    if (window.location.href === "http://envasesmicroonda:8081/public/reporteSemanal") {
        currentdatec = new Date();
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        var resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7);

        datos = {
            semana: resultado - 1
        }
        $.ajax({
            url: "/public/direccion/reportes/top20",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬")) {
                if (res.split("¬")[0] == "ERROR") {

                }
            } else {
                $("tblReporteVentasSemanalDireccion").DataTable().clear().draw(false);

            }

        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public/paginaPrincipal";
                });
        })
    }

    // *******************************************************************************************************************************************************

    /**
     * Funcion General consulta semenal
     */

    $(document).on("change", "#cmbSemanaDireccion", function () {
        $('#ventanaCarga').modal('show');
        consultarInformacionSemanalOtras();
        consultarInformacionSemanalCalzado();
    });


    $(document).on("change", "#cmbSemanaGerentes", function(){
        $('#ventanaCarga').modal("show");
        consultarInformacionSemanalCalzadoGerencia();
        consultarInformacionSemanalOtrasGerencia();
    })

    // *******************************************************************************************************************************************************

    /**
     * Carga de datos Direccion General
     */
    let TablaVentasSemanalDireccion = $("#tblReporteVentasSemanalDireccion").DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        "order": [
            [0, "desc"]
        ],
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [0]
        }],
        "footerCallback": function (row, data, start, end, display) {
            let api = this.api();
            //data;

            // Remove the formatting to get integer data for summation
            let intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            total1 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(3).footer()).html(
                '$ ' + total1.toFixed(2)
            );
            $(api.column(4).footer()).html(
                '$ ' + total2.toFixed(2)
            );
            $(api.column(5).footer()).html(
                '$ ' + total3.toFixed(2)
            );
            $(api.column(6).footer()).html(
                '$ ' + total4.toFixed(2)
            );
            $(api.column(7).footer()).html(
                '$ ' + total5.toFixed(2)
            );
            $(api.column(8).footer()).html(
                '$ ' + total6.toFixed(2)
            );
            $(api.column(9).footer()).html(
                '$ ' + total7.toFixed(2)
            );
            $(api.column(10).footer()).html(
                '$ ' + total8.toFixed(2)
            );
        }


    });

    TablaVentasSemanalDireccion.context[0]._iDisplayLength = 50;

    const consultarInformacionSemanalOtras = () => {

        resultado = $('#cmbSemanaDireccion').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/direccion/reportes/top20",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬") == true) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta === "ERROR") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de consultar la Información",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
                if (respuesta === 'ERROR1') {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "info",
                            title: "Sin Información",
                            text: mensaje,
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
            } else {
                TablaVentasSemanalDireccion.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalDireccion.row.add([
                        venta.ORDEN,
                        venta.CLAVE,
                        venta.CLIENTE,
                        venta.UNIDADES_ANNIO1,
                        venta.UNIDADES_ANNIO2,
                        venta.UNIDADES_ANNIO3,
                        venta.UNIDADES_ACTUALES,
                        venta.IMPORTE_ANNIO1,
                        venta.IMPORTE_ANNIO2,
                        venta.IMPORTE_ANNIO3,
                        venta.IMPORTE_ACTUAL
                    ]).draw(false);
                });

                data = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": (res[index].ORDEN).toFixed(2),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosPastelPromedio(res);
            }

        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public/paginaPrincipal";
                });
        })
    }
    
    let TablaVentasSemanalDireccionCalzado = $("#tblReporteVentasSemanalDireccionCalzado").DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        "order": [
            [0, "desc"]
        ],
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [0]
        }],
        "footerCallback": function (row, data, start, end, display) {
            let api = this.api();
            //data;

            // Remove the formatting to get integer data for summation
            let intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            total1 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(3).footer()).html(
                '$ ' + total1.toFixed(2)
            );
            $(api.column(4).footer()).html(
                '$ ' + total2.toFixed(2)
            );
            $(api.column(5).footer()).html(
                '$ ' + total3.toFixed(2)
            );
            $(api.column(6).footer()).html(
                '$ ' + total4.toFixed(2)
            );
            $(api.column(7).footer()).html(
                '$ ' + total5.toFixed(2)
            );
            $(api.column(8).footer()).html(
                '$ ' + total6.toFixed(2)
            );
            $(api.column(9).footer()).html(
                '$ ' + total7.toFixed(2)
            );
            $(api.column(10).footer()).html(
                '$ ' + total8.toFixed(2)
            );
        }


    });

    TablaVentasSemanalDireccionCalzado.context[0]._iDisplayLength = 50;

    const consultarInformacionSemanalCalzado = () => {
        resultado = $('#cmbSemanaDireccion').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/direccion/reportes/top50",
            method: "GET",
            data: datos,
        }).done(function (res) {
            console.log(res);
            if (res.includes("¬")) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta == "ERROR") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de consultar la Información",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                } else if (respuesta == "ERROR1") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "info",
                            title: "Sin Información",
                            text: mensaje,
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
            } else {
                TablaVentasSemanalDireccionCalzado.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalDireccionCalzado.row.add([
                        venta.ORDEN,
                        venta.CLAVE,
                        venta.CLIENTE,
                        venta.UNIDADES_ANNIO1,
                        venta.UNIDADES_ANNIO2,
                        venta.UNIDADES_ANNIO3,
                        venta.UNIDADES_ACTUALES,
                        venta.IMPORTE_ANNIO1,
                        venta.IMPORTE_ANNIO2,
                        venta.IMPORTE_ANNIO3,
                        venta.IMPORTE_ACTUAL
                    ]).draw(false);
                });

                data = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": (res[index].ORDEN).toFixed(2),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                let salida = graficosPastelPromedioCalzado(res);

                if (salida) {
                    $('#ventanaCarga').modal('toggle');
                }
            }

        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public/paginaPrincipal";
                });
        })
    }

    // *******************************************************************************************************************************************************

    /**
     * Carga de Datos Gerencia
     */

     let TablaVentasSemanalGerencia = $("#tblReporteVentasSemanalGerencia").DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        "order": [
            [0, "desc"]
        ],
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [0]
        }],
        "footerCallback": function (row, data, start, end, display) {
            let api = this.api();
            //data;

            // Remove the formatting to get integer data for summation
            let intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            total1 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(3).footer()).html(
                '$ ' + total1.toFixed(2)
            );
            $(api.column(4).footer()).html(
                '$ ' + total2.toFixed(2)
            );
            $(api.column(5).footer()).html(
                '$ ' + total3.toFixed(2)
            );
            $(api.column(6).footer()).html(
                '$ ' + total4.toFixed(2)
            );
            $(api.column(7).footer()).html(
                '$ ' + total5.toFixed(2)
            );
            $(api.column(8).footer()).html(
                '$ ' + total6.toFixed(2)
            );
            $(api.column(9).footer()).html(
                '$ ' + total7.toFixed(2)
            );
            $(api.column(10).footer()).html(
                '$ ' + total8.toFixed(2)
            );
        }


    });

    TablaVentasSemanalGerencia.context[0]._iDisplayLength = 50;

    const consultarInformacionSemanalOtrasGerencia = () => {
        let resultado = $('#cmbSemanaGerentes').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/direccion/reportes/top20",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬") == true) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta === "ERROR") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de consultar la Información",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
                if (respuesta === 'ERROR1') {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "info",
                            title: "Sin Información",
                            text: mensaje,
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
            } else {
                TablaVentasSemanalDireccion.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalDireccion.row.add([
                        venta.ORDEN,
                        venta.CLAVE,
                        venta.CLIENTE,
                        venta.UNIDADES_ANNIO1,
                        venta.UNIDADES_ANNIO2,
                        venta.UNIDADES_ANNIO3,
                        venta.UNIDADES_ACTUALES,
                        venta.IMPORTE_ANNIO1,
                        venta.IMPORTE_ANNIO2,
                        venta.IMPORTE_ANNIO3,
                        venta.IMPORTE_ACTUAL
                    ]).draw(false);
                });

                data = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": (res[index].ORDEN).toFixed(2),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosPastelPromedio(res);
            }

        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public/paginaPrincipal";
                });
        })
    }

    let TablaVentasSemanalGerenciaCalzado = $("#tblReporteVentasSemanalGerenciaCalzado").DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        "order": [
            [0, "desc"]
        ],
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [0]
        }],
        "footerCallback": function (row, data, start, end, display) {
            let api = this.api();
            //data;

            // Remove the formatting to get integer data for summation
            let intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            total1 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(3).footer()).html(
                '$ ' + total1.toFixed(2)
            );
            $(api.column(4).footer()).html(
                '$ ' + total2.toFixed(2)
            );
            $(api.column(5).footer()).html(
                '$ ' + total3.toFixed(2)
            );
            $(api.column(6).footer()).html(
                '$ ' + total4.toFixed(2)
            );
            $(api.column(7).footer()).html(
                '$ ' + total5.toFixed(2)
            );
            $(api.column(8).footer()).html(
                '$ ' + total6.toFixed(2)
            );
            $(api.column(9).footer()).html(
                '$ ' + total7.toFixed(2)
            );
            $(api.column(10).footer()).html(
                '$ ' + total8.toFixed(2)
            );
        }


    });

    TablaVentasSemanalGerenciaCalzado.context[0]._iDisplayLength = 50;

    const consultarInformacionSemanalCalzadoGerencia = () => {
        resultado = $('#cmbSemanaGerentes').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/direccion/reportes/top50",
            method: "GET",
            data: datos,
        }).done(function (res) {
            console.log(res);
            if (res.includes("¬")) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta == "ERROR") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "error",
                            title: "Error",
                            text: "Ha ocurrido un error al momento de consultar la Información",
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                } else if (respuesta == "ERROR1") {
                    $('#ventanaCarga').modal('toggle');
                    swal(
                        {
                            type: "info",
                            title: "Sin Información",
                            text: mensaje,
                            confirmButtonText: "OK",
                        },
                        function () {
                            location.href = "/public/paginaPrincipal";
                        }
                    );
                }
            } else {
                TablaVentasSemanalDireccionCalzado.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalDireccionCalzado.row.add([
                        venta.ORDEN,
                        venta.CLAVE,
                        venta.CLIENTE,
                        venta.UNIDADES_ANNIO1,
                        venta.UNIDADES_ANNIO2,
                        venta.UNIDADES_ANNIO3,
                        venta.UNIDADES_ACTUALES,
                        venta.IMPORTE_ANNIO1,
                        venta.IMPORTE_ANNIO2,
                        venta.IMPORTE_ANNIO3,
                        venta.IMPORTE_ACTUAL
                    ]).draw(false);
                });

                data = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": (res[index].ORDEN).toFixed(2),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                let salida = graficosPastelPromedioCalzado(res);

                if (salida) {
                    $('#ventanaCarga').modal('toggle');
                }
            }

        }).fail(function (res) {
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/public/paginaPrincipal";
                });
        })
    }

    // *******************************************************************************************************************************************************
});