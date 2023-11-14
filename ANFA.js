$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista
    max_anfa();
    lista_solicitudes();
    $("#Fechaem").val(fechasistema.value);

    var validacion = document.getElementById("bidticket").value;
    console.log('entro a validar:'+validacion);
    document.getElementById("idticket").value = validacion;
    Carga_ticket();
    lista_persona_help();
    cargar_tabla_personas(null);

    var myTable = $('table_personas').DataTable();

    $('#myTable').on('click', 'tbody tr', function () {
        myTable.row(this).delete();
    });
}
function justNumbers(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
};
function max_anfa() {

    $.ajax({
        url: 'ANFA.aspx/Max_anfa',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            $("#Codigo").val(result.Resul[0].Codigo);

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_solicitudes() {

   

    $.ajax({
        url: 'ANFA.aspx/Lista_solicitudes',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            var availableTags = result.Resul;
            $("#idticket").autocomplete({
                source: availableTags
            });
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function Carga_ticket() {




    var valor = document.getElementById("idticket").value;


    console.log('valor:' + valor);
    $.ajax({
        url: 'ANFA.aspx/Detalle_ticket',
        cache: false,
        data: JSON.stringify({ idticket: valor }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            console.log('valor:' + result.Resul.length);

            if (result.Resul.length >0) {
                $("#idlinea").val(result.Resul[0].Linea);
                $("#idmaquina").val(result.Resul[0].Maquina);
                $("#idfecha").val(result.Resul[0].Fechasol);
                $("#idtiempo").val(result.Resul[0].Tiempo);
                document.getElementById("idticket").disabled = true;
            } else {
                $("#idlinea").val('');
                $("#idmaquina").val('');
                $("#idfecha").val('');
                $("#idtiempo").val('');
            }
  
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });


}
function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        Carga_ticket();
        return false;
    }
}
function limpiar_campos() {


    document.getElementById("idticket").disabled = false;
    $("#idlinea").val('');
    $("#idmaquina").val('');
    $("#idfecha").val('');
    $("#idtiempo").val('');
    $("#quepaso").val('');
    $("#causa").val('');
    $("#solucion").val('');
    $("#analisis").val('');
    $("#acciones").val('');
    $("#idticket").val('');

}
function agregar_persona() {
    var id = $("#personal").val();
    var combo = document.getElementById("personal");
    var selected = combo.options[combo.selectedIndex].text;
    var nombre = selected;

    var resul = existeID(id);

    //console.log("resultado comparacion:"+resul);
    if (resul === 0) {
        var t = $('#table_personas').DataTable();
        var counter = 1;
        t.row.add({
            "Id_persona": id,
            "Nombre": nombre,
            "Id_persona": id,
        }).draw();

    } else {

        toastr.error('Este registro ya existe en la lista', 'Info', { timeOut: 3000 });
    }

    
   
}
function crear_anfa() {


    //toma los responsables
    var resulp;
    var resulp1 = 1;

    $('#table_personas tr').each(function () {

        var pk = $(this).find("td").eq(0).html();
        var nombre = $(this).find("td").eq(1).html();
        console.log("tabla:"+pk);
        //console.log("enviado:"+id);
        if (pk != undefined) {
            if (resulp1 == 1) {

                resulp = pk + "|";
                resulp1 = 0;
            } else {
                resulp = resulp + pk + "|";
            }
        }

    });

    console.log(resulp);

    if ($("#idticket").val() !== "" && $("#quepaso").val() !== "" && $("#causa").val() !== "" && $("#solucion").val() !== "" && $("#analisis").val() !== "" && $("#acciones").val() !== "") {


    $.ajax({
        url: 'ANFA.aspx/Crear_anfa',
        cache: false,
        data: JSON.stringify({ idticket: $("#idticket").val(), personal: resulp, quepaso: $("#quepaso").val(), causa: $("#causa").val(), solucion: $("#solucion").val(), analisis: $("#analisis").val(), acciones: $("#acciones").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {
                toastr.error('El codigo de solicitud no existe revise!', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-4") {
                toastr.error('ya existe un ANFA asociado a la Solicitud enviada', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-5") {
                toastr.error('El estado de la solicitud no es valido para agregar un ANFA,el estado debe ser SOLUCIONADO', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {
                toastr.success('Guardado Correctamente', 'Info', { timeOut: 10000 });
                limpiar_campos();
                lista_solicitudes();
                max_anfa();
                cargar_tabla_personas(null);
            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }
}
function Enviar_solicitud_confirmacion() {


    var valor = document.getElementById("idticket").value;

    $.confirm({
        title: 'Confirmacion',
        content: 'Desea Asignar un ANFA a la solicitud:' + valor,
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');
                    crear_anfa();
                }
            },
            cancel: function () {

            },

        }
    });

}
function lista_persona_help() {

    $.ajax({
        url: 'ANFA.aspx/lista_personal_help',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#personal").append('<option  value=' + result.Resul[i].Id_usuario + '>' + result.Resul[i].Nombres + '</option>');
                
            }
            $("#personal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function existeID(id) {

    var resul=0;

    $('#table_personas tr').each(function () {

        var pk = $(this).find("td").eq(0).html();
        var nombre = $(this).find("td").eq(1).html();
        //console.log("tabla:"+pk);
        //console.log("enviado:"+id);
        if (pk === id) {
            resul=1;
        }

    });

    return resul;
}
function cargar_tabla_personas(lstData) {
    var estado = '';

    try {
        $('#table_personas').DataTable().destroy();
        $('#table_personas').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Id_persona" }
                , { data: "Nombre" }
                , {
                    data: "Id_persona", render: function (data, type, row) {
                        return '<button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="eliminarfila(this)"  >&#160;Eliminar</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_todas_sol():\n' + e.message, "error");
    }
}
function eliminarfila(row) {
    console.log(row)
    $('#table_personas').DataTable()
        .row($(row).parents('tr'))
        .remove()
        .draw();
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