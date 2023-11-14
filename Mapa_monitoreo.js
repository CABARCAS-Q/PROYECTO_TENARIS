var tiempo = null;

$(document).ready(function () {

    inicializarControles();
    //window.setInterval("prueba2()", 3000);

});
function inicializarControles() {

    //carga info en lista
   /* cargar_tabla_solicitudes(null);
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
    lista_motivos();
    $('#iddescripcionsolicitud').prop('readonly', true);
    $('#iddescripcionsolucion').prop('readonly', true);
    window.setInterval("prueba()", 60000);

    var pruebaa = document.getElementById("codigobusqueda").value;
    var pruebaa0 = document.getElementById("fechabusqueda1").value;
    var pruebaa1 = document.getElementById("fechabusqueda2").value;
    console.log('Valor:' + pruebaa);
    console.log('Valorf1:' + pruebaa0);
    console.log('Valorf2:' + pruebaa1);
    if (pruebaa === '1') {
        console.log('entro aqui');
        
    }*/
    window.setInterval("carga_informacion()", 60000);
    carga_informacion();


    dw_Tooltip.defaultProps = {
        //supportTouch: true, // set false by default
        hoverable: true
    }

    carga_estados();
  
}
function carga_estados() {

    $("#linea03").tooltip('show');
    $("#linea01").tooltip('show');
    $("#linea02").tooltip('show');
    $("#linea15").tooltip('show');
    $("#linea01").tooltip('show');
    $("#linea11").tooltip('show');
    $("#linea14").tooltip('show');
    $("#linea09").tooltip('show');
    $("#linea088").tooltip('show');
    $("#linea087").tooltip('show');
    $("#linea083").tooltip('show');
    $("#linea082").tooltip('show');
    $("#linea12").tooltip('show');
    $("#linea081").tooltip('show');
    $("#linea084").tooltip('show');
    $("#linea085").tooltip('show');
    $("#linea086").tooltip('show');
    $("#linea089").tooltip('show');
    $("#linea07").tooltip('show');
    $("#linea007").tooltip('show');
    $("#linea10").tooltip('show');
    $("#linea04").tooltip('show');
    $("#linea05").tooltip('show');
    $("#linea101").tooltip('show');

}

