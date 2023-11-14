$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
   // drawPieChart(null);
    // maquina_historico();
});
function inicializarControles() {

    //carga info en lista

    //cargar_tabla_solicitudes(null);

   /* $(function () {
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
    });*/

    lista_lineas();
   // lista_maquinas();

}
function lista_lineas() {

    $.ajax({
        url: 'Reporte_USERN2.aspx/lista_Lineas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
           
            for (var i = 0; i < result.Resul.length; i++) {
                if (result.Resul[i].Nombre !== 'GENERAL' && result.Resul[i].Nombre !== 'MACHACHI') {
                    $("#listal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
                    $("#listaDB").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].DBN2 + '</option>');
                    }
            }
            $("#listal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function limpiar_ventana() {
    document.getElementById("buscar").disabled = false;
    document.getElementById('lineacarga').innerHTML = "NINGUNA";
    $('option', '#listagruposN2').remove();
    cargar_tabla_solicitudes(null);
    toastr.success('Se limpia ventana vuelva a cargar una linea para consultas', 'Info', { timeOut: 5000 });
}
function Carga_linea() {
    var combo = document.getElementById("listal");
    var combo2 = document.getElementById("listaDB");
    var selected = combo.options[combo.selectedIndex].text;
    var selected2 = combo2.options[combo.selectedIndex].text;
    document.getElementById("buscar").disabled = true;
    document.getElementById('lineacarga').innerHTML = "" + selected;

    $('option', '#listagruposN2').remove();
    $('option', '#listaperfiles').remove();
    $('option', '#listaperfiles3').remove();

    $.ajax({
        url: 'Reporte_USERN2.aspx/carga_Lineas',
        cache: false,
        data: JSON.stringify({ Linea: ""+selected2 }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#listagruposN2").append('<option  value=0>Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listagruposN2").append('<option  value=' + result.Resul[i].IdGroup + '>' + result.Resul[i].Code + '</option>');
                $("#listaperfiles").append('<option  value=' + result.Resul[i].IdGroup + '>' + result.Resul[i].Code + '</option>');
                $("#listaperfiles3").append('<option  value=' + result.Resul[i].IdGroup + '>' + result.Resul[i].Code + '</option>');
            }

            toastr.success('Carga exitosa Linea:' + document.getElementById("listal").value, 'Info', { timeOut: 5000 });

            $("#listagruposN2").select();
            $("#listaperfiles").select();
            $("#listaperfiles3").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });


}
function lista_usuarios() {



    var v = 0;
    if (document.getElementById('lineacarga').innerHTML == "NINGUNA")
    { v = 1;}

    if (v == 0) {
        $('#table_sol').DataTable().destroy();

        $.ajax({
            url: 'Reporte_USERN2.aspx/lista_reporte',
            cache: false,
            data: JSON.stringify({ ID: document.getElementById("filtro_id").value, Nombres: document.getElementById("filtro_nombres").value, Perfil: document.getElementById("listagruposN2").value, Estado: document.getElementById("filtro_estado").value }),
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
    } else {
        toastr.error('No hay ninguna linea cargada', 'Info', { timeOut: 5000 });
    }
}
function cargar_tabla_solicitudes(lstData) {


    var estado = '';

    var data2 = '';
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
                    { data: "IdUser" }
                  , { data: "Identification" }
                  , { data: "Nombres" }
                  , { data: "Perfiles" }
                  , {
                      data: "Estado", render: function (data, type, row) {

                          estado = data;
                          if (data === "ACTIVO") {
                              return '<label style="color: green; font-weight: bold;">ACTIVO</label>';
                          }
                          else if (data === "INACTIVO") {
                              return '<label style="color: red; font-weight: bold;">INACTIVO</label>';
                          }
                      }
                  }
                 , {
                     data: "IdUser", render: function (data, type, row) {

                         var datos = data;

                         return '<button id="Open"  style="height:35px; width:35px;text-align:left;border-radius: 17px;" class="btn btn-default" type="button" onclick="editar_usuario();" data-toggle="tooltip" title="Editar Usuario" ><i class="fa fa-search-plus"></i></button>'

                     }
                  }
              

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
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

    $('#close ,#close2').click(function (event) {
        $('#modal, #overlay, #Div1').hide();
        event.preventDefault();
    });

    $('#modal').draggable({
        start: function () {
        },

        stop: function () {
        }
    });

    $('#Div1').draggable({
        start: function () {
        },

        stop: function () {
        }
    });
   
});
function editar_usuario02(valor) {


    var v = 0;


        if (v === 0) {
            v = 1;
            $.ajax({
                url: 'Reporte_USERN2.aspx/lista_reportedet',
                cache: false,
                data: JSON.stringify({ ID: '' + valor }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    $("#Text1").val(result.Resul[0].IdUser);
                    $("#Text2").val(result.Resul[0].Identification);
                    $("#Text3").val(result.Resul[0].Nombres);
                    $("#Text4").val(result.Resul[0].Pass);
                    $("#Select1").val(result.Resul[0].Estadou);
                    $("#Select2").val(result.Resul[0].Estadois);
                    $("#Select3").val(result.Resul[0].Estadoisreset);
                    //$("#Email").val(result.Resul[0].Correo);
                    //document.getElementById("listap").value = result.Resul[0].Idperfil;
                    //$("#Estado").val(result.Resul[0].Idestado);
                    //toastr.success('Carga exitosa' + result.Resul[0].Nombres, 'Info', { timeOut: 5000 });
                   // toastr.success('Carga exitosa ID:' + dato, 'Info', { timeOut: 5000 });

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });


            //carga detalles perfiles
            $.ajax({
                url: 'Reporte_USERN2.aspx/lista_reportedet2',
                cache: false,
                data: JSON.stringify({ ID: '' + dato }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    cargar_tabla_perfiles(result.Resul);
                    //toastr.success('Carga exitosa perfiles ID:' + dato, 'Info', { timeOut: 5000 });

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });

            toastr.success('Carga exitosa ID:' + dato, 'Info', { timeOut: 5000 });
        }




}
function crear_usuarios() {

    var v = 0;

    if (document.getElementById('lineacarga').innerHTML == "NINGUNA")
    { v = 1; }

    if (v == 0) {


        $('#Div1').css({
            top: '25%',
            left: '25%',
            margin: '-100px 0 0 -150px'
        });
        $('#overlay, #Div1').show();
        event.preventDefault();


    } else {
        toastr.error('No hay ninguna linea cargada', 'Info', { timeOut: 5000 });
    }
}
function editar_usuario() {

    $('#modal').css({
        top: '25%',
        left: '25%',
        margin: '-100px 0 0 -150px'
    });
    $('#overlay, #modal').show();
    event.preventDefault();


    var v = 0;
    $('#table_sol tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        dato = $(this).find("td:eq(0)").text();

        if (v === 0) {
            v = 1;
            $.ajax({
                url: 'Reporte_USERN2.aspx/lista_reportedet',
                cache: false,
                data: JSON.stringify({ ID: ''+dato }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    $("#Text1").val(result.Resul[0].IdUser);
                    $("#Text2").val(result.Resul[0].Identification);
                    $("#Text3").val(result.Resul[0].Nombres);
                    $("#Text4").val(result.Resul[0].Pass);
                    $("#Select1").val(result.Resul[0].Estadou);
                    $("#Select2").val(result.Resul[0].Estadois);
                    $("#Select3").val(result.Resul[0].Estadoisreset);
                    //$("#Email").val(result.Resul[0].Correo);
                    //document.getElementById("listap").value = result.Resul[0].Idperfil;
                    //$("#Estado").val(result.Resul[0].Idestado);
                    //toastr.success('Carga exitosa' + result.Resul[0].Nombres, 'Info', { timeOut: 5000 });
                    //toastr.success('Carga exitosa ID:' + dato, 'Info', { timeOut: 5000 });
                   
                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });


            //carga detalles perfiles
            $.ajax({
                url: 'Reporte_USERN2.aspx/lista_reportedet2',
                cache: false,
                data: JSON.stringify({ ID: '' + dato }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);
                    cargar_tabla_perfiles(result.Resul);
                    //toastr.success('Carga exitosa perfiles ID:' + dato, 'Info', { timeOut: 5000 });

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });
            toastr.success('Carga exitosa ID:' + dato, 'Info', { timeOut: 5000 });
        }

    });


   
}
function cargar_tabla_perfiles(lstData) {
    var estado = '';

    try {
        $('#tabla_perfiles').DataTable().destroy();
        $('#tabla_perfiles').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "IdGroup" }
                , { data: "Perfiles" }
                , { data: "ExpirationDateTime" }
                , {
                    data: "IdGroup", render: function (data, type, row) {
                        return "<button type='button' style='background-color: red;color: white; font-weight: bold;' class='btn btn-dark visible-lg visible-md visible-sm' onclick='Enviar_solicitud_confirmacion(2," + data + ");' >&#160;X</button>";
                    }

                }


            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_tabla_perfiles():\n' + e.message, "error");
    }
}
function Enviar_solicitud_confirmacion(valor,perfil) {

    var accion = valor;



    if (accion == 1) {
        //reset password
        $.confirm({
            title: 'Confirmacion',
            content: 'Confirma el reset de password',
            theme: 'material',
            buttons: {
                OK: {
                    text: 'OK',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        // $.alert('Something else?');

                    update_usuariopass();

                    }
                },
                cancel: function () {

                },
                      
            }
        });

    } else if (accion == 2) {
        $.confirm({
            title: 'Confirmacion',
            content: 'Confirma eliminar el perfil del usuario',
            theme: 'material',
            buttons: {
                OK: {
                    text: 'OK',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        // $.alert('Something else?');

                        if (perfil != null) {
                            eliminar_perfil_usuario(perfil);
                        } else {
                            toastr.error('no hay perfil seleccionado', 'Info', { timeOut: 10000 });
                        }

                    }
                },
                cancel: function () {

                },

            }
        });
    } else if (accion == 3) {
        $.confirm({
            title: 'Confirmacion',
            content: 'Desea Agregar un nuevo perfil',
            theme: 'material',
            buttons: {
                OK: {
                    text: 'OK',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        // $.alert('Something else?');

                        agregar_perfil_usuario();

                    }
                },
                cancel: function () {

                },

            }
        });
    } else if (accion == 4 ) {
        $.confirm({
            title: 'Confirmacion',
            content: 'Desea Actualizar el usuario',
            theme: 'material',
            buttons: {
                OK: {
                    text: 'OK',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        // $.alert('Something else?');

                        guardar_actualizado();

                    }
                },
                cancel: function () {

                },

            }
        });
    }

   

}
function agregar_perfil_usuario() {

    $.ajax({
        url: 'Reporte_USERN2.aspx/Agregar_perfil',
        cache: false,
        data: JSON.stringify({ id: $("#Text1").val(), idperfil: document.getElementById("listaperfiles").value }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa o ID(perfiles,para actualizar,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('ya existe este perfil,agregado al usuario', 'Info', { timeOut: 10000 });
                editar_usuario02($("#Text1").val());
            } else if (result.Resul === "1") {

                //limpiar_ventana();
                toastr.success('Perfil Actualizado con exito', 'Info', { timeOut: 10000 });
                editar_usuario02($("#Text1").val());

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function update_usuariopass() {

    $.ajax({
        url: 'Reporte_USERN2.aspx/Reset_perfil',
        cache: false,
        data: JSON.stringify({ id: $("#Text1").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa o ID(perfiles,para actualizar,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {

                toastr.error('NO existe este usuario', 'Info', { timeOut: 10000 });
                editar_usuario02($("#Text1").val());
            } else if (result.Resul === "1") {

                //limpiar_ventana();
                toastr.success('Perfil Actualizado con exito', 'Info', { timeOut: 10000 });
                editar_usuario02($("#Text1").val());

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function eliminar_perfil_usuario(dato) {

    console.log('perfil a eliminar:'+dato)

            $.ajax({
                url: 'Reporte_USERN2.aspx/Eliminar_perfil',
                cache: false,
                data: JSON.stringify({ id: $("#Text1").val(), idperfil: ''+dato }),
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var result = JSON.parse(data.d);

                    console.log('resul eliminar DB:'+result.Resul);
                    if (result.Resul === "-1") {

                        toastr.error('No hay Sesion Activa o ID(perfiles´para actualizar,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
                    } else if (result.Resul === "-2") {

                        toastr.error('No existe este perfil,agregado al usuario', 'Info', { timeOut: 10000 });
                        editar_usuario02($("#Text1").val());
                    } else if (result.Resul === "1") {

                        //limpiar_ventana();
                        toastr.success('Perfil Actualizado con exito', 'Info', { timeOut: 10000 });
                        editar_usuario02($("#Text1").val());

                    } else if (result.Resul === "-3") {

                        toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
                    } else {

                        toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
                    }

                },
                error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
            });


}
function guardar_actualizado() {
    var id = $("#Text1").val();
    var lo_estado0 = $("#Select1").val();
    var lo_tenaris0 = $("#Select2").val();
    var lo_resetp0 = $("#Select3").val();

 

    // Realizar la solicitud AJAX
    console.log("wdwdw")
    $.ajax({
        url: 'Reporte_USERN2.aspx/guardar_actualizado',
        cache: false,
        data: JSON.stringify({ id: id, lo_estado: '' + lo_estado0, lo_tenaris: '' + lo_tenaris0, lo_resetp: '' + lo_resetp0}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            console.log('resul actualizar DB:' + result.Resul);
            if (result.Resul === "-1") {
                toastr.error('No hay Sesión Activa o ID de perfil para actualizar. Realice el inicio de sesión nuevamente.' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul === "-2") {
                toastr.error('No existe este usuario', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "1") {
                toastr.success('Perfil actualizado con éxito', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "-3") {
                toastr.error('ERROR DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
            } else {
                toastr.error('ERROR DESCONOCIDO DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
            }
        },
        error: function (textStatus, e) {
            toastr.error('Error: ' + e, 'Info', { timeOut: 10000 });
        }
    });
}
function enviar_creacion_solicitud_usuario() {

   
    $.confirm({
        title: 'Confirmacion',
        content: 'Confirma el reset de password',
        theme: 'material',
        buttons: {
            OK: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function () {
                    // $.alert('Something else?');

                    Enviar_creacion_usuario();
                   
                 
                }
            },
            cancel: function () {

            },

        }
    });
}
function Enviar_creacion_usuario() {

    var identificacion0 = document.getElementById('Text6').value;
    var FistName0 = document.getElementById('Text5').value;
    var LastName0 = document.getElementById('Text7').value;
    var IS_tenaris0 = document.getElementById('Select4').value;
    var resetp_tenaris0 = document.getElementById('Select5').value;
    //var selectElement = document.getElementById('listaperfiles3').value;

    if (identificacion0 === '' || FistName0 === '' || LastName0 === '') {
        toastr.warning('Hay campos vacíos', 'Info', { timeOut: 10000 });
        return;
    }




   try {
    var resume_table = document.getElementById("Table1");
    var identificacion1 = "";

    for (var i = 1; i < resume_table.rows.length; i++) {
        var row = resume_table.rows[i];
        var firstCell = row.cells[0];
        identificacion1 += firstCell.innerText + '|';
    }

    console.log("perfiles"+identificacion1);
} catch (error) {
    alert('Error al procesar el documento ' + console.error(error));
    }

   
        $.ajax({
            url: 'Reporte_USERN2.aspx/Enviar_creacion_usuario',
            cache: false,
          
            data: JSON.stringify({ identificacion: identificacion0, FistName: FistName0, LastName: LastName0, IS_tenaris: IS_tenaris0, resetp_tenaris: resetp_tenaris0, selectElement: identificacion1 }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);

                console.log('resul actualizar DB:' + result.Resul);
                if (result.Resul === "1") {
                    toastr.success('guardado con excito' + result.error_mensaje, 'Info', { timeOut: 10000 });
                    limpiarCampos();
                    limpiarTabla();

                } else if (result.Resul === "-1") {
                    toastr.error('No hay Sesión Activa o ID de perfil para actualizar. Realice el inicio de sesión nuevamente.' + result.error_mensaje, 'Info', { timeOut: 10000 });
                    limpiarCampos();
                    limpiarTabla();
                } else if (result.Resul === "-2") {
                    toastr.error('El usuario ya existe', 'Info', { timeOut: 10000 });

                } else if (result.Resul === "-3") {
                    toastr.error('ERROR DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
                } else {
                    toastr.error('ERROR DESCONOCIDO DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
                }
            },
            error: function (textStatus, e) {
                toastr.error('Error: ' + e, 'Info', { timeOut: 10000 });
            }
        });
}
function agregar_usuario() {
     var identificacion = document.getElementById('Text6').value;
     var id = document.getElementById('listaperfiles3').value;
     var FistName = document.getElementById('Text5').value;
     var LastName = document.getElementById('Text7').value;
     var IS_tenaris = document.getElementById('Select4').value;
     var selectElement = document.getElementById('listaperfiles3');

     var tabla = document.getElementById('Table1');
     var filas = tabla.rows;

     for (var i = 1; i < filas.length; i++) {
         var primeraCelda = filas[i].cells[0];
         var valorCelda = primeraCelda.textContent || primeraCelda.innerText;
         var segundaCelda = filas[i].cells[1];
         var valorCelda2 = segundaCelda.textContent || segundaCelda.innerText;

         if (valorCelda === id) {
             toastr.warning('Este ID ya fue añadido', 'Info', { timeOut: 10000 });
             return; // Detiene la función si encuentra un valor duplicado en la primera columna
         }
         if (valorCelda2 === selectedText) {
             toastr.warning('Este perfil ya fue añadido', 'Info', { timeOut: 10000 });
             return; // Detiene la función si encuentra un valor duplicado en la segunda columna
         }
     }




     // Obtener el índice del elemento seleccionado
     var selectedIndex = selectElement.selectedIndex;

     // Obtener el objeto Option seleccionado
     var selectedOption = selectElement.options[selectedIndex];

     // Obtener el id y el texto del Option seleccionado
     var selectedText = selectedOption.text;

     // Crear una nueva fila en la tabla
     var fila = tabla.insertRow();

     // Insertar los valores en las celdas de la fila
     var celda1 = fila.insertCell();
         celda1.innerHTML = id;


     var celda2 = fila.insertCell();
     celda2.innerHTML = selectedText;

     // Agregar botón de eliminar en la fila
     var celdaEliminar = fila.insertCell();
     var botonEliminar = document.createElement('button');
     botonEliminar.innerHTML = 'Eliminar';
     botonEliminar.addEventListener('click', function () {
         eliminarFila(this);
     });
     celdaEliminar.appendChild(botonEliminar);

 }
function eliminarFila(boton) {
    var fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}
function limpiarTabla() {
        var table = document.getElementById('Table1');
        var rowCount = table.rows.length;

        // Eliminar las filas una por una, empezando desde el final
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    
}
function limpiarCampos() {
    document.getElementById('Text6').value = '';
    document.getElementById('Text5').value = '';
    document.getElementById('Text7').value = '';

     var tabla = document.getElementById("Table1");

     // Eliminamos todas las filas de la tabla

}
function Reset_password() {
    var password0 = document.getElementById('Text1600').value;
    var idd0 = document.getElementById('Text1').value;


    console.log('PASS:'+password0);
    console.log('ID:' + idd0);

    $.ajax({
        url: 'Reporte_USERN2.aspx/set_password',
        cache: false,

        data: JSON.stringify({ password: password0 , idd:idd0}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            console.log('resul resetiar DB:' + result.Resul);
            if (result.Resul === "1") {
                toastr.success('Actualizado con exito' + result.Mensaje_error, 'Info', { timeOut: 10000 });
                editar_usuario02($("#Text1").val());
            } else if (result.Resul === "-1") {
                toastr.error('Revise Campos:' + result.Mensaje_error, 'Info', { timeOut: 10000 });
                //limpiarCampos();
                //limpiarTabla();
            } else if (result.Resul === "-2") {
                toastr.error('El usuario no existe', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "-3") {
                toastr.error('ERROR DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
            } else {
                toastr.error('ERROR DESCONOCIDO DE CONEXIÓN o DB', 'Info', { timeOut: 10000 });
            }
        },
        error: function (textStatus, e) {
            toastr.error('Error: ' + e, 'Info', { timeOut: 10000 });
        }
    });
}
function enviar_solicitud_reseteo() {
    var password0 = document.getElementById('Text1600').value;
    if (password0 === "") {
        toastr.error("el campo de resetear password esta vacio", { timeOut: 7000 });
        return;
    }
    if (password0.length<5) {
        toastr.error("tiene que colocar mas de 5 caracteres", { timeOut: 7000 });
        return
    }
    else {

        {
            $.confirm({
                title: 'Confirmacion',
                content: 'Confirma el Set de password',
                theme: 'material',
                buttons: {
                    OK: {
                        text: 'OK',
                        btnClass: 'btn-blue',
                        keys: ['enter', 'shift'],
                        action: function () {
                            Reset_password();
                        }
                    },
                    cancel: function () {

                    },
                }
            });
        }
    }
}