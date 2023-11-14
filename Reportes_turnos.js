$(document).ready(function () {

    inicializarControles();


});
function inicializarControles() {

    //carga info en lista
    var dfecha='';
    var dturno='';
    console.log('fecha:' + document.getElementById("fechat").innerHTML);
    console.log('turno:' + document.getElementById("turnos").innerHTML);
    dfecha = document.getElementById("fechat").innerHTML;
    dturno = document.getElementById("turnos").innerHTML;
    lista_solicitudes_todas(dfecha,dturno);
}
function lista_solicitudes_todas(fech,tur) {

   

    $.ajax({
        url: 'Reportes_turnos.aspx/lista_solicitudes_auto',
        cache: false,
        data: JSON.stringify({ fecha: fech, turno:tur}),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            //console.log(result.IsCreated);
            if (result.IsCreated == '1') {
  
                
                //detalle info
                for (var i = 0; i < result.Resul.length; i++) {
                    // $("#mlistamot").append('<option  value=' + result.Resul[i].Abrev + '>' + result.Resul[i].Descripcion + '</option>');
                    console.log('valor:' + result.Resul[i].Id_solicitud)
                    $('#consulta').append('<div class="form-horizontal" Style="padding: 3px 10px;border: PowderBlue 5px solid;border-top-left-radius: 20px;border-bottom-right-radius: 20px;"><div class="form-group"></div><div class="form-group"></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Codigo Solicitud</label></label><div class="col-sm-4"><input type ="text" id="Codigo" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Id_solicitud + '" /></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha Solicitud</label></label> <div class="col-sm-4"> <input type ="text" id="Text1" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Fecha_sol + '" /></div></div>  <div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha Ini/Fin Sol</label></label><div class="col-sm-3">   <input type ="text" id="Text2" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Fecha_ini + '" /></div><div class="col-sm-3"> <input type ="text" id="Text3" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Fecha_fin + '" /></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Usuario Solicitud</label></label><div class="col-sm-4"><input type ="text" id="Text4" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].user_sol + '" /> </div></div> <div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Linea</label></label><div class="col-sm-2"><input type ="text" id="Text5" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Linea + '" /> </div><label for="nombrep" class="col-sm-1 control-label"><label  style="color:black; font-size: 14px">Maquina</label></label><div class="col-sm-2"><input type ="text" id="Text6" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Maquina + '" /> </div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Estado Solicitud</label></label><div class="col-sm-4">  <input type ="text" id="Text7" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].Solicitud + '" /></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Usuario Helpdesk</label></label><div class="col-sm-4"><input type ="text" id="Text8" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="' + result.Resul[i].user_help + '" /></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solicitud</label></label><div class="col-sm-6"><textarea id="Des_soli" rows="10" maxlength="500000" cols="83" readonly="readonly" >' + result.Resul[i].Descripcion_solicitud + '</textarea></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solucion</label></label><div class="col-sm-6"><textarea id="Des_sol" rows="10" maxlength="500000" cols="83" readonly="readonly" >' + result.Resul[i].Descripcion_solucion + '</textarea></div></div><div class="form-group"><label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solucion Tecnica</label></label><div class="col-sm-6"><textarea id="Des_solt" rows="10" maxlength="500000" cols="83" readonly="readonly" >' + result.Resul[i].Descripcion_solucion_tecnica + '</textarea></div></div>   </div>');
                }
                console.log('termina carga');

            } else {
                //document.getElementById('TS').innerHTML = '0';
                toastr.error('No hay Sesion Activa,realize el login nuevamente', 'Info', { timeOut: 10000 });
            }

        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 }); }
    });
}