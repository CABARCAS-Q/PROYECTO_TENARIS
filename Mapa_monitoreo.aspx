<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Mapa_monitoreo.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Mapa_monitoreo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>Mapa Monitoreo</title>
   
    <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />

    <script src="../lib/jquery-1.11.1.min.js" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/theme.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/premium.css" />
     <link rel="stylesheet" type="text/css" href="../lib/style.css" />


     <script src="../lib/bootstrap/js/bootstrap.js"></script>
        <link href="../Styles/toasts.min.css" rel="stylesheet"/>
    <script src="../Styles/toastr.min.js"></script>
     <script src="../Js_codigos/Mapa_monitoreo.js"></script>

    <script src="../Js/dw_event.js" type="text/javascript"></script>
    <script src="../Js/dw_viewport.js" type="text/javascript"></script>
    <script src="../Js/dw_tooltip.js" type="text/javascript"></script>
    <script src="../Js/dw_tooltip_aux.js" type="text/javascript"></script>

</head>
<body class=" theme-blue">
    <style>
     div{
     font-family:Tahoma;
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
    </style>
    <script type="text/javascript">
        $(function () {
            var uls = $('.sidebar-nav > ul > *').clone();
            uls.addClass('visible-xs');
            $('#main-menu').append(uls.clone());
        });
    </script>
    <form id="form1" runat="server">
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="" href="index.html"><span class="navbar-brand"><span class="fa fa-paper-plane"></span> Sistema Gestion Soporte - SGS</span></a></div>

        <div class="navbar-collapse collapse" style="height: 1px;">
          <ul id="main-menu" class="nav navbar-nav navbar-right">
            <li class="dropdown hidden-xs">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-user padding-right-small" style="position:relative;top: 3px;"></span> 
                    <asp:Label ID="user" Style="color:white !important" runat="server" Text="" ></asp:Label>
                    <i class="fa fa-caret-down"></i>
                </a>

              <ul class="dropdown-menu">
                <li><a tabindex="-1" href="Login.aspx">Logout</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
       

        
        <div class="header">
                    

                                <h1 class="page-title">Monitor</h1>
                      

        </div>
        <div class="main-content">
             
            <div class="wrapper wrapper-content animated fadeInRight" style="background:url(../Imagenes/mapa.png) no-repeat center center fixed;background-size:auto ">
                 <button id="linea12" name="12" runat="server"  style="text-align:left;position:absolute;left:1073px;top:392px;" class="showTip L12 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="Slitter" ><i id="I1" class="" style="color:red !important;"></i></button>

                  <button id="linea11" name="11" runat="server"  style="text-align:left;position:absolute;left:1205px;top:302px;" class="showTip L11 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="Line Pipe" ><i id="I2" class="" style="color:red !important;"></i></button>

                <button id="linea05" name="05" runat="server"  style="text-align:left;position:absolute;left:860px;top:202px;" class="showTip L05 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="left" title="Recalcado" ><i id="I3" class="" style="color:red !important;"></i></button>

                <button id="linea14" name="14" runat="server"  style="text-align:left;position:absolute;left:1205px;top:222px;" class="showTip L14 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="Slotting" ><i id="I4" class="" style="color:red !important;"></i></button>

                    <button id="linea07" name="07" runat="server"  style="text-align:left;position:absolute;left:978px;top:317px;" class="showTip L07 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="left" title="Tubing PH2" ><i id="I5" class="" style="color:red !important;"></i></button>

                    <button id="linea007" name="007" runat="server"  style="text-align:left;position:absolute;left:978px;top:347px;" class="showTip L007 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="left" title="Tubing PH4" ><i id="I6" class="" style="color:red !important;"></i></button>

                 <button id="linea04" name="04" runat="server"  style="text-align:left;position:absolute;left:860px;top:317px;" class="showTip L04 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="left" title="PMC" ><i id="I7" class="" style="color:red !important;"></i></button>

                <button id="linea15" name="15" runat="server"  style="text-align:left;position:absolute;left:585px;top:337px;" class="showTip L15 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="Swaging" ><i id="I8" class="" style="color:red !important;"></i></button>
                <button id="linea01" name="01" runat="server"  style="text-align:left;position:absolute;left:405px;top:410px;" class="showTip L01 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="TTR" ><i id="I9" class="" style="color:red !important;"></i></button>

                <button id="linea09" name="09" runat="server"  style="text-align:left;position:absolute;left:1169px;top:360px;display:none" class="showTip L09 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="Etna" ><i id="I10" class="" style="color:red !important;"></i></button>

                <button id="linea10" name="10" runat="server"  style="text-align:left;position:absolute;left:1132px;top:360px;" class="showTip L10 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="left" title="Mckay" ><i id="I11" class="" style="color:red !important;"></i></button>

                  <button id="linea101" name="101" runat="server"  style="text-align:left;position:absolute;left:1205px;top:392px;" class="showTip L101 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="Laboratorio" ><i id="I23" class="" style="color:red !important;"></i></button>

                 <button id="linea02" name="02" runat="server"  style="text-align:left;position:absolute;left:585px;top:410px;" class="showTip L02 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="Ajuste" ><i id="I12" class="" style="color:red !important;"></i></button>

                <button id="linea081" name="081" runat="server"  style="text-align:left;position:absolute;left:1038px;top:382px;" class="showTip L081 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="left" title="FACU TC01-10" ><i id="I13" class="" style="color:red !important;"></i></button>

                  <button id="linea082" name="082" runat="server"  style="text-align:left;position:absolute;left:1038px;top:328px;" class="showTip L082 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="FACU TC11-20" ><i id="I14" class="" style="color:red !important;"></i></button>
                <button id="linea083" name="083" runat="server"  style="text-align:left;position:absolute;left:1038px;top:294px;" class="showTip L083 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="FACU TC21-28" ><i id="I15" class="" style="color:red !important;"></i></button>

                <button id="linea084" name="084" runat="server"  style="text-align:left;position:absolute;left:978px;top:270px;" class="showTip L084 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="left" title="FACU TC29-40" ><i id="I16" class="" style="color:red !important;"></i></button>

                  <button id="linea085" name="085" runat="server"  style="text-align:left;position:absolute;left:978px;top:238px;" class="showTip L085 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="left" title="FACU TC41-50" ><i id="I17" class="" style="color:red !important;"></i></button>

                <button id="linea086" name="086" runat="server"  style="text-align:left;position:absolute;left:978px;top:202px;" class="showTip L086 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="FACU TC51-60" ><i id="I18" class="" style="color:red !important;"></i></button>

                    <button id="linea087" name="087" runat="server"  style="text-align:left;position:absolute;left:1038px;top:260px;" class="showTip L087 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="FACU SEA" ><i id="I19" class="" style="color:red !important;"></i></button>

                  <button id="linea088" name="088" runat="server"  style="text-align:left;position:absolute;left:1038px;top:228px;" class="showTip L088 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="right" title="FACU FOSFATIZADO" ><i id="I20" class="" style="color:red !important;"></i></button>

                <button id="linea089" name="089" runat="server"  style="text-align:left;position:absolute;left:928px;top:202px;" class="showTip L089 btn btn-circle" type="button"  data-toggle="tooltip" data-placement="top" title="FACU CORTADORAS" ><i id="I21" class="" style="color:red !important;"></i></button>

                <button id="linea03" name="03" runat="server"  style="text-align:left;position:absolute;left:485px;top:337px;" class="showTip L03 btn btn-circle red-tooltip" type="button"  data-toggle="tooltip" data-placement="right" title="OCTG" ><i id="I22" class="" style="color:red !important;"></i></button>


            <div class="form"   >

                 
                


                
            
                    <div class="form-horizontal">
                          <div class="form-group">
                            <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                              <br/>
                          </div>
                         <div class="form-group">
                            <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                              <br/>
                          </div>
                          <div class="form-group">
                            <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                              <br/>
                          </div>
                         <div class="form-group">
                            <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                             <br/>
                          </div>
                         <div class="form-group">
                              
                              <br/>
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
    <script>
        function crearNoty(sMensaje, sTipo, sLayout, sLabelOk, sLabelCancel, sNombreFuncion, objJsonParametro, bModal) {
            noty({
                text: sMensaje // Testo que se mostrara en el mensaje
                , layout: sLayout ? sLayout : 'topRight'// ubicación en la ventana
                , type: sTipo ? sTipo : "warning"//'success' //Tipo de alert 
                , nombreFuncion: sNombreFuncion //para Evento de confirmacion
                , objJsonParametro: objJsonParametro
                , modal: (bModal ? bModal : ((sTipo !== 'confirm') ? false : true))
                , buttons: ((sTipo != 'confirm') ? false : true)
                , closeWith: ['click'] // acciones de cerrado
                , timeout: 5000 // Duración del noty 1000 -> 1 seg
                , animation: {
                    open: 'animated flipInX', // Animate.css class names
                    close: 'animated flipOutX', // Animate.css class names
                    easing: 'swing', // unavailable - no need
                    speed: 500 // unavailable - no need
                }
            });
        }
        $(document).ready(function () {
            $("button").tooltip();
        });
</script>
<script type="text/javascript">

    


</script>

</html>
