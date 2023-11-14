$(document).ready(function () {

    inicializarControles();
    lista_maquinas();

});
function inicializarControles() {

    //carga info en lista
    max_solicitud();
    lista_lineas();
    lista_maquinas();
    lista_accesorios();

}
function max_solicitud() {

    $.ajax({
        url: 'Crear_solicitud_inventario.aspx/Max_solicitud',
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
function lista_lineas() {

    $.ajax({
        url: 'Crear_solicitud_inventario.aspx/lista_Lineas',
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
function lista_accesorios() {

    $.ajax({
        url: 'Crear_solicitud_inventario.aspx/lista_accesory',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listaacc").append('<option  value=' + result.Resul[i].Idaccesorry + '>' + result.Resul[i].Descripcion + '</option>');
            }
            $("#listaacc").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_maquinas() {
    $('option', '#listamaq').remove();

    $.ajax({
        url: 'Crear_solicitud_inventario.aspx/lista_maquinas',
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
  
}
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});
function Agregar() {
    var _nom2 = document.getElementById("listaacc").value;
    var _nom = document.getElementById("listaacc");
    var _cat = document.getElementById("status").value;
    var selected = _nom.options[_nom.selectedIndex].text;

    var validacion = 0;


    //validacion tabla
    try {
        var resume_table = document.getElementById("table_acc");

        for (var i = 0, row; row = resume_table.rows[i]; i++) {

            for (var j = 0, col; col = row.cells[j]; j++) {

                if (col.innerText == selected) {
                    validacion = 1;
                   
                }
            }
        }
    }
    catch (error) {
        alert('Error processing document ' + console.error(error));
    }


    if (validacion == 0) {
        var fila = "<tr><td>" + _nom2 + "</td><td>" + selected + "</td><td>" + _cat + "</td></tr><td><input type='button' class='borrar' value='Eliminar' /></td>";

        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tablita").appendChild(btn);
    }
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
                    crear_solicitud_validacion();
                }
            },
            cancel: function () {

            },

        }
    });

}
function crear_solicitud_validacion() {

    var conteo = 0;
    try {
        var resume_table = document.getElementById("table_acc");

        for (var i = 0, row; row = resume_table.rows[i]; i++) {

            for (var j = 0, col; col = row.cells[j]; j++) {
            }
            conteo++;
        }
    }
    catch (error) {
        alert('Error processing document ' + console.error(error));
    }


   

    if ($("#listal").val() !== "" && document.getElementById('listamaq') != '' && $("#Descripcion").val() !== "" && conteo>9) {

        crear_solicitud();

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }
}
function crear_solicitud() {

    var accesorios='';
    var conteo = 0;
    //recorrer valores
    try {
        var resume_table = document.getElementById("table_acc");

        for (var i = 0, row; row = resume_table.rows[i]; i++) {
            //alert(cell[i].innerText);
            for (var j = 0, col; col = row.cells[j]; j++) {
                //alert(col[j].innerText);
                //console.log('Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}');

                if (conteo>0 && j<3){
                    //console.log(col.innerText);
                    accesorios = accesorios + col.innerText + '|';
                }
            }
            //console.log(col.innerText);
            accesorios = accesorios + ';';
            conteo++;
        }
    }
    catch (error) {
        alert('Error processing document ' + console.error(error));
    }

    console.log(accesorios)

    $.ajax({
        url: 'Crear_solicitud_inventario.aspx/crear_solicitud',
        cache: false,
        data: JSON.stringify({ maquina:''+ $("#listamaq").val(), observaciones:''+ $("#Descripcion").val(), tipos:'' +accesorios }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
            }else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.success('Solicitud Enviada con exito ! #:' + result.Resul, 'Info', { timeOut: 10000 });
                limpiar_ventana();
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