function carga_informacion() {

    carga_estados();

    var slitter = 0;
    var linepipe = 0;
    var recalcado2 = 0;
    var slotting = 0;
    var TubingPH2 = 0;
    var TubingPH4 = 0;
    var PMC = 0;
    var swaging = 0;
    var TTR = 0;
    var Etna = 0;
    var Mckay = 0;
    var Ajuste = 0;
    var facu01 = 0;
    var facu02 = 0;
    var facu03 = 0;
    var facu04 = 0;
    var facu05 = 0;
    var facu06 = 0;
    var facucort = 0;
    var facusea = 0
    var facufos = 0;
    var OCTG = 0;
    var Labo = 0;


    var slittercant = 0;
    var TTRcant = 0;
    var linepipecant = 0;
    var recalcado2cant = 0;
    var slottingcant = 0;
    var TubingPH2cant = 0;
    var TubingPH4cant = 0;
    var PMCcant = 0;
    var swagingcant = 0;
    var Etnacant = 0;
    var Mckaycant = 0;
    var Ajustecant = 0;
    var facu01cant = 0;
    var facu02cant = 0;
    var facu03cant = 0;
    var facu04cant = 0;
    var facu05cant = 0;
    var facu06cant = 0;
    var facucortcant = 0;
    var facuseacant = 0;
    var facufoscant = 0;
    var OCTGcant = 0;
    var Labocant = 0;

    var slittercdet = '';
    var TTRdet = '';
    var linepipedet = '';
    var recalcado2det = '';
    var slottingdet = '';
    var TubingPH2det = '';
    var TubingPH4det = '';
    var PMCdet = '';
    var swagingdet = '';
    var Etnadet = '';
    var Mckaydet = '';
    var Ajustedet = '';
    var facu01det = '';
    var facu02det = '';
    var facu03det = '';
    var facu04det = '';
    var facu05det = '';
    var facu06det = '';
    var facucortdet = '';
    var facuseadet = '';
    var facufosdet = '';
    var OCTGdet = '';
    var Labodet = '';

    var slittercre = '';
    var TTRre = '';
    var linepipere = '';
    var recalcado2re = '';
    var slottingre = '';
    var TubingPH2re = '';
    var TubingPH4re = '';
    var PMCre = '';
    var swagingre = '';
    var Etnare = '';
    var Mckayre = '';
    var Ajustere = '';
    var facu01re = '';
    var facu02re = '';
    var facu03re = '';
    var facu04re = '';
    var facu05re = '';
    var facu06re = '';
    var facucortre = '';
    var facuseare = '';
    var facufosre = '';
    var OCTGre = '';
    var Labore = '';

    var slittertime = 0;
    var linepipetime = 0;
    var recalcado2time = 0;
    var slottingtime = 0;
    var TubingPH2time = 0;
    var TubingPH4time = 0;
    var PMCtime = 0;
    var swagingtime = 0;
    var TTRtime = 0;
    var Etnatime = 0;
    var Mckaytime = 0;
    var Ajustetime = 0;
    var facu01time = 0;
    var facu02time = 0;
    var facu03time = 0;
    var facu04time = 0;
    var facu05time = 0;
    var facu06time = 0;
    var facucorttime = 0;
    var facuseatime = 0;
    var facufostime = 0;
    var OCTGtime = 0;
    var Labotime = 0;

    $.ajax({
        url: 'Mapa_monitoreo.aspx/carga_informacion',
        cache: false,
        data: JSON.stringify(),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                toastr.success('Carga exitosa:', 'Info', { timeOut: 5000 });

                for (var i = 0; i < result.Resul.length; i++) {
                    //slitter
                    console.log('Estado:'+slitter+'ADQ:' + result.Resul[i].Nombre + ' Serv:' + result.Resul[i].Servdir);
                    if (result.Resul[i].Nombre === 'ADQ Slitter') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            slittertime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            slittertime = 3;
                        }

                        if (slitter == 0) { slitter=2}
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            slitter = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            slittercdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        } else {
                            //slittercdet += '<p >' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }

                        if (result.Resul[i].fechac !== '-') {
                            slittercre = result.Resul[i].fechac;
                        }
                        slittercant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ LinePipe') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            linepipetime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            linepipetime = 3;
                        }
                        if (linepipe == 0) { linepipe = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            linepipe = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            linepipedet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            linepipere = result.Resul[i].fechac;
                        }
                        linepipecant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Recalcado2') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            recalcado2time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            recalcado2time = 3;
                        }
                        if (recalcado2 == 0) { recalcado2 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            recalcado2 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            recalcado2det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            recalcado2re = result.Resul[i].fechac;
                        }
                        recalcado2cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Slotting') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            slottingtime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            slottingtime = 3;
                        }
                        if (slotting == 0) { slotting = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            slotting = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            slottingdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            slottingre = result.Resul[i].fechac;
                        }
                        slottingcant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Tubing PH2') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            TubingPH2time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            TubingPH2time = 3;
                        }
                        if (TubingPH2 == 0) { TubingPH2 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            TubingPH2 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            TubingPH2det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            TubingPH2re = result.Resul[i].fechac;
                        }
                        TubingPH2cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Tubing PH4') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            TubingPH4time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            TubingPH4time = 3;
                        }
                        if (TubingPH4 == 0) { TubingPH4 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            TubingPH4 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            TubingPH4det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            TubingPH4re = result.Resul[i].fechac;
                        }
                        TubingPH4cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Pmc') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            PMCtime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            PMCtime = 3;
                        }
                        if (PMC == 0) { PMC = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            PMC = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            PMCdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            PMCre = result.Resul[i].fechac;
                        }
                        PMCcant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Swaging') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            swagingtime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            swagingtime = 3;
                        }
                        if (swaging == 0) { swaging = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            swaging = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            swagingdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            swagingre = result.Resul[i].fechac;
                        }
                        swagingcant++
                    }
                    if (result.Resul[i].Nombre === 'ADQ TTR') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            TTRtime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            TTRtime = 3;
                        }
                        if (TTR == 0) { TTR = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            TTR = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            TTRdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        } else {

                            //TTRdet += '<p >' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            TTRre = result.Resul[i].fechac;
                        }
                        TTRcant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Etna') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            Etnatime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            Etnatime = 3;
                        }
                        if (Etna == 0) { Etna = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            Etna = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            Etnadet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            Etnare = result.Resul[i].fechac;
                        }
                        Etnacant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Mckay') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            Mckaytime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            Mckaytime = 3;
                        }
                        if (Mckay == 0) { Mckay = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            Mckay = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            Mckaydet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            Mckayre = result.Resul[i].fechac;
                        }
                        Mckaycant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ Ajuste') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            Ajustetime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            Ajustetime = 3;
                        }
                        if (Ajuste == 0) { Ajuste = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            Ajuste = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            Ajustedet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            Ajustere = result.Resul[i].fechac;
                        }
                        Ajustecant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC01-10') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu01time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu01time = 3;
                        }
                        if (facu01 == 0) { facu01 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu01 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu01det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu01re = result.Resul[i].fechac;
                        }
                        facu01cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC11-20') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu02time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu02time = 3;
                        }
                        if (facu02 == 0) { facu02 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu02 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu02det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu02re = result.Resul[i].fechac;
                        }
                        facu02cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC21-28') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu03time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu03time = 3;
                        }
                        if (facu03 == 0) { facu03 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu03 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu03det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu03re = result.Resul[i].fechac;
                        }
                        facu03cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC29-40') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu04time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu04time = 3;
                        }
                        if (facu04 == 0) { facu04 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu04 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu04det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu04re = result.Resul[i].fechac;
                        }
                        facu04cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC41-50') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu05time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu05time = 3;
                        }
                        if (facu05 == 0) { facu05 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu05 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu05det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu05re = result.Resul[i].fechac;
                        }
                        facu05cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU TC51-60') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facu06time = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facu06time = 3;
                        }
                        if (facu06 == 0) { facu06 = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facu06 = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facu06det += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facu06re = result.Resul[i].fechac;
                        }
                        facu06cant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU SEA') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facuseatime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facuseatime = 3;
                        }
                        if (facusea == 0) { facusea = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facusea = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facuseadet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facuseare = result.Resul[i].fechac;
                        }
                        facuseacant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU FOSFATIZADO') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facufostime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facufostime = 3;
                        }
                        if (facufos == 0) { facufos = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facufos = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facufosdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facufosre = result.Resul[i].fechac;
                        }
                        facufoscant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ FACU CORTADORA') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            facucorttime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            facucorttime = 3;
                        }
                        if (facucort == 0) { facucort = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            facucort = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            facucortdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            facucortre = result.Resul[i].fechac;
                        }
                        facucortcant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ OCTG') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            OCTGtime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            OCTGtime = 3;
                        }
                        if (OCTG == 0) { OCTG = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            OCTG = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            OCTGdet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            OCTGre = result.Resul[i].fechac;
                        }
                        OCTGcant++;
                    }
                    if (result.Resul[i].Nombre === 'ADQ LABORATORIO') {
                        //valida el tiempo de reporte del servicio
                        if (result.Resul[i].Tiempore === 'RETRASO') {
                            Labotime = 1;
                        }
                        if (result.Resul[i].Tiempore === 'CAIDO') {
                            Labotime = 3;
                        }
                        if (Labo == 0) { Labo = 2 }
                        //valida si el servicio esta activo o no
                        if (result.Resul[i].Servdir === 'ERROR') {
                            Labo = 3;
                            toastr.error(result.Resul[i].Nombre + ' Servicio no activo: ' + result.Resul[i].Nombre_service, 'Info', { timeOut: 10000 });
                            Labodet += '<p style="color:Red !important">' + result.Resul[i].Nombre_service + ' - ' + result.Resul[i].Estadoser + '</p>';
                        }
                        if (result.Resul[i].fechac !== '-') {
                            Labore = result.Resul[i].fechac;
                        }
                        Labocant++;
                    }
                }
                
            } else {
                toastr.error('No hay Datos', 'Info', { timeOut: 10000 });
            }
            
            
            //validacion de lineas ok/no OK
            //slitter
            if (slittertime == 1) {
                document.getElementById("linea12").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Slitter ', 'Info', { timeOut: 10000 });
            } else if (slittertime == 3) {
                document.getElementById("linea12").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Slitter ', 'Info', { timeOut: 10000 });
            }
            else if (slitter == 2) {
                document.getElementById("linea12").style.backgroundColor = "#009900";
            }
            else if (slitter == 0) {
                document.getElementById("linea12").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Slitter ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea12").style.backgroundColor = "red"; }


            //linepipe
            if (linepipetime== 1) {
                document.getElementById("linea11").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Line Pipe ', 'Info', { timeOut: 10000 });
            } else if (linepipetime == 3) {
                document.getElementById("linea11").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Line Pipe ', 'Info', { timeOut: 10000 });
            }
            else if (linepipe == 2) {
                document.getElementById("linea11").style.backgroundColor = "#009900";
            }
            else if (linepipe == 0) {
                document.getElementById("linea11").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:LinePipe ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea11").style.backgroundColor = "red"; }


            //recalcado 2
            if (recalcado2time == 1) {
                document.getElementById("linea05").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Recalcado 2 ', 'Info', { timeOut: 10000 });
            } else if (recalcado2time == 3) {
                document.getElementById("linea05").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Recalcado 2 ', 'Info', { timeOut: 10000 });
            }
            else if (recalcado2 == 2) {
                document.getElementById("linea05").style.backgroundColor = "#009900";
            }
            else if (recalcado2 == 0) {
                document.getElementById("linea05").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Recalcado 2 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea05").style.backgroundColor = "red"; }


            //slotting
            if (slottingtime == 1) {
                document.getElementById("linea14").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Slotting ', 'Info', { timeOut: 10000 });
            } else if (slottingtime == 3) {
                document.getElementById("linea14").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Slotting ', 'Info', { timeOut: 10000 });
            }
            else if (slotting == 2) {
                document.getElementById("linea14").style.backgroundColor = "#009900";
            }
            else if (slotting == 0) {
                document.getElementById("linea14").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Slotting ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea14").style.backgroundColor = "red"; }

            //TubingPH2
            if (TubingPH2time == 1) {
                document.getElementById("linea07").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:TubingPH2 ', 'Info', { timeOut: 10000 });
            } else if (TubingPH2time == 3) {
                document.getElementById("linea07").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:TubingPH2 ', 'Info', { timeOut: 10000 });
            }
            else if (TubingPH2 == 2) {
                document.getElementById("linea07").style.backgroundColor = "#009900";
            }
            else if (TubingPH2 == 0) {
                document.getElementById("linea07").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Tubing PH2 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea07").style.backgroundColor = "red"; }


            //TubingPH4
            if (TubingPH4time == 1) {
                document.getElementById("linea007").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:TubingPH4 ', 'Info', { timeOut: 10000 });
            } else if (TubingPH4time == 3) {
                document.getElementById("linea007").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:TubingPH4 ', 'Info', { timeOut: 10000 });
            }
            else if (TubingPH4 == 2) {
                document.getElementById("linea007").style.backgroundColor = "#009900";
            }
            else if (TubingPH4 == 0) {
                document.getElementById("linea007").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Tubing PH4 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea007").style.backgroundColor = "red"; }


            //PMC
            if (PMCtime == 1) {
                document.getElementById("linea04").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:PMC ', 'Info', { timeOut: 10000 });
            } else if (PMCtime == 3) {
                document.getElementById("linea04").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:PMC ', 'Info', { timeOut: 10000 });
            }
            else if (PMC == 2) {
                document.getElementById("linea04").style.backgroundColor = "#009900";
            }
            else if (PMC == 0) {
                document.getElementById("linea04").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:PMC ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea04").style.backgroundColor = "red"; }


            //Swaging
            if (swagingtime == 1) {
                document.getElementById("linea15").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Swaging ', 'Info', { timeOut: 10000 });
            } else if (swagingtime == 3) {
                document.getElementById("linea15").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Swaging ', 'Info', { timeOut: 10000 });
            }
            else if (swaging == 2) {
                document.getElementById("linea15").style.backgroundColor = "#009900";
            }
            else if (swaging == 0) {
                document.getElementById("linea15").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Swaging ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea15").style.backgroundColor = "red"; }


            //TTR
            if (TTRtime == 1) {
                document.getElementById("linea01").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:TTR ', 'Info', { timeOut: 10000 });
            } else if (TTRtime == 3) {
                document.getElementById("linea01").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:TTR ', 'Info', { timeOut: 10000 });
            }
            else if (TTR == 2) {
                document.getElementById("linea01").style.backgroundColor = "#009900";
            }
            else if (TTR == 0) {
                document.getElementById("linea01").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:TTR ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea01").style.backgroundColor = "red"; }

            //Etna
            if (Etnatime == 1) {
                document.getElementById("linea09").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Etna ', 'Info', { timeOut: 10000 });
            } else if (Etnatime == 3) {
                document.getElementById("linea09").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Etna ', 'Info', { timeOut: 10000 });
            }
            else if (Etna == 2) {
                document.getElementById("linea09").style.backgroundColor = "#009900";
            }
            else if (Etna == 0) {
                document.getElementById("linea09").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Etna', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea09").style.backgroundColor = "red"; }


            //Mckay
            if (Mckaytime == 1) {
                document.getElementById("linea10").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:Mckay ', 'Info', { timeOut: 10000 });
            } else if (Mckaytime == 3) {
                document.getElementById("linea10").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:Mckay ', 'Info', { timeOut: 10000 });
            }
            else if (Mckay == 2) {
                document.getElementById("linea10").style.backgroundColor = "#009900";
            }
            else if (Mckay == 0) {
                document.getElementById("linea10").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Mckay', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea10").style.backgroundColor = "red"; }

            //Ajuste
            if (Ajustetime == 1) {
                document.getElementById("linea02").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:PMC ', 'Info', { timeOut: 10000 });
            } else if (Ajustetime == 3) {
                document.getElementById("linea02").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:PMC ', 'Info', { timeOut: 10000 });
            }
            else if (Ajuste == 2) {
                document.getElementById("linea02").style.backgroundColor = "#009900";
            }
            else if (Ajuste == 0) {
                document.getElementById("linea02").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Ajuste', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea02").style.backgroundColor = "red"; }


            //facu 01
            if (facu01time == 1) {
                document.getElementById("linea081").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC01-10 ', 'Info', { timeOut: 10000 });
            }
            else if (facu01time == 3) {
                document.getElementById("linea081").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC01-10 ', 'Info', { timeOut: 10000 });
            }
            else if (facu01 == 2) {
                document.getElementById("linea081").style.backgroundColor = "#009900";
            }
            else if (facu01 == 0) {
                document.getElementById("linea081").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC01-10 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea081").style.backgroundColor = "red"; }

            //facu 02
            if (facu02time == 1) {
                document.getElementById("linea082").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC11-20 ', 'Info', { timeOut: 10000 });
            }
            else if (facu02time == 3) {
                document.getElementById("linea082").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC11-20 ', 'Info', { timeOut: 10000 });
            }
            else if (facu02 == 2) {
                document.getElementById("linea082").style.backgroundColor = "#009900";
            }
            else if (facu02 == 0) {
                document.getElementById("linea082").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC11-20 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea082").style.backgroundColor = "red"; }

            //facu 03
            if (facu03time == 1) {
                document.getElementById("linea083").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC21-28 ', 'Info', { timeOut: 10000 });
            }
            else if (facu03time == 3) {
                document.getElementById("linea083").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC21-28 ', 'Info', { timeOut: 10000 });
            }
            else if (facu03 == 2) {
                document.getElementById("linea083").style.backgroundColor = "#009900";
            }
            else if (facu03 == 0) {
                document.getElementById("linea083").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC21-28 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea083").style.backgroundColor = "red"; }

            //facu 04
            if (facu04time == 1) {
                document.getElementById("linea084").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC29-40 ', 'Info', { timeOut: 10000 });
            }
            else if (facu04time == 3) {
                document.getElementById("linea084").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC29-40 ', 'Info', { timeOut: 10000 });
            }
            else if (facu04 == 2) {
                document.getElementById("linea084").style.backgroundColor = "#009900";
            }
            else if (facu04 == 0) {
                document.getElementById("linea084").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC29-40 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea084").style.backgroundColor = "red"; }

            //facu 05
            if (facu05time == 1) {
                document.getElementById("linea085").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC41-50 ', 'Info', { timeOut: 10000 });
            }
            else if (facu05time == 3) {
                document.getElementById("linea085").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC41-50 ', 'Info', { timeOut: 10000 });
            }
            else if (facu05 == 2) {
                document.getElementById("linea085").style.backgroundColor = "#009900";
            }
            else if (facu05 == 0) {
                document.getElementById("linea085").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC41-50 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea085").style.backgroundColor = "red"; }


            //facu 06
            if (facu06time == 1) {
                document.getElementById("linea086").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU TC51-60 ', 'Info', { timeOut: 10000 });
            }
            else if (facu06time == 3) {
                document.getElementById("linea086").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU TC51-60 ', 'Info', { timeOut: 10000 });
            }
            else if (facu06 == 2) {
                document.getElementById("linea086").style.backgroundColor = "#009900";
            }
            else if (facu06 == 0) {
                document.getElementById("linea086").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU TC51-60 ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea086").style.backgroundColor = "red"; }

            //facu SEA
            if (facuseatime == 1) {
                document.getElementById("linea087").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU SEA ', 'Info', { timeOut: 10000 });
            }
            else if (facuseatime == 3) {
                document.getElementById("linea087").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU SEA ', 'Info', { timeOut: 10000 });
            }
            else if (facusea == 2) {
                document.getElementById("linea087").style.backgroundColor = "#009900";
            }
            else if (facusea == 0) {
                document.getElementById("linea087").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU SEA ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea087").style.backgroundColor = "red"; }

            //facu FOSFATIZADO
            if (facufostime == 1) {
                document.getElementById("linea088").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU Fosfatizado ', 'Info', { timeOut: 10000 });
            }
            else if (facufostime == 3) {
                document.getElementById("linea088").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU Fosfatizado ', 'Info', { timeOut: 10000 });
            }
            else if (facufos == 2) {
                document.getElementById("linea088").style.backgroundColor = "#009900";
            }
            else if (facufos == 0) {
                document.getElementById("linea088").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU Fosfatizado  ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea088").style.backgroundColor = "red"; }


            //facu Cortadora
            if (facucorttime == 1) {
                document.getElementById("linea089").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:FACU Cortadora ', 'Info', { timeOut: 10000 });
            }
            else if (facucorttime == 3) {
                document.getElementById("linea089").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:FACU Cortadora ', 'Info', { timeOut: 10000 });
            }
            else if (facucort == 2) {
                document.getElementById("linea089").style.backgroundColor = "#009900";
            }
            else if (facucort == 0) {
                document.getElementById("linea089").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:FACU Cortadora ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea089").style.backgroundColor = "red"; }

            //OCTG
            if (OCTGtime == 1) {
                document.getElementById("linea03").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:OCTG ', 'Info', { timeOut: 10000 });
            }
            else if (OCTGtime == 3) {
                document.getElementById("linea03").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:OCTG ', 'Info', { timeOut: 10000 });
            }
            else if (OCTG == 2) {
                document.getElementById("linea03").style.backgroundColor = "#009900";
            }
            else if (OCTG == 0) {
                document.getElementById("linea03").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:OCTG ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea03").style.backgroundColor = "red"; }

            //Laboratorio
            if (Labotime == 1) {
                document.getElementById("linea101").style.backgroundColor = "Yellow"; toastr.error('Linea reporte retrazado Advertencia:OCTG ', 'Info', { timeOut: 10000 });
            }
            else if (Labotime == 3) {
                document.getElementById("linea101").style.backgroundColor = "red"; toastr.error('Linea reporte Caido Revisar:OCTG ', 'Info', { timeOut: 10000 });
            }
            else if (Labo == 2) {
                document.getElementById("linea101").style.backgroundColor = "#009900";
            }
            else if (Labo == 0) {
                document.getElementById("linea101").style.backgroundColor = "Orange"; toastr.error('Linea sin resultado:Laboratorio ', 'Info', { timeOut: 10000 });
            }
            else { document.getElementById("linea101").style.backgroundColor = "red"; }
            //carga detalle de tooltip
            dw_Tooltip.content_vars = {
               
                L01: {
               
                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios: ' + TTRcant + '</p><p >Ultimo Reporte: ' + TTRre + '</p>' + TTRdet + ' <a onclick="detalle_servicios(01)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L02: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + Ajustecant + '</p><p >Ultimo Reporte: ' + Ajustere + '</p>' + Ajustedet + ' <a onclick="detalle_servicios(02)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L03: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + OCTGcant + '</p><p >Ultimo Reporte: ' + OCTGre + '</p>' + OCTGdet + ' <a onclick="detalle_servicios(03)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L04: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + PMCcant + '</p><p >Ultimo Reporte: ' + PMCre + '</p>' + PMCdet + ' <a onclick="detalle_servicios(04)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L05: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + recalcado2cant + '</p><p >Ultimo Reporte: ' + recalcado2re + '</p>' + recalcado2det + ' <a onclick="detalle_servicios(05)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L07: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + TubingPH2cant + '</p><p >Ultimo Reporte: ' + TubingPH2re + '</p>' + TubingPH2det + ' <a onclick="detalle_servicios(07)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L007: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + TubingPH4cant + '</p><p >Ultimo Reporte: ' + TubingPH4re + '</p>' + TubingPH4det + ' <a onclick="detalle_servicios(007)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L081: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu01cant + '</p><p >Ultimo Reporte: ' + facu01re + '</p>' + facu01det + ' <a onclick="detalle_servicios(081)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L082: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu02cant + '</p><p >Ultimo Reporte: ' + facu02re + '</p>' + facu02det + ' <a onclick="detalle_servicios(082)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L083: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu03cant + '</p><p >Ultimo Reporte: ' + facu03re + '</p>' + facu03det + ' <a onclick="detalle_servicios(083)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L084: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu04cant + '</p><p >Ultimo Reporte: ' + facu04re + '</p>' + facu04det + ' <a onclick="detalle_servicios(084)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L085: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu05cant + '</p><p >Ultimo Reporte: ' + facu05re + '</p>' + facu05det + ' <a onclick="detalle_servicios(085)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L086: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facu06cant + '</p><p >Ultimo Reporte: ' + facu06re + '</p>' + facu06det + ' <a onclick="detalle_servicios(086)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L087: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facuseacant + '</p><p >Ultimo Reporte: ' + facuseare + '</p>' + facuseadet + ' <a onclick="detalle_servicios(087)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L088: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facufoscant + '</p><p >Ultimo Reporte: ' + facufosre + '</p>' + facufosdet + ' <a onclick="detalle_servicios(088)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L089: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + facucortcant + '</p><p >Ultimo Reporte: ' + facucortre + '</p>' + facucortdet + ' <a onclick="detalle_servicios(089)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L09: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + Etnacant + '</p><p >Ultimo Reporte: ' + Etnare + '</p>' + Etnadet + ' <a onclick="detalle_servicios(09)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L10: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + Mckaycant + '</p><p >Ultimo Reporte: ' + Mckayre + '</p>' + Mckaydet + ' <a onclick="detalle_servicios(10)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L11: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + linepipecant + '</p><p >Ultimo Reporte: ' + linepipere + '</p>' + linepipedet + ' <a onclick="detalle_servicios(11)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L12: {
               
                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + slittercant + '</p><p >Ultimo Reporte: ' + slittercre + '</p>' + slittercdet + ' <a onclick="detalle_servicios(12)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L14: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + slottingcant + '</p><p >Ultimo Reporte: ' + slottingre + '</p>' + slottingdet + ' <a onclick="detalle_servicios(14)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L15: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + swagingcant + '</p><p >Ultimo Reporte: ' + swagingre + '</p>' + swagingdet + ' <a onclick="detalle_servicios(15)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                },
                L101: {

                    txt: '<div class="form" style="background-color:#34495E  !important;color:white;border:solid;border-radius:10px"  > <p >Servicios:' + Labocant + '</p><p >Ultimo Reporte: ' + Labore + '</p>' + Labodet + ' <a onclick="detalle_servicios(101)"; >Detalles Aqui</a></div>',
                    wrapFn: dw_Tooltip.wrapTextByImage,
                    w: 380
                }
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}

function detalle_servicios(valor) {

    window.open('Mapa_monitoreo_detalles.aspx?Val=1&F1=1');
}

