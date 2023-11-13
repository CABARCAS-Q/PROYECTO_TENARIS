<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ANFAR.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.ANFAR" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
     <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>ANFA Help Desk</title>

       <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />

    <link rel="stylesheet" href="../Styles/jquery-ui.css" />
    <script src="../lib/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../lib/jquery-ui.js" type="text/javascript"></script>
    <script src="../Script/jquery.min.js" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/theme.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/premium.css" />

    <script src="../lib/bootstrap/js/bootstrap.js"></script>
    <link href="../Styles/toasts.min.css" rel="stylesheet"/>
    <script src="../Styles/toastr.min.js"></script>

    <link rel="stylesheet" type="text/css" href="../lib/DataTables/datatables.min.css"/>
    <script type="text/javascript" src="../lib/DataTables/datatables.min.js"></script>
        <!-- dateranger priker -->
    <script type="text/javascript" src="../lib/moment.min.js"></script>
    <script type="text/javascript" src="../lib/daterangepicker.js"></script>
    <script type="text/javascript" src="../lib/jquery.noty.packaged.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../Styles/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/Style.css" />

    <link rel="stylesheet" type="text/css" href="../Styles/jquery-confirm.min..css" />
    <script type="text/javascript" src="../Styles/jquery-confirm.min.js"></script>
     <script src="../Js_codigos/ANFAR.js"></script>
</head>
<body class=" theme-blue">
    <style>
     div{
     font-family:Tahoma;
     }
        html {
            overflow-x:hidden;
            overflow-y:auto;
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
        textarea {
    resize: none;
}
        #line-chart {
            height:300px;
            width:800px;
            margin: 0px auto;
            margin-top: 1em;
        }
        .navbar-default .navbar-brand, .navbar-default .navbar-brand:hover { 
            color: #fff;
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
      

   
        <div class="header">
                    
            <input type="hidden" id="fechasistema" runat="server" />
                                <h1 class="page-title">ANALISIS DE FALLA</h1>
                      

        </div>
         <div class="main-content">

             <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="form">
                            <div class="form-horizontal">
                                    <div class="form-group">
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Codigo ANFA</label></label>
                                    <div class="col-sm-6">      
                                        <input type ="text" id="Codigo" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder="Codigo" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha Emision</label></label>
                                    <div class="col-sm-6">      
                                        <input type ="text" id="Fechaem" autofocus="autofocus" maxlength="10" disabled="disabled"  class="form-controll form-control"  placeholder"fecha Emicion" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-6">   
                                    <center><h2 class="page-title">I. DATOS INICIALES</h2></center>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Codigo Solicitud :</label></label>
                                    <div class="col-sm-6">  
                                        
                                      
                                        <input type ="text" id="idticket" autofocus="autofocus" maxlength="12"  onkeypress="return justNumbers(event)"   class="form-controll form-control"  placeholder="Solicitud" readonly="readonly" />  
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Linea :</label></label>
                                    <div class="col-sm-6">    
                                          
                                        <input type ="text" id="idlinea" autofocus="autofocus" maxlength="30" disabled="disabled" class="form-controll form-control"  placeholder="Linea" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Maquina :</label></label>
                                    <div class="col-sm-6">      
                                        <input type ="text" id="idmaquina" autofocus="autofocus" maxlength="30" disabled="disabled"  class="form-controll form-control"  placeholder="Maquina" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Fecha :</label></label>
                                    <div class="col-sm-6">      
                                        <input type ="text" id="idfecha" autofocus="autofocus" maxlength="30" disabled="disabled"  class="form-controll form-control"  placeholder="Fecha" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Tiempo de Parada :</label></label>
                                    <div class="col-sm-6">      
                                        <input type ="text" id="idtiempo" autofocus="autofocus" maxlength="30" disabled="disabled"  class="form-controll form-control"  placeholder="Tiempo" />  
                               
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Personal que apoyo :</label></label>
                                     <div class="col-sm-6">  
                                        <table id="table_personas" class="table table-bordered">
                                            <thead>
                                            <tr>
                                              <th class="idsDeclarados" style="width: 20%;">Codigo</th>
                                              <th style="width: 80%;">Nombre</th>
                                            </tr>
                                           </thead>
                                           <tfoot>
                                           </tfoot>

                                        </table>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-2">  
                                    </div>
                                    <div class="col-sm-6">   
                                    <h2 class="page-title">II. QUE PASO</h2>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px"></label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="quepaso" rows="10" maxlength="5000" cols="83" class="form-controll form-control" readonly="readonly" ></textarea>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-2">  
                                    </div>
                                    <div class="col-sm-6">   
                                    <h2 class="page-title">III. CAUSA DE LA FALLA</h2>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px"></label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="causa" rows="10" maxlength="5000" cols="83" class="form-controll form-control" readonly="readonly" ></textarea>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-2">  
                                    </div>
                                    <div class="col-sm-6">   
                                    <h2 class="page-title">IV. QUE SE HIZO ( Correcion de emergencia)</h2>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px"></label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="solucion" rows="10" maxlength="5000" cols="83" class="form-controll form-control" readonly="readonly" ></textarea>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-2">  
                                    </div>
                                    <div class="col-sm-6">   
                                    <h2 class="page-title">V. DESARROLLO DEL ANALISIS</h2>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px"></label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="analisis" rows="10" maxlength="5000" cols="83" class="form-controll form-control" readonly="readonly" ></textarea>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-2">  
                                    </div>
                                    <div class="col-sm-6">   
                                    <h2 class="page-title">VI. ACCIONES PARA EVITAR SU REPETICION</h2>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px"></label></label>
                                        <div class="col-sm-6"> 
                                        <textarea id="acciones" rows="10" maxlength="5000" cols="83" class="form-controll form-control" readonly="readonly" ></textarea>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <label for="nombrep" class="col-sm-2 control-label"><label  style="color:black; font-size: 14px">Archivos Adjuntos :</label></label>
                                    <div class="col-sm-6">      
                                    <label id="idadjuntosp" ></label>
                                    <div id="linkp"></div>
                                    </div>
                                    </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             <footer>
               

           
                <p class="pull-right"> by <a >Automatizacion</a></p>
                <p>© 2019 <a >Tenaris Tubocaribe</a></p>
            </footer>

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

