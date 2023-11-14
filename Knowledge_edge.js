$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
    

});

function inicializarControles() {

    //carga info en lista
    cargar_tabla_solicitudes(null);
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

    lista_lineas();
    lista_maquinas();

}
function lista_lineas() {

    $.ajax({
        url: 'Knowledge_edge.aspx/lista_Lineas',
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
            url: 'Knowledge_edge.aspx/lista_maquinas',
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
                  { data: "Id_solicitud" }
                , { data: "Fecha_solicitud" }
                , { data: "Linea" }
                , { data: "Nombre" }
                , { data: "Problema" }
                , { data: "Solucion" }
                , {
                    data: "Id_solicitud", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="ver_ticket_todos_propios(' + data + ')" >&#160;Ver</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
}
function lista_solicitudes() {

    //valida el detalle
    var detalle = $("#detalle").val()

    if (detalle.length > 1) {


        //valida el filtro fechas
        var c1 = document.getElementById('filtro0').checked
        console.log("valor:" + c1);

        var fec1 = '';
        var fec2='';

        if (c1 == true) {
            fec1=document.getElementById("fecha1").value;
            fec2=document.getElementById("fecha2").value
        }



        $('#table_sol').DataTable().destroy();

        $.ajax({
            url: 'Knowledge_edge.aspx/lista_solicitudes',
            cache: false,
            data: JSON.stringify({ fecha1: fec1, fecha2:fec2 , linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, detalle: $("#detalle").val() }),
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

    } else {
        toastr.error('No hay detalle para generar una consulta en la biblioteca', 'Info', { timeOut: 10000 });
    }
}
function ver_ticket_todos_propios(valor) {


    document.getElementById('idticketp').innerHTML = valor;
    Detalle_ticket_asignados(valor);
    $("#dialogp").dialog({ modal: true, width: 900, height: 650 });

}
function valida_edicion_ticket() {

    $('#iddescripcionsolicitudp').prop('readonly', true);
    $('#iddescripcionsolucionp').prop('readonly', true);
    $('#iddescripcionsolicitudp2').prop('readonly', true);

}
function Detalle_ticket_asignados(valor) {




    $.ajax({
        url: 'Knowledge_edge.aspx/Detalle_ticket',
        cache: false,
        data: JSON.stringify({ idticket: valor }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            document.getElementById('idfechap').innerHTML = result.Resul[0].Fechasol;
            document.getElementById('idusuariop').innerHTML = result.Resul[0].Id_usuario;
            document.getElementById('idnombrep').innerHTML = result.Resul[0].Nombre_usuario;
            document.getElementById('idlineap').innerHTML = result.Resul[0].Linea;
            document.getElementById('idproblemap').innerHTML = result.Resul[0].Tipo_problema;
            document.getElementById("idlistamov").innerHTML = result.Resul[0].Cod_soldesc;
            document.getElementById("idlistamovp").value = result.Resul[0].Cod_sol;
            document.getElementById("idlistagp").innerHTML = result.Resul[0].Grupodesc;
            document.getElementById('iddescripcionsolicitudp').innerHTML = result.Resul[0].Descripcion_solicitud;
            document.getElementById('idadjuntosp').innerHTML = result.Resul[0].Adjuntos;
            $("#iddescripcionsolucionp").val(result.Resul[0].Descripcion_solucion);//document.getElementById('iddescripcionsolucionp').innerHTML=;
            document.getElementById('idusuariohelpp').innerHTML = result.Resul[0].Usuariohelp;
            document.getElementById('idnombrehelpp').innerHTML = result.Resul[0].Nombrehelp;
            document.getElementById('idfechainip').innerHTML = result.Resul[0].Finicio;
            document.getElementById('idfechafinp').innerHTML = result.Resul[0].Ffin;
            document.getElementById('idtiempop').innerHTML = result.Resul[0].Tiempo;
            document.getElementById('idmaquinap').innerHTML = result.Resul[0].Maquina;
            document.getElementById('iddescripcionsolicitudp2').innerHTML = result.Resul[0].Descripcion_soluciont;
            //console.log('resul solicitud:' + result.Resul[0].Sol_espec);
            document.getElementById("Solucionespecializada").innerHTML = result.Resul[0].Sol_especdesc;
            document.getElementById("idanfa").innerHTML = result.Resul[0].ANFA;

            valida_edicion_ticket();
            //detalle ticket
            if (result.Resul[0].Adjuntos !== 'Ninguno') {
                detalle_imagenes_p(valor);
            } else {
                document.getElementById('linkp').innerHTML = '';
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function detalle_imagenes_p(tickets) {

    document.getElementById('linkp').innerHTML = '';
    console.log('carga lista de imagenes');

    $.ajax({
        url: 'Knowledge_edge.aspx/Detalle_imagenes',
        cache: false,
        data: JSON.stringify({ ticket: tickets }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            for (var i = 0; i < result.Resul.length; i++) {
                //$('#link').append('<li><input type="button" value="' + result.Resul[i].Id_adjunto + '" onclick="javascript:window_open("' + result.Resul[i].Archivo + '");" ></input></li>');
                var im = result.Resul[i].Id_adjunto;
                $('#linkp').append('<li><input type="button" value="' + result.Resul[i].Id_adjunto + '" onclick="window_open2(' + im + ');return false;" ></input></li>');

            }


        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function window_open2(im) {
    console.log(im);
    console.log('entro a mostrar imagen 2');

    $.ajax({
        url: 'Knowledge_edge.aspx/Detalle_imagenes2',
        cache: false,
        data: JSON.stringify({ id: im }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            var enlace = 'Imagenes.aspx?Imag=' + result.Resul[0].Archivo
            var titulo = 'imagenes' + result.Resul[0].Archivo;

            window.open(enlace, titulo, "width=750, height=550");

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function valida_anfa_detalle_m() {

    if (document.getElementById('idticketp').innerHTML != '') {

        var noticket = document.getElementById('idticketp').innerHTML;

        $.ajax({
            url: 'Knowledge_edge.aspx/Valida_anfa',
            cache: false,
            data: JSON.stringify({ ticket: noticket }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "0") {
                    toastr.error('No hay ANFA para esta solicitud', 'Info', { timeOut: 10000 });
                } else {
                    abri_danfa();
                }

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });
    }


}
function abri_danfa() {
    var tick = document.getElementById('idticketp').innerHTML;

    var enlace = 'ANFAR.aspx?Ticket=' + tick
    var titulo = 'ANFAR' + tick;
    window.open(enlace, titulo, "width=950, height=900");
}