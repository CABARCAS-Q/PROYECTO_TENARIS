<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Reportes_turnos.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Reportes_turnos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>reportes turnos</title>

    <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />

    <link rel="stylesheet" href="../Styles/jquery-ui.css" />
    <script src="../lib/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../lib/jquery-ui.js" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/theme.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/premium.css" />

     <script src="../lib/bootstrap/js/bootstrap.js"></script>
     <link href="../Styles/toasts.min.css" rel="stylesheet"/>
     <script src="../Styles/toastr.min.js"></script>

    
 
    <script type="text/javascript" src="../lib/DataTables/datatables.min.js"></script>
     <link rel="stylesheet" type="text/css" href="../lib/DataTables/datatables.min.css"/>
     <!-- dateranger priker -->
   
    <script type="text/javascript" src="../lib/moment.min.js"></script>
    <script type="text/javascript" src="../lib/daterangepicker.js"></script>
    <script type="text/javascript" src="../lib/jquery.noty.packaged.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../Styles/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/Style.css" />
    

    <link rel="stylesheet" type="text/css" href="../Styles/jquery-confirm.min..css" />
    <script type="text/javascript" src="../Styles/jquery-confirm.min.js"></script>

    <script src="../Js_codigos/Reportes_turnos.js"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/Chat.css" />
   

</head>
<body class=" theme-blue">
    
    <style>
     div{
     font-family:Tahoma;
     }
    #modal {
	position: absolute;
	top: 0%;
	left: 0%;
	width: 1100px;
	height: 600px;
	margin: -100px 0 0 -150px;
	background: #fff;
    border: 1px solid #ccc;
	z-index: 2;
    display: none;
    }

#close {
	position: absolute;
	font-weight: bold;
	top: 0.5em;
	right: 0.5em;
    color: #000;
    text-decoration: none;
}

#modal p {
	padding: 1em;
	margin: 0;
	line-height: 1.4;
	font-size: 1.2em;
}

#overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: #666;
	z-index: 1;
  display: none;
  opacity: 0.5;
}
    </style>
     <script type="text/javascript">
         $(function () {
             var match = document.cookie.match(new RegExp('color=([^;]+)'));
             if (match) var color = match[1];
             if (color) {
                 $('body').removeClass(function (index, css) {
                     return (css.match(/\btheme-\S+/g) || []).join(' ')
                 })
                 $('body').addClass('theme-' + color);
             }
         });
    </script>
    <style type="text/css">
        #line-chart {
            height:300px;
            width:800px;
            margin: 0px auto;
            margin-top: 1em;
        }
        .navbar-default .navbar-brand, .navbar-default .navbar-brand:hover { 
            color: #fff;
        }
        #form-horizontal {
  padding: 3px 10px;
  border: PowderBlue 5px solid;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
    </style>
    <script type="text/javascript">
        $(function () {
            var uls = $('.sidebar-nav > ul > *').clone();
            uls.addClass('visible-xs');
            $('#main-menu').append(uls.clone());
        });
    </script>

    <form id="form1" runat="server">
        <input id="codigobusqueda" type="hidden" runat="server" />
        <input id="bfechaini1" type="hidden" runat="server" />
        <input id="bfechafin2" type="hidden" runat="server" />
        <input id="bfiltro" type="hidden" runat="server" />
        <input id="blinea" type="hidden" runat="server" />
        <input id="busuario" type="hidden" runat="server" />
        <input id="btiposol" type="hidden" runat="server" />
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="" href="index.html"><span class="navbar-brand"><span class="fa fa-paper-plane"></span> Sistema Gestion Soporte - SGS</span></a></div>

       
      </div>

      

    <div >
        <div class="header">
                    

                                <h1 class="page-title">Reporte Turno -
                                Fecha: <label runat="server" id="fechat" >-</label>
                                Turno: <label runat="server" id="turnos" >-</label>
                                </h1>
                      

        </div>
         <div class="main-content">
             

             <div class="row">
               
                <div class="col-sm-12 col-md-12">
                    <div class="panel panel-default">
                    <div class="form">
                        
                        <!--<div class="form-horizontal">
                              <div class="form-group">
                              </div>
                              <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Codigo Solicitud</label></label>
                                    <div class="col-sm-4">      
                                        <input type ="text" id="Codigo" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="prueba" />  
                               
                                    </div>
                              </div>  
                              <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha Solicitud</label></label>
                                    <div class="col-sm-4">      
                                        <input type ="text" id="Text1" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="fechasolprueba" />  
                               
                                    </div>
                              </div>  
                              <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha Ini/Fin Sol</label></label>
                                    <div class="col-sm-3">      
                                        <input type ="text" id="Text2" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="fechainiprueba" />  
                               
                                    </div>
                                    <div class="col-sm-3">      
                                        <input type ="text" id="Text3" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="fechafinprueba" />  
                               
                                    </div>
                              </div> 
                              <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Usuario Solicitud</label></label>
                                    <div class="col-sm-4">      
                                        <input type ="text" id="Text4" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="Usuario_sol" />  
                               
                                    </div>
                              </div> 
                              <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Linea</label></label>
                                    <div class="col-sm-2">      
                                        <input type ="text" id="Text5" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="Linea" />  
                               
                                    </div>
                                  <label for="nombrep" class="col-sm-1 control-label"><label  style="color:black; font-size: 14px">Maquina</label></label>
                                    <div class="col-sm-2">      
                                        <input type ="text" id="Text6" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="Maquina" />  
                               
                                    </div>
                              </div> 
                            <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Estado Solicitud</label></label>
                                    <div class="col-sm-4">      
                                        <input type ="text" id="Text7" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="Estado_sol" />  
                               
                                    </div>
                              </div>
                            <div class="form-group">
                                  <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Usuario Helpdesk</label></label>
                                    <div class="col-sm-4">      
                                        <input type ="text" id="Text8" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" value="Usuario_help" />  
                               
                                    </div>
                              </div>
                            <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solicitud</label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="Des_soli" rows="10" maxlength="5000" cols="83"></textarea>
                                        </div>
                                    </div>  
                            <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solucion</label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="Des_sol" rows="10" maxlength="5000" cols="83"></textarea>
                                        </div>
                                    </div> 
                            <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Descripcion Solucion Tecnica</label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="Des_solt" rows="10" maxlength="5000" cols="83"></textarea>
                                        </div>
                                    </div> 
                        </div>-->
                        <div id="consulta"></div>

                     </div>
                    </div>
                </div>
               
               
            </div>

             <footer>
               

           
                <p class="pull-right"> by <a >Automatizacion</a></p>
                <p>© 2019 <a >Tenaris Tubocaribe</a></p>
            </footer>

          </div>
        </div>

 </form>

   
   
</body>
     <script type="text/javascript">
         $("[rel=tooltip]").tooltip();
         $(function () {
             $('.demo-cancel-click').click(function () { return false; });
         });
    </script>
</html>
