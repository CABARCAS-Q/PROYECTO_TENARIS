$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista
    lista_perfiles();
    cargar_tabla_perfiles(null);
}

//metodo carga lista de perfiles al combo
function lista_perfiles() {
    $('option', '#listap').remove();


    $.ajax({
        url: 'Perfiles_config.aspx/lista_perfiles',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listap").append('<option  value=' + result.Resul[i].Id_perfil + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listap").select();
            
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}

//validacion accion para guardar un nuevo perfil al sistema 
function crear_perfil_accion() {

    //valida que hayan valores en los campos

    if ($("#nombrep").val() !== "" ) {
            crear_perfil();
    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }


}

//accion para guardar un nuevo perfil al sistema 
function crear_perfil() {

    $.ajax({
        url: 'Perfiles_config.aspx/crear_perfil',
        cache: false,
        data: JSON.stringify({ perfil: $("#nombrep").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('ya hay un perfil con este mismo nombre', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {

                $("#nombrep").val("");
                toastr.success('Perfil Creado con exito', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function lista_permisos() {

    $.ajax({
        url: 'Perfiles_config.aspx/lista_menus',
        cache: false,
        data: JSON.stringify({ nperfil: document.getElementById("listap").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            cargar_tabla_perfiles(result.Resul);
            toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}

function lista_permisos_sin_comentarios() {

    $.ajax({
        url: 'Perfiles_config.aspx/lista_menus',
        cache: false,
        data: JSON.stringify({ nperfil: document.getElementById("listap").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            cargar_tabla_perfiles(result.Resul);
            //toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function cargar_tabla_perfiles(lstData) {
    var estado = '';

    try {
        $('#table_perfiles').DataTable().destroy();
        $('#table_perfiles').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "Id" }
                , { data: "Nombre" }
                , {
                    data: "Estado", render: function (data, type, row) {

                        estado = data;
                        if (data === "PERMITIDO") {
                            return '<label style="color: green; font-weight: bold;">PERMITIDO</label>';
                        } 
                        else if (data === "DENEGADO") {
                            return '<label style="color: red; font-weight: bold;">DENEGADO</label>';
                        }
                    }
                }
                , {
                    data: "Id0", render: function (data, type, row) {
                        return '<button type="button" style="background-color: green;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="Agregar_permiso(this);" >&#160;Permitir</button>';
                    }

                }
                , {
                    data: "Id1", render: function (data, type, row) {
                        return '<button type="button" style="background-color:red;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="Eliminar_permiso(this);" >&#160;Denegar</button>';
                    }

                }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_tabla_perfiles():\n' + e.message, "error");
    }
}
function Agregar_permiso(objEvento) {


    var table = $('#table_perfiles').DataTable();
    var v = 0;
    var valorf;

    $('#table_perfiles tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        dato = $(this).find("td:eq(0)").text();
        // valorf = $(this).find("td:eq(0)").text();
        valorf = $("#listap").val();
   
        //console.log(dato+' - '+valorf);

        if (v === 0) {
            v = 1;
            // mostrarAlertas('' + valorf, "success");
            $.ajax({
                url: 'Perfiles_config.aspx/add_menu',
                cache: false,
                data: JSON.stringify({ menu: dato, perfil: valorf }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    if (result.Resul === "-1") {

                        toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                    } else if (result.Resul === "-2") {

                        toastr.warning('Ya esta asignacion existe', 'Info', { timeOut: 10000 });

                    } else if (result.Resul === "1") {

                        toastr.success('Perfil Agregado con exito', 'Info', { timeOut: 10000 });
                        lista_permisos_sin_comentarios();
                    } else if (result.Resul === "-3") {

                        toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
                    } else {

                        toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
                    }

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });
            
        }


    });

}

function Eliminar_permiso(objEvento) {


    var table = $('#table_perfiles').DataTable();
    var v = 0;
    var valorf;

    $('#table_perfiles tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        dato = $(this).find("td:eq(0)").text();
        valorf = $("#listap").val();

        if (v === 0) {
            // mostrarAlertas('' + valorf, "success");
            v = 1;
            $.ajax({
                url: 'Perfiles_config.aspx/delete_menu',
                cache: false,
                data: JSON.stringify({ menu: dato, perfil: valorf }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    if (result.Resul === "-1") {

                        toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                    } else if (result.Resul === "-2") {

                        toastr.error('Ya esta asignacion existe', 'Info', { timeOut: 10000 });

                    } else if (result.Resul === "1") {

                        toastr.success('Perfil Denegado con exito', 'Info', { timeOut: 10000 });
                        lista_permisos_sin_comentarios();
                    } else if (result.Resul === "-3") {

                        toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
                    } else {

                        toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
                    }

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });
        }


    });

}