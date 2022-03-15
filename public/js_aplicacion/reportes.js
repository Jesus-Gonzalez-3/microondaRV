/**
 *      Seccion Ventas semanal Direccion Graficos
 */

const inicializarGraficaTipoBarra = (data) => {

    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            data: [Number(data[index].Unidades)]
        };
        valores.push(tmp);
        categoria.push("<b>" + data[index].cliente + "</b>");
        leyenda.push('  cantidad: ' + new Intl.NumberFormat('en').format(Number(data[index].Unidades)));
    }

    Highcharts.chart('containerVentasSemanalBarra', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Unidades vendidas por Cliente de Otras Industrias'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por cliente semana consultada'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });

};

const inicializarGraficaTipoPastel = (data) => {
    let valores = [];
    let tamanio = data.length;
    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            y: parseInt(data[index].Unidades)
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasSemanalOtrasPastel', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Unidades vendidas por cliente de otras industrias'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por cliente Semana consultada'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} Unidades</b>',
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}"><b>{point.name}</b></span>: <b>{point.y}</b> Unidades<br/>'

        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            },
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            colorByPoint: true,
            name: 'Unidades vendidas por cliente de otras industrias',
            data: valores
        }]
    });
};

const graficosbarrasPromedio = (data) => {
    let fecha = new Date();
    categoria = [];
    valores = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let serie1 = [];
        categoria.push(element.CLIENTE);
        serie1.push(parseFloat(element.UNIDADES_ANNIO1.toString().replace(',', '')));
        serie1.push(parseFloat(element.UNIDADES_ANNIO2.toString().replace(',', '')));
        serie1.push(parseFloat(element.UNIDADES_ANNIO3.toString().replace(',', '')));
        valores.push(serie1);

    }
    let chart = {
        type: 'column'
    };
    let title = {
        text: 'Unidades Vendidas por Cliente, Otras Industrias'
    };
    let subtitle = {
        text: 'Promedio de Ventas de los Ultimos 3 años'
    };
    let xAxis = {
        categories: [(fecha.getFullYear()) - 2, (fecha.getFullYear()) - 1, (fecha.getFullYear())],
        title: {
            text: null
        }
    };
    let yAxis = {
        min: 0,
        title: {
            text: 'Promedio de ventas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };
    let tooltip = {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    };
    let plotOptions = {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    };
    let legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: -10,
        floating: false,
        borderWidth: 3,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    };
    let credits = {
        enabled: false
    };

    let series = [
        {
            name: categoria[0],
            data: valores[0]
        },
        {
            name: categoria[1],
            data: valores[1]
        }, {
            name: categoria[2],
            data: valores[2]
        }, {
            name: categoria[3],
            data: valores[3]
        }, {
            name: categoria[4],
            data: valores[4]
        }, {
            name: categoria[5],
            data: valores[5]
        }, {
            name: categoria[6],
            data: valores[6]
        }, {
            name: categoria[7],
            data: valores[7]
        }, {
            name: categoria[8],
            data: valores[8]
        }, {
            name: categoria[9],
            data: valores[9]
        }, {
            name: categoria[10],
            data: valores[10]
        }, {
            name: categoria[11],
            data: valores[11]
        }, {
            name: categoria[12],
            data: valores[12]
        }, {
            name: categoria[13],
            data: valores[13]
        }, {
            name: categoria[14],
            data: valores[14]
        }, {
            name: categoria[15],
            data: valores[15]
        }, {
            name: categoria[16],
            data: valores[16]
        }, {
            name: categoria[17],
            data: valores[17]
        }, {
            name: categoria[18],
            data: valores[18]
        }, {
            name: categoria[19],
            data: valores[19]
        },

    ];
    let json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#containerVentasSemanalBarraPromedio').highcharts(json);
}

const inicializarGraficaTipoBarraImporte = (data) => {

    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tem = {
            name: data[index].cliente,
            data: [Number(data[index].IMPORTE_ACTUAL)]
        }
        valores.push(tem);
        categoria.push("<b>" + data[index].cliente + "</b>");
        leyenda.push('  cantidad: ' + data[index].IMPORTE_ACTUAL);
    }

    Highcharts.chart('containerVentasSemanalBarraImporte', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Importe de ventas por Cliente de Otras Industrias'
        },
        subtitle: {
            text: 'Total en pesos de ventas por cliente semana consultada'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });

};

