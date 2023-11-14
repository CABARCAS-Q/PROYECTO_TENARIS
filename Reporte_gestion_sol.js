$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista

    $(function () {
        $('input[name="fecha1"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fecha2"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fecha3"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fecha4"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    lista_lineas();
    lista_maquinas();

    lista_motivos2();
    cargar_tabla_solicitudes(null);
    cargar_tabla_solicitudes_lineas(null);
}
function lista_lineas() {

    $.ajax({
        url: 'Reporte_gestion_sol.aspx/lista_Lineas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#listal").append('<option  value=0>Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_maquinas() {


    if (document.getElementById("listal").value != '0') {

        $('option', '#listamaq').remove();

        $.ajax({
            url: 'Reporte_gestion_sol.aspx/lista_maquinas',
            cache: false,
            data: JSON.stringify({ linea: document.getElementById("listal").value }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                $("#listamaq").append('<option  value=0>Todos</option>');
                for (var i = 0; i < result.Resul.length; i++) {
                    $("#listamaq").append('<option  value=' + result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre + '</option>');
                }
                $("#listamaq").select();

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });

    }
}
function lista_motivos2() {

    $.ajax({
        url: 'Reporte_gestion_sol.aspx/lista_motivos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#listamov").append('<option  value=0>Todas</option>');
            $("#listamov0").append('<option  value=0>Todas</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listamov").append('<option  value=' + result.Resul[i].Id_motivo + '>' + result.Resul[i].Descripcion + '</option>');
                $("#listamov0").append('<option  value=' + result.Resul[i].Id_motivo + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#listamov").select();
            $("#listamov0").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function cargar_tabla_solicitudes(lstData) {
    var estado = '';

    try {
        $('#table_sol').DataTable().destroy();
        $('#table_sol').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            fixedColumns: {
                heightMatch: 'none'
            },
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "IdUsuario" }
                , { data: "Nombres" }
                , {
                    data: "SOLF", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,1);' >" + data + "</a>";
                    }
                  }
                , {
                    data: "SOLS", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,2);' >" + data + "</a>";
                    }
                }
                , {
                    data: "SOLC", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,3);' >" + data + "</a>";
                    }
                }
                , {
                    data: "SOLA", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,4);' >" + data + "</a>";
                    }
                }
                , {
                    data: "SOLN", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,5);' >" + data + "</a>";
                    }
                }
                , {
                    data: "Total", render: function (data) {
                        return "<a class='btn btn-dark' style='Color:Black;font-weight: bold;' onclick='abrir_ventana(this,6);' >" + data + "</a>";
                    }
                }
               
                

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
}
function cargar_tabla_solicitudes_lineas(lstData) {
    var estado = '';

    try {
        $('#table_sol_li').DataTable().destroy();
        $('#table_sol_li').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            fixedColumns: {
                heightMatch: 'none'
            },
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "IdLinea" }
                , { data: "Nombresli" }
                , { data: "SOLF" }
                , { data: "SOLS" }
                , { data: "SOLC" }
                , { data: "SOLA" }
                , { data: "SOLN" }
                , { data: "Total" }
            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol_li():\n' + e.message, "error");
    }
}
function lista_solicitudes() {

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Reporte_gestion_sol.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({  fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: document.getElementById("listamov").value}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_solicitudes(result.Resul);
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_lineas() {

    $('#table_sol_li').DataTable().destroy();

    $.ajax({
        url: 'Reporte_gestion_sol.aspx/lista_solicitudes_lineas',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fecha3").value, fecha2: document.getElementById("fecha4").value, estado: document.getElementById("listamov0").value, usuarioh: document.getElementById("usuarioh").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_solicitudes_lineas(result.Resul);
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}

function abrir_ventana(tt, pos) {
    var fec1 = document.getElementById("fecha1").value;
    var fec2 = document.getElementById("fecha2").value;
    var tiposol = '';
    var filtroconsulta = '';
    var lineaconsulta = '0';
    var usuarioconsulta = '';

    console.log('valor:'+pos);

    if (pos == '1') {
        tiposol = 'SOLF';
    } else if (pos == '2') {
        tiposol = 'SOLS';
    } else if (pos == '3') {
        tiposol = 'SOLC';
    } else if (pos == '4') {
        tiposol = 'SOLA';
    } else if (pos == '5') {
        tiposol = 'SOLN';
    } else if (pos == '6') {
        tiposol = '0';
    }

    var validacion=0
   
    $('#table_sol tr').on('dblclick', function (e) {
        e.preventDefault;
        var dato = $(this).find('td:first').html();
        usuarioconsulta = dato;
       
        if (validacion == 0) {
        console.log('user:' + usuarioconsulta);
            window.open('Solucion_especializada.aspx?Val=1&F1=' + fec1 + '&F2=' + fec2 + '&Fil=' + filtroconsulta + '&Li=' + lineaconsulta + '&Us=' + usuarioconsulta + '&Ti=' + tiposol, 'Sol');
            validacion = 1;
        }
    });

   

    
}