var you = {};
you.avatar = "../Imagenes/operador.png";

var me = {};
me.avatar = "../Imagenes/logo48.png";

var tiempo = null;
var td1 = "td1";
var td1Color = "";
var td2 = "td2";
var td2Color = "rgb(#ECEEF4)";
var td3 = "td3";
var td3Color = "rgb(0, 108, 255)";

function lista_años() {
    
    $.ajax({
        url: 'ReporteTurning.aspx/lista_años',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
         
            for (var i = 0; i < result.Resul.length; i++) {
                $("#year").append('<option  value=' + result.Resul[i].Nombre + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#year").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}



function displayCalendar() {

   var table = document.getElementById("tablon");

    // Obtén el número de filas en la tabla
    var rowCount = table.rows.length;

    // Elimina todas las filas, empezando desde la última hasta la primera
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }


    // Obtener el mes y el año seleccionados
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;


    if (year.length>0) {

    // Obtener los datos de la base de datos correspondientes al mes y year seleccionado
    obtenerDatosDesdeBD(month, year, function (_data) {
                    // Calcular el número de días del mes seleccionado
                    var numDays = new Date(year, month, 0).getDate();

    // Crear un objeto Date para el primer día del mes
    var firstDay = new Date(year, month - 1, 1);

    // Obtener el número de día de la semana del primer día del mes
    var firstDayOfWeek = firstDay.getDay();

    // Crear un contador para el número de días en la tabla
    var dayCount = 1;
        
    // Crear un bucle para crear filas en la tabla para cada semana del mes
    var calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    for (var i = 0; i < 6; i++) {
                        var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
        var cell = document.createElement("td");
        cell.id = (td1 + dayCount.toString());

        var cellContent = document.createElement("div"); // Elemento div que contendrá los dos sub elementos td
        cellContent.id = dayCount;
        /* cellCContent.setAttribute("id", "miNuevoParrafo");*/



    var dayCell = document.createElement("td"); // Primer sub elemento td para el número del día
        dayCell.id = (td1 + dayCount.toString());
        dayCell.innerHTML = dayCount;
        dayCell.classList.add(td1);
        dayCell.style.fontWeight = 'bold';
        dayCell.style.fontSize = '18px';
        cellContent.appendChild(dayCell); // Añadir el sub elemento td al elemento div
        var selectedCell = null;
        cell.onclick = function (dayCell) {
            // Aquí puedes definir la función que se ejecutará al hacer clic en dayCell
            var Dia = event.target.id;
            var td = document.getElementById(Dia);

            if (event.target.id == Dia) {
                //if (selected<Cell !== null) {
                    
               // }
               
            }
            console.log("Se hizo clic en dayCell. Texto dentro del TD: " + Dia.substring(3));
            document.getElementById("txtH2").innerHTML = "Interrupciones de Dia: " + Dia.substring(3);
            var table = document.getElementById("Interrupciones-body");

            // Obtén el número de filas en la tabla
            var rowCount = table.rows.length;

            // Elimina todas las filas, empezando desde la última hasta la primera
            for (var i = rowCount - 1; i > 0; i--) {
                table.deleteRow(i);
            }
            consultarDetalleDia(Dia.substring(3));
        };

    var date = new Date(year, month - 1, dayCount);

    // Obtener los valores de "Turno" y "Usuaio" para este día
    var dayData = _data.filter(function (d) {
                                return d.Dia == date.getDate() && d.Mes == date.getMonth() + 1 && d.Anio == date.getFullYear();
                            });
        if (dayData.length > 0) {
            // Crear celda para "Turno" y agregar el valor correspondiente
            var tipoCell = document.createElement("td");
            tipoCell.id = (td2 + dayCount.toString());
            tipoCell.classList.add(td2)
            tipoCell.innerHTML = dayData.map(function (d) { return d.Descripcion; }).join(" <br>");
            tipoCell.style.backgroundColor = td2Color; // Agregar color de fondo
            tipoCell.style.border = "3px solid black"; // Agregar borde
            tipoCell.style.color = "black"; // Cambiar el color del texto a negro
            cellContent.appendChild(tipoCell);

            // Crear celda para "Trabajador" y agregar el valor correspondiente
            var trabajadorCell = document.createElement("td");
            trabajadorCell.id = (td3 + dayCount.toString());
            trabajadorCell.classList.add(td1)
            trabajadorCell.innerHTML = dayData.map(function (d) { return d.Id_usuario; }).join("<br>");
            trabajadorCell.style.backgroundColor = td3Color; // Agregar color de fondo
            trabajadorCell.style.border = "3px solid black"; // Agregar borde
            trabajadorCell.style.color = "white"; // Cambiar el color del texto a blanco
            cellContent.appendChild(trabajadorCell);

            
        }
        calendarBody.appendChild(row);
        date.setDate(date.getDate() + 1);

        if (i === 0 && j < firstDayOfWeek) {
            // Este día pertenece al mes anterior
            cellContent.innerHTML = "";
        } else if (dayCount > numDays) {
            // Ya hemos llegado al final del mes
            cellContent.innerHTML = "";
        } else {
            // Este día pertenece al mes actual
            dayCount++;
        }

        cell.appendChild(cellContent); // Añadir el elemento div
        row.appendChild(cell);
        calendarBody.appendChild(row);

        }
    
        
        }
       
        }


        );//cierre obtener datos

    }else {
        toastr.error('No hay datos - Revisar mes y fecha a consultar', 'Info', { timeOut: 10000 });
    }
}

function obtenerDatosDesdeBD(month, year, callback) {
                $.ajax({
                    url: 'ReporteTurning.aspx/ConsultarDatosDesdeBD',
                    cache: false,
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ month: month, year: year }),
                    success: function (data) {
                        var result = JSON.parse(data.d);

                        if (result.Error === "-1") {

                            toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                        } else if (result.Error === "-2") {

                            toastr.error('Error sin resultados al intentar guardar una solicitud', 'Info', { timeOut: 10000 });
                        } else if (result.Error === "-3") {

                            callback(result.Resul);
                            lista_usuarios(month, year);
                            toastr.error('NO HAY USUARIOS PARA EL MES Y AÑO SELECCIONADO', 'Info', { timeOut: 10000 });
                        }
                        else {

                            toastr.success('CARGA OK', 'Info', { timeOut: 10000 });
                            callback(result.Resul);
                            lista_usuarios(month, year);
                        }// Aquí puedes hacer algo con los datos recibidos
                       
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.error(textStatus + ': ' + errorThrown);
                    }
                });
}

function FechaActual() {
                // Obtener la fecha actual
            var now = new Date();
            var month = now.getMonth() + 1;
            var year = now.getFullYear();

            // Obtener el mes y el año seleccionados
            document.getElementById("month").value = month;
            document.getElementById("year").value = year;

            // Si no se han seleccionado mes y año, usar la fecha actual
            if (month === "" || year === "") {
                month = now.getMonth();
            year = now.getFullYear();
                }

            // Actualizar los selectores de mes y año
            document.getElementById("month").value = month;
            document.getElementById("year").value = year;

            // Calcular el número de días del mes y el primer día de la semana
            var numDays = new Date(year, month + 1, 0).getDate();
            var firstDayOfWeek = new Date(year, month, 1).getDay();

            // Mostrar los días del mes en la tabla
            var dayCount = 1;
            var calendarBody = document.getElementById("calendar-body");
            calendarBody.innerHTML = "";

            for (var i = 0; i < 6; i++) {
                    var row = document.createElement("tr");

            for (var j = 0; j < 7; j++) {
                        var cell = document.createElement("td");

            if (i === 0 && j < firstDayOfWeek) {
                // Este día pertenece al mes anterior
                cell.innerHTML = "";
                        } else if (dayCount > numDays) {
                // Ya hemos llegado al final del mes
                cell.innerHTML = "";
                        } else {
                // Este día pertenece al mes actual
                cell.innerHTML = dayCount;
            dayCount++;
                        }

            row.appendChild(cell);
                    }

            calendarBody.appendChild(row);
                }

            // Mostrar el mes y el año actual
            document.getElementById("month").value = month;
            document.getElementById("year").value = year;
            }

function lista_usuarios(month, year) {

    $.ajax({
        url: 'ReporteTurning.aspx/lista_usuarios',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ month: month, year: year }),
        success: function (data) {
            var result = JSON.parse(data.d);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#trabajadores-body").append('<tr>' + '<td>' + result.Resul[i].Id_usuario + '</td>' + '<td>' + result.Resul[i].Nombre + '</td>'+'</tr>');
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}

function consultarDetalleDia(Dia) {
    // Obtener el mes y el año seleccionados
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    $.ajax({
        url: 'ReporteTurning.aspx/consultarDetalleDia',
        cache: false,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ month: month, year: year ,dia: Dia}),
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Error === "-3") {

                toastr.error('NO HAY INTERRUPCIONES PARA EL DIA, MES Y AÑO SELECCIONADO', 'Info', { timeOut: 10000 });
            }
            else {
                toastr.success('INTERRUPCIONES CARGADAS', 'Info', { timeOut: 10000 });
                for (var i = 0; i < result.Resul.length; i++) {
                    $("#Interrupciones-body").append('<tr>' + '<td>' + result.Resul[i].Id_interrupcion + '</td>' + '<td>' + result.Resul[i].Turno + '</td>' + '<td>' + result.Resul[i].Planta + '</td>' + '<td>' + result.Resul[i].Maquina + '</td>' + '<td>' + result.Resul[i].Duracion_hh + '</td>' + '</tr>');
                }
            }
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}

$(document).ready(function () {
    // Mostrar el calendario para el mes y el año actuales al cargar la página
    lista_años();
    FechaActual();
    displayCalendar();
    

});





