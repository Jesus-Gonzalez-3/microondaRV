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
        resultado -= 2;
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

    if (window.location.href === "http://envasesmicroonda:8081/public/reporteSemanalDireccion" || window.location.href === "http://192.168.5.200:8081/public/reporteSemanalDireccion") {
        let currentdatec = new Date();
        let one = new Date(currentdatec.getFullYear(), 0, 1);
        let numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        let resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7);
        //alert(resultado);
        resultado -= 2;
        if (resultado > 50) {
            resultado = 50;
        }
        //alert(resultado);

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

    }


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



    $('#cmbAnioDirección').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });
    $('#cmbAnioDirecciónSemanaInicio').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });
    $('#cmbAnioDirecciónSemanaFin').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    let tableVentasAnualesDirección = $('#tblReporteVentasAnualesDireccion').DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        /*"order": [
            [0, "desc"]
        ],*/
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [5, 6]
        }],
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

            total = api
                .column(1)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total1 = api
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(1).footer()).html(
                '$ ' + total
            );
            $(api.column(2).footer()).html(
                '$ ' + total1
            );
            $(api.column(3).footer()).html(
                total2.toFixed(2) + ' %'
            );
            $(api.column(4).footer()).html(
                total3.toFixed(2) + ' %'
            );
        }
    });

    const consultarInformacionAnualDireccion = (par1) => {

        let datos = {
            annio: par1
        }
        $.ajax({
            url: "/public/direccion/reportes/ventasAnuales",
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
                tableVentasAnualesDirección.clear().draw(false);
                let sumaUnidades = 0;
                let sumaImporte = 0;

                let datos = [];
                let datosBarras = [];
                let datosPastel = [];
                for (let index = 0; index < res.length; index++) {
                    sumaUnidades += Number(res[index].UNIDADES.toString().replace(',', '').replace(',', ''));
                    sumaImporte += Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', ''));
                }

                for (let index = 0; index < res.length; index++) {
                    let venta = {
                        cliente: res[index].AGENTE,
                        unidades: res[index].UNIDADES,
                        importe: res[index].IMPORTE,
                        porUnidades: "" + ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2) + "%",
                        porImporte: "" + ((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2) + "%",
                        porUnidades1: ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2),
                        porImporte1: ((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2),
                    };
                    datos.push(venta);

                }

                $.each(datos, function (index, venta) {
                    tableVentasAnualesDirección.row.add([
                        venta.cliente,
                        venta.unidades,
                        venta.importe,
                        venta.porUnidades,
                        venta.porImporte,
                        venta.porUnidades1,
                        venta.porImporte1
                    ]).draw(false);
                });

                inicializarGraficaPastelAnualAgentes(datos);
                inicializarGraficaPastelAnualAgentes2(datos);
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

    }

    const consultarInformacionAnualDireccion2 = (par1, par2 = 0, par3 = 0) => {
        let datos = {};
        if (par2 === 0 && par3 === 0) {
            datos = {
                annio: par1
            }
        } else {
            datos = {
                annio: par1,
                inicio: par2,
                fin: par3
            }
        }

        $.ajax({
            url: "/public/direccion/reportes/ventasAnuales",
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
                tableVentasAnualesDirección.clear().draw(false);
                let sumaUnidades = 0;
                let sumaImporte = 0;

                let datos = [];
                for (let index = 0; index < res.length; index++) {
                    sumaUnidades += Number(res[index].UNIDADES.toString().replace(',', '').replace(',', ''));
                    sumaImporte += Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', ''));
                }
                for (let index = 0; index < res.length; index++) {
                    let venta = {
                        cliente: res[index].AGENTE,
                        unidades: res[index].UNIDADES,
                        importe: res[index].IMPORTE,
                        porUnidades: "" + ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2) + "%",
                        porImporte: "" + ((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2) + "%",
                        porUnidades1: parseFloat((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2),
                        porImporte1: parseFloat((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2),
                    };
                    datos.push(venta);

                }

                $.each(datos, function (index, venta) {
                    if (venta.cliente != "") {
                        tableVentasAnualesDirección.row.add([
                            venta.cliente,
                            venta.unidades,
                            venta.importe,
                            venta.porUnidades,
                            venta.porImporte,
                            venta.porUnidades1,
                            venta.porImporte1
                        ]).draw(false);
                    }
                });

                inicializarGraficaPastelAnualAgentes(datos);
                let salida = inicializarGraficaPastelAnualAgentes2(datos);
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

    }

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteAnualDireccion" || window.location.href == "http://192.168.5.200:8081/public/reporteAnualDireccion") {
        let currentdatec = new Date();
        consultarInformacionAnualDireccion(currentdatec.getFullYear());
    };

    $(document).on('click', '#btnBuscarDireccion', (e) => {

        let currentyear = new Date();
        let annio = $('#cmbAnioDirección').val();
        let inicio = $('#cmbAnioDirecciónSemanaInicio').val();
        let fin = $('#cmbAnioDirecciónSemanaFin').val();

        if (currentyear.getFullYear() < annio) {
            swal(
                {
                    type: "info",
                    title: "Alerta",
                    text: "No puedes consultar valores de años prosperos!",
                    confirmButtonText: "OK",
                });
            return;
        }

        if (annio != 0) {
            if (inicio != 0 && fin != 0) {
                if (fin > inicio) {
                    swal({
                        type: 'info',
                        text: "Generando informe, espere un momento",
                        title: 'Generando Reporte',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: () => {
                            swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }

                    });
                    consultarInformacionAnualDireccion2(annio, inicio, fin);
                } else {
                    swal(
                        {
                            type: "info",
                            title: "Atención",
                            text: "La semana final no puede ser menor a la de inicio, compuebe!",
                            confirmButtonText: "OK",
                        }, function () {
                            //$('#ventanaCarga').modal('toggle');
                        });
                }
            } else {
                swal({
                    type: 'info',
                    text: "Generando informe, espere un momento",
                    title: 'Generando Reporte',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }

                });
                consultarInformacionAnualDireccion2(annio);

            }
        } else {
            swal(
                {
                    type: "info",
                    title: "Alerta",
                    text: "Debe seleccionar algun filtro valido para consultar, compuebe!",
                    confirmButtonText: "OK",
                }, function () {
                    //$('#ventanaCarga').modal('toggle');
                });

            return;
        }
    });


    $('#cmbAnioGerencia').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });
    $('#cmbAnioGerenciaSemanaInicio').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });
    $('#cmbAnioGerenciaSemanaFin').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    let tableVentasAnualesGerencia = $('#tblReporteVentasAnualesGerencia').DataTable({
        dom: 'Bfrtip',
        "processing": true,
        "oLanguage": {
            "sUrl": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        },
        "deferRender": false,
        "paging": true,
        "info": false,
        /*"order": [
            [0, "desc"]
        ],*/
        columnDefs: [{
            orderable: false,
            targets: 0
        }],
        "aoColumnDefs": [{
            "bVisible": false,
            "aTargets": [3]
        }],
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

            total = api
                .column(1)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(1).footer()).html(
                '$ ' + total
            );
            $(api.column(2).footer()).html(
                total2 +' %'
            );
        }
    });

    const consultarInformacionAnualGerentes = (par1) => {

        let datos = {
            annio: par1
        }
        $.ajax({
            url: "/public/gerencia/reportes/ventasAnuales",
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
                tableVentasAnualesGerencia.clear().draw(false);
                let sumaUnidades = 0;
                let sumaImporte = 0;

                let datos = [];
                let datosBarras = [];
                let datosPastel = [];
                for (let index = 0; index < res.length; index++) {
                    sumaUnidades += Number(res[index].UNIDADES.toString().replace(',', '').replace(',', ''));
                    sumaImporte += Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', ''));
                }

                for (let index = 0; index < res.length; index++) {
                    let venta = {
                        cliente: res[index].AGENTE,
                        unidades: res[index].UNIDADES,
                        porUnidades: "" + ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2) + "%",
                        porUnidades1: ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2),
                    };
                    datos.push(venta);

                }

                $.each(datos, function (index, venta) {
                    tableVentasAnualesGerencia.row.add([
                        venta.cliente,
                        venta.unidades,
                        venta.porUnidades,
                        venta.porUnidades1
                    ]).draw(false);
                });

                inicializarGraficaPastelAnualAgentesGerentes(datos);
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

    }

    const consultarInformacionAnualGerencia2 = (par1, par2 = 0, par3 = 0) => {
        let datos = {};
        if (par2 === 0 && par3 === 0) {
            datos = {
                annio: par1
            }
        } else {
            datos = {
                annio: par1,
                inicio: par2,
                fin: par3
            }
        }

        $.ajax({
            url: "/public/gerencia/reportes/ventasAnuales",
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
                tableVentasAnualesGerencia.clear().draw(false);
                let sumaUnidades = 0;
                let sumaImporte = 0;

                let datos = [];
                for (let index = 0; index < res.length; index++) {
                    sumaUnidades += Number(res[index].UNIDADES.toString().replace(',', '').replace(',', ''));
                    sumaImporte += Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', ''));
                }
                for (let index = 0; index < res.length; index++) {
                    let venta = {
                        cliente: res[index].AGENTE,
                        unidades: res[index].UNIDADES,
                        porUnidades: "" + ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2) + "%",
                        porUnidades1: parseFloat((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2),
                    };
                    datos.push(venta);

                }

                $.each(datos, function (index, venta) {
                    if (venta.cliente != "") {
                        tableVentasAnualesGerencia.row.add([
                            venta.cliente,
                            venta.unidades,
                            venta.porUnidades,
                            venta.porUnidades1
                        ]).draw(false);
                    }
                });

                inicializarGraficaPastelAnualAgentesGerentes(datos);
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

    }

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteAnualGerencia" || window.location.href == "http://192.168.5.200:8081/public/reporteAnualGerencia") {
        let currentdatec = new Date();
        consultarInformacionAnualGerentes(currentdatec.getFullYear());
    };

    $(document).on('click', '#btnBuscarGerencia', (e) => {

        let currentyear = new Date();
        let annio = $('#cmbAnioGerencia').val();
        let inicio = $('#cmbAnioGerenciaSemanaInicio').val();
        let fin = $('#cmbAnioGerenciaSemanaFin').val();

        if (currentyear.getFullYear() < annio) {
            swal(
                {
                    type: "info",
                    title: "Alerta",
                    text: "No puedes consultar valores de años prosperos!",
                    confirmButtonText: "OK",
                });
            return;
        }

        if (annio != 0) {
            if (inicio != 0 && fin != 0) {
                if (fin > inicio) {
                    swal({
                        type: 'info',
                        text: "Generando informe, espere un momento",
                        title: 'Generando Reporte',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: () => {
                            swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }

                    });
                    consultarInformacionAnualGerencia2(annio, inicio, fin);
                } else {
                    swal(
                        {
                            type: "info",
                            title: "Atención",
                            text: "La semana final no puede ser menor a la de inicio, compuebe!",
                            confirmButtonText: "OK",
                        }, function () {
                            //$('#ventanaCarga').modal('toggle');
                        });
                }
            } else {
                swal({
                    type: 'info',
                    text: "Generando informe, espere un momento",
                    title: 'Generando Reporte',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }

                });
                consultarInformacionAnualGerencia2(annio);

            }
        } else {
            swal(
                {
                    type: "info",
                    title: "Alerta",
                    text: "Debe seleccionar algun filtro valido para consultar, compuebe!",
                    confirmButtonText: "OK",
                });

            return;
        }
    });
})