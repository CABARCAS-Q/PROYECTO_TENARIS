$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);
    drawPieChart(null);
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

    lista_lineas();
    lista_maquinas();

}
function lista_lineas() {

    $.ajax({
        url: 'Monitor_auto.aspx/lista_Lineas',
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
function lista_maquinas() {


    if (document.getElementById("listal").value != '0') {

        $('option', '#listamaq').remove();

        $.ajax({
            url: 'Monitor_auto.aspx/lista_maquinas',
            cache: false,
            data: JSON.stringify({ linea: document.getElementById("listal").value }),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var result = JSON.parse(data.d);
                $("#listamaq").append('<option  value=0>Todos</option>');
                for (var i = 0; i < result.Resul.length; i++) {
                    $("#listamaq").append('<option  value=' + result.Resul[i].Id_maquina + '>' + result.Resul[i].Nombre + '</option>');
                }
                $("#listamaq").select();

            },
            error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
        });

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
                 {
                     data: "Estado" , render: function (data, type, full) {
                        
     
                         if (data === "3") {
                             return '<button id="buscar" style="height:35px; width:35px;text-align:left;color:red;border-radius: 17px;outline: none;" class="btn btn-default" type="button"  data-toggle="tooltip"  ><i class="fa fa-circle"></i></button>'
                         }
                         else if (data === "2") {
                             return '<button id="buscar"  style="height:35px; width:35px;text-align:left;color:#ffa500;border-radius: 17px;outline: none;" class="btn btn-default" type="button"  data-toggle="tooltip"  ><i class="fa fa-circle"></i></button>'
                         } else {
                             return '<button id="buscar"  style="height:35px; width:35px;text-align:left;color:green;border-radius: 17px;outline: none;" class="btn btn-default" type="button"  data-toggle="tooltip"  ><i class="fa fa-circle"></i></button>'
                         }



                     }
                 }
                 , {
                     data: "Id_maquina", render: function (data, type, row) {

                         var datos = data;
                         return '<button id="buscar"  style="height:35px; width:35px;text-align:left;border-radius: 17px;" class="btn btn-default" type="button" onclick="ver_informacion(/' + datos.toString() + '/);" data-toggle="tooltip" title="ver detalle HHD" ><i class="fa fa-search-plus"></i></button>'

                     }
                 }
                , { data: "Nombre" }
                , {
                    data: "Id_maquina", render: function (data, type, row) {

                        return '<label style="color: black; font-weight: bold;" class="data" >' + data + '</label>';

                    }
                }
                , { data: "Nombre_maquina" }
                , {
                    data: "RAML", render: function (data, type, row) {

                        var valor = data;
                        valor = valor.toString().replace('.', '');
                        valor = valor.toString().replace(',', '');
                        if (valor < 200 ) {
                            return '<label style="color: #FF3300; font-weight: bold;">' + data + '</label>';
                        } else if (valor >= 200 && valor <= 500) {
                            return '<label style="color: #ffa500; font-weight: bold;">' + data + '</label>';
                        } else {
                            return '<label style="color: black; font-weight: bold;">' + data + '</label>';
                        }

                    }
                }
                , { data: "RAMU" }
                , {
                    data: "RAMLP", render: function (data, type, row) {

                        return '<label style="color: black; font-weight: bold;">' + data + '</label>';

                    }
                }
                , { data: "RAMUP" }
                , { data: "HHD" }
                , {
                    data: "Actividad", render: function (data, type, row) {

                        return '<label style="color: black; font-weight: bold;">' + data + '</label>';

                    }
                }
                ,{ 
                    data: "Fecha_creacion", render: function (data, type, row) {

                        var valor = data;
                        var fecha1 = new Date(valor);
                        var fecha = new Date();

                        var diferenciaf = fecha - fecha1;

                        var resul = diferenciaf / 1000 / 60;
                        var resulf = parseInt(resul);

                    
                        console.log(resulf);
                  

                        if (resulf > 480) {
                            return '<label style="color: #FF3300; font-weight: bold;">' + data + '</label>';
                        } else if (resulf >= 65 && resulf <= 480) {
                            return '<label style="color: #ffa500; font-weight: bold;">' + data + '</label>';
                        } else {
                            return '<label style="color: #009900;font-weight: bold;">' + data + '</label>';
                        }
                                                                                                                                                                                                                                                      
                    }
                  }

                , { data: "IP" }
                

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_sol():\n' + e.message, "error");
    }
}
function lista_solicitudes() {

    $('#table_sol').DataTable().destroy();

    $.ajax({
        url: 'Monitor_auto.aspx/lista_reporte',
        cache: false,
        data: JSON.stringify({ fecha1: document.getElementById("fecha1").value, fecha2: document.getElementById("fecha2").value, linea: document.getElementById("listal").value, maquina: document.getElementById("listamaq").value, estado: '0' }),
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
function ver_informacion(valor) {

    valor = valor.toString().replace("/","");
    valor = valor.toString().replace(" /", "");
    valor = valor.toString().replace("/ ", "");

    console.log('valor:'+valor)
   
    var detalle = '';

    //llena la info

    $.ajax({
        url: 'Monitor_auto.aspx/Detalle_hhd',
        cache: false,
        data: JSON.stringify({ maquina: valor }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(data);
           
            for (var i = 0; i < result.Resul.length; i++) {

                //console.log('entro  ');
                if(result.Resul[i].Estado==='3'){

                    if (detalle) {
                        var detalle = detalle + '<tr ><td ><font color="red">' + result.Resul[i].HHD + '</font></td><td ><strong><font color="red">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="red">' + result.Resul[i].HHDT + '</font></td></tr>';
                    } else {
                        var detalle = '<tr ><td ><font color="red">' + result.Resul[i].HHD + '</font></td><td ><strong><font color="red">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="red">' + result.Resul[i].HHDT + '</font></td></tr>';
                    }

                } else if (result.Resul[i].Estado === '2') {
                    if (detalle) {

                        var detalle = detalle + '<tr ><td ><font color="#ffa500">' + result.Resul[i].HHD + '</font></td><td ><strong><font color="#ffa500">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="#ffa500">' + result.Resul[i].HHDT + '</font></td></tr>';

                    } else {
                        var detalle = '<tr ><td ><font color="#ffa500">' + result.Resul[i].HHD + '</font></td><td ><strong><font color="#ffa500">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="#ffa500">' + result.Resul[i].HHDT + '</font></td></tr>';
                    }

                }else{

                    if (detalle) {
                        var detalle = detalle + '<tr ><td ><font color="#009900">' + result.Resul[i].HHD + '</font></td><td ><strong><font color="#009900">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="#009900">' + result.Resul[i].HHDT + '</font></td></tr>';
                    } else {
                        var detalle = '<tr ><td ><font color="#009900" >' + result.Resul[i].HHD + '</font></td><td ><strong><font color="#009900">' + result.Resul[i].HHDL + '</font></strong></td><td ><font color="#009900">' + result.Resul[i].HHDT + '</font></td></tr>';

                    }
                }
              
            }
           

            //muestra la info
            var contenido = '<table  class="table table-bordered dt-responsive nowrap" cellspacing="0" style="width:100%" border="1" ><tr><th>Dir</th><th>HHD Free</th> <th>HHD Total</th></tr>' + detalle + '</table>'
           // console.log('Resul:' + detalle);

            //muestra la info
            $.confirm({
                title: 'Detalle',
                content: contenido,
                theme: 'material',
                buttons: {
                    cancel: function () {

                    },
                }
            });

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });


   

    
    
    
    

}
function maquina_historico() {

   

    $.ajax({
        url: 'Monitor_auto.aspx/Chart_ram',
        cache: false,
        data: JSON.stringify({ maquina: 'TC01'}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var Result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            var data = [];

            for (var i in Result) {
                var serie = { name: Result[i].fecha, y: Result[i].Valor };
                data.push(serie);
            }

            drawPieChart(data);

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function drawPieChart(seriesData) {

    $('#container').highcharts({
        title: {
            text: 'Monitor de maquinas'
        },

        subtitle: {
            text: 'SGS'
        },

        yAxis: {
            title: {
                text: 'Consumo'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },
        series: [{
            name: 'Dias',
            colorByPoint: true,
            data: seriesData
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}