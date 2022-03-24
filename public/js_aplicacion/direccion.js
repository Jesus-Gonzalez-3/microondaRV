$(document).ready(function () {
    /**
     * Despliege de información reporte semanal 
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
                '$ ' + convertirImporte(total1.toFixed(2))
            );
            $(api.column(4).footer()).html(
                '$ ' + convertirImporte(total2.toFixed(2))
            );
            $(api.column(5).footer()).html(
                '$ ' + convertirImporte(total3.toFixed(2))
            );
            $(api.column(6).footer()).html(
                '$ ' + convertirImporte(total4.toFixed(2))
            );
            $(api.column(7).footer()).html(
                '$ ' + convertirImporte(total5.toFixed(2))
            );
            $(api.column(8).footer()).html(
                '$ ' + convertirImporte(total6.toFixed(2))
            );
            $(api.column(9).footer()).html(
                '$ ' + convertirImporte(total7.toFixed(2))
            );
            $(api.column(10).footer()).html(
                '$ ' + convertirImporte(total8.toFixed(2))
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
                '$ ' + convertirImporte(total1.toFixed(2))
            );
            $(api.column(4).footer()).html(
                '$ ' + convertirImporte(total2.toFixed(2))
            );
            $(api.column(5).footer()).html(
                '$ ' + convertirImporte(total3.toFixed(2))
            );
            $(api.column(6).footer()).html(
                '$ ' + convertirImporte(total4.toFixed(2))
            );
            $(api.column(7).footer()).html(
                '$ ' + convertirImporte(total5.toFixed(2))
            );
            $(api.column(8).footer()).html(
                '$ ' + convertirImporte(total6.toFixed(2))
            );
            $(api.column(9).footer()).html(
                '$ ' + convertirImporte(total7.toFixed(2))
            );
            $(api.column(10).footer()).html(
                '$ ' + convertirImporte(total8.toFixed(2))
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
            //"aTargets": [0, 7, 8, 9, 10],
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
                '$ ' + convertirImporte(total1.toFixed(2))
            );
            $(api.column(4).footer()).html(
                '$ ' + convertirImporte(total2.toFixed(2))
            );
            $(api.column(5).footer()).html(
                '$ ' + convertirImporte(total3.toFixed(2))
            );
            $(api.column(6).footer()).html(
                '$ ' + convertirImporte(total4.toFixed(2))
            );
            $(api.column(7).footer()).html(
                '$ ' + convertirImporte(total5.toFixed(2))
            );
            $(api.column(8).footer()).html(
                '$ ' + convertirImporte(total6.toFixed(2))
            );
            $(api.column(9).footer()).html(
                '$ ' + convertirImporte(total7.toFixed(2))
            );
            $(api.column(10).footer()).html(
                '$ ' + convertirImporte(total8.toFixed(2))
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
            //"aTargets": [0, 7, 8, 9, 10]
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
                '$ ' + convertirImporte(total1.toFixed(2))
            );
            $(api.column(4).footer()).html(
                '$ ' + convertirImporte(total2.toFixed(2))
            );
            $(api.column(5).footer()).html(
                '$ ' + convertirImporte(total3.toFixed(2))
            );
            $(api.column(6).footer()).html(
                '$ ' + convertirImporte(total4.toFixed(2))
            );
            $(api.column(7).footer()).html(
                '$ ' + convertirImporte(total5.toFixed(2))
            );
            $(api.column(8).footer()).html(
                '$ ' + convertirImporte(total6.toFixed(2))
            );
            $(api.column(9).footer()).html(
                '$ ' + convertirImporte(total7.toFixed(2))
            );
            $(api.column(10).footer()).html(
                '$ ' + convertirImporte(total8.toFixed(2))
            );
        }


    });

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteSemanalGerentes" || window.location.href == "http://192.168.5.200:8081/public/reporteSemanalGerentes") {
        let currentdatec = new Date();
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        var resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7) - 1;
        resultado -= 1;
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
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        let resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7) - 1;
        resultado -= 1;
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

    // *******************************************************************************************************************************************************

    /**
     * Despliege de información Reporte anual
     * 
     */

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
                '$ ' + convertirImporte(total.toFixed(2))
            );
            $(api.column(2).footer()).html(
                '$ ' + convertirImporte(total1.toFixed(2))
            );
            $(api.column(3).footer()).html(
                total2.toFixed(0) + ' %'
            );
            $(api.column(4).footer()).html(
                total3.toFixed(0) + ' %'
            );
        }
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
            total2 = api
                .column(2)
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

            $(api.column(1).footer()).html(
                convertirUnidades(total.toFixed(2)) + ' Unidades'
            );
            $(api.column(2).footer()).html(
                '$ ' + convertirImporte(total2.toFixed(2))
            );
            $(api.column(3).footer()).html(
                 total3.toFixed(0) + ' %'
            ); $(api.column(4).footer()).html(
                 total4.toFixed(0)+ ' %'
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
                        importe: res[index].IMPORTE,
                        porUnidades: "" + ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2) + "%",
                        porImporte: "" + ((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2) + "%",
                        porUnidades1: ((Number(res[index].UNIDADES.toString().replace(',', '').replace(',', '')) / sumaUnidades) * 100).toFixed(2),
                        porImporte1: ((Number(res[index].IMPORTE.toString().replace(',', '').replace(',', '').replace(',', '')) / sumaImporte) * 100).toFixed(2),
                    };
                    datos.push(venta);

                }

                $.each(datos, function (index, venta) {
                    tableVentasAnualesGerencia.row.add([
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
                    tableVentasAnualesGerencia.row.add([
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

    // *******************************************************************************************************************************************************

    /**
     * Despliege de información Reporte por Periodo
     * 
     */
    $('#cmbAnioDireccionPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioDirecciónSemanaInicioPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioDirecciónSemanaFinPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });


    let datatableVentasPeriodoDireccion = $('#tblReporteVentasPeriodoDireccion').DataTable({
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
            "aTargets": [9]
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
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(1).footer()).html(
                convertirUnidades(total.toFixed(0)) + " <br/>Unidades" + "<br/><br/>" + (Number(total / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(2).footer()).html(
                convertirUnidades(total2.toFixed(0)) + " <br/>Unidades" + "<br/><br/>" + (Number(total2 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(3).footer()).html(
                convertirUnidades(total3.toFixed(0)) + " <br/>Unidades" + "<br/><br/>" + (Number(total3 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(4).footer()).html(
                convertirUnidades(total4.toFixed(0)) + "<br/> Unidades" + "<br/><br/>" + (Number(total4 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(5).footer()).html(
                convertirUnidades(total5.toFixed(0)) + " <br/>Unidades" + "<br/><br/>" + (Number(total5 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(6).footer()).html(
                convertirUnidades(total6.toFixed(0)) + " <br/>Unidades" + "<br/><br/>" + (Number(total6 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(7).footer()).html(
                convertirUnidades(total7.toFixed(0)) + "<br/> Unidades" + "<br/><br/>" + (Number(total7 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(8).footer()).html(
                "<br/><br/><br/>" + total8.toFixed(0) + " %"
            );
        }
    });

    let datatableVentasPeriodoDireccionImporte = $('#tblReporteVentasPeriodoDireccionImporte').DataTable({
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
            "aTargets": [9]
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
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(1).footer()).html(
                "$<br/> " + convertirImporte(total.toFixed(2)) + "<br/><br/>" + (Number(total / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(2).footer()).html(
                "$ <br/>" + convertirImporte(total2.toFixed(2)) + "<br/><br/>" + (Number(total2 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(3).footer()).html(
                "$<br/> " + convertirImporte(total3.toFixed(2)) + "<br/><br/>" + (Number(total3 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(4).footer()).html(
                "$<br/> " + convertirImporte(total4.toFixed(2)) + "<br/><br/>" + (Number(total4 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(5).footer()).html(
                "$<br/>" + convertirImporte(total5.toFixed(2)) + "<br/><br/>" + (Number(total5 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(6).footer()).html(
                "$ <br/>" + convertirImporte(total6.toFixed(2)) + "<br/><br/>" + (Number(total6 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(7).footer()).html(
                "$<br/> " + convertirImporte(total7.toFixed(2)) + "<br/><br/>" + (Number(total7 / total7) * 100).toFixed(0) + " %"
            );
            $(api.column(8).footer()).html(
                "<br/><br/><br/>" + total8.toFixed(0) + " %"
            );
        }
    });

    function convertirImporte(numero) {
        let decimal = numero.toString().split(".")[1];
        numero = numero.toString().split(".")[0] + "";
        var op = numero.split("").reverse();
        var new1 = "";
        for (let i = 0; i < op.length; i++) {
            if (i % 3 == 0 && i != 0)
                new1 = "," + new1;

            new1 = op[i] + new1;
        }
        return new1 + "." + decimal;
    }


    function convertirUnidades(numero) {
        numero = numero + "";
        var op = numero.split("").reverse();
        var new1 = "";
        for (let i = 0; i < op.length; i++) {
            if (i % 3 == 0 && i != 0)
                new1 = "," + new1;

            new1 = op[i] + new1;
        }
        return new1;
    }

    const consultarInfomacionVentasPeriodoDireccion = (annio = 0, inicio = 0, fin = 0) => {
        if (inicio == 0 && fin == 0) {
            datos = {
                annio: annio
            };

            $.ajax({
                method: "GET",
                data: datos,
                url: '/public/direccion/reportes/ventasPeriodo'
            }).done((res) => {
                if (!res.includes('¬')) {
                    datatableVentasPeriodoDireccion.clear().draw(false);
                    datatableVentasPeriodoDireccionImporte.clear().draw(false);
                    let tabledata = [];
                    let calzado = res[0].Calzado;
                    let alimentos = res[1].Alimentos;
                    let autopartes = res[2].Autopartes;
                    let electro = res[3].Electrodomesticos;
                    let caja = res[4].Caja;
                    let varios = res[5].Varios;
                    let sumaCalzado = 0;
                    let sumaAlimentos = 0;
                    let sumaAutopartes = 0;
                    let sumaElectrodomesticos = 0;
                    let sumaCaja = 0;
                    let sumaVarios = 0;

                    let totalPeriodo1Unidades = 0;
                    let totalPeriodo2Unidades = 0;
                    let totalPeriodo3Unidades = 0;
                    let totalPeriodo4Unidades = 0;
                    let totalPeriodo5Unidades = 0;
                    let totalPeriodo1Importe = 0;
                    let totalPeriodo2Importe = 0;
                    let totalPeriodo3Importe = 0;
                    let totalPeriodo4Importe = 0;
                    let totalPeriodo5Importe = 0;
                    let totaltotalUnidades = 0;
                    let totalTotalImporte = 0

                    for (let index = 0; index < res[0].Calzado.length; index++) {
                        let element = calzado[index];
                        let element1 = alimentos[index];
                        let element2 = autopartes[index];
                        let element3 = electro[index];
                        let element4 = caja[index];
                        let element5 = varios[index];

                        let valores = {};

                        switch (element.PERIODO) {
                            case "01-10":
                                totalPeriodo1Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo1Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo1Unidades;
                                totalTotalImporte += totalPeriodo1Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo1Unidades,
                                    TotalImporte: totalPeriodo1Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "11-20":
                                totalPeriodo2Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo2Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo2Unidades;
                                totalTotalImporte += totalPeriodo2Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo2Unidades,
                                    TotalImporte: totalPeriodo2Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "21-30":
                                totalPeriodo3Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo3Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo3Unidades;
                                totalTotalImporte += totalPeriodo3Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo3Unidades,
                                    TotalImporte: totalPeriodo3Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "31-40":
                                totalPeriodo4Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo4Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));
                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));
                                totaltotalUnidades += totalPeriodo4Unidades;
                                totalTotalImporte += totalPeriodo4Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo4Unidades,
                                    TotalImporte: totalPeriodo4Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "41-50":
                                totalPeriodo5Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo5Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo5Unidades;
                                totalTotalImporte += totalPeriodo5Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo5Unidades,
                                    TotalImporte: totalPeriodo5Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                        }
                    }
                    for (let index = 0; index < tabledata.length; index++) {
                        tabledata[index].porcentajeUnidades = ((tabledata[index].TotalUnidades / totaltotalUnidades) * 100).toFixed(2);
                        tabledata[index].porcentajeImporte = ((tabledata[index].TotalImporte / totalTotalImporte) * 100).toFixed(2);
                        tabledata[index].TotalUnidades = convertirUnidades(tabledata[index].TotalUnidades);
                        tabledata[index].TotalImporte = convertirImporte(tabledata[index].TotalImporte);
                    }

                    $.each(tabledata, (index, periodo) => {
                        datatableVentasPeriodoDireccion.row.add([
                            periodo.periodo,
                            periodo.UnidadesCalzado,
                            periodo.UnidadesAlimentos,
                            periodo.UnidadesAutopartes,
                            periodo.UnidadesElectrodomesticos,
                            periodo.UnidadesCajas,
                            periodo.UnidadesVarios,
                            periodo.TotalUnidades,
                            periodo.porcentajeUnidades,
                            null
                        ]).draw(false);

                        datatableVentasPeriodoDireccionImporte.row.add([
                            periodo.periodo,
                            periodo.ImporteCalzado,
                            periodo.ImporteAlimentos,
                            periodo.ImporteAutoparttes,
                            periodo.ImporteElectrodomesticos,
                            periodo.ImporteCajas,
                            periodo.ImporteVarios,
                            convertirImporte(Number(periodo.TotalImporte.toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2)),
                            periodo.porcentajeImporte,
                            null
                        ]).draw(false);
                    });

                    incializarGraficaBarrasVentasPeriodoBarra(tabledata);
                    incializarGraficaBarrasVentasPeriodoPastel(tabledata);

                } else {
                    switch (res.toString().split('¬')[0]) {
                        case "Error1":
                            swal({
                                type: "info",
                                title: "Atención",
                                text: res.toString().split('¬')[1],
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                        case "Error":
                            swal({
                                type: "error",
                                title: "Error",
                                text: "Ha ocurrido un error al procesar su petición. Intente más Tarde.",
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                    }
                }
            }).fail((res) => {
                swal({
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                    function () {
                        location.href = "/public/paginaPrincipal";
                    });
            });
        } else {
            datos = {
                annio: annio,
                inicio: inicio,
                fin: fin
            }
            $.ajax({
                method: "GET",
                data: datos,
                url: '/public/direccion/reportes/ventasPeriodo'
            }).done((res) => {
                if (!res.includes('¬')) {
                    datatableVentasPeriodoDireccion.clear().draw(false);
                    datatableVentasPeriodoDireccionImporte.clear().draw(false);
                    let tabledata = [];
                    let calzado = res[0].Calzado;
                    let alimentos = res[1].Alimentos;
                    let autopartes = res[2].Autopartes;
                    let electro = res[3].Electrodomesticos;
                    let caja = res[4].Caja;
                    let varios = res[5].Varios;
                    let sumaCalzado = 0;
                    let sumaAlimentos = 0;
                    let sumaAutopartes = 0;
                    let sumaElectrodomesticos = 0;
                    let sumaCaja = 0;
                    let sumaVarios = 0;

                    let totalPeriodo1Unidades = 0;
                    let totalPeriodo2Unidades = 0;
                    let totalPeriodo3Unidades = 0;
                    let totalPeriodo4Unidades = 0;
                    let totalPeriodo5Unidades = 0;
                    let totalPeriodo1Importe = 0;
                    let totalPeriodo2Importe = 0;
                    let totalPeriodo3Importe = 0;
                    let totalPeriodo4Importe = 0;
                    let totalPeriodo5Importe = 0;
                    let totaltotalUnidades = 0;
                    let totalTotalImporte = 0

                    for (let index = 0; index < res[0].Calzado.length; index++) {
                        let element = calzado[index];
                        let element1 = alimentos[index];
                        let element2 = autopartes[index];
                        let element3 = electro[index];
                        let element4 = caja[index];
                        let element5 = varios[index];

                        let valores = {};

                        switch (element.PERIODO) {
                            case "01-10":
                                totalPeriodo1Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo1Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo1Unidades;
                                totalTotalImporte += totalPeriodo1Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo1Unidades,
                                    TotalImporte: totalPeriodo1Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "11-20":
                                totalPeriodo2Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo2Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo2Unidades;
                                totalTotalImporte += totalPeriodo2Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo2Unidades,
                                    TotalImporte: totalPeriodo2Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "21-30":
                                totalPeriodo3Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo3Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo3Unidades;
                                totalTotalImporte += totalPeriodo3Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo3Unidades,
                                    TotalImporte: totalPeriodo3Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "31-40":
                                totalPeriodo4Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo4Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));
                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));
                                totaltotalUnidades += totalPeriodo4Unidades;
                                totalTotalImporte += totalPeriodo4Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo4Unidades,
                                    TotalImporte: totalPeriodo4Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "41-50":
                                totalPeriodo5Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo5Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo5Unidades;
                                totalTotalImporte += totalPeriodo5Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo5Unidades,
                                    TotalImporte: totalPeriodo5Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                        }


                    }
                    for (let index = 0; index < tabledata.length; index++) {
                        tabledata[index].porcentajeUnidades = ((tabledata[index].TotalUnidades / totaltotalUnidades) * 100).toFixed(2);
                        tabledata[index].porcentajeImporte = ((tabledata[index].TotalImporte / totalTotalImporte) * 100).toFixed(2);
                        tabledata[index].TotalUnidades = convertirUnidades(tabledata[index].TotalUnidades);
                        tabledata[index].TotalImporte = convertirImporte(tabledata[index].TotalImporte);
                    }

                    $.each(tabledata, (index, periodo) => {
                        datatableVentasPeriodoDireccion.row.add([
                            periodo.periodo,
                            periodo.UnidadesCalzado,
                            periodo.UnidadesAlimentos,
                            periodo.UnidadesAutopartes,
                            periodo.UnidadesElectrodomesticos,
                            periodo.UnidadesCajas,
                            periodo.UnidadesVarios,
                            periodo.TotalUnidades,
                            periodo.porcentajeUnidades,
                            null
                        ]).draw(false);

                        datatableVentasPeriodoDireccionImporte.row.add([
                            periodo.periodo,
                            periodo.ImporteCalzado,
                            periodo.ImporteAlimentos,
                            periodo.ImporteAutoparttes,
                            periodo.ImporteElectrodomesticos,
                            periodo.ImporteCajas,
                            periodo.ImporteVarios,
                            convertirImporte(Number(periodo.TotalImporte.toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2)),
                            periodo.porcentajeImporte,
                            null
                        ]).draw(false);
                    });

                    incializarGraficaBarrasVentasPeriodoBarra(tabledata);
                    incializarGraficaBarrasVentasPeriodoPastel(tabledata);

                } else {
                    switch (res.toString().split('¬')[0]) {
                        case "Error1":
                            swal({
                                type: "info",
                                title: "Atención",
                                text: res.toString().split('¬')[1],
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                        case "Error":
                            swal({
                                type: "error",
                                title: "Error",
                                text: "Ha ocurrido un error al procesar su petición. Intente más Tarde.",
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                    }
                }
            }).fail((res) => {
                swal({
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
    }


    if (window.location.href == "http://envasesmicroonda:8081/public/reportePeriodoDireccion" || window.location.href == "http://192.168.5.200:8081/public/reportePeriodoDireccion") {
        let currentdatec = new Date();
        consultarInfomacionVentasPeriodoDireccion(currentdatec.getFullYear());
    };

    $(document).on('click', '#btnBuscarDireccionPeriodo', (e) => {

        let currentyear = new Date();
        let annio = $('#cmbAnioDireccionPeriodo').val();
        let inicio = $('#cmbAnioDirecciónSemanaInicioPeriodo').val();
        let fin = $('#cmbAnioDirecciónSemanaFinPeriodo').val();

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
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: async () => {
                            swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: async () => {
                            clearInterval(timerInterval)
                        }

                    });
                    consultarInfomacionVentasPeriodoDireccion(annio, inicio, fin);
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
                consultarInfomacionVentasPeriodoDireccion(annio);

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

    $('#cmbAnioGerenciaPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioGerenciaSemanaInicioPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioGerenciaSemanaFinPeriodo').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $(document).on('click', '#btnBuscarGerenciaPeriodo', (e) => {

        let currentyear = new Date();
        let annio = $('#cmbAnioGerenciaPeriodo').val();
        let inicio = $('#cmbAnioGerenciaSemanaInicioPeriodo').val();
        let fin = $('#cmbAnioGerenciaSemanaFinPeriodo').val();

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
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: async () => {
                            swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: async () => {
                            clearInterval(timerInterval)
                        }

                    });
                    consultarInfomacionVentasPeriodoGerencia(annio, inicio, fin);
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
                consultarInfomacionVentasPeriodoDireccion(annio);

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

    const consultarInfomacionVentasPeriodoGerencia = (annio = 0, inicio = 0, fin = 0) => {
        if (inicio == 0 && fin == 0) {
            datos = {
                annio: annio
            };

            $.ajax({
                method: "GET",
                data: datos,
                url: '/public/gerencia/reportes/ventasPeriodo'
            }).done((res) => {
                if (!res.includes('¬')) {
                    datatableVentasPeriodoDireccion.clear().draw(false);
                    datatableVentasPeriodoDireccionImporte.clear().draw(false);
                    let tabledata = [];
                    let calzado = res[0].Calzado;
                    let alimentos = res[1].Alimentos;
                    let autopartes = res[2].Autopartes;
                    let electro = res[3].Electrodomesticos;
                    let caja = res[4].Caja;
                    let varios = res[5].Varios;
                    let sumaCalzado = 0;
                    let sumaAlimentos = 0;
                    let sumaAutopartes = 0;
                    let sumaElectrodomesticos = 0;
                    let sumaCaja = 0;
                    let sumaVarios = 0;

                    let totalPeriodo1Unidades = 0;
                    let totalPeriodo2Unidades = 0;
                    let totalPeriodo3Unidades = 0;
                    let totalPeriodo4Unidades = 0;
                    let totalPeriodo5Unidades = 0;
                    let totalPeriodo1Importe = 0;
                    let totalPeriodo2Importe = 0;
                    let totalPeriodo3Importe = 0;
                    let totalPeriodo4Importe = 0;
                    let totalPeriodo5Importe = 0;
                    let totaltotalUnidades = 0;
                    let totalTotalImporte = 0

                    for (let index = 0; index < res[0].Calzado.length; index++) {
                        let element = calzado[index];
                        let element1 = alimentos[index];
                        let element2 = autopartes[index];
                        let element3 = electro[index];
                        let element4 = caja[index];
                        let element5 = varios[index];

                        let valores = {};

                        switch (element.PERIODO) {
                            case "01-10":
                                totalPeriodo1Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo1Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo1Unidades;
                                totalTotalImporte += totalPeriodo1Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo1Unidades,
                                    TotalImporte: totalPeriodo1Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "11-20":
                                totalPeriodo2Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo2Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo2Unidades;
                                totalTotalImporte += totalPeriodo2Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo2Unidades,
                                    TotalImporte: totalPeriodo2Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "21-30":
                                totalPeriodo3Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo3Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo3Unidades;
                                totalTotalImporte += totalPeriodo3Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo3Unidades,
                                    TotalImporte: totalPeriodo3Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "31-40":
                                totalPeriodo4Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo4Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));
                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));
                                totaltotalUnidades += totalPeriodo4Unidades;
                                totalTotalImporte += totalPeriodo4Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo4Unidades,
                                    TotalImporte: totalPeriodo4Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "41-50":
                                totalPeriodo5Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo5Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo5Unidades;
                                totalTotalImporte += totalPeriodo5Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo5Unidades,
                                    TotalImporte: totalPeriodo5Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                        }
                    }
                    for (let index = 0; index < tabledata.length; index++) {
                        tabledata[index].porcentajeUnidades = ((tabledata[index].TotalUnidades / totaltotalUnidades) * 100).toFixed(2);
                        tabledata[index].porcentajeImporte = ((tabledata[index].TotalImporte / totalTotalImporte) * 100).toFixed(2);
                        tabledata[index].TotalUnidades = convertirUnidades(tabledata[index].TotalUnidades);
                        tabledata[index].TotalImporte = convertirImporte(tabledata[index].TotalImporte);
                    }

                    $.each(tabledata, (index, periodo) => {
                        datatableVentasPeriodoDireccion.row.add([
                            periodo.periodo,
                            periodo.UnidadesCalzado,
                            periodo.UnidadesAlimentos,
                            periodo.UnidadesAutopartes,
                            periodo.UnidadesElectrodomesticos,
                            periodo.UnidadesCajas,
                            periodo.UnidadesVarios,
                            periodo.TotalUnidades,
                            periodo.porcentajeUnidades,
                            null
                        ]).draw(false);

                        datatableVentasPeriodoDireccionImporte.row.add([
                            periodo.periodo,
                            periodo.ImporteCalzado,
                            periodo.ImporteAlimentos,
                            periodo.ImporteAutoparttes,
                            periodo.ImporteElectrodomesticos,
                            periodo.ImporteCajas,
                            periodo.ImporteVarios,
                            convertirImporte(Number(periodo.TotalImporte.toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2)),
                            periodo.porcentajeImporte,
                            null
                        ]).draw(false);
                    });

                    incializarGraficaBarrasVentasPeriodoBarra(tabledata);
                    incializarGraficaBarrasVentasPeriodoPastel(tabledata);

                } else {
                    switch (res.toString().split('¬')[0]) {
                        case "Error1":
                            swal({
                                type: "info",
                                title: "Atención",
                                text: res.toString().split('¬')[1],
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                        case "Error":
                            swal({
                                type: "error",
                                title: "Error",
                                text: "Ha ocurrido un error al procesar su petición. Intente más Tarde.",
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                    }
                }
            }).fail((res) => {
                swal({
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                    function () {
                        location.href = "/public/paginaPrincipal";
                    });
            });
        } else {
            datos = {
                annio: annio,
                inicio: inicio,
                fin: fin
            }
            $.ajax({
                method: "GET",
                data: datos,
                url: '/public/gerencia/reportes/ventasPeriodo'
            }).done((res) => {
                if (!res.includes('¬')) {
                    datatableVentasPeriodoDireccion.clear().draw(false);
                    datatableVentasPeriodoDireccionImporte.clear().draw(false);
                    let tabledata = [];
                    let calzado = res[0].Calzado;
                    let alimentos = res[1].Alimentos;
                    let autopartes = res[2].Autopartes;
                    let electro = res[3].Electrodomesticos;
                    let caja = res[4].Caja;
                    let varios = res[5].Varios;
                    let sumaCalzado = 0;
                    let sumaAlimentos = 0;
                    let sumaAutopartes = 0;
                    let sumaElectrodomesticos = 0;
                    let sumaCaja = 0;
                    let sumaVarios = 0;

                    let totalPeriodo1Unidades = 0;
                    let totalPeriodo2Unidades = 0;
                    let totalPeriodo3Unidades = 0;
                    let totalPeriodo4Unidades = 0;
                    let totalPeriodo5Unidades = 0;
                    let totalPeriodo1Importe = 0;
                    let totalPeriodo2Importe = 0;
                    let totalPeriodo3Importe = 0;
                    let totalPeriodo4Importe = 0;
                    let totalPeriodo5Importe = 0;
                    let totaltotalUnidades = 0;
                    let totalTotalImporte = 0

                    for (let index = 0; index < res[0].Calzado.length; index++) {
                        let element = calzado[index];
                        let element1 = alimentos[index];
                        let element2 = autopartes[index];
                        let element3 = electro[index];
                        let element4 = caja[index];
                        let element5 = varios[index];

                        let valores = {};

                        switch (element.PERIODO) {
                            case "01-10":
                                totalPeriodo1Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo1Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo1Unidades;
                                totalTotalImporte += totalPeriodo1Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo1Unidades,
                                    TotalImporte: totalPeriodo1Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "11-20":
                                totalPeriodo2Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo2Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo2Unidades;
                                totalTotalImporte += totalPeriodo2Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo2Unidades,
                                    TotalImporte: totalPeriodo2Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "21-30":
                                totalPeriodo3Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo3Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo3Unidades;
                                totalTotalImporte += totalPeriodo3Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo3Unidades,
                                    TotalImporte: totalPeriodo3Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "31-40":
                                totalPeriodo4Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo4Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));
                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));
                                totaltotalUnidades += totalPeriodo4Unidades;
                                totalTotalImporte += totalPeriodo4Importe;
                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo4Unidades,
                                    TotalImporte: totalPeriodo4Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                            case "41-50":
                                totalPeriodo5Unidades = (Number(element.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.UNIDADES.toString().replace(',', '').replace(',', '')));

                                totalPeriodo5Importe = (Number(element.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element1.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element2.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element3.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element4.IMPORTE.toString().replace(',', '').replace(',', ''))
                                    + Number(element5.IMPORTE.toString().replace(',', '').replace(',', '')));

                                sumaCalzado += Number(element.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAlimentos += Number(element1.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaAutopartes += Number(element2.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaElectrodomesticos += Number(element3.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaCaja += Number(element4.UNIDADES.toString().replace(',', '').replace(',', ''));
                                sumaVarios += Number(element5.UNIDADES.toString().replace(',', '').replace(',', ''));

                                totaltotalUnidades += totalPeriodo5Unidades;
                                totalTotalImporte += totalPeriodo5Importe;

                                valores = {
                                    periodo: element.PERIODO,
                                    UnidadesCalzado: element.UNIDADES,
                                    ImporteCalzado: element.IMPORTE,
                                    UnidadesAlimentos: element1.UNIDADES,
                                    ImporteAlimentos: element1.IMPORTE,
                                    UnidadesAutopartes: element2.UNIDADES,
                                    ImporteAutoparttes: element2.IMPORTE,
                                    UnidadesElectrodomesticos: element3.UNIDADES,
                                    ImporteElectrodomesticos: element3.IMPORTE,
                                    UnidadesCajas: element4.UNIDADES,
                                    ImporteCajas: element4.IMPORTE,
                                    UnidadesVarios: element5.UNIDADES,
                                    ImporteVarios: element5.IMPORTE,
                                    TotalUnidades: totalPeriodo5Unidades,
                                    TotalImporte: totalPeriodo5Importe,
                                    porcentajeUnidades: null,
                                    porcentajeImporte: null
                                }
                                tabledata.push(valores);
                                break;
                        }


                    }
                    for (let index = 0; index < tabledata.length; index++) {
                        tabledata[index].porcentajeUnidades = ((tabledata[index].TotalUnidades / totaltotalUnidades) * 100).toFixed(2);
                        tabledata[index].porcentajeImporte = ((tabledata[index].TotalImporte / totalTotalImporte) * 100).toFixed(2);
                        tabledata[index].TotalUnidades = convertirUnidades(tabledata[index].TotalUnidades);
                        tabledata[index].TotalImporte = convertirImporte(tabledata[index].TotalImporte);
                    }

                    $.each(tabledata, (index, periodo) => {
                        datatableVentasPeriodoDireccion.row.add([
                            periodo.periodo,
                            periodo.UnidadesCalzado,
                            periodo.UnidadesAlimentos,
                            periodo.UnidadesAutopartes,
                            periodo.UnidadesElectrodomesticos,
                            periodo.UnidadesCajas,
                            periodo.UnidadesVarios,
                            periodo.TotalUnidades,
                            periodo.porcentajeUnidades,
                            null
                        ]).draw(false);

                        datatableVentasPeriodoDireccionImporte.row.add([
                            periodo.periodo,
                            periodo.ImporteCalzado,
                            periodo.ImporteAlimentos,
                            periodo.ImporteAutoparttes,
                            periodo.ImporteElectrodomesticos,
                            periodo.ImporteCajas,
                            periodo.ImporteVarios,
                            convertirImporte(Number(periodo.TotalImporte.toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2)),
                            periodo.porcentajeImporte,
                            null
                        ]).draw(false);
                    });

                    incializarGraficaBarrasVentasPeriodoBarra(tabledata);
                    incializarGraficaBarrasVentasPeriodoPastel(tabledata);

                } else {
                    switch (res.toString().split('¬')[0]) {
                        case "Error1":
                            swal({
                                type: "info",
                                title: "Atención",
                                text: res.toString().split('¬')[1],
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                        case "Error":
                            swal({
                                type: "error",
                                title: "Error",
                                text: "Ha ocurrido un error al procesar su petición. Intente más Tarde.",
                                confirmButtonText: "OK",
                            },
                                function () {
                                    location.href = "/public/paginaPrincipal";
                                });
                            break;
                    }
                }
            }).fail((res) => {
                swal({
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
    }

    if (window.location.href == "http://envasesmicroonda:8081/public/reportePeriodoGerencia" || window.location.href == "http://192.168.5.200:8081/public/reportePeriodoGerenciad") {
        let currentdatec = new Date();
        consultarInfomacionVentasPeriodoGerencia(currentdatec.getFullYear());
    };

});