const inicializarGraficaTipoPastelImporte = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            selected: (Number(index) === 1 ? true : false),
            y: parseInt(data[index].IMPORTE_ACTUAL)
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasSemanalOtrasPastelImporte', {
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
            text: 'Importe de ventas por cliente de otras industrias'
        },
        subtitle: {
            text: 'Total en pesos de ventas por cliente Semana consultada'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>$ {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Importe de ventas por cliente de otras industrias',
            data: valores
        }]
    });
};

const graficosbarrasPromedioImporte = (data) => {
    let fecha = new Date();
    categoria = [];
    valores = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let serie1 = [];
        categoria.push(element.CLIENTE);
        serie1.push(parseFloat(element.IMPORTE_ANNIO1.toString().replace(',', '')));
        serie1.push(parseFloat(element.IMPORTE_ANNIO2.toString().replace(',', '')));
        serie1.push(parseFloat(element.IMPORTE_ANNIO3.toString().replace(',', '')));
        valores.push(serie1);

    }
    let chart = {
        type: 'column'
    };
    let title = {
        text: 'Importe promedio de ventas por cliente otras industrias'
    };
    let subtitle = {
        text: 'Importe promedio de ventas de los Ultimos 3 años'
    };
    let xAxis = {
        categories: [(fecha.getFullYear()) - 2, (fecha.getFullYear()) - 1, (fecha.getFullYear())],
        title: {
            text: null
        }
    };
    let yAxis = {
        min: 0,
        title: {
            text: 'Promedio de ventas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };
    let tooltip = {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    };
    let plotOptions = {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    };
    let legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: -10,
        floating: false,
        borderWidth: 3,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    };
    let credits = {
        enabled: false
    };

    let series = [
        {
            name: categoria[0],
            data: valores[0]
        },
        {
            name: categoria[1],
            data: valores[1]
        }, {
            name: categoria[2],
            data: valores[2]
        }, {
            name: categoria[3],
            data: valores[3]
        }, {
            name: categoria[4],
            data: valores[4]
        }, {
            name: categoria[5],
            data: valores[5]
        }, {
            name: categoria[6],
            data: valores[6]
        }, {
            name: categoria[7],
            data: valores[7]
        }, {
            name: categoria[8],
            data: valores[8]
        }, {
            name: categoria[9],
            data: valores[9]
        }, {
            name: categoria[10],
            data: valores[10]
        }, {
            name: categoria[11],
            data: valores[11]
        }, {
            name: categoria[12],
            data: valores[12]
        }, {
            name: categoria[13],
            data: valores[13]
        }, {
            name: categoria[14],
            data: valores[14]
        }, {
            name: categoria[15],
            data: valores[15]
        }, {
            name: categoria[16],
            data: valores[16]
        }, {
            name: categoria[17],
            data: valores[17]
        }, {
            name: categoria[18],
            data: valores[18]
        }, {
            name: categoria[19],
            data: valores[19]
        },

    ];
    let json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#containerVentasSemanalBarraPromedioImporte').highcharts(json);
}

// *********************************************************************************************

/**
 * Seccion Ventas semanal Direccion Graficos Calzado
 */



const inicializarGraficaTipoBarraCalzado = (data) => {

    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tem = {
            name: data[index].cliente,
            data: [Number(data[index].Unidades)]
        }
        valores.push(tem);
        categoria.push("<b>" + data[index].cliente + "</b>");
        leyenda.push('  cantidad: ' + new Intl.NumberFormat('en').format(Number(data[index].Unidades)));
    }

    Highcharts.chart('containerVentasSemanalBarraCalzado', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Unidades vendidas por Cliente de Calzado'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por cliente semana consultada'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });

};

const inicializarGraficaTipoPastelCalzado = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            selected: (Number(index) === 1 ? true : false),
            y: parseInt(data[index].Unidades)
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasSemanalCalzadoPastel', {
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
            text: 'Unidades vendidas por cliente de calzado'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por cliente Semana consultada'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>$ {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Unidades vendidas por cliente de calzado',
            data: valores
        }]
    });
};

