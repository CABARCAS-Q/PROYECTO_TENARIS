var me = {};
me.avatar = "../Imagenes/operador.png";

var you = {};
you.avatar = "../Imagenes/logo48.png";

var tiempo=null;

$(document).ready(function () {

    inicializarControles();
    window.setInterval("prueba()", 60000);
    //window.setInterval("prueba2()", 3000);
    parar_chat();

    $('#cierra_chat').click(function (event) {
        $('#modal, #overlay').hide();
        event.preventDefault();
    });

    $('#modal').draggable({
        start: function () {
        },

        stop: function () {
        }
    });
});

function inicializarControles() {

    //carga info en lista
    document.getElementById('SA').innerHTML = '0';
    document.getElementById('TS').innerHTML = '0';
    $(function () {
        $('input[name="fechat1"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fechat2"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fecham1"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });
    $(function () {
        $('input[name="fecham2"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }
        );
    });

    cargar_tabla_mis_solicitudes(null);
    cargar_tabla_todas_solicitudes(null);
    lista_lineas();
    lista_motivos();
    lista_problemas();
    update_estadisticas();
    lista_grupos();
    lista_persona_help();
    $('#iddescripcionsolicitud').prop('readonly', true);
    $('#iddescripcionsolucion').prop('readonly', true);
    $('#iddescripcionsolucion2').prop('readonly', true);
    $('#iddescripcionsolicitudp').prop('readonly', true);
    $("#Solucionespecializada").append('<option  value="0">No</option>');
    $("#Solucionespecializada").append('<option  value="1">Si</option>');
    $("#Solucionespecializada").select();

    lista_solicitudes_todas_auto_inicio();
    lista_solicitudes_propias_auto_inicio();

}
function cargar_tabla_mis_solicitudes(lstData) {
    var estado = '';

    try {
        $('#table_mis_sol').DataTable().destroy();
        $('#table_mis_sol').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Id_solicitud" }
                , { data: "Fecha_solicitud" }
                , { data: "Linea" }
                , { data: "Problema" }
                , {
                    data: "Estado_solicitud", render: function (data, type, row) {

                        estado = data;
                        if (data === "SOLS") {
                            return '<label style="color: green; font-weight: bold;">' + data + '</label>';
                        }
                        else if (data === "SOLN") {
                            return '<label style="color: red; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLA") {
                            return '<label style="color: blue; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLC") {
                            return '<label style="color: gray; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLF") {
                            return '<label style="color: #003300; font-weight: bold;">' + data + '</label>';
                        } else {
                            return '<label style="color: gray; font-weight: bold;">' + data + '</label>';
                        }
                    }
                }
                , {
                    data: "Id_solicitud", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="ver_ticket_todos_propios(' + data +')" >&#160;Ver</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_todas_sol():\n' + e.message, "error");
    }
}
function cargar_tabla_todas_solicitudes(lstData) {
    var estado = '';

    try {
        $('#table_todas_sol').DataTable().destroy();
        $('#table_todas_sol').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Id_solicitud" }
                , { data: "Fecha_solicitud" }
                , { data: "Linea" }
                , { data: "Problema" }
                , {
                    data: "Estado_solicitud", render: function (data, type, row) {

                        estado = data;
                        if (data === "SOLS") {
                            return '<label style="color: green; font-weight: bold;">' + data + '</label>';
                        }
                        else if (data === "SOLN") {
                            return '<label style="color: red; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLA") {
                            return '<label style="color: blue; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLC") {
                            return '<label style="color: gray; font-weight: bold;">' + data + '</label>';
                        } else if (data === "SOLF") {
                            return '<label style="color: #003300; font-weight: bold;">' + data + '</label>';
                        } else {
                            return '<label style="font-weight: bold;">' + data + '</label>';
                        }
                    }
                }
                , {
                    data: "Id_solicitud", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="agregar_ticket('+data+')" >&#160;Asignar</button>';
                    }

                }
                , {
                    data: "Id_solicitud", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="ver_ticket_todos(' + data + ')" >&#160;Ver</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_todas_sol():\n' + e.message, "error");
    }
}
function lista_lineas() {

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_Lineas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#mlistal").append('<option  value=0>Todos</option>');
            $("#tlistal").append('<option  value=0>Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#mlistal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
                $("#tlistal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#mlistal").select();
            $("#tlistal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_motivos() {

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_motivos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#mlistamot").append('<option  value=0>Todas</option>');
            $("#tlistamot").append('<option  value=0>Todas</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#mlistamot").append('<option  value=' + result.Resul[i].Abrev + '>' + result.Resul[i].Descripcion + '</option>');
                $("#tlistamot").append('<option  value=' + result.Resul[i].Abrev + '>' + result.Resul[i].Descripcion + '</option>');
                if (result.Resul[i].Abrev != 'SOLN') {
                    $("#idlistamov").append('<option  value=' + result.Resul[i].Abrev + '>' + result.Resul[i].Abrev + ' - ' + result.Resul[i].Descripcion + '</option>');
                }
            }
            $("#mlistamot").select();
            $("#tlistamot").select();
            $("#idlistamov").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_problemas() {

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_problemas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            //$("#listamot").append('<option  value=0>Todas</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#idproblemap").append('<option  value=' + result.Resul[i].Id_motivo + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#idproblemap").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_persona_help() {

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_personal_help',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#persona_help").append('<option  value=' + result.Resul[i].Id_usuario + '>' + result.Resul[i].Id_usuario + ' - ' + result.Resul[i].Nombres + '</option>');
                $("#persona_helpp").append('<option  value=' + result.Resul[i].Id_usuario + '>' + result.Resul[i].Id_usuario + ' - ' + result.Resul[i].Nombres + '</option>');
            }
            $("#persona_help").select();
            $("#persona_helpp").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_grupos() {

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_grupos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#idlistagp").append('<option  value=0>Ninguna</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#idlistagp").append('<option  value=' + result.Resul[i].Id_grupo + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#idlistagp").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_todas() {

    $('#table_todas_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fechat1").value, fecha2: document.getElementById("fechat2").value, linea: document.getElementById("tlistal").value, estado: document.getElementById("tlistamot").value, usuarioh: '' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_todas_solicitudes(result.Resul);
                document.getElementById('TS').innerHTML = result.Resul_Conteo;
                toastr.success('Carga exitosa:', 'Info', { timeOut: 5000 });
                update_estadisticas();
            } else {
                document.getElementById('TS').innerHTML = '0';
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_todas_auto() {

    $('#table_todas_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes_auto',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fechat1").value, fecha2: document.getElementById("fechat2").value, linea: document.getElementById("tlistal").value, estado: document.getElementById("tlistamot").value, usuarioh: '' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_todas_solicitudes(result.Resul);
                document.getElementById('TS').innerHTML = result.Resul_Conteo;
                
            } else {
                document.getElementById('TS').innerHTML = '0';
            }

        },
        error: function (textStatus, e) {
            //toastr.error('Error' + e, 'Info', { timeOut: 10000 });
        }
    });
}
function lista_solicitudes_propias() {

    $('#table_mis_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fecham1").value, fecha2: document.getElementById("fecham2").value, linea: document.getElementById("mlistal").value, estado: document.getElementById("mlistamot").value, usuarioh: '1' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_mis_solicitudes(result.Resul);
                document.getElementById('SA').innerHTML = result.Resul_Conteo;
                toastr.success('Carga exitosa:', 'Info', { timeOut: 5000 });
                update_estadisticas();
            } else {
                document.getElementById('SA').innerHTML = '0';
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes_propias_auto() {



    $('#table_mis_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes_auto',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fecham1").value, fecha2: document.getElementById("fecham2").value, linea: document.getElementById("mlistal").value, estado: document.getElementById("mlistamot").value, usuarioh: '1' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_mis_solicitudes(result.Resul);
                document.getElementById('SA').innerHTML = result.Resul_Conteo;
            } else {
                document.getElementById('SA').innerHTML = '0';
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function prueba() {
    
    var c1 = document.getElementById('noti').checked
    console.log("valor:" + c1);

    if (c1 == true) {
        console.log('entro a notificacion');
        valida_notificacion();
    }

    lista_solicitudes_todas_auto();
    update_estadisticas();
    
}
function prueba2() {
    console.log('se actualiza chat');
    detalle_mensaje();
}
function ver_ticket_todos(valor) {
    
    
    document.getElementById('idticket').innerHTML = valor;
    Detalle_ticket_todos(valor);
    $("#dialog").dialog({ modal: true, width: 900, height: 650 });
}
function ver_ticket_todos_propios(valor) {

    parar_chat();
    document.getElementById('idticketp').innerHTML = valor;
    document.getElementById('iddescripcionsolicitudp2').innerHTML = '';
    $('#iddescripcionsolicitudp2').val('');
    Detalle_ticket_asignados(valor);
    $("#dialogp").dialog({ modal: true, width: 900, height: 650 });

}
function agregar_ticket(valor) {

    $.confirm({
        title: 'Confirmacion',
        content: 'Desea Agregar Este Ticket:'+valor,
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');
                    Asignacion_ticket(valor);
                }
            },
            cancel: function () {

            },

        }
    });

}
function agregar_ticketv() {

    var valor=document.getElementById('idticket').innerHTML;

    $.confirm({
        title: 'Confirmacion',
        content: 'Desea Agregar Este Ticket:' + valor,
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');
                    Asignacion_ticket(valor);
                }
            },
            cancel: function () {

            },

        }
    });

}
function limpiar_ventana_detalle_ticket_m() {
    document.getElementById('idfechap').innerHTML = '';
    document.getElementById('idusuariop').innerHTML = '';
    document.getElementById('idnombrep').innerHTML = '';
    document.getElementById('idlineap').innerHTML = '';
    //document.getElementById('idproblemap').innerHTML = '';
    document.getElementById('iddescripcionsolicitudp').innerHTML = '';
    document.getElementById('idadjuntosp').innerHTML = '';
    document.getElementById('iddescripcionsolucionp').innerHTML = '';
    document.getElementById('iddescripcionsolicitudp2').innerHTML = '';
    document.getElementById('idusuariohelpp').innerHTML = '';
    document.getElementById('idnombrehelpp').innerHTML = '';
    document.getElementById('idfechainip').innerHTML = '';
    document.getElementById('idfechafinp').innerHTML = '';
    document.getElementById('idtiempop').innerHTML = '';
 
    //
    
}
function Detalle_ticket_asignados(valor) {


    limpiar_ventana_detalle_ticket_m();

    $.ajax({
        url: 'Gestion_solicitud.aspx/Detalle_ticket',
        cache: false,
        data: JSON.stringify({ idticket:  valor}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            document.getElementById('idfechap').innerHTML=result.Resul[0].Fechasol;
            document.getElementById('idusuariop').innerHTML=result.Resul[0].Id_usuario;
            document.getElementById('idnombrep').innerHTML=result.Resul[0].Nombre_usuario;
            document.getElementById('idlineap').innerHTML=result.Resul[0].Linea;
            //document.getElementById('idproblemap').innerHTML=result.Resul[0].Tipo_problema;
            document.getElementById("idproblemap").value = result.Resul[0].Tipo_problema_id;
            document.getElementById("idlistamov").value = result.Resul[0].Cod_sol;
            document.getElementById("idlistamovp").value = result.Resul[0].Cod_sol;
            document.getElementById("idlistagp").value = result.Resul[0].Grupo;
            document.getElementById('iddescripcionsolicitudp').innerHTML=result.Resul[0].Descripcion_solicitud;
            document.getElementById('idadjuntosp').innerHTML=result.Resul[0].Adjuntos;
            $("#iddescripcionsolucionp").val(result.Resul[0].Descripcion_solucion); //document.getElementById('iddescripcionsolucionp').innerHTML=;
            document.getElementById('idusuariohelpp').innerHTML=result.Resul[0].Usuariohelp;
            document.getElementById('idnombrehelpp').innerHTML=result.Resul[0].Nombrehelp;
            document.getElementById('idfechainip').innerHTML=result.Resul[0].Finicio;
            document.getElementById('idfechafinp').innerHTML=result.Resul[0].Ffin;
            document.getElementById('idtiempop').innerHTML = result.Resul[0].Tiempo;
            document.getElementById('idmaquinap').innerHTML = result.Resul[0].Maquina;
            //document.getElementById('iddescripcionsolicitudp2').innerHTML = result.Resul[0].Descripcion_soluciont;
            $("#iddescripcionsolicitudp2").val(result.Resul[0].Descripcion_soluciont);
            console.log('resul solicitud:' + result.Resul[0].Sol_espec);
            document.getElementById("Solucionespecializada").value = result.Resul[0].Sol_espec;
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
function limpiar_ventana_detalle_ticket(){
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
    //document.getElementById('iddescripcionsolicitudp2').innerHTML = '';
    
}
function valida_edicion_ticket() {

    var estado = document.getElementById("idlistamov").value;

    if (estado == 'SOLC') {

        $('#iddescripcionsolucionp').prop('readonly', true);
        $('#iddescripcionsolicitudp2').prop('readonly', true);
  
    } else if (estado == 'SOLS') {
     
        $('#iddescripcionsolucionp').prop('readonly', false);
        $('#iddescripcionsolicitudp2').prop('readonly', false);
    } else if (estado == 'SOLF') {

        $('#iddescripcionsolucionp').prop('readonly', true);
        $('#iddescripcionsolicitudp2').prop('readonly', true);
    } else {
       
        $('#iddescripcionsolucionp').attr('readonly', false);
        $('#iddescripcionsolicitudp2').attr('readonly', false);
    }

    if (estado == 'SOLA') {

       // $('#idchat').prop('enabled', true);
        document.getElementById('idchat').disabled = false;
        
  
    }  else {
        document.getElementById('idchat').disabled = true;
        //$('#idchat').attr('enabled', false);
        
    }

}
function Detalle_ticket_todos(valor) {

    limpiar_ventana_detalle_ticket();

   
            $.ajax({
                url: 'Gestion_solicitud.aspx/Detalle_ticket',
                cache: false,
                data: JSON.stringify({ idticket:  valor}),
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
                    document.getElementById('iddescripcionsolucion2').innerHTML = result.Resul[0].Descripcion_soluciont;
                    document.getElementById("idanfa0").innerHTML = result.Resul[0].ANFA;
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
function Asignacion_ticket(noticket) {

    $.ajax({
        url: 'Gestion_solicitud.aspx/Asignar_ticket',
        cache: false,
        data: JSON.stringify({ ticket: noticket }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('ya hay un usuario con esta solicitud asignada', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-4") {

                toastr.error('esta solicitud ha sido rechazada', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-5") {

                toastr.error('esta solicitud ya tiene solucion o esta cerrada', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {

               
                toastr.success('Asignado con exito', 'Info', { timeOut: 10000 });
                lista_solicitudes_todas_auto();

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function update_ticket() {

    var estado=$("#idlistamov").val();

    //console.log(estado);
    if (estado != 'SOLN') {

        if (estado != 'SOLA') {


            if (estado == 'SOLS') {
                if ($("#iddescripcionsolucionp").val() !== "") {

                    update_solicitud();

                } else {

                    toastr.warning('Para dar por cerrada,terminada o finalizada una solicitud se debe dar una descripcion completa del caso revise los campos', 'Info', { timeOut: 5000 });
                }
            } else if (estado == 'SOLF') {
                if ($("#iddescripcionsolucionp").val() !== "") {

                    if ($("#iddescripcionsolicitudp2").val() !== "") {

                        update_solicitud();

                    } else {

                        toastr.warning('Para dar por cerrada,terminada o finalizada una solicitud se debe dar una descripcion completa del caso revise los campos', 'Info', { timeOut: 5000 });
                    }

                } else {

                    toastr.warning('Para dar por cerrada,terminada o finalizada una solicitud se debe dar una descripcion completa del caso revise los campos', 'Info', { timeOut: 5000 });
                }

            } else {

                update_solicitud();
            }

        } else {

            toastr.warning('Seleccione un estado valido para esta solicitud', 'Info', { timeOut: 5000 });
        }

    } else {

        toastr.warning('Seleccione un estado valido para esta solicitud', 'Info', { timeOut: 5000 });
    }
}
function update_solicitud() {


    var dest = $("#iddescripcionsolicitudp2").val();
    //console.log('valor desc t:'+dest);


    $.ajax({
        url: 'Gestion_solicitud.aspx/update_solicitud',
        cache: false,
        data: JSON.stringify({ Idticket: document.getElementById('idticketp').innerHTML, Estado: $("#idlistamov").val(), Descripcion: $("#iddescripcionsolucionp").val(), Grupo: $("#idlistagp").val(), Descripciont: dest, Sol_especializada: $("#Solucionespecializada").val(), Idproblema: $("#idproblemap").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('Error esta solicitud ya ha sido cerrada o terminada', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-4") {

                toastr.error('Error usted no puede actualizar una solicitud que no este asignada a su usuario', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {

                toastr.success('Solicitud Actualizada con exito !', 'Info', { timeOut: 10000 });
                $("#dialogp").dialog("close");
                lista_solicitudes_propias_auto();

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function update_estadisticas(){
    

    $.ajax({
        url: 'Gestion_solicitud.aspx/Estadistica_solicitudes',
        cache: false,
        data: JSON.stringify({}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            document.getElementById('TT01').innerHTML = result.Resul[1].Cant;
            document.getElementById('TT02').innerHTML = result.Resul[2].Cant;
            document.getElementById('TT03').innerHTML = result.Resul[3].Cant;
            document.getElementById('TT04').innerHTML = result.Resul[0].Cant;
            document.getElementById('MM01').innerHTML = result.Resul[5].Cant;
            document.getElementById('MM02').innerHTML = result.Resul[6].Cant;
            document.getElementById('MM03').innerHTML = result.Resul[7].Cant;
            document.getElementById('MM04').innerHTML = result.Resul[4].Cant;
            document.getElementById('TD01').innerHTML = result.Resul[9].Cant;
            document.getElementById('TD02').innerHTML = result.Resul[10].Cant;
            document.getElementById('TD03').innerHTML = result.Resul[11].Cant;
            document.getElementById('TD04').innerHTML = result.Resul[12].Cant;
            document.getElementById('TD05').innerHTML = result.Resul[8].Cant;
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function ver_chat() {
    document.getElementById('mensajen').value = '';
   // $("#dialogchat").dialog({ modal: true, width: 500, height: 550 });
    $("#dialogchat").dialog({
        modal: true, width: 500, height: 550, close: function () {
            parar_chat();
        }
    });
    detalle_mensaje();
    tiempo = window.setInterval("prueba2()", 3000);
   
}
function insertChat(who, text, time, date,user) {
    if (time === undefined) {
        time = 0;
    }
    var control = "";
    //var date = formatAMPM(new Date());

    if (who == "me") {
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
                            '<div class="text text-l" style="width:100%; word-wrap: break-word;" >' +
                                '<p>' + text + '</p>' +
                                '<p><small>' + user + ' | ' + date + '</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    } else {
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r" style="width:100%; word-wrap: break-word;" >' +
                                '<p>' + text + '</p>' +
                                '<p><small>' + user + ' | ' + date + '</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
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
            url: 'Gestion_solicitud.aspx/enviar_chat',
            cache: false,
            data: JSON.stringify({ Idticket: document.getElementById('idticketp').innerHTML, Tipo: 'HELP', Mensaje: $("#mensajen").val() }),
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
        url: 'Gestion_solicitud.aspx/Detalle_chats',
        cache: false,
        data: JSON.stringify({ ticket: document.getElementById('idticketp').innerHTML }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            for (var i = 0; i < result.Resul.length; i++) {
                result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre;

                if (result.Resul[i].Tipo == 'HELP') {
                    insertChat("you", result.Resul[i].Mensaje, 0, result.Resul[i].Fecha_creacion,result.Resul[i].Id_usuario_chat );
                } else {
                    insertChat("me", result.Resul[i].Mensaje, 0, result.Resul[i].Fecha_creacion, result.Resul[i].Id_usuario_chat);
                }
            }


        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });


}
function parar_chat() {
   
    console.log('stop chat');
    clearInterval(tiempo);
}
function detalle_imagenes_todos(tickets) {

    document.getElementById('link').innerHTML = '';
    console.log('carga lista de imagenes');
   
    $.ajax({
        url: 'Gestion_solicitud.aspx/Detalle_imagenes',
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
function detalle_imagenes_p(tickets) {

    document.getElementById('linkp').innerHTML = '';
    console.log('carga lista de imagenes');

    $.ajax({
        url: 'Gestion_solicitud.aspx/Detalle_imagenes',
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
        url: 'Gestion_solicitud.aspx/Detalle_imagenes2',
        cache: false,
        data: JSON.stringify({ id: im }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            var enlace = 'Imagenes.aspx?Imag='+ result.Resul[0].Archivo
            var titulo = 'imagenes' + result.Resul[0].Archivo;
           
            window.open(enlace, titulo, "width=750, height=550");
           
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
    
}
//La función window_close cerrara el pop-up o ventana emergente
function window_close() {
    miVentana.close();
}
function valida_notificacion() {
   
    console.log('entro a notificacion');

    $.ajax({
        url: 'Gestion_solicitud.aspx/Notificacion',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            var valida_not = result.Resul;
            console.log('resul not:'+valida_not);
            if (valida_not > 0) {
                avisonotificacion();
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function avisonotificacion() {
    var enlace = 'Notificacion.aspx'
    var titulo = 'Noti';
    window.open(enlace, titulo, "width=550, height=500");
}
function asignar_ticket_principal() {
    var vall = document.getElementById('idestadosol').innerHTML;


    if (vall == 'SOLN') {
        $("#dialogasignar").dialog({
            modal: true, width: 450, height: 150
        }); 
    } else {
        toastr.error('Esta Solicitud no tiene un estado valido para asignarle una persona', 'Info', { timeOut: 5000 });
    }
   

}
function Reasignar_ticket_propios() {
    var vall = document.getElementById('idlistamovp').value;

    console.log('estado idlistamovp:'+vall);
    if (vall == 'SOLA' || vall == 'SOLS') {
        $("#dialogreasignar").dialog({
            modal: true, width: 450, height: 150
        });
    } else {
        toastr.error('Esta Solicitud no tiene un estado valido para asignarle una persona', 'Info', { timeOut: 5000 });
    }


}
function asignar_ticket_principal2() {



    if ($("#persona_help").val() != '') {

        var noticket=document.getElementById('idticket').innerHTML;

        $.ajax({
            url: 'Gestion_solicitud.aspx/Asignar_ticket2',
            cache: false,
            data: JSON.stringify({ ticket: noticket, persona: $("#persona_help").val() }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "-1") {

                    toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-2") {

                    toastr.error('ya hay un usuario con esta solicitud asignada', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-4") {

                    toastr.error('esta solicitud ha sido rechazada', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-5") {

                    toastr.error('esta solicitud ya tiene solucion o esta cerrada', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-6") {

                    toastr.error('este perfil no es valido para este movimiento', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-7") {

                    toastr.error('Esta opcion no es valida para usted ,para asignarse un ticket,use la otra opcion de (Asignar)', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "1") {

                    toastr.success('Asignado con exito', 'Info', { timeOut: 10000 });
                    lista_solicitudes_todas_auto();

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
function reasignar_ticket2() {



    if ($("#persona_helpp").val() != '') {

        var noticket = document.getElementById('idticketp').innerHTML;

        $.ajax({
            url: 'Gestion_solicitud.aspx/Reasignar_ticket',
            cache: false,
            data: JSON.stringify({ ticket: noticket, persona: $("#persona_helpp").val() }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "-1") {

                    toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-2") {

                    toastr.error('El estado de la solicitud no es valido para hacer movimimientos', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-4") {

                    toastr.error('esta solicitud ha sido rechazada', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-5") {

                    toastr.error('esta solicitud ya tiene solucion o esta cerrada', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-6") {

                    toastr.error('Este ticket no es del usuario que esta generando la solicitud de cambio', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-7") {

                    toastr.error('No se puede usted mismo volver a asignar el ticket', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "-8") {

                    toastr.error('El usuario que esta intentando asignar el ticket ya lo tiene asignado', 'Info', { timeOut: 10000 });
                } else if (result.Resul === "1") {

                    toastr.success('Asignado con exito', 'Info', { timeOut: 10000 });
                    lista_solicitudes_todas_auto();

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
function valida_anfa_detalle_m() {

    if (document.getElementById('idticketp').innerHTML != '') {

        var noticket = document.getElementById('idticketp').innerHTML;

        $.ajax({
            url: 'Gestion_solicitud.aspx/Valida_anfa',
            cache: false,
            data: JSON.stringify({ ticket: noticket }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "0") {
                    abri_anfa();
                } else {
                    abri_danfa();
                } 

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });
    }


}
function valida_anfa_detalle_t() {

    if (document.getElementById('idticket').innerHTML != '') {

        var noticket = document.getElementById('idticket').innerHTML;

        $.ajax({
            url: 'Gestion_solicitud.aspx/Valida_anfa',
            cache: false,
            data: JSON.stringify({ ticket: noticket }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                if (result.Resul === "0") {
                    abri_anfa0();
                } else  {
                    abri_danfa0();
                }

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });
    }


}
function abri_anfa() {
    var tick=document.getElementById('idticketp').innerHTML
    window.open('ANFA.aspx?parametro1=' + tick, 'ANFA' + tick)
}

function abri_anfa0() {
    var tick = document.getElementById('idticket').innerHTML
    window.open('ANFA.aspx?parametro1=' + tick, 'ANFA' + tick)
}

function abri_danfa() {
    var tick = document.getElementById('idticketp').innerHTML;

    var enlace = 'ANFAR.aspx?Ticket=' + tick
    var titulo = 'ANFAR' + tick;
    window.open(enlace, titulo, "width=950, height=900");
}

function abri_danfa0() {
    var tick = document.getElementById('idticket').innerHTML;

    var enlace = 'ANFAR.aspx?Ticket=' + tick
    var titulo = 'ANFAR' + tick;
    window.open(enlace, titulo, "width=950, height=900");
}
function lista_solicitudes_todas_auto_inicio() {

    $('#table_todas_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes_auto',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fechabusqueda1").value, fecha2: document.getElementById("fechabusqueda1").value, linea:'0', estado:'0', usuarioh: '' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_todas_solicitudes(result.Resul);
                document.getElementById('TS').innerHTML = result.Resul_Conteo;

            } else {
                document.getElementById('TS').innerHTML = '0';
            }

        },
        error: function (textStatus, e) {
            //toastr.error('Error' + e, 'Info', { timeOut: 10000 });
        }
    });
}
function lista_solicitudes_propias_auto_inicio() {

    $('#table_mis_sol').DataTable().destroy();

    $.ajax({
        url: 'Gestion_solicitud.aspx/lista_solicitudes_auto',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fechabusqueda1").value, fecha2: document.getElementById("fechabusqueda1").value, linea:'0', estado:'0', usuarioh: '1' }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_mis_solicitudes(result.Resul);
                document.getElementById('SA').innerHTML = result.Resul_Conteo;
            } else {
                document.getElementById('SA').innerHTML = '0';
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        enviar_mensaje();
    }
}

