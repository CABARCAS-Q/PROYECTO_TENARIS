$(document).ready(function () {

    inicializarControles();


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
    lista_motivos();
    lista_grupos();
    $('#iddescripcionsolicitud').prop('readonly', true);
    $('#iddescripcionsolucion').prop('readonly', true);
    $('#iddescripcionsolicitudp').prop('readonly', true);
    $("#idlistatipo").append('<option  value="0">Solucion Especializada</option>');
    $("#idlistatipo").append('<option  value="1">Todos</option>');
    $("#idlistatipo").select();

    //pruebas
    var pruebaa = document.getElementById("codigobusqueda").value;
    var pruebaa0 = document.getElementById("bfechaini1").value;
    var pruebaa1 = document.getElementById("bfechafin2").value;
    var pruebaa2 = document.getElementById("bfiltro").value;
    var pruebaa3 = document.getElementById("blinea").value;
    var pruebaa4 = document.getElementById("busuario").value;
    var pruebaa5 = document.getElementById("btiposol").value;
    document.getElementById("fecha1").value = pruebaa0;
    document.getElementById("fecha2").value = pruebaa1;

    console.log('Valor:' + pruebaa);
    console.log('Valorf1:' + pruebaa0);
    console.log('Valorf2:' + pruebaa1);
    console.log('Valorf3:' + pruebaa2);
    console.log('Valorf4:' + pruebaa3);
    console.log('Valorf5:' + pruebaa4);
    console.log('Valorf6:' + pruebaa5);

    if (pruebaa == '1' ) {
        //setea valores en campos
        console.log('entro a consultar 1');
        //consulta lista
        lista_solicitudes_auto();
    }
}
function lista_lineas() {

    $.ajax({
        url: 'Solucion_especializada.aspx/lista_Lineas',
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
        url: 'Solucion_especializada.aspx/lista_motivos',
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
            url: 'Solucion_especializada.aspx/lista_maquinas',
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
function lista_grupos() {

    $.ajax({
        url: 'Solucion_especializada.aspx/lista_grupos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
          
            $("#idlistagp0").append('<option  value=0>Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
            
                $("#idlistagp0").append('<option  value=' + result.Resul[i].Id_grupo + '>' + result.Resul[i].Descripcion + '</option>');
            }
           
            $("#idlistagp0").select();

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
function lista_solicitudes_auto() {

    $('#table_sol').DataTable().destroy();
    console.log('entro a consultar 2');

    $.ajax({
        url: 'Solucion_especializada.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ codigo: "", fecha1: document.getElementById("bfechaini1").value, fecha2: document.getElementById("bfechafin2").value, linea: document.getElementById("blinea").value, maquina: "0", estado: document.getElementById("btiposol").value, usuarioh: document.getElementById("busuario").value, filtro: "1" }),
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
function lista_solicitudes() {

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Solucion_especializada.aspx/lista_solicitudes',
        cache: false,
        data: JSON.stringify({ codigo: document.getElementById("Codigo").value, fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: document.getElementById("listamot").value, usuarioh: document.getElementById("usuarioh").value, filtro: document.getElementById("idlistatipo").value }),
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
        url: 'Solucion_especializada.aspx/Detalle_ticket',
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
        url: 'Solucion_especializada.aspx/Detalle_imagenes',
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
            url: 'Solucion_especializada.aspx/Valida_anfa',
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
    window.open(enlace, titulo, "width=950, height=900,scrollbars=1");
}