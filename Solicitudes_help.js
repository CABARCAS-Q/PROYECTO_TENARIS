$(document).ready(function () {

    inicializarControles();
    lista_maquinas();

});
function inicializarControles() {

    //carga info en lista
    max_solicitud();
    lista_motivos();
    lista_lineas();
    lista_maquinas();

}
function max_solicitud() {

    $.ajax({
        url: 'Solicitudes_help.aspx/Max_solicitud',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            
            $("#Codigo").val(result.Resul[0].Codigo) ;
            
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_motivos() {

    $.ajax({
        url: 'Solicitudes_help.aspx/lista_motivos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listamov").append('<option  value=' + result.Resul[i].Id_motivo + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#listamov").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_lineas() {

    $.ajax({
        url: 'Solicitudes_help.aspx/lista_Lineas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_maquinas() {
    $('option', '#listamaq').remove();

    $.ajax({
        url: 'Solicitudes_help.aspx/lista_maquinas',
        cache: false,
        data: JSON.stringify({ linea: document.getElementById("listal").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            for (var i = 0; i < result.Resul.length; i++) {
                $("#listamaq").append('<option  value=' + result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listamaq").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function limpiar_ventana() {
    document.getElementById("Descripcion").value = "";
    var $el = $('#AjaxFileUpload1');
    $el.wrap('<form>').closest('form').get(0).reset();

}
function Enviar_solicitud_confirmacion() {


    $.confirm({
        title: 'Confirmacion',
        content: 'Desea Generar Un Nuevo Ticket',
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');
                    crear_solicitud_validacion();
                }
            },
            cancel: function () {

            },

        }
    });

}
function crear_solicitud_validacion() {

    var maq = $("#listamaq").val();

    if ($("#listal").val() !== "" && maq.length > 0 && $("#listamov").val() !== "" && $("#Descripcion").val() !== "") {

        crear_solicitud();

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }
}
function crear_solicitud() {

    $.ajax({
        url: 'Solicitudes_help.aspx/crear_solicitud',
        cache: false,
        data: JSON.stringify({ linea: $("#listal").val(), maquina: $("#listamaq").val(), tipo: $("#listamov").val(), observaciones: $("#Descripcion").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {

               
                toastr.success('Solicitud Enviada con exito !  Vaya a Gestion de Solicitudes y espere la solucion', 'Info', { timeOut: 10000 });
                limpiar_ventana();
                window.location = "Mis_solicitudes.aspx?Val=1";
                window.location.assign("Mis_solicitudes.aspx?Val=1")
            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function uploadComplete(sender) {
    toastr.success('Subida imagen con exito', 'Info', { timeOut: 10000 });
}
function clearContents() {
    var span = $get("<%=AjaxFileUpload1%>");
    var txts = span.getElementsByTagName("input");
    for (var i = 0; i < txts.length; i++) {
        if (txts[i].type == "text") {
            txts[i].value = "";
        }
    }
}