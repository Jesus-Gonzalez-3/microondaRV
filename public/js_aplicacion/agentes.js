$(document).ready(() => {
    $('#cmbSemanaAgentes').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"

    });

    let datatableVentasSemanalesAgentes = $('#tableVentasSemanalAgentes').DataTable({
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
            "aTargets": []
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
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            $(api.column(3).footer()).html(
                convertirUnidades(total.toFixed(0)) + " Unidades"
            );
        }
    });

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

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteSemanalAgentes" || window.location.href == "http://192.168.5.200:8081/public/reporteSemanalAgentes") {
        let currentdatec = new Date();
        var one = new Date(currentdatec.getFullYear(), 0, 1);
        var numofdays = Math.floor((currentdatec - one) / (24 * 60 * 60 * 1000));
        let resultado = Math.ceil((currentdatec.getDay() + 1 + numofdays) / 7) - 1;
        resultado -= 1;
        if (resultado > 50) {
            resultado = 50;
        }
        datos = {
            annio: new Date().getFullYear(),
            semana: resultado
        }
        $.ajax({
            method: "GET",
            data: datos,
            url: "/public/agentes/reportes/ventasSemanales"
        }).done((res) => {
            if (!res.includes('¬')) {
                datatableVentasSemanalesAgentes.clear().draw(false);
                res.forEach(element => {
                    $.each(element, (index, venta) => {
                        if (venta.UNIDADES > 0) {
                            datatableVentasSemanalesAgentes.row.add([
                                venta.PRODUCTO,
                                venta.DESCRIPCION,
                                venta.CLIENTE,
                                convertirUnidades(venta.UNIDADES)
                            ]).draw(false);
                        }
                    })

                });
                iniciarGraficaBarrasAgentesSemanal(res[0]);
                iniciarGraficaPasteAgentesSemanal(res[0]);
            } else if (res.split('¬')[0] == "Error") {
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
            } else if (res.split('¬')[0] == "Error1") {
                swal(
                    {
                        type: "info",
                        title: "Alerta",
                        text: res.split('¬')[1],
                        confirmButtonText: "OK",
                    },
                    function () {
                        location.href = "/public/paginaPrincipal";
                    });
            }
        }).fail((res) => {
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

    $(document).on("change", "#cmbSemanaAgentes", (e) => {
        if (e.target.value != 0) {
            datos = {
                annio: new Date().getFullYear(),
                semana: e.target.value
            }
            $.ajax({
                method: "GET",
                data: datos,
                url: "/public/agentes/reportes/ventasSemanales"
            }).done((res) => {
                datatableVentasSemanalesAgentes.clear().draw(false);
                res.forEach(element => {
                    $.each(element, (index, venta) => {
                        if (venta.UNIDADES > 0) {
                            datatableVentasSemanalesAgentes.row.add([
                                venta.PRODUCTO,
                                venta.DESCRIPCION,
                                venta.CLIENTE,
                                convertirUnidades(venta.UNIDADES)
                            ]).draw(false);
                        }
                    })

                });
                iniciarGraficaBarrasAgentesSemanal(res[0]);
                iniciarGraficaPasteAgentesSemanal(res[0]);
            }).fail((res) => {
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
        } else {
            swal(
                {
                    type: "info",
                    title: "Atención",
                    text: "Debe seleccionar una semana para poder consultar.",
                    confirmButtonText: "OK",
                });
        }
    });

    let datatableVentasAnualesAgentes = $('#tblReporteVentasAnualesAgentes').DataTable({
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
            "bVisible": false
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
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            $(api.column(3).footer()).html(
                convertirUnidades(total.toFixed(0)) + " Unidades"
            );
        }
    });

    $('#cmbAnioAgentes').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioAgentesSemanaInicio').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    $('#cmbAnioAgentesSemanaFin').select2({
        theme: "bootstrap-5",
        color: "#184f4f",
        background: "#184f4f",
        backgroundColor: "184f4f",
        placeholder: "Seleccione"
    });

    const consultarInformacionVentasAnualesAgentes = (param1, param2 = 0, param3 = 0) => {
        if (param1 != 0) {
            let datos = {};
            if (param2 != 0 && param3 != 0) {
                if (param2 > param3 || param3 < param2) {
                    swal({
                        type: "info",
                        text: "La fecha de inicio no puede ser mayor a la de fin, compruebe",
                        title: "Alerta",
                        confirmButtonText: 'OK'
                    });
                    return;
                } else {
                    datos = {
                        annio: param1,
                        inicio: param2,
                        fin: param3,
                    };
                }
            } else {
                datos = {
                    annio: param1,
                };
            }
            $.ajax({
                method: "GET",
                url: "/public/agentes/reportes/ventasAnuales",
                data: datos
            }).done((res) => {
                datatableVentasAnualesAgentes.clear().draw(false);
                if (!res.includes('¬')) {
                    res.forEach(element => {
                        element.forEach(value => {
                            if (value.UNIDADES > 0) {
                                datatableVentasAnualesAgentes.row.add([
                                    value.PRODUCTO,
                                    value.DESCRIPCION,
                                    value.CLIENTE,
                                    convertirUnidades(value.UNIDADES)
                                ]).draw(false);
                            }

                        });
                    });
                    inicializarGraficaBarrasAnualAgentes(res[0]);
                } else if (res.split('¬')[0] == "Error") {
                    swal({
                        type: "error",
                        title: "Error",
                        text: "Ha ocurrido un error",
                        confirmButtonText: "OK",
                    }, () => {
                        location.href = "/public/paginaPrincipal"
                    });
                } else if (res.split('¬')[0] == "Error1") {
                    swal({
                        type: "info",
                        title: "Alerta",
                        text: res.split('¬')[1],
                        confirmButtonText: "OK",
                    }, () => {
                        location.href = "/public/paginaPrincipal"
                    });
                }
            }).fail((res) => {
                swal({
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error",
                    confirmButtonText: "OK",
                }, () => {
                    location.href = "/public/paginaPrincipal"
                });
            });

        } else {
            swal({
                type: "info",
                title: "Atención",
                text: "Debe seleccionar al menos un año de consulta",
                confirmButtonText: "OK"
            });
        }
    }

    $(document).on("click", "#btnBuscarAgentes", (e) => {
        consultarInformacionVentasAnualesAgentes($('#cmbAnioAgentes').val(), $('#cmbAnioAgentesSemanaInicio').val(), $('#cmbAnioAgentesSemanaFin').val());
    });

    if (window.location.href == "http://envasesmicroonda:8081/public/reporteAnualAgentes" || window.location.href == "http://192.168.5.200:8081/public/reporteAnualAgentes") {
        datos = {
            annio: new Date().getFullYear()
        }
        $.ajax({
            method: "GET",
            url: "/public/agentes/reportes/ventasAnuales",
            data: datos
        }).done((res) => {
            datatableVentasAnualesAgentes.clear().draw(false);
            if (!res.includes('¬')) {
                res.forEach(element => {
                    element.forEach(value => {
                        if (value.UNIDADES > 0) {
                            datatableVentasAnualesAgentes.row.add([
                                value.PRODUCTO,
                                value.DESCRIPCION,
                                value.CLIENTE,
                                convertirUnidades(value.UNIDADES)
                            ]).draw(false);
                        }
                    })
                });
                inicializarGraficaBarrasAnualAgentes(res[0]);
            } else if (res.split('¬')[0] == "Error") {
                swal({
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error",
                    confirmButtonText: "OK",
                }, () => {
                    location.href = "/public/paginaPrincipal"
                });
            } else if (res.split('¬')[0] == "Error1") {
                swal({
                    type: "info",
                    title: "Alerta",
                    text: res.split('¬')[1],
                    confirmButtonText: "OK",
                }, () => {
                    location.href = "/public/paginaPrincipal"
                });
            }
        }).fail((res) => {
            swal({
                type: "error",
                title: "Error",
                text: "Ha ocurrido un error",
                confirmButtonText: "OK",
            }, () => {
                location.href = "/public/paginaPrincipal"
            });
        });
    }
});