
$(document).ready(function () {

    inicializarControles();
    lista_maquinas();

});
function inicializarControles() {

    //carga info en lista
  
    lista_lineas();
    lista_maquinas();
    lista_accesorios();

}                                                      
function lista_lineas() {

    $.ajax({
        url: 'Reporte_inventario_nuevo.aspx/lista_Lineas',
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

    if (document.getElementById("listal").value != '0') {
        $('option', '#filtromaquina').remove();

        $.ajax({
            url: 'Reporte_inventario_nuevo.aspx/lista_maquinas',
            cache: false,
            data: JSON.stringify({ linea: document.getElementById("listal").value }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                $("#filtromaquina").append('<option  value=0>Todos</option>');
                for (var i = 0; i < result.Resul.length; i++) {
                    $("#filtromaquina").append('<option  value=' + result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre + '</option>');
                }
                $("#filtromaquina").select();

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });
    }
}
function limpiar_ventana() {
    document.getElementById("Descripcion").value = "";

}
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});
function lista_inventario() {
    console.log("entra perro")
    $.ajax({
        url: 'Reporte_inventario_nuevo.aspx/lista_reporte',
        cache: false,
        data: JSON.stringify({ Linea: document.getElementById("listal").value, Maquina: document.getElementById("filtromaquina").value, }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
               
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function datoslineas() {


    var linea0 = document.getElementById("listal").value;
    var machine0 = document.getElementById("filtromaquina").value;
    var estado0 = document.getElementById("filtro_estado").value;


    $.ajax({
        url: 'Reporte_inventario_nuevo.aspx/lista_reporte',
        cache: false,
        data: JSON.stringify({ linea: linea0, machine: machine0, estado: estado0 }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_solicitudes(result.Resul);
                cargar_tabla_solicitudes_dos(result.Resul);
                cargar_tabla_solicitudes_prueba(result.Resul);
                contarNOOK(result.Resul);
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });

            }
          else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function cargar_tabla_solicitudes(lstData) {
    try {
        $('#table_sol').DataTable().destroy();
        $('#table_sol').DataTable({
            paging: false,
            scrollY: "800px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            fixedColumns: {
                leftColumns: 1
            },
            data: lstData !== null ? lstData : [],
            columns: [
                {
                    data: "Id_maquina", 

                    
                }
               
                ,{
                    data: "FechaCreacion",
                    //render: function (data) {
                    //    var dateString = data.toString();
                    //    return dateString.slice(0, 10);
                    //}
                },
                { data: "PC" },
                { data: "Pantalla" },
                { data: "Mouse" },
                { data: "Teclado" },
                { data: "Cable_Energia_PC" },
                { data: "Cable_Energia_Pantalla" },
                { data: "Cable_RED" },
                { data: "Puerto_RED" },
                { data: "Cable_VGA" }
            ]
        }).columns.adjust(); // Ajustar las columnas después de inicializar la tabla
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
}
function cargar_tabla_solicitudes_dos(lstData) {
    try {
        $('#table_luna').DataTable().destroy();
        $('#table_luna').DataTable({
            paging: false,
            scrollY: "800px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            fixedColumns: {
                leftColumns: 1
            },
            data: lstData !== null ? lstData : [],
            columns: [
                { data: "Nombre" },
                { data: "Id_maquina" },
           
                { data: "FechaCreacion" },
                {
                    data: null,
                    render: function (data, type, row) {
                        return '<button class="btn btn-default btn-panel" type="button"><i class="fa fa-search-plus"></i></button>';
                    }
                }
            ]
        }).columns.adjust(); // Ajustar las columnas después de inicializar la tabla

        // Agregar el evento click al botón del panel
        $('#table_luna').on('click', '.btn-panel', function () {
            var rowData = $('#table_luna').DataTable().row($(this).parents('tr')).data();
            abrirPanel(rowData);
        });
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_luna():\n' + e.message, "error");
    }
}
function cargar_tabla_solicitudes_prueba(lstData) {
    try {
        $('#table_prueba').DataTable().destroy();
        $('#table_prueba').DataTable({
            paging: false,
            scrollY: "800px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            fixedColumns: {
                leftColumns: 1
            },
            data: lstData !== null ? lstData : [],
            columns: [

                {
                    data: "Nombre",


                },
                {
                    data: "Id_maquina",


                }

                , {
                    data: "FechaCreacion",
                    //render: function (data) {
                    //    var dateString = data.toString();
                    //    return dateString.slice(0, 10);
                    //}
                },
                { data: "Observaciones" },
          
            
            ]
        }).columns.adjust(); // Ajustar las columnas después de inicializar la tabla
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_prueba():\n' + e.message, "error");
    }
}
function abrirPanel(rowData) {
    // Deshabilitar los botones de la tabla
    $('.btn-panel').prop('disabled', true);

    // Oscurecer el body
    $('body').css('background-color', 'rgba(0, 0, 0, 0.5)');

    // Crear el panel
    var panelHTML = '<div id="panel" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 400px; background-color: white; border: 1px solid black; padding: 20px; text-align: center;">' +
        '<div style="position: absolute; top: 10px; left: 10px;">Datos del ID Máquina:<br>' + rowData.Id_maquina + '</div>' +
        '<button id="salir" style="position: absolute; bottom: 10px; left: 10px; background-color: red; color: white; padding: 10px;">Salir</button>' +
        '<textarea id="observaciones-textarea" style="width: calc(100% - 40px); height: calc(100% - 160px); margin-top: 50px; resize: none; border: 1px solid black;" readonly>' + rowData.Observaciones + '</textarea>' +
        '</div>';

    // Agregar el panel al body
    $('body').append(panelHTML);

    // Agregar el evento click al botón de salida
    $('#salir').on('click', function () {
        // Remover el panel
        $('#panel').remove();



        // Restaurar el color de fondo del body
        $('body').css('background-color', 'white');

        // Habilitar los botones de la tabla
        $('.btn-panel').prop('disabled', false);
    });
}
function contarNOOK() {
    var tabla = document.getElementById("table_sol"); // Reemplaza "table_sol" con el ID de tu tabla

    var contador = 0;

    // Recorrer las filas de la tabla (excepto la primera que contiene los encabezados)
    for (var i = 1; i < tabla.rows.length; i++) {
        var fila = tabla.rows[i];
        var celdas = fila.cells;

        // Recorrer las celdas de la fila
        for (var j = 0; j < celdas.length; j++) {
            var textoCelda = celdas[j].innerText.trim(); // Obtener el texto de la celda sin espacios en blanco al principio o al final

            if (textoCelda === "NO OK") {
                contador++;
            }
        }
    }

    console.log("Cantidad de veces que se repite 'NO OK': " + contador);

    // Guardar el contador en una variable o realizar cualquier otra acción necesaria
    var cantidadNOOK = contador;

    // Resto del código...
}
function eliminarRegistrosTabla() {
    var tabla = document.getElementById("table_sol"); // Reemplaza "table_sol" con el ID de tu tabla
    var table = document.getElementById("table_luna");
    var tabli = document.getElementById("table_prueba");

    // Eliminar todas las filas de la tabla (excepto la primera que contiene los encabezados)
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);

    }
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    while (tabli.rows.length > 1) {
        tabli.deleteRow(1);
    }
}
function exportarTablasExcel() {
    // Obtener las tablas
    var tablaSol = document.getElementById("table_sol");
   
    var tablaprueba = document.getElementById("table_prueba");
    var nombreArchivo = "Reportes.xlsx";

    // Obtener los datos de las tablas en formato de hoja de cálculo
    var hojaSol = XLSX.utils.table_to_sheet(tablaSol);
   
    var hojapreuba = XLSX.utils.table_to_sheet(tablaprueba);

    // Crear el libro de Excel y agregar las hojas
    var libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hojaSol, "Informe acesorio");
   
    XLSX.utils.book_append_sheet(libro, hojapreuba, "observaciones");
    // Temporalmente deshabilitar el evento click del botón de salida del panel
    $('#salir').off('click');

    // Exportar los datos a Excel
    var libroBinario = XLSX.write(libro, { type: "binary" });
    var blob = new Blob([s2ab(libroBinario)], { type: "application/octet-stream" });
    var url = URL.createObjectURL(blob);

    var link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    link.click();

    URL.revokeObjectURL(url);

    // Restaurar el evento click del botón de salida del panel después de exportar
    $('#salir').on('click', function () {
        $('#panel').remove();
        $('body').css('background-color', 'white');
        $('.btn-panel').prop('disabled', false);
    });
}

// Función auxiliar para convertir una cadena a un arreglo de bytes
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
}




