$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
  
    // maquina_historico();
});
function inicializarControles() {

    //carga info en lista

    cargar_tabla_solicitudes(null);

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

    $("#listamot").append('<option  value=0>Todas</option>');
   
     $("#listamot").append('<option  value=1>Importantes </option>');
       
    
    $("#listamot").select();

    lista_lineas();
   

}
function lista_lineas() {

    $.ajax({
        url: 'Mapa_monitoreo_detalles.aspx/lista_Lineas',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
            $("#listal").append('<option  value=0>Todos</option>');
            for (var i = 0; i < result.Resul.length; i++) {
                $("#listal").append('<option  value=' + result.Resul[i].Id_linea + '>' + result.Resul[i].Nombre + '</option>');
            }
            $("#listal").select();

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
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
                {data: "Id_referencia" , render: function (data, type, full) {
                        
     
                  
                        return '<button id="buscar"  style="height:35px; width:35px;text-align:left;color:green;border-radius: 17px;outline: none;" class="btn btn-default" type="button"  data-toggle="tooltip"  ><i class="fa fa-circle"></i></button>'
                    



                }
    }           ,
                 {
                     
                          data: "Id_referencia" , render: function (data, type, full){ return '<label style="color: black; " class="data" >' + data + '</label>';}}
                             , { data: "Nombrel" , render: function (data, type, full){ return '<label style="color: black; " class="data" >' + data + '</label>';}}
                         , { data: "Nombre" , render: function (data, type, full){ return '<label style="color: black; " class="data" >' + data + '</label>';}}
                         , { data: "Nombre_service", render: function (data, type, full) { return '<label style="color: black; " class="data" >' + data + '</label>';}}
                         , {
                             data: "Servcon", render: function (data, type, full) {
                                 var valor = data;
                                 valor = valor.toString().replace('.', '');
                                 valor = valor.toString().replace(',', '');
                                 if (valor > 1000) {
                                     return '<label style="color: #FF3300; font-weight: bold;">' + data + '</label>';
                                 } else if (valor >= 500 && valor <= 1000) {
                                     return '<label style="color: #ffa500; font-weight: bold;">' + data + '</label>';
                                 } else {
                                     return '<label style="color: black;">' + data + '</label>';
                                 }
                             }
                         }
                         , { data: "fechac", render: function (data, type, full) { return '<label style="color: black; font-weight: bold;" class="data" >' + data + '</label>';}}
                         , { data: "EstadoIM", render: function (data, type, full) { return '<label style="color: black; font-weight: bold;" class="data" >' + data + '</label>';}}


            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
}

function lista_solicitudes() {

    //$('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Mapa_monitoreo_detalles.aspx/lista_reporte',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, estado: document.getElementById("listamot").value }),
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
}