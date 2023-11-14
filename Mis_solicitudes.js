var you = {};
you.avatar = "../Imagenes/operador.png";

var me = {};
me.avatar = "../Imagenes/logo48.png";

var tiempo = null;

$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
    parar_chat();
    
});
window.onload = inicializarControles;

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
    lista_motivos();
    $('#iddescripcionsolicitud').prop('readonly', true);
    $('#iddescripcionsolucion').prop('readonly', true);
    window.setInterval("prueba()", 60000);
    
    var pruebaa = document.getElementById("codigobusqueda").value;
    var pruebaa0 = document.getElementById("fechabusqueda1").value;
    var pruebaa1 = document.getElementById("fechabusqueda2").value;
    console.log('Valor:' + pruebaa);
    console.log('Valorf1:' + pruebaa0);
    console.log('Valorf2:' + pruebaa1);
    if (pruebaa === '1') {
        console.log('entro aqui');
        lista_solicitudes_auto2();
    }
  
}
function buscarSelect(valor) {
    // creamos un variable que hace referencia al select
    var select = document.getElementById('listamot');

    // obtenemos el valor a buscar
    var buscar = valor;

    // recorremos todos los valores del select
    for (var i = 1; i < select.length; i++) {
        if (select.options[i].text == buscar) {
            // seleccionamos el valor que coincide
            select.selectedIndex = i;
        }
    }
}
function lista_lineas() {

    $.ajax({
        url: 'Mis_solicitudes.aspx/lista_Lineas',
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
function lista_motivos() {

    $.ajax({
        url: 'Mis_solicitudes.aspx/lista_motivos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#listamot").append('<option  value=0>Todas</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listamot").append('<option  value=' + result.Resul[i].Abrev + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#listamot").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_maquinas() {


    if (document.getElementById("listal").value != '0') {

        $('option', '#listamaq').remove();

        $.ajax({
            url: 'Solicitudes_help.aspx/lista_maquinas',
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
            fixedColumns:   {
                heightMatch: 'none'
            },
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Id_solicitud" }
                , { data: "Fecha_solicitud" }
                , { data: "Linea" }
                , { data: "Nombre" }
                , { data: "Usuario_solicitud" }
                , { data: "Problema" }
                , { data: "Prioridad" }
                , {
                    data: "Estado_solicitud", render: function (data, type, row) {

                        estado = data;
                        if (data === "SOLA") {
                            return '<label style="color: blue; font-weight: bold;">' + data + '</label>';
                        }
                        else if (data === "SOLN") {
                            return '<label style="color: red; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLS") {
                            return '<label style="color: green; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLF") {
                            return '<label style="color: #003300; font-weight: bold;">' + data + '</label>';
                        } else {
                            return '<label style="color: gray; font-weight: bold;">' + data + '</label>';
                        }
                    }
                  }
                , { data: "Inicio_sol" }
                , { data: "Usuario_help" }
                , {
                    data: "Id_solicitud", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="ver_ticket_todos(' + data + ')" >&#160;Ver</button>';
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

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Mis_solicitudes.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ codigo: document.getElementById("Codigo").value, fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: document.getElementById("listamot").value, usuarioh: document.getElementById("usuarioh").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated=='1') {
                cargar_tabla_solicitudes(result.Resul);
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_auto() {

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Mis_solicitudes.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ codigo: document.getElementById("Codigo").value, fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: document.getElementById("listamot").value, usuarioh: document.getElementById("usuarioh").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_solicitudes(result.Resul);
                //toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
               // toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_auto2() {

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Mis_solicitudes.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ codigo: document.getElementById("Codigo").value, fecha1: document.getElementById("fechabusqueda1").value, fecha2: document.getElementById("fechabusqueda2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: document.getElementById("listamot").value, usuarioh: document.getElementById("usuarioh").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_solicitudes(result.Resul);
                //toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                // toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function ver_ticket_todos(valor) {


    document.getElementById('idticket').innerHTML = valor;
    Detalle_ticket_todos(valor);
    $("#dialog").dialog({ modal: true, width: 900, height: 650 });
}
function Detalle_ticket_todos(valor) {

    limpiar_ventana_detalle_ticket();


    $.ajax({
        url: 'Mis_solicitudes.aspx/Detalle_ticket',
        cache: false,
        data: JSON.stringify({ idticket: valor }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            document.getElementById('idfecha').innerHTML = result.Resul[0].Fechasol;
            document.getElementById('idusuario').innerHTML = result.Resul[0].Id_usuario;
            document.getElementById('idnombre').innerHTML = result.Resul[0].Nombre_usuario;
            document.getElementById('idlinea').innerHTML = result.Resul[0].Linea;
            document.getElementById('idproblema').innerHTML = result.Resul[0].Tipo_problema;
            document.getElementById('idestadosol').innerHTML = result.Resul[0].Cod_sol;
            document.getElementById('idestadonombresol').innerHTML = result.Resul[0].Estado_sol;
            document.getElementById('iddescripcionsolicitud').innerHTML = result.Resul[0].Descripcion_solicitud;
            document.getElementById('idadjuntos').innerHTML = result.Resul[0].Adjuntos;
            document.getElementById('iddescripcionsolucion').innerHTML = result.Resul[0].Descripcion_solucion;
            document.getElementById('idusuariohelp').innerHTML = result.Resul[0].Usuariohelp;
            document.getElementById('idnombrehelp').innerHTML = result.Resul[0].Nombrehelp;
            document.getElementById('idfechaini').innerHTML = result.Resul[0].Finicio;
            document.getElementById('idfechafin').innerHTML = result.Resul[0].Ffin;
            document.getElementById('idtiempo').innerHTML = result.Resul[0].Tiempo;
            document.getElementById('idmaquina').innerHTML = result.Resul[0].Maquina;
            valida_edicion_ticket();
            //detalle ticket
            if (result.Resul[0].Adjuntos !== 'Ninguno') {
                detalle_imagenes_todos(valor);
            } else {
                document.getElementById('link').innerHTML = '';
            }
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function limpiar_ventana_detalle_ticket() {
    document.getElementById('idfecha').innerHTML = '';
    document.getElementById('idusuario').innerHTML = '';
    document.getElementById('idnombre').innerHTML = '';
    document.getElementById('idlinea').innerHTML = '';
    document.getElementById('idproblema').innerHTML = '';
    document.getElementById('idestadosol').innerHTML = '';
    document.getElementById('idestadonombresol').innerHTML = '';
    document.getElementById('iddescripcionsolicitud').innerHTML = '';
    document.getElementById('idadjuntos').innerHTML = '';
    document.getElementById('iddescripcionsolucion').innerHTML = '';
    document.getElementById('idusuariohelp').innerHTML = '';
    document.getElementById('idnombrehelp').innerHTML = '';
    document.getElementById('idfechaini').innerHTML = '';
    document.getElementById('idfechafin').innerHTML = '';
    document.getElementById('idtiempo').innerHTML = '';
}
function prueba2() {
    console.log('se actualiza chat');
    detalle_mensaje();
}
function ver_chat() {
    document.getElementById('mensajen').value = '';
    //$("#dialogchat").dialog({ modal: true, width: 500, height: 550 });
    $("#dialogchat").dialog({
        modal: true, width: 500, height: 550, close: function () {
            parar_chat();
        }
    });
    detalle_mensaje();
    tiempo = window.setInterval("prueba2()", 3000);
}
function insertChat(who, text, time,date,user) {
    if (time === undefined) {
        time = 0;
    }
    var control = "";
    //var date = formatAMPM(new Date());

    if (who == "me") {
        control = '<li style="width:100%;height:100%;">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
                            '<div class="text text-l" style="width:100%; word-wrap: break-word;" >' +
                                '<p ">' + text + '</p>' +
                                '<p><small>' + user + ' | ' + date + '</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    } else {
        control = '<li style="width:100%;height:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r" style="width:100%; word-wrap: break-word; ">' +
                                '<p style="text-align: justify;">' + text + '</p>' +
                                '<p><small>' + user + ' | ' + date + '</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 20px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
                  '</li>';
    }
    setTimeout(
        function () {
            $("#ul2").append(control).scrollTop($("#ul2").prop('scrollHeight'));
        }, time);

}
function resetChat() {
    $("#ul2").empty();
}
function enviar_mensaje() {

    if ($("#mensajen").val() != '') {
        $.ajax({
            url: 'Mis_solicitudes.aspx/enviar_chat',
            cache: false,
            data: JSON.stringify({ Idticket: document.getElementById('idticket').innerHTML, Tipo: 'OPER', Mensaje: $("#mensajen").val() }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "-1") {

                    toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-2") {

                    toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "1") {


                    detalle_mensaje();
                    document.getElementById('mensajen').value = '';
                } else if (result.Resul === "-3") {

                    toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
                } else {

                    toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
                }

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });
    }
}
function detalle_mensaje() {

        $("#ul2").empty();
 
     
        $.ajax({
            url: 'Mis_solicitudes.aspx/Detalle_chats',
            cache: false,
            data: JSON.stringify({ ticket: document.getElementById('idticket').innerHTML }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
               
                for (var i = 0; i < result.Resul.length; i++) {
                    result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre;

                    
                    if (result.Resul[i].Tipo == 'OPER') {
                        insertChat("you", result.Resul[i].Mensaje, 0, result.Resul[i].Fecha_creacion, result.Resul[i].Id_usuario_chat);
                    } else {
                        insertChat("me", result.Resul[i].Mensaje, 0, result.Resul[i].Fecha_creacion, result.Resul[i].Id_usuario_chat);
                    }
                }
                

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });

    
}
function valida_edicion_ticket() {

    var estado = document.getElementById("idestadosol").innerHTML;

    console.log(estado);
    if (estado == 'SOLA') {

        // $('#idchat').prop('enabled', true);
        document.getElementById('idchat').disabled = false;


    } else {
        document.getElementById('idchat').disabled = true;
        //$('#idchat').attr('enabled', false);

    }

}
function parar_chat() {
   
    console.log('stop chat');
    clearInterval(tiempo);
}
function detalle_imagenes_todos(tickets) {

    document.getElementById('link').innerHTML = '';
    console.log('carga lista de imagenes');

    $.ajax({
        url: 'Mis_solicitudes.aspx/Detalle_imagenes',
        cache: false,
        data: JSON.stringify({ ticket: tickets }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            for (var i = 0; i < result.Resul.length; i++) {
                //$('#link').append('<li><input type="button" value="' + result.Resul[i].Id_adjunto + '" onclick="javascript:window_open("' + result.Resul[i].Archivo + '");" ></input></li>');
                var im = result.Resul[i].Id_adjunto;
                $('#link').append('<li><input type="button" value="' + result.Resul[i].Id_adjunto + '" onclick="window_open2(' + im + ');return false;" ></input></li>');

            }


        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function window_open2(im) {
    console.log(im);
    console.log('entro a mostrar imagen 2');

    $.ajax({
        url: 'Mis_solicitudes.aspx/Detalle_imagenes2',
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
function prueba() {

    var c1 = document.getElementById("fecha1").value;
    var c2 = document.getElementById("fecha2").value;

    if (c1 == c2) {
        console.log('entro a consultar');
        lista_solicitudes_auto();
    }

}
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        enviar_mensaje();
    }
}