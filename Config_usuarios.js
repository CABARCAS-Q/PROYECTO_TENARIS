$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista
    lista_perfiles();
    cargar_tabla_usuarios(null);

}

$(function () {
    $('#Open').click(function (event) {
        $('#modal').css({
            top: '25%',
            left: '25%',
            margin: '-100px 0 0 -150px'
        });
        $('#overlay, #modal').show();
        event.preventDefault();
    });

    $('#close').click(function (event) {
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
function lista_perfiles() {
    $('option', '#listap').remove();
    $('option', '#filtro_perfil').remove();

    $.ajax({
        url: 'Perfiles_config.aspx/lista_perfiles',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#filtro_perfil").append('<option  value="0">Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listap").append('<option  value=' + result.Resul[i].Id_perfil + '>' + result.Resul[i].Nombre + '</option>');
                $("#filtro_perfil").append('<option  value=' + result.Resul[i].Id_perfil + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listap").select();
            $("#listap").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function limpiar_ventana() {
    document.getElementById("Id").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellidos").value = "";
    document.getElementById("Email").value = "";

}
//validacion accion para guardar un nuevo perfil al sistema 
function crear_usuario_accion() {

    //valida que hayan valores en los campos

    if ($("#Id").val() !== "" && $("#Nombre").val() !== "" && $("#Apellidos").val() !== "" && $("#listap").val() !== "") {
        
        crear_usuario();

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }


}
function lista_usuarios() {


    $.ajax({
        url: 'Config_usuarios.aspx/lista_usuarios',
        cache: false,
        data: JSON.stringify({ fid: document.getElementById("filtro_id").value, fnombre: document.getElementById("filtro_nombres").value, fperfil: document.getElementById("filtro_perfil").value, festado: document.getElementById("filtro_estado").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            cargar_tabla_usuarios(result.Resul);
            toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function crear_usuario() {

    $.ajax({
        url: 'Config_usuarios.aspx/crear_usuario',
        cache: false,
        data: JSON.stringify({ id: $("#Id").val(), nombre: $("#Nombre").val(), apellidos: $("#Apellidos").val(), email: $("#Email").val(), perfil: document.getElementById("listap").value, estado: document.getElementById("Estado").value, tipo: document.getElementById("Tipo").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('ya hay un usuario con este mismo id,si desea actualizar escoga la opcion actualizar', 'Info', { timeOut: 10000 });
            } else if (result.Resul === "1") {

                limpiar_ventana();
                toastr.success('Usuario Creado con exito', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "2") {

                limpiar_ventana();
                toastr.success('Perfil Actualizado con exito', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function cargar_tabla_usuarios(lstData) {
    var estado = '';

    try {
        $('#tabla_usuarios').DataTable().destroy();
        $('#tabla_usuarios').DataTable({
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
                , { data: "Apellidos" }
                , { data: "Perfil" }
                , {
                    data: "Estado", render: function (data, type, row) {

                        estado = data;
                        if (data === "ACTIVO") {
                            return '<label style="color: green; font-weight: bold;">PERMITIDO</label>';
                        }
                        else if (data === "INACTIVO") {
                            return '<label style="color: red; font-weight: bold;">DENEGADO</label>';
                        }
                    }
                }
                , {
                    data: "Id0", render: function (data, type, row) {
                        return '<button type="button" style="background-color: green;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="editar_usuario();" >&#160;Editar</button>';
                    }

                }


            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_tabla_perfiles():\n' + e.message, "error");
    }
}
function editar_usuario() {


    var v = 0;


    $('#tabla_usuarios tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        dato = $(this).find("td:eq(0)").text();

        //console.log(dato+' - '+valorf);

        if (v === 0) {
            v = 1;
            $.ajax({
                url: 'Config_usuarios.aspx/lista_usuarios',
                cache: false,
                data: JSON.stringify({ fid: dato, fnombre: "", fperfil: "0", festado: "Todos" }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    $("#Id").val(result.Resul[0].Id);
                    $("#Nombre").val(result.Resul[0].Nombre);
                    $("#Apellidos").val(result.Resul[0].Apellidos);
                    $("#Email").val(result.Resul[0].Correo);
                    document.getElementById("listap").value = result.Resul[0].Idperfil;
                    $("#Estado").val(result.Resul[0].Idestado);
                    //toastr.success('Carga exitosa' + result.Resul[0].Nombres, 'Info', { timeOut: 5000 });
                    //toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
                    $('#modal').hide();
                    $("#overlay").css("display", "none");
                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });

        }


    });
}