const graficosbarrasPromedioCalzado = (data) => {
    let fecha = new Date()
    let categoria = [];
    let valores = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let serie1 = [];
        categoria.push(element.CLIENTE);
        serie1.push(parseFloat(element.UNIDADES_ANNIO1.toString().replace(',', '')));
        serie1.push(parseFloat(element.UNIDADES_ANNIO2.toString().replace(',', '')));
        serie1.push(parseFloat(element.UNIDADES_ANNIO3.toString().replace(',', '')));
        valores.push(serie1);

    }
    let chart = {
        type: 'column'
    };
    let title = {
        text: 'Unidades Vendidas por Cliente, Otras Industrias'
    };
    let subtitle = {
        text: 'Promedio de Ventas de los Ultimos 3 años'
    };
    let xAxis = {
        categories: [(fecha.getFullYear()) - 2, (fecha.getFullYear()) - 1, (fecha.getFullYear())],
        title: {
            text: null
        }
    };
    let yAxis = {
        min: 0,
        title: {
            text: 'Promedio de ventas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };
    let tooltip = {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    };
    let plotOptions = {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    };
    let legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: -10,
        floating: false,
        borderWidth: 3,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    };
    let credits = {
        enabled: false
    };

    let serie = [];
    for (let index = 0; index < categoria.length; index++) {
        let valor = {
            name: categoria[index],
            data: valores[index]

        }
        serie.push(valor);
    }

    let json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = serie;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#containerVentasSemanalBarraPromedioCalzado').highcharts(json);
    return true;
}
const inicializarGraficaTipoBarraCalzadoImporte = (data) => {

    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tem = {
            name: data[index].cliente,
            data: [Number(data[index].IMPORTE_ACTUAL)]
        }
        valores.push(tem);
        categoria.push("<b>" + data[index].cliente + "</b>");
        leyenda.push('  cantidad: ' + Number(data[index].IMPORTE_ACTUAL));
    }

    Highcharts.chart('containerVentasSemanalBarraCalzadoImporte', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Importe de ventas por Cliente de Calzado'
        },
        subtitle: {
            text: 'Total en pesos de ventas por cliente semana consultada'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });

};

const inicializarGraficaTipoPastelCalzadoImporte = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            selected: (Number(index) === 1 ? true : false),
            y: parseInt(data[index].IMPORTE_ACTUAL)
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasSemanalCalzadoPastelImporte', {
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
            text: 'Importe de ventas por por cliente de calzado'
        },
        subtitle: {
            text: 'Total en pesos de ventas por cliente semana consultada'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>$ {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Importe de ventas por cliente de calzado',
            data: valores
        }]
    });
};

const graficosbarrasPromedioCalzadoImporte = (data) => {
    let fecha = new Date();
    let categoria = [];
    let valores = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let serie1 = [];
        categoria.push(element.CLIENTE);
        serie1.push(parseFloat(element.IMPORTE_ANNIO1.toString().replace(',', '')));
        serie1.push(parseFloat(element.IMPORTE_ANNIO2.toString().replace(',', '')));
        serie1.push(parseFloat(element.IMPORTE_ANNIO3.toString().replace(',', '')));
        valores.push(serie1);

    }
    let chart = {
        type: 'column'
    };
    let title = {
        text: 'Importe promedio de ventas por Cliente, Otras Industrias'
    };
    let subtitle = {
        text: 'Importe promedio de ventas de los Ultimos 3 años'
    };
    let xAxis = {
        categories: [(fecha.getFullYear()) - 2, (fecha.getFullYear()) - 1, (fecha.getFullYear())],
        title: {
            text: null
        }
    };
    let yAxis = {
        min: 0,
        title: {
            text: 'Promedio de ventas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };
    let tooltip = {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    };
    let plotOptions = {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    };
    let legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: -10,
        floating: false,
        borderWidth: 3,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    };
    let credits = {
        enabled: false
    };

    let serie = [];
    for (let index = 0; index < categoria.length; index++) {
        let valor = {
            name: categoria[index],
            data: valores[index]

        }
        serie.push(valor);
    }

    let json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = serie;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#containerVentasSemanalBarraPromedioCalzadoImporte').highcharts(json);
}


