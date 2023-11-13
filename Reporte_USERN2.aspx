<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Reporte_USERN2.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Reporte_USERN2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
 <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>Reporte Usuarios N2</title>

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

    <script src="../Js_codigos/Reporte_USERN2.js"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/Chat.css" />
     <script type="text/javascript" src="../lib/highcharts.js"></script>
   

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
      #Div1 {
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
#close2 {
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
#Div1 p {
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
         <input id="fechabusqueda1" type="hidden" runat="server" />
         <input id="fechabusqueda2" type="hidden" runat="server" />
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

       <div class="sidebar-nav">
          <ul>
               <li id="menu1" style="display:none" runat="server"><a href="#" data-target=".legal-menu" class="nav-header collapsed" data-toggle="collapse">
                   <i class="fa fa-fw fa-share-square-o"></i>Solicitudes<i class="fa fa-collapse"></i></a>
               </li>
               <li id="menu1_1" style="display:none" runat="server">
               <ul class="legal-menu nav nav-list collapse">
                        <li  id="Li1" style="display: none"  runat="server" >
                            <a id="A1" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label1" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                        <li id="Li2" style="display: none" runat="server" >
                            <a id="A2" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label2" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li3" style="display: none" runat="server" >
                            <a id="A3" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label3" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li4" style="display: none" runat="server" >
                            <a id="A4" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label4" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li5" style="display: none" runat="server" >
                            <a id="A5" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label5" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li6" style="display: none" runat="server" >
                            <a id="A6" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label6" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li7" style="display: none" runat="server" >
                            <a id="A7" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label7" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li8" style="display: none" runat="server" >
                            <a id="A8" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label8" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li9" style="display: none" runat="server" >
                            <a id="A9" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label9" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>

                        <li id="Li10" style="display: none" runat="server" >
                            <a id="A10" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label10" style="display: block !important" runat="server" Text="" ></asp:Label></label>

                            </a>
                        </li>
               </ul>
               </li>

               <li id="menu2" style="display:none" runat="server"><a href="#" data-target=".legal-menu2" class="nav-header collapsed" data-toggle="collapse">
                   <i class="fa fa-fw fa-group"></i>Gestiones Solicitudes<i class="fa fa-collapse"></i></a>
               </li>
               <li id="menu2_2" style="display:none" runat="server">
               <ul class="legal-menu2 nav nav-list collapse">
                        <li  id="Li11" style="display: none"  runat="server" >
                            <a id="A11" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label11" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                        
                        <li  id="Li12" style="display: none"  runat="server" >
                            <a id="A12" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label12" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li13" style="display: none"  runat="server" >
                            <a id="A13" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label13" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                       
                        <li  id="Li14" style="display: none"  runat="server" >
                            <a id="A14" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label14" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li15" style="display: none"  runat="server" >
                            <a id="A15" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label15" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li16" style="display: none"  runat="server" >
                            <a id="A16" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label16" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li17" style="display: none"  runat="server" >
                            <a id="A17" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label17" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li18" style="display: none"  runat="server" >
                            <a id="A18" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label18" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li19" style="display: none"  runat="server" >
                            <a id="A19" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label19" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li20" style="display: none"  runat="server" >
                            <a id="A20" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label20" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
               </ul>
               </li>

               <li id="menu3" style="display:none" runat="server"><a href="#" data-target=".legal-menu3" class="nav-header collapsed" data-toggle="collapse">
                   <i class="fa fa-fw fa-bar-chart-o"></i>Reportes Solicitudes<i class="fa fa-collapse"></i></a>
               </li>
               <li id="menu3_3" style="display:none" runat="server">
               <ul class="legal-menu3 nav nav-list collapse">
                        <li  id="Li21" style="display: none"  runat="server" >
                            <a id="A21" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label21" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                        
                        <li  id="Li22" style="display: none"  runat="server" >
                            <a id="A22" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label22" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li23" style="display: none"  runat="server" >
                            <a id="A23" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label23" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                       
                        <li  id="Li24" style="display: none"  runat="server" >
                            <a id="A24" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label24" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li25" style="display: none"  runat="server" >
                            <a id="A25" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label25" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li26" style="display: none"  runat="server" >
                            <a id="A26" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label26" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li27" style="display: none"  runat="server" >
                            <a id="A27" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label27" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li28" style="display: none"  runat="server" >
                            <a id="A28" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label28" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li29" style="display: none"  runat="server" >
                            <a id="A29" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label29" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li30" style="display: none"  runat="server" >
                            <a id="A30" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label30" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
               </ul>
               </li>

               <li id="menu4" style="display:none" runat="server"><a href="#" data-target=".legal-menu4" class="nav-header collapsed" data-toggle="collapse">
                   <i class="fa fa-fw fa-gears"></i>Configuraciones<i class="fa fa-collapse"></i></a>
               </li>
               <li id="menu4_4" style="display:none" runat="server">
               <ul class="legal-menu4 nav nav-list collapse">
                        <li  id="Li31" style="display: none"  runat="server" >
                            <a id="A31" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label31" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                        
                        <li  id="Li32" style="display: none"  runat="server" >
                            <a id="A32" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label32" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li33" style="display: none"  runat="server" >
                            <a id="A33" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label33" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                       
                        <li  id="Li34" style="display: none"  runat="server" >
                            <a id="A34" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label34" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li35" style="display: none"  runat="server" >
                            <a id="A35" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label35" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li36" style="display: none"  runat="server" >
                            <a id="A36" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label36" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li37" style="display: none"  runat="server" >
                            <a id="A37" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label37" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li38" style="display: none"  runat="server" >
                            <a id="A38" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label38" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li39" style="display: none"  runat="server" >
                            <a id="A39" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label39" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li40" style="display: none"  runat="server" >
                            <a id="A40" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label40" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
               </ul>
               </li>

               <li id="menu5" style="display:none" runat="server"><a href="#" data-target=".legal-menu5" class="nav-header collapsed" data-toggle="collapse">
                   <i class="fa fa-fw fa-bars"></i>Dashboard<i class="fa fa-collapse"></i></a>
               </li>
               <li id="menu5_5" style="display:none" runat="server">
               <ul class="legal-menu5 nav nav-list collapse">
                        <li  id="Li41" style="display: none"  runat="server" >
                            <a id="A41" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label41" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                        
                        <li  id="Li42" style="display: none"  runat="server" >
                            <a id="A42" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label42" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li43" style="display: none"  runat="server" >
                            <a id="A43" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label43" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
                       
                        <li  id="Li44" style="display: none" 
                            runat="server" >
                            <a id="A44" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label44" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li45" style="display: none"  runat="server" >
                            <a id="A45" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label45" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li46" style="display: none"  runat="server" >
                            <a id="A46" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label46" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li47" style="display: none"  runat="server" >
                            <a id="A47" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label47" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li48" style="display: none"  runat="server" >
                            <a id="A48" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label48" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li49" style="display: none"  runat="server" >
                            <a id="A49" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label49" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>

                        <li  id="Li50" style="display: none"  runat="server" >
                            <a id="A50" runat="server" href="#">
                                <span class="fa fa-caret-right"></span> 
                                <label > <asp:Label ID="Label50" style="display: block !important" runat="server" Text="" ></asp:Label></label>
                            </a>

                        </li>
               </ul>
               </li>
              
         </ul>
    </div>

    <div class="content">
        <div class="header">
                    

                                <h1 class="page-title">Reporte Usuarios N2</h1>
                      

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
                                 <div class="col-sm-2">
                                 <label  style="color:black; font-size: 14px">Lineas</label>
                                 </div>
                               
                               
                            </div>
                            
                            <div class="form-group">
  
                                <div class="col-sm-2"> 
                                      <select id="listal" class="form-control" onchange="" ></select>
                                </div>
                                <div class="col-sm-2">
                                     <button id="buscar" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="Carga_linea();" data-toggle="tooltip" title="Cargar Linea" ><i class="glyphicon glyphicon-plus"></i></button> 
                                    <button id="Button1" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick=" limpiar_ventana();" data-toggle="tooltip" title="Limpiar ventana" ><i class="glyphicon glyphicon-refresh"></i></button>         
                                </div>
                                <div class="col-sm-2"> 
                                      <select id="listaDB" class="form-control" onchange="" style="display:none" ></select>
                                </div>
                               
                                
                               
                              
                            </div>
                            <div class="form-group">
                                 <div class="col-sm-5"> 
                                 </div>
                                 <div class="col-sm-3">
                                 <label id="lineacarga" style="color:black; font-size: 20px">NINGUNA</label>
                                 </div>
                            </div>
                            <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                            <div class="col-sm-2">      
                                            <input type ="text" id="filtro_id" autofocus="autofocus" maxlength="20"  class="form-controll form-control"  placeholder="Identificacion" />  
                                            </div>
                                             <div class="col-sm-3">      
                                            <input type ="text" id="filtro_nombres" autofocus="autofocus" maxlength="40"  class="form-controll form-control"  placeholder="Nombres" />  
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="listagruposN2" class="form-control" ></select>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="filtro_estado" class="form-control" >
                                                <option  value="Todos">Todos</option>
                                                <option  value="1">si</option>
                                                <option  value="0">no</option></select>
                                            </div>

                                            <button id="Button2" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="lista_usuarios();" data-toggle="tooltip" title="buscar" ><i class="fa fa-search"></i></button> 
                                           <button id="Button6" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="crear_usuarios();" data-toggle="tooltip" title="Crear usuarios" ><i class="fa fa-user"></i></button> 

                                        </div>
                            <div class="row">
                                    <div class="col-sm-12 col-md-12 col-xs-12">
                                            <table id="table_sol" class="table table-bordered dt-responsive nowrap" cellspacing="0" width="95%">
                                                <thead>
                                                    <tr data-id="id">
                                                        <th style="width:15% !important;">ID User</th>
                                                        <th style="width:20% !important;">Identificacion</th>
                                                        <th style="width:30% !important;">Nombres</th>
                                                        <th style="width:20% !important;">Perfiles</th>
                                                        <th style="width:10% !important;">Estado</th>
                                                        <th style="width:5% !important;"></th>
                                                       
                                                       
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                </tfoot>
                                            </table>
                                    </div>
                             </div>
                          </div>
                        </div>
                    </div>
                </div>
               
                   <div id="modal" class="ui" >
	                    <a href="#" id="close">&times;</a>


	                                <div class="form">
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-5">
                                            </div>
                                            <div class="col-sm-3">
                                            <label id="Label58" style="color:black;font-size:20px">EDITAR USUARIO</label>
                                            </div>
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label54" style="color:black;">ID</label>
                                            </div>
                                            <div class="col-sm-2">      
                                            <input type ="text" id="Text1" autofocus="autofocus" maxlength="20" readonly="readonly" class="form-controll form-control"  placeholder="ID" />  
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label51" style="color:black;">Identificacion</label>
                                            </div>
                                            <div class="col-sm-2">      
                                            <input type ="text" id="Text2" autofocus="autofocus" maxlength="20" readonly="readonly" class="form-controll form-control"  placeholder="Identificacion" />  
                                            </div>
                                           <div class="col-sm-1">
                                            <label id="Label55" style="color:black;">Estado</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="Select1" class="form-control" >
                                                 <option  value="1">ACTIVO</option>
                                                <option  value="0">INACTIVO</option></select>
                                            </div>
                                            
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label52" style="color:black;">Nombres</label>
                                            </div>
                                            <div class="col-sm-5">      
                                            <input type ="text" id="Text3" autofocus="autofocus" maxlength="40" readonly="readonly" class="form-controll form-control"  placeholder="Nombres" />  
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label56" style="color:black;">IS Tenaris</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="Select2" class="form-control" >
                                                <option  value="1">ACTIVO</option>
                                                <option  value="0">INACTIVO</option></select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label53" style="color:black;">IsresetPass</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="Select3" class="form-control" >
                                                <option  value="1">ACTIVO</option>
                                                <option  value="0">INACTIVO</option></select>
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label59" style="color:black;">Password</label>
                                            </div>
                                            <div class="col-sm-2">      
                                            <input type ="text" id="Text4" autofocus="autofocus" maxlength="40" readonly="readonly" class="form-controll form-control"  placeholder="Password" />  
                                            </div>
                                            <div class="col-sm-1"> 
                                              <div class="col-sm-1">
                                            <button id="Button4" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                         onclick="Enviar_solicitud_confirmacion(1,0);" data-toggle="tooltip" title="Reset Password" ><i class="glyphicon glyphicon-refresh"></i></button> 
                                                 </div>
                                            </div>
                                             <div class="col-sm-1">
                                            <label id="Label600" style="color:black;">Resetear Password</label>
                                            </div>
                                            <div class="col-sm-2">  
                                 
                                            <input type ="password" id="Text1600" maxlength="40" class="form-controll form-control"  placeholder="Password" />  
                                            </div>
                                            <div class="col-sm-1"> 
                                              <div class="col-sm-1">
                                            <button id="Button10" runat="server"  style="height:35px; width:40px;text-align:left;color:black" class="btn btn-default" type="button" 
                                         onclick="enviar_solicitud_reseteo();" data-toggle="tooltip" title="set Password" ><i class="glyphicon glyphicon-refresh"></i></button> 
                                                 </div>
                                            </div>
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-3">
                                            </div>
                                            <div class="col-sm-5">
                                            <label id="Label57" style="color:black;">Perfiles</label>
                                            </div>
                                           <div class="col-sm-2">
                                            <label id="Label60" style="color:black;">Lista Perfiles</label>
                                            </div>
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                             <div class="col-sm-6">
                                             <div class="row">
                                                <div class="col-sm-12 col-md-12 col-xs-12">
                                                        <table id="tabla_perfiles" class="table table-bordered dt-responsive nowrap" cellspacing="0" width="50%">
                                                            <thead>
                                                                <tr data-id="id">
                                                                    <th style="width: 10%;">ID</th>
                                                                    <th style="width: 40%;">Descripcion</th>
                                                                    <th style="width: 30%;">Fecha V</th>
                                                                    <th style="width: 10%;"></th>
                                                                </tr>
                                                            </thead>
                                                            <tfoot>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                 </div>
                                                 </div>
                                            <div class="col-sm-1">
                                               
                                            </div>
                                            <div class="col-sm-2">
                                             <select id="listaperfiles" class="form-control" >
                                                </select>
                                            </div>
                                             <div class="col-sm-1">
                                            <button id="Button3" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="Enviar_solicitud_confirmacion(3,0);" data-toggle="tooltip" title="Agregar Perfil a Usuario" ><i class="glyphicon glyphicon-plus"></i></button> 
                                                 </div>
                                             </div>
                                           
                                         <div class="form-group">
                                            <div class="col-sm-5">
                                            </div>
                                            <div class="col-sm-3">
                                            <button id="Button5" runat="server"  style="height:50px; width:50px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="Enviar_solicitud_confirmacion(4,0);" data-toggle="tooltip" title="Guardar Cambios" ><i class="fa fa-floppy-o"></i></button> 
                                            </div>
                                         </div>
                                        </div>
                                     </div>
                                   
                    </div>

                     <div id="Div1" class="ui" >
	                    <a href="#" id="close2">&times;</a>


	                                <div class="form">
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-5">
                                            </div>
                                            <div class="col-sm-3">
                                            <label id="Label61" style="color:black;font-size:20px">CREAR NUEVO USUARIO</label>
                                            </div>
                                         </div>
                                        <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label63" style="color:black;">Identificacion</label>
                                            </div>
                                            <div class="col-sm-2">      
                                            <input type ="text" id="Text6" autofocus="autofocus" maxlength="15" class="form-controll form-control"  placeholder="Identificacion" />  
                                            </div>
                                             <div class="col-sm-1">
                                            <label id="Label65" style="color:black;">Nombres</label>
                                            </div>
                                            <div class="col-sm-4">      
                                            <input type ="text" id="Text5" autofocus="autofocus" maxlength="30" class="form-controll form-control"  placeholder="Nombres" />  
                                            </div>
                                            
                                            
                                        </div>
                                      
                                       <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                           <div class="col-sm-1">
                                            <label id="Label66" style="color:black;">Apellidos</label>
                                            </div>
                                            <div class="col-sm-4">      
                                            <input type ="text" id="Text7" autofocus="autofocus" maxlength="30" class="form-controll form-control"  placeholder="Apellidos" />  
                                            </div>
                                            <div class="col-sm-1">
                                            <label id="Label64" style="color:black;">IS-TENARIS</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="Select4" class="form-control" >
                                                 <option  value="1">ACTIVO</option>
                                                <option  value="0">INACTIVO</option></select>
                                            </div>
                                           </div>
                                      <div class="form-group">
                                           <div class="col-sm-1">
                                            </div>
                                           
                                             <div class="col-sm-1">
                                            <label id="Label62" style="color:black;">IS-RESETP</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="Select5" class="form-control" >
                                                 <option  value="1">ACTIVO</option>
                                                <option  value="0">INACTIVO</option></select>
                                            </div>
                                          <div class="col-sm-1">
                                            <label id="Label67" style="color:black;">Perfiles</label>
                                            </div>
                                            <div class="col-sm-2"> 
                                              <select id="listaperfiles3" class="form-control" >
                                                </select>
                                            </div>
                                           <div class="col-sm-1">
                                            <button id="Button7" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                               onclick="agregar_usuario();" data-toggle="tooltip" title="Agregar Perfil a Usuario" ><i class="glyphicon glyphicon-plus"></i></button> 
                                             </div>
                                        </div>
                                         <div class="form-group">
                                            <div class="col-sm-1">
                                            </div>
                                             <div class="col-sm-6">
                                             <div class="row">
                                                <div class="col-sm-12 col-md-12 col-xs-12">
                                                        <table id="Table1" class="table table-bordered dt-responsive nowrap" cellspacing="0" width="50%">
                                                            <thead>
                                                                <tr data-id="id_tr">
                                                                    <th style="width: 20%;">ID</th>
                                                                    <th style="width: 60%;">Descripcion</th>
                                                                    <th style="width: 20%;"></th>
                                                                </tr>
                                                            </thead>
                                                            <tfoot>
                                                            </tfoot>
                                                        </table>
                                                      <button id="Button8" runat="server"  style="height:50px; width:50px;text-align:left;color:black" class="btn btn-default" type="button"
                                               onclick="enviar_creacion_solicitud_usuario();" data-toggle="tooltip" title="Enviar solicitud" ><i class="fa fa-floppy-o"></i></button> 
                                                    </div>
                                                 </div>
                                                 </div>
                                          
                                            
                                             </div>



                                        </div>


                          </div>
                                   
                    </div>

                    <div id="overlay"></div>
               
            </div>

             <footer>
               

           
                <p class="pull-right"> by <a >Automatizacion</a></p>
                <p>© 2019 <a >Tenaris Tubocaribe</a></p>
            </footer>

          </div>
        </div>
       
        

    </form>

   <style>
       #Button9 {
padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
   margin-right: 5px;
}

#Button9:hover {
    background-color: #d32f2f;
}


#Button10:hover {
    background-color: #0023FF
}

#Button4:hover {
    background-color: #0023FF
}

  </style>
   
</body>
     <script type="text/javascript">
         $("[rel=tooltip]").tooltip();
         $(function () {
             $('.demo-cancel-click').click(function () { return false; });
         });
    </script>
</html>
