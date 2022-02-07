$(document).ready(e => {
    consultarDatos();
});


const consultarDatos = async () => {
    $.ajax({
        url: "/microondaRV/public/reporteunidadgrafica",
        method: "GET",
        data: "",
    })
        .done(function (res) {
            //inicializarGraficaInsumosCantidadPastel(res.cantidad_insumos);
            //inicializarGraficaInsumosCantidadBarra(res.cantidad_insumos);
            inicializarGraficaTipoPastel(res.producto);
            inicializarGraficaTipoBarra(res.producto);
        })
        .fail(function (res) {
            console.log(res);
            swal(
                {
                    type: "error",
                    title: "Error",
                    text: "Ha ocurrido un error.",
                    confirmButtonText: "OK",
                },
                function () {
                    location.href = "/microondaRV/public/paginaPrincipal";
                }
            );
        });
};

const inicializarGraficaTipoBarra = (data) => {

    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        valores.push(Number(data[index].cantidad_unidades));
        categoria.push("<b>" + data[index].desc_producto + "</b>");
        leyenda.push('  cantidad: '+Number(data[index].cantidad_unidades));
    }

    Highcharts.chart('containerVentasAllBarra', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Unidades vendidas por tipo de producto'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por tipo de producto'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            categories: categoria,
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: '<b>Total</b>'
            }

        },
        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}"><b>{point.y}</b><br/>'
        },

        series: [
            {
                name: 'Unidades vendidas por tipo de producto',
                colorByPoint: true,
                data: valores
            }
        ]
    });


    var config = {
        displaylogo: false,
        responsive: true,

    };


    TESTER = document.getElementById('tester');
    Plotly.newPlot(
        TESTER,
        [{
            type: 'bar',
            x: categoria,
            y: valores,
            text: leyenda,
        }],
        {
            showlegend: false,
            xaxis: {
                tickangle: -45
            },
            yaxis: {
                zeroline: false,
                gridwidth: 2
            },
            bargap: 0.05
        },
        config);
};

const inicializarGraficaTipoPastel = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        var tmp = {
            name: data[index].desc_producto,
            selected: (Number(index) === 1 ? true : false),
            y: parseInt(data[index].cantidad_unidades)
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasAllPastel', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Unidades vendidas por tipo de producto'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Unidades vendidas por tipo de producto',
            data: valores
        }]
    });
};

function GenerarPDF() {
    $('#ventanaCarga').modal('show');

    $.ajax({
        url: "/microondaRV/public/reportepdf",
        method: "GET",
        data: "",
    }).done(function (res) {
        console.log(res);

        let pdf = new jsPDF('p', 'pt', 'letter');

        let posicion_y_header = 28;
        let posicion_x_header = 28;

        let font_size_title = 12;
        let font_style_bold = "bold";

        let font_size_condiciones_pago = 8;
        let font_size_normal = 9;
        let font_size_small = 25;
        let font_style_normal = "normal";

        //Logo de la empresa
        let new_logo = new Image();
        new_logo.src = "img/Imagen1.png";
        let extension_logo = "png";
        pdf.addImage(new_logo, extension_logo, posicion_x_header + 180, posicion_y_header, 166, 28, "logo");



        posicion_x_header += 100;
        //Titulo
        pdf.setFontSize(16);
        pdf.setFontStyle(font_style_bold);
        pdf.text("Envases Microonda s.a. de c.v. ".toLocaleUpperCase(), posicion_x_header + 30, posicion_y_header + 50);

        posicion_x_header = 28;
        posicion_y_header += 120;
        posicion_x_header += 222;

        pdf.setFontSize(font_size_title);
        pdf.setFontStyle(font_style_bold);
        pdf.roundedRect(posicion_x_header - 70, 88, 250, 25, 5, 5, 'S')
        pdf.text("Reporte de Ventas Totales", posicion_x_header + 50, 105, {
            maxWidth: 612,
            align: "center",
        });
        posicion_y_header = 120;
        posicion_x_header = 28;

        let details = [];

        res.forEach(element => {
            details.push([
                element.folio_documento,
                element.documento,
                element.clave_producto,
                element.desc_producto,
                element.nombre_agente,
                element.cantidad_unidades,
                element.precio_pesos,
                element.precio_pesos * element.cantidad_unidades
            ])
        });
        pdf.autoTable({
            margin: {
                left: posicion_x_header,
                right: posicion_x_header
            },
            tableLineColor: [189, 195, 199],
            tableLineWidth: 0.1,
            columnWidth: 'auto',
            showHead: 'everyPage',
            fillColor: [254, 254, 254],
            styles: {
                // font: "Meta",
                lineColor: [44, 62, 80],
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [181, 181, 181],
                textColor: [0, 0, 0],
                fontSize: 7,
            },
            bodyStyles: {
                fillColor: [254, 254, 254],
                textColor: [0, 0, 0],
                fontSize: 7,
            },
            startY: posicion_y_header,
            startX: posicion_x_header,
            head: [
                ['FOLIO DOCUMENTO', 'DOCUMENTO', 'CLAVE DEL PRODUCTO', 'PRODUCTO', 'AGENTE', 'UND. VENDIDAS', 'PRE/UNIDAD', 'TOTAL VENTA']
            ],
            body: details,
        });

        posicion_y_header = 28;
        posicion_x_header = 28;
        let new_footer = new Image();
        new_footer.src = "img/Unbooxing_smiles.png";

        const pageCount = pdf.internal.getNumberOfPages();

        for (let index = 1; index <= pageCount; index++) {
            if (index == 1) {
                pdf.setPage(index);
                pdf.addImage(new_footer, extension_logo, posicion_x_header + 175, posicion_y_header + 730, 191, 24);
            } else {
                pdf.setPage(index);
                pdf.addImage(new_footer, extension_logo, posicion_x_header + 175, posicion_y_header + 730, 191, 24);
                pdf.addImage(new_logo, extension_logo, posicion_x_header + 180, posicion_y_header - 15, 166, 28, "logo");
            }
        }

        window.open(pdf.output("bloburl"), "", "height=1400,width=1400,scrollbars=yes");
        $('#ventanaCarga').modal('toggle');

        /*const woorkbook = new ExcelJS.Workbook();
        woorkbook.xlsx.writeFile('reporte de ventas.xlsx');*/

        //console.log(woorkbook.output('bloburl'));
    });
}