const incializarGraficaBarrasVentasPeriodoBarra = (data) => {
    //console.log(data);
    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;
    let valores1 = [];
    let categoria1 = [];
    let leyenda1 = [];

    for (let index = 0; index < tamanio; index++) {
        let tem = {
            name: "Periodo: " + data[index].periodo,
            data: [Number((data[index].TotalUnidades).toString().replace(',', '').replace(',', '').replace(',', ''))]
        }
        let tem2 = {
            name: "Periodo: " + data[index].periodo,
            data: [Number(Number((data[index].TotalImporte).toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2))]
        }
        valores.push(tem);
        categoria.push("<b>" + data[index].periodo + "</b>");
        leyenda.push((data[index].totalUnidades) + " Unidades vendidas en el Periodo " + data[index].periodo);
        valores1.push(tem2);
        categoria1.push("<b>" + data[index].periodo + "</b>");
        leyenda1.push((data[index].TotalImporte) + " Ventas en Pesos en el Periodo " + data[index].periodo);
    }
    Highcharts.chart('containerVentasPeriodoBarra', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Unidades vendidas por Periodo de Trabajo'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Periodo de Trabajo'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });
    Highcharts.chart('containerVentasPeriodoBarraImporte', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ventas en Pesos por Periodo de Trabajo'
        },
        subtitle: {
            text: 'Total en Pesos vendidos por Periodo de Trabajo'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            categories: categoria1,
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
        }, credits: {
            enabled: false
        },
        series: valores1
    });
}

const incializarGraficaBarrasVentasPeriodoGerentes = (data) => {
    //console.log(data);
    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tem = {
            name: data[index].periodo,
            data: [Number((data[index].TotalUnidades).toString().replace(',', '').replace(',', '').replace(',', ''))]
        }
        valores.push(tem);
        categoria.push("<b>" + data[index].periodo + "</b>");
        leyenda.push((data[index].totalUnidades) + " Unidades vendidas en el Periodo " + data[index].periodo);
    }
    Highcharts.chart('containerVentasPeriodoBarra', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Unidades vendidas por Periodo de Trabajo'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Periodo de Trabajo'
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
            , data: leyenda
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
        }, credits: {
            enabled: false
        },
        series: valores
    });
}

const incializarGraficaBarrasVentasPeriodoPastel = (data) => {
    let valores = [];
    let valores1 = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: "Periodo : " + data[index].periodo + "<br>",
            y: Number((data[index].TotalUnidades).toString().replace(',', '').replace(',', '').replace(',', ''))
        };

        let tmp1 = {
            name: "Periodo : " + data[index].periodo + "<br>",
            y: Number(Number((data[index].TotalImporte).toString().replace(',', '').replace(',', '').replace(',', '')).toFixed(2))
        };
        valores.push(tmp);
        valores1.push(tmp1);
    }

    Highcharts.chart('containerVentasPeriodoPie', {
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
            text: 'Ventas en Unidades Periodo'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Periodo '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Numero de Unidades Vendidas: <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Unidades Por Periodo',
            data: valores
        }]
    });

    Highcharts.chart('containerVentasPeriodoPieImporte', {
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
            text: 'Ventas en Pesos por Periodo'
        },
        subtitle: {
            text: 'Total en pesos vendidos por Periodo '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Ventas en Pesos : $ <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Pesos Por Periodo',
            data: valores1
        }]
    });
}

const incializarGraficaBarrasVentasPeriodoPastelGerentes = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: "Periodo : " + data[index].periodo + "<br>",
            y: Number((data[index].TotalUnidades).toString().replace(',', '').replace(',', '').replace(',', ''))
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasPeriodoPie', {
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
            text: 'Ventas en Unidades Periodo'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Periodo '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Numero de Unidades Vendidas: <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Unidades Por Periodo',
            data: valores
        }]
    });
}
// *********************************************************************************************

