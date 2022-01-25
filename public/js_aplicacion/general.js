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
    console.log(document.getElementsByClassName('dropify-render')[0].children[0]);
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
            console.log(res);
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
    
    $('#cmbPeriodo').select2({
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

      drEvent.on('dropify.beforeClear', function(event, element) {
          return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
      });

      drEvent.on('dropify.afterClear', function(event, element) {
          alert('File deleted');
      });

      drEvent.on('dropify.errors', function(event, element) {
          console.log('Has Errors');
      });

      var drDestroy = $('#input-file-to-destroy').dropify();
      drDestroy = drDestroy.data('dropify')
      $('#toggleDropify').on('click', function(e) {
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
    });
});