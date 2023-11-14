$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

    //carga info en lista
    cargar_tabla_personas(null);
    Detalle_anfa();
}
function lista_personal_anfa(codigo) {

    $('#table_personas').DataTable().destroy();

    $.ajax({
        url: 'ANFAR.aspx/lista_personal_anfa',
        cache: false,
        data: JSON.stringify({ idticket: codigo }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
                cargar_tabla_personas(result.Resul);
                toastr.success('Carga exitosa', 'Info', { timeOut: 5000 });
            } else {
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}
function Detalle_anfa() {

    var codigo = $("#codigobusqueda").val();
    console.log('codigo:' + codigo);

    $.ajax({
        url: 'ANFAR.aspx/Detalle_anfa',
        cache: false,
        data: JSON.stringify({ idticket: codigo }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Error != '-3') {

        
                $("#Codigo").val(result.Resul[0].Id_anfa);
                $("#Fechaem").val(result.Resul[0].fechanf);
                $("#idticket").val(codigo);
                $("#idlinea").val(result.Resul[0].Linea);
                $("#idmaquina").val(result.Resul[0].Maquina);
                $("#idfecha").val(result.Resul[0].Fechasol);
                $("#idtiempo").val(result.Resul[0].Tiempo);
                //$("#personal").val( result.Resul[0].Personal_apoyo);
           
                document.getElementById('quepaso').innerHTML = result.Resul[0].Que_paso;
                document.getElementById('causa').innerHTML = result.Resul[0].Causa;
                document.getElementById('solucion').innerHTML = result.Resul[0].Que_se_hizo;
                document.getElementById('analisis').innerHTML = result.Resul[0].Desarrollo;
                document.getElementById('acciones').innerHTML = result.Resul[0].Acciones;
                lista_personal_anfa(codigo);


                //detalle ticket
                var id = result.Resul[0].Id_anfa;
                if (result.Resul[0].Adjuntos !== 'Ninguno') {
                    detalle_adjuntos(id);
                } else {
                    document.getElementById('link').innerHTML = '';
                }

            } else {

                toastr.error('Error DB', 'Info', { timeOut: 10000 });
            }
            
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}
function cargar_tabla_personas(lstData) {
    var estado = '';

    try {
        $('#table_personas').DataTable().destroy();
        $('#table_personas').DataTable({
            paging: false,
            scrollY: "500px",
            scrollCollapse: true,
            ordering: true,
            info: false,
            searching: false,
            data: lstData !== null ? lstData : [],
            columns: [
                  { data: "ID" }
                , { data: "Nombre" }

            ]
        });
        //$('#tabla_resultados').find(".sorting_asc").removeClass("sorting_asc");
    } catch (e) {
        Command: toastr["error"]('Error en cargar_table_todas_sol():\n' + e.message, "error");
    }
}
function detalle_adjuntos(id) {

    document.getElementById('linkp').innerHTML = '';
    console.log('carga lista de imagenes');

    $.ajax({
        url: 'ANFAR.aspx/Detalle_archivos',
        cache: false,
        data: JSON.stringify({ Idanfa: id }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);

            for (var i = 0; i < result.Resul.length; i++) {
                var im = result.Resul[i].Id_adjunto;
                var des = result.Resul[i].Archivo;
                $('#linkp').append('<li><input id="' + im + '"  type="button" value="' + des + '" onclick="window_open2(' + im + ');return false;" ></input></li>');
                //$('#linkp').append('<li><input id="'+im+'" type="button" value="' + result.Resul[i].Archivo + '" onclick="onDownloadLinkClick("'+ result.Resul[i].Archivo + '")" > </input> </li>');

            }


        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });

}

function window_open2(im) {
    console.log('valor seleccionado:' + im);
    //downloadLink(im);
    descarga_archivo(im);
}
function descarga_archivo(id){
    id = '2018_07_26_20_40_12_sea.png';
    console.log('valor seleccionado:' + id);
    var url = 'D:/Users/cgomez/Documents/Visual%20Studio%202012/Projects/Helpdesk_Auto/Helpdesk_Auto/Archivos/' + id;
    console.log('valor url:' + url);
    var enlace = url;
    var titulo = 'ANFAR' + id;
    window.open(enlace, titulo, "width=950, height=900,scrollbars=1");
}
function downloadLink(id) {

    id = '2018_07_26_20_40_12_sea.png';
    console.log('valor seleccionado:' + id);
    var ajaxOptions = {
        url: 'D:/Users/cgomez/Documents/Visual%20Studio%202012/Projects/Helpdesk_Auto/Helpdesk_Auto/Archivos/' + id
    }

    var res = $.ajax(ajaxOptions);

    function onAjaxDone(data) {
        
    }

    function onAjaxFail() {

    }

    res.done(onAjaxDone).fail(onAjaxFail);
   

}