const GenerarPDF = () => {
    $('#ventanaCarga').modal('show');

    $.ajax({
        url: "/public/reportepdf",
        method: "GET",
        data: "",
    }).done(function (res) {

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

/**
 * Graficos ventas anuales
 * @param {Array} data 
 */

const inicializarGraficaPastelAnualAgentes = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            y: Number((data[index].unidades).toString().replace(',', '').replace(',', ''))
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasAnualesPastelDireccionUnidades', {
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
            text: 'Ventas en Unidades Anuales por Agente'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Agente '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Numero de Unidades Vendidas: <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Unidades Anuales por Agente',
            data: valores
        }]
    });
}

const inicializarGraficaPastelAnualAgentesGerentes = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            y: Number((data[index].unidades).toString().replace(',', '').replace(',', ''))
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasAnualesPastelGerenciaUnidades', {
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
            text: 'Ventas en Unidades Anuales por Agente'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por Agente '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Numero de Unidades Vendidas: <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Unidades Anuales por Agente',
            data: valores
        }]
    });
}

const inicializarGraficaPastelAnualAgentes2 = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        let tmp = {
            name: data[index].cliente,
            y: Number((data[index].importe).toString().replace(',', '').replace(',', '').replace(',', ''))
        };
        valores.push(tmp);
    }

    Highcharts.chart('containerVentasAnualesPastelDireccionImporte', {
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
            text: 'Ventas en Pesos Anuales por Agente'
        },
        subtitle: {
            text: 'Total en pesos vendidos por Agente '
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Pesos Vendidos $ : <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Pesos Anuales por Agente',
            data: valores
        }]
    });
    return true;
}

// *********************************************************************************************

/**
*
*   Despliege de ventas semanal Agentes 
*
*/

const iniciarGraficaBarrasAgentesSemanal = (data) => {
    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        if (data[index].UNIDADES > 0) {
            let val = {
                name: data[index].DESCRIPCION,
                data: [Number((data[index].UNIDADES).toString().replace(',', '').replace(',', '').replace(',', ''))]
            }
            valores.push(val);
            categoria.push("<b>" + data[index].DESCRIPCION + "</b>");
            leyenda.push((data[index].UNIDADES) + " Unidades vendidas");
        }
    }
    Highcharts.chart('containerVentasSemanalBarraAgentes', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ventas en Unidades'
        },
        subtitle: {
            text: 'Total de Unidades vendidas por semana'
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
            , data: leyenda
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
        }, credits: {
            enabled: false
        },
        series: valores
    });

}

const iniciarGraficaPasteAgentesSemanal = (data) => {
    let valores = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        if (data[index].UNIDADES > 0) {
            let tmp = {
                name: data[index].DESCRIPCION,
                y: Number((data[index].UNIDADES))
            };
            valores.push(tmp);
        }
    }

    Highcharts.chart('containerVentasSemanalPastelAgentes', {
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
            text: 'Ventas en Unidades'
        },
        subtitle: {
            text: 'Total de Unidades vendidas a la semana consultada'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: 'Numero de Unidades Vendidas: <b> {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: <br/> {point.percentage:.2f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Ventas en Unidades',
            data: valores
        }]
    });
}

/**
DESPLIEGE DE VENTAS ANUALES AGENTES
*/
const inicializarGraficaBarrasAnualAgentes = (data) => {
    let valores = [];
    let categoria = [];
    let leyenda = [];
    let tamanio = data.length;

    for (let index = 0; index < tamanio; index++) {
        if (data[index].UNIDADES > 0) {
            let val = {
                name: data[index].DESCRIPCION,
                data: [Number((data[index].UNIDADES))]
            }
            valores.push(val);
            categoria.push("<b>" + data[index].DESCRIPCION + "</b>");
            leyenda.push((data[index].UNIDADES) + " Unidades vendidas");
        }
    }

    console.log(categoria);
    console.log(valores);
    Highcharts.chart('containerVentasAnualesPastelAgentesUnidades', {
        exporting: {
            enabled: true
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ventas en Unidades'
        },
        subtitle: {
            text: 'Total de Unidades vendidas Anualmente'
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
        }, credits: {
            enabled: false
        },
        series: valores
    });
}