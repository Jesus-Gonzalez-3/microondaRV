$(document).ready(function () {
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
            targets: 0,
        }],
        "responsive": true,
        "autoWidth": false,
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [0, 7, 8, 9, 10],
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
            "aTargets": [0, 7, 8, 9, 10]
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

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteSemanalGerentes" || window.location.href == "http://192.168.5.200:8081/public/reporteSemanalGerentes") {
        currentdatec = new Date();
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        var resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7) - 1;
        if (resultado > 50) {
            resultado = 50;
        }

        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/gerencia/reportes/top20",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬") == true) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta === "ERROR") {
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
                TablaVentasSemanalGerencia.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalGerencia.row.add([
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
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosbarrasPromedio(res);
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
        });

        $.ajax({
            url: "/public/gerencia/reportes/top50",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬")) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta == "ERROR") {
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
                TablaVentasSemanalGerenciaCalzado.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalGerenciaCalzado.row.add([
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
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                let salida = graficosbarrasPromedioCalzado(res);
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
        });
    };

    /* if (window.location.href === "http://envasesmicroonda:8081/public/reporteSemanalDireccion" || window.location.href === "http://192.168.5.200:8081/public/reporteSemanalDireccion") {
        currentdatec = new Date();
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        var resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7) - 1;
        if (resultado > 50) {
            resultado = 50;
        }

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
                data2 = []
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.replace(',', '').replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "IMPORTE_ACTUAL": Number(res[index].IMPORTE_ACTUAL.replace(',', '').replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data2.push(element);

                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosbarrasPromedio(res);
                inicializarGraficaTipoBarraImporte(data2);
                inicializarGraficaTipoPastelImporte(data2);
                graficosbarrasPromedioImporte(res);
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
        });

        $.ajax({
            url: "/public/direccion/reportes/top50",
            method: "GET",
            data: datos,
        }).done(function (res) {
            if (res.includes("¬")) {
                let respuesta = res.split("¬")[0];
                let mensaje = res.split("¬")[1];
                if (respuesta == "ERROR") {
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
                data2 = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "IMPORTE_ACTUAL": Number(res[index].IMPORTE_ACTUAL.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data2.push(element);
                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                graficosbarrasPromedioCalzadoImporte(res);
                inicializarGraficaTipoBarraCalzadoImporte(data2);
                inicializarGraficaTipoPastelCalzadoImporte(data2);
                let salida = graficosbarrasPromedioCalzado(res);
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
        });

    } */


    $('#cmbSemanaDireccion').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $(document).on("change", "#cmbSemanaDireccion", function () {
        $('#ventanaCarga').modal('show');
        consultarInformacionSemanalOtras();
        consultarInformacionSemanalCalzado();
    });



    $('#cmbSemanaGerencia').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $(document).on("change", "#cmbSemanaGerencia", function () {
        $('#ventanaCarga').modal("show");
        consultarInformacionSemanalOtrasGerencia();
        consultarInformacionSemanalCalzadoGerencia();

    });

    // *******************************************************************************************************************************************************

    /**
     * Carga de Datos Gerencia
     */

    const consultarInformacionSemanalOtrasGerencia = () => {
        let resultado = $('#cmbSemanaGerencia').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/gerencia/reportes/top20",
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
                TablaVentasSemanalGerencia.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalGerencia.row.add([
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
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosbarrasPromedio(res);
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
        });
    };

    const consultarInformacionSemanalCalzadoGerencia = () => {
        resultado = $('#cmbSemanaGerencia').val();
        datos = {
            semana: resultado
        }
        $.ajax({
            url: "/public/gerencia/reportes/top50",
            method: "GET",
            data: datos,
        }).done(function (res) {
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
                TablaVentasSemanalGerenciaCalzado.clear().draw(false);
                $.each(res, function (index, venta) {
                    TablaVentasSemanalGerenciaCalzado.row.add([
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
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                let salida = graficosbarrasPromedioCalzado(res);

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
        });
    };

    /**
    * Carga de datos Direccion General
    */

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
            console.log(res);
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
                data2 = []
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.replace(',', '').replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);

                }

                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "IMPORTE_ACTUAL": Number(res[index].IMPORTE_ACTUAL.replace(',', '').replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data2.push(element);

                }

                inicializarGraficaTipoBarra(data);
                inicializarGraficaTipoPastel(data);
                graficosbarrasPromedio(res);
                inicializarGraficaTipoBarraImporte(data2);
                inicializarGraficaTipoPastelImporte(data2);
                graficosbarrasPromedioImporte(res);
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
    };

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
                data2 = [];
                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "Unidades": Number(res[index].UNIDADES_ACTUALES.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data.push(element);
                }

                for (let index = 0; index < res.length; index++) {
                    const element = {
                        "IMPORTE_ACTUAL": Number(res[index].IMPORTE_ACTUAL.toString().replace(',', '').toString()),
                        "cliente": res[index].CLIENTE
                    };
                    data2.push(element);
                }

                inicializarGraficaTipoBarraCalzado(data);
                inicializarGraficaTipoPastelCalzado(data);
                graficosbarrasPromedioCalzadoImporte(res);
                inicializarGraficaTipoBarraCalzadoImporte(data2);
                inicializarGraficaTipoPastelCalzadoImporte(data2);
                let salida = graficosbarrasPromedioCalzado(res);

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
        });
    };
})