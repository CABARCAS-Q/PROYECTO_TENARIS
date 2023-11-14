$(document).ready(function () {

    inicializarControles();

});
function inicializarControles() {

 

}
function cambio_pass() {

    //valida que hayan valores en los campos

    if ($("#passa").val() !== "" || $("#passn").val() !== "" || $("#passnr").val() !== "") {

        if ($("#passn").val() === $("#passnr").val()) {

            setData();

        } else {
            toastr.warning('Password nuevos no coinciden', 'Info', { timeOut: 5000 });
        }

    } else {

        toastr.warning('Campos Vacios Para la accion', 'Info', { timeOut: 5000 });
    }

  
}
function setData() {

    $.ajax({
        url: 'Cambio_clave.aspx/cambiar_pass',
        cache: false,
        data: JSON.stringify({ Passanterior: $("#passa").val(), Passnuevo: $("#passn").val() }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var result = JSON.parse(data.d);
            if (result.Resul === "-1") {

                toastr.error('No hay Sesion Activa,realize el login nuevamente' + result.error_mensaje, 'Info', { timeOut: 10000 });
            } else if (result.Resul==="-2") {

                $("#passa").val("");
                toastr.error('El password anterior es incorrecto,verifique', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "1") {

                $("#passa").val("");
                $("#passn").val("");
                $("#passnr").val("");
                toastr.success('Password actualizado con exito', 'Info', { timeOut: 10000 });

            } else if (result.Resul === "-3") {

                toastr.error('ERROR CONEXION o DB', 'Info', { timeOut: 10000 });
            } else {

                toastr.error('ERROR DESCONOCIDO CONEXION o DB', 'Info', { timeOut: 10000 });
            }
  
        },
        error: function (textStatus, e) { toastr.error('Error' + e, 'Info', { timeOut: 10000 });  }
    });
}