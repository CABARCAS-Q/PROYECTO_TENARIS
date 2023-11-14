$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
 

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
  

    lista_usuarios();
    lista_turno();

}
function lista_usuarios() {

    $.ajax({
        url: 'Tuning.aspx/lista_usuarios',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listauser").append('<option  value=' + result.Resul[i].Id_usuario + '>' + result.Resul[i].Nombres + '</option>');
            }
            $("#listauser").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_turno() {

    $.ajax({
        url: 'Tuning.aspx/lista_turno',
        cache: false,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#Listaturnos").append('<option  value=' + result.Resul[i].id_Tipo_Turno + '>' + result.Resul[i].Descripcion + '</option>');
                console.log('entro2');
            }
            $("#Listaturnos").select();


        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function limpiar_ventana() {
    document.getElementById("Descripcion").value = "";

}
function limpiar_ventana2() {
    if (true) { toastr.success('se elimino con exito los campos de la tabla', 'Info', { timeOut: 5000 }); }
    var table = document.getElementById("table_acc");

    
    var numRows = table.rows.length;
    var numCols = table.rows[0].cells.length;

  
    for (var i = numRows - 1; i >= 0; i--) {
        table.deleteRow(i);
    }

    for (var i = 0; i < numCols; i++) {
        for (var j = 0; j < numRows; j++) {
            table.rows[j].deleteCell(i);
        }
    }
   

}
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});
function Agregor() {

    var _nom2 = document.getElementById("listauser").value;
    var _cat = document.getElementById("Listaturnos");
    var selected = _cat.options[_cat.selectedIndex].text;

    var validacion = 0;
    var validacio2 = 0;
    var fecha1 = $('#fecha1').val();
    var fecha2 = $('#fecha2').val();

    var day1 = new Date(fecha1);
    var day2 = new Date(fecha2);

    var tabla = document.getElementById("table_acc");

    if (tabla.rows.length == 0) {
        toastr.warning('Primero ingrese una fecha', 'ADVERTENCIA', { timeOut: 5000 });
    } else {
        try {
            var resume_table = document.getElementById("table_acc");
            for (var i = 0; i < resume_table.rows.length; i++) {
                var row = resume_table.rows[i];
                for (var j = 0; j < row.cells.length; j++) {
                    var col = row.cells[j];
                    if (col.innerText == selected) {
                        validacion = 1;
                        toastr.error('Ya este turno está.', 'Error', { timeOut: 5000 });
                    }
                    validacio2++;
                }
            }

            var diferenciaEnMilisegundos = Math.abs(day2 - day1);
            var contador = 0;
            var dias = Math.ceil(diferenciaEnMilisegundos / (1000 * 3600 * 24));
            var fila = "<tr>";
            fila += "<td>" + selected + "</td>";
            if (dias >= 0) {
                while (contador <= dias) {
                    fila += "<td>" + _nom2 + "</td>";
                    contador += 1;
                }
            }
            if (validacion === 0 && validacio2) {
                fila += "</tr>";
                var btn = document.createElement("tr");
                btn.innerHTML = fila;
                document.getElementById("tablita").appendChild(btn);
            }
        } catch (error) {
            alert('Error procesando el documento ' + console.error(error));
        }
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




    if (conteo > 1) {

        crear_solicitud();
        // Obtenemos una referencia a la tabla
        var tabla = document.getElementById("table_acc");

        // Eliminamos todas las filas de la tabla
        while (tabla.rows.length > 0) {
            tabla.deleteRow(0);
        }

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });

    }
}   
function crear_solicitud() {
    var fecha1 = $('#fecha1').val();
    var fecha2 = $('#fecha2').val();
    var day1 = new Date(fecha1);
    var day2 = new Date(fecha2);
    day2.setDate(day2.getDate() + 1);
    var diffInMs = day2.getTime() - day1.getTime();
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    var resultado = diffInDays;

    var accesorios = '';
    var fercho = '';
    var conteo = 0;
    var formateo;
    //recorrer valores
    try {
        var resume_table = document.getElementById("table_acc");



        for (var i = 0, row; row = resume_table.rows[i]; i++) {
            //alert(cell[i].innerText);
            for (var j = 0, col; col = row.cells[j]; j++) {
                //alert(col[j].innerText);
                //console.log('Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}');

                if (conteo > 0 && j < 2) {
                    //console.log(col.innerText);
                    accesorios = accesorios + col.innerText + '|';

                }



            }
            const primeraFila = document.querySelector('table tr:first-child');

            if (true) {
                for (let i = 0; i < primeraFila.cells.length; i++) {
                    // establecer el contenido de la celda a una cadena vacía
                    primeraFila.cells[i].innerHTML = '';

                }
            }
            var row = resume_table.rows[0];
            for (var j = 0, col; col = row.cells[j]; j++) {
                //alert(col[j].innerText);
                //console.log('Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}');

                if (conteo > 0 && j < resultado) {
                    //console.log(col.innerText);

                    fercho = fercho + col.innerText + '|';
                }
            }







            //console.log(col.innerText);
            accesorios = accesorios + ';';
            fercho = fercho + ';';


            conteo++;
        }
    }
    catch (error) {
        alert('Error processing document ' + console.error(error));
    }



    console.log(fercho);
    console.log(accesorios);



    $.ajax({
        url: 'Tuning.aspx/crear_solicitud',
        cache: false,
        data: JSON.stringify({ fecha: '' + fercho, usuarios: '' + accesorios, observaciones: $("#Descripcion").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            var result = JSON.parse(data.d);
            console.log(result.Resul);

            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-4") {

                toastr.warning('Existen programaciones cargadas revisar programaciones', 'Info', { timeOut: 10000 });
            }
            else {

                toastr.success('Solicitud Enviada con exito ! #:' + result.Resul, 'Info', { timeOut: 10000 });
                limpiar_ventana();
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function Agregarfila() {

        var fecha = new Date(document.getElementById('fecha1').value);
        var fechac = new Date(document.getElementById('fecha2').value);
        var encabezadoFila = document.createElement("tbody");

        document.getElementById("tablita").appendChild(encabezadoFila);

        fecha.setDate(fecha.getDate() + 1);
        fechac.setDate(fechac.getDate() + 1);



        if (fechac < fecha || fecha > fechac) {
            toastr.error('la implementacion de la fecha no correspode de forma logica ', 'Info', { timeOut: 5000 });
        }

        //validacion fechas
        var validacio2 = 0;
        try {
            var resume_table = document.getElementById("table_acc");
            for (var i = 0; i < resume_table.rows.length; i++) {
                var row = resume_table.rows[i];
                for (var j = 0; j < row.cells.length; j++) {

                    validacio2++;
                }
            }
        }
        catch (error) {
            alert('Error processing document ' + console.error(error));
        }

        var contador = 0;
        var fila = "Fechas";



        while (fecha <= fechac) {
            var fechaString = fecha.toLocaleDateString();
            fila += "<td>" + fechaString + "</td>";

            contador++;
            if (contador == 0) {
                var btn = document.createElement("tr");
                btn.innerHTML = fila;
                document.getElementById("tablita").appendChild(btn);
                var fila = "FECHAS";

                contador = 0;


            }


            fecha.setDate(fecha.getDate() + 1);

        }


        if (contador != 0 && validacio2 == 0) {
            while (contador < 0) {
                fila += "<td></td>";
                contador++;
            }
            var btn = document.createElement("tr");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else {
            toastr.warning('ya hay una fecha agregada', 'Info', { timeOut: 5000 });
        }
    }
function terraria() {

        var fecha1 = $('#fecha1').val();
        var fecha2 = $('#fecha2').val();

        var day1 = new Date(fecha1);
        var day2 = new Date(fecha2);

        var diferenciaEnMilisegundos = Math.abs(day2 - day1);
        var dias = Math.ceil(diferenciaEnMilisegundos / (1000 * 3600 * 24));



        var lista = [];

        for (var i = 0; i != dias; i += 1) {
            var fechaActual = new Date(day1.getTime() + (i * 24 * 60 * 60 * 1000));
            var fechaString = fechaActual.getFullYear() + '-' + (fechaActual.getMonth() + 1) + '-' + fechaActual.getDate();

            lista.push(fechaString);
        }

        console.log(lista);



    }
function segundo() {


        var listItems = document.getElementById("Listaturnos").getElementsByTagName("li");
        var repeatedValues = [];
        // que problemas se dificultad saver dde cosas i herte v
        for (var i = 0; i < listItems.length; i++) {
            var itemValue = listItems[i].innerHTML;
            if (repeatedValues.indexOf(itemValue) !== -1) {
                if (repeatedValues.indexOf(itemValue) === repeatedValues.length - 1) {
                    // Evita agregar el mismo valor varias veces
                    continue;
                }
                repeatedValues.push(itemValue);
            } else {
                repeatedValues.push(itemValue);
            }
        }

        console.log("Los valores repetidos son: " + repeatedValues);
        return repeatedValues;

    }
function torno() {
    var _nom2 = document.getElementById("listauser").value;
    //var _nom = document.getElementById("listauser");
    var _cat = document.getElementById("Listaturnos");
    var selected = _cat.options[_cat.selectedIndex].text;

    var validacion = 0;

    var fecha1 = $('#fecha1').val();
    var fecha2 = $('#fecha2').val();


    var day1 = new Date(fecha1);
    var day2 = new Date(fecha2);



    //validacion tabla
    try {
        var resume_table = document.getElementById("table_acc");

        for (var i = 0, row; row = resume_table.rows[i]; i++) {

            for (var j = 0, col; col = row.cells[j]; j++) {

                if (col.innerText == selected) {
                    validacion = 1;
                    console.log("rrr" + col.innerText);
                }
            }
        }
    }
    catch (error) {
        alert('Error processing document ' + console.error(error));
    }




    var diferenciaEnMilisegundos = Math.abs(day2 - day1);
    var contador = 0;


    var dias = Math.ceil(diferenciaEnMilisegundos / (1000 * 3600 * 24));
    var fila = "<Tr>";


    if (validacion === 0) {

        var fila = fila + "</Tr>";

        var btn = document.createElement("Tr");
        btn.innerHTML = fila;
        document.getElementById("tablita").appendChild(btn);

    }
}