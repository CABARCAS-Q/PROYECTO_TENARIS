$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista
   
    lista_lineas();
    lista_tipos();

}
function lista_lineas() {

    $.ajax({
        url: 'Mantenimientos.aspx/lista_Lineas',
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
function lista_tipos() {

    $.ajax({
        url: 'Mantenimientos.aspx/Lista_tipos',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listatip").append('<option  value=' + result.Resul[i].Id_tipo + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listatip").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function detalle_linea() {
  

    $('#table_tip').DataTable().destroy();

    $.ajax({
        url: 'Mantenimientos.aspx/detalle_linea',
        cache: false,
        data: JSON.stringify({ Linea: document.getElementById("listal").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla(result.Resul);
                //toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function cargar_tabla(lstData) {
    var estado = '';

    try {
        $('#table_tip').DataTable().destroy();
        $('#table_tip').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Nombre" }
                , { data: "Fecha" }
                , { data: "Usuario" }
                , {
                    data: "Id_registro", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="ver_detalle(' + data + ')" >&#160;Ver</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_todas_sol():\n' + e.message, "error");
    }
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
function limpiar_ventana() {
    document.getElementById("Descripcion").value = "";
    detalle_linea()
}
function crear_solicitud() {

    $.ajax({
        url: 'Mantenimientos.aspx/crear_solicitud',
        cache: false,
        data: JSON.stringify({ linea: $("#listal").val(), tipo: $("#listatip").val(), observaciones: $("#Descripcion").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-4") {

                toastr.error('Error no hay adjuntos para el reporte a generar favor revise', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {


                toastr.success('Guardado con exito !', 'Info', { timeOut: 10000 });
                limpiar_ventana();
            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function Enviar_solicitud_confirmacion() {


    $.confirm({
        title: 'Confirmacion',
        content: 'Desea Generar Un Nuevo Registro',
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');
                    crear_solicitud();
                }
            },
            cancel: function () {

            },

        }
    });

}
function ver_detalle(valor) {

    console.log('resul:'+valor)
    if (valor !== 0) {
       Detalles(valor);
       $("#dialogp").dialog({ modal: true, width: 800, height: 300 });
    } else {
        toastr.error('No hay informacion para este registro', 'Info', { timeOut: 10000 });
    }
}
function Detalles(valor) {


    

    $.ajax({
        url: 'Mantenimientos.aspx/Detalle_hist',
        cache: false,
        data: JSON.stringify({ idticket: valor,linea: $("#listal").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            document.getElementById('iddescripcionsolucionp').innerHTML = result.Resul[0].Observaciones;
            
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
        //console.log('carga lista de imagenes');

        $.ajax({
            url: 'Mantenimientos.aspx/Detalle_imagenes',
            cache: false,
            data: JSON.stringify({ ticket: tickets }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);

                for (var i = 0; i < result.Resul.length; i++) {
                    //$('#link').append('<li><input type="button" value="' + result.Resul[i].Id_adjunto + '" onclick="javascript:window_open("' + result.Resul[i].Archivo + '");" ></input></li>');
                    var im = result.Resul[i].Id_history_detalle;
                    $('#linkp').append('<li><input type="button" value="' + result.Resul[i].Id_history_detalle + '" onclick="window_open2(' + im + ');return false;" ></input></li>');

                }


            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });

   

}
function window_open2(im) {
    console.log(im);
    console.log('entro a mostrar imagen 2');

    $.ajax({
        url: 'Mantenimientos.aspx/Detalle_imagenes2',
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