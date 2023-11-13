<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Gestion_solicitud.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Gestion_solicitud" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>Gestion Solicitudes</title>

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
   
    <script src="../Js_codigos/Gestion_solicitud.js"></script>
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
    </style>
    <script type="text/javascript">
        $(function () {
            var uls = $('.sidebar-nav > ul > *').clone();
            uls.addClass('visible-xs');
            $('#main-menu').append(uls.clone());
        });
    </script>

    <form id="form1" runat="server">
    <input id="fechabusqueda1" type="hidden" runat="server" />
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
                       
                        <li  id="Li44" style="display: none"  runat="server" >
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
                    

                                <h1 class="page-title">Gestionar Solicitudes</h1>
                      

        </div>
         <div class="main-content">

             <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="panel panel-default">
                        <a href="#page-stats" class="panel-heading" data-toggle="collapse">Resumen Solicitudes</a>
                        <div id="page-stats" class="panel-collapse panel-body collapse in">
                        </div>
                        
                            <div class="form">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                    <div class="col-sm-1"> 
                                    </div>
                                    <div class="col-sm-5"> 
                                    <label  style="color:black; font-size: 17px;font-weight: bold">Mi Dia Solicitudes</label>
                                    </div>
                                    <div class="col-sm-4"> 
                                    <label  style="color:black; font-size: 17px;font-weight: bold">Mi Historico Solicitudes</label>
                                    </div>
                                    
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-1"> 
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="blue"><label id="MM01" style="font-weight: bold" >0</label></span></h1>Asignadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="green"><label id="MM02" style="font-weight: bold" >0</label></span></h1>Terminadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="gray"><label id="MM03" style="font-weight: bold" >0</label></span></h1>Cerradas
                                        </div>
                                        <div class="col-sm-2"> 
                                        <h1><span class="todas"><label id="MM04" style="font-weight: bold" >0</label></span></h1>Todas
                                        </div>
                                        
                                        <div class="col-sm-1"> 
                                        <h1><span class="blue"><label id="TT01" style="font-weight: bold" >0</label></span></h1>Asignadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="green"><label id="TT02" style="font-weight: bold" >0</label></span></h1>Terminadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="gray"><label id="TT03" style="font-weight: bold" >0</label></span></h1>Cerradas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="todas"><label id="TT04" style="font-weight: bold" >0</label></span></h1>Todas
                                        </div>
                                        

                                    </div>
                                    <div class="form-group">
                                    <div class="col-sm-1"> 
                                    </div>
                                    <div class="col-sm-5"> 
                                    <label  style="color:black; font-size: 17px;font-weight: bold">Todas Dia Solicitudes</label>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-1"> 
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="blue"><label id="TD01" style="font-weight: bold" >0</label></span></h1>Asignadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="green"><label id="TD02" style="font-weight: bold" >0</label></span></h1>Terminadas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="gray"><label id="TD03" style="font-weight: bold" >0</label></span></h1>Cerradas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="red"><label id="TD04" style="font-weight: bold" >0</label></span></h1>Nuevas
                                        </div>
                                        <div class="col-sm-1"> 
                                        <h1><span class="todas"><label id="TD05" style="font-weight: bold" >0</label></span></h1>Todas
                                        </div>
                                    </div>
                          
                                </div>

                             </div>
                    </div>
                </div>
               
               
            </div>
             <div class="row">
             <div class="col-sm-6 col-md-6">
                <div class="panel panel-default">
                    <a href="#widget1container1" class="panel-heading" data-toggle="collapse">Solicitudes Asignadas <span class="label label-warning"><label id="SA" style="font-size:15px;font-weight: bold" >-</label></span></a>
                    <div class="form-group">
                        </div>
                    <div class="form-group">
                         <div class="col-sm-2"> 
                                <input  runat="server" id="fecham1" type="text" name="fecham1" readonly="true"  class="form-controll form-control" style="text-align:left" />
                                </div>
                                <div class="col-sm-2"> 
                                <input  runat="server" id="fecham2" type="text" name="fecham2" readonly="true" class="form-controll form-control" style="text-align:left"  />
                                </div>
                               <div class="col-sm-3"> 
                                      <select id="mlistal" class="form-control"  ></select>
                                </div>

                                <div class="col-sm-3"> 
                                      <select id="mlistamot" class="form-control" ></select>
                                </div>
                                <div class="col-sm-2">
                                     <button id="buscar" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="lista_solicitudes_propias();" data-toggle="tooltip" title="Buscar" ><i class="fa fa-search"></i></button>  
                                     <input id="noti" type="checkbox" />      
                                </div>
                     </div>
                 
                    <div id="widget1container1" class="panel-body collapse in">
                        <table id="table_mis_sol" class="table table-bordered">
                        <thead>
                        <tr>
                          <th style="width: 15%;">Codigo</th>
                          <th style="width: 20%;">Fecha</th>
                          <th style="width: 20%;">Linea</th>
                          <th style="width: 25%;">Problema</th>
                          <th style="width: 15%;">Estado</th>
                          <th style="width: 5%;"></th>
                        </tr>
                       </thead>
                       <tfoot>
                       </tfoot>

                    </table>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="panel panel-default">
                     
                    <a href="#widget1container" class="panel-heading" data-toggle="collapse">Todas Las Solicitudes<span class="label label-warning"> <label id="TS" style="font-size:15px;font-weight: bold" >-</label></span> </a>
                    <div class="form-group">
                        </div>
                    <div class="form-group">
                                <div class="col-sm-2"> 
                                <input  runat="server" id="fechat1" type="text" name="fechat1" readonly="true"  class="form-controll form-control" style="text-align:left" />
                                </div>
                                <div class="col-sm-2"> 
                                <input  runat="server" id="fechat2" type="text" name="fechat2" readonly="true" class="form-controll form-control" style="text-align:left"  />
                                </div>
                                <div class="col-sm-3"> 
                                      <select id="tlistal" class="form-control"  ></select>
                                </div>

                                <div class="col-sm-3"> 
                                      <select id="tlistamot" class="form-control" ></select>
                                </div>
                                <div class="col-sm-2">
                                     <button id="Button1" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="lista_solicitudes_todas();" data-toggle="tooltip" title="Buscar" ><i class="fa fa-search"></i></button>        
                                </div>
                     </div>
    
                    <div id="widget1container" class="panel-body collapse in">
                        <table id="table_todas_sol" class="table table-bordered">
                        <thead>
                        <tr>
                          <th style="width: 15%;">Codigo</th>
                          <th style="width: 20%;">Fecha</th>
                          <th style="width: 20%;">Linea</th>
                          <th style="width: 20%;">Problema</th>
                          <th style="width: 15%;">Estado</th>
                          <th style="width: 5%;"></th>
                          <th style="width: 5%;"></th>
                        </tr>
                       </thead>
                       <tfoot>
                       </tfoot>

                    </table>
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
           <div id="dialog" title="Solicitud" style="display:none" >
                   <p>
                         <label id="labelidticket" style="font-weight: bold;" >Ticket</label>
                         <label id="idticket"  >-</label>

                   </p>
                   <p>
                         <label id="labelfecha" style="font-weight: bold;" >Fecha Solicitud</label>
                         <label id="idfecha" >-</label>
                   </p>
                   <p>
                         <label id="labelusuario" style="font-weight: bold;" >Usuario Solicitud</label>
                         <label id="idusuario" >-</label>
                         <label id="idnombre" >-</label>
                   </p>
                   <p>
                         <label id="labellinea" style="font-weight: bold;" >Linea</label>
                         <label id="idlinea" >-</label>
                   </p>
                    <p>
                         <label id="labelmaquinap" style="font-weight: bold;" >Maquina</label>
                         <label id="idmaquina" >-</label>
                   </p>
                   <p>
                         <label id="labelproblema" style="font-weight: bold;" >Problema / Vista</label>
                         <label id="idproblema" >-</label>
                   </p> 
                   <p>
                         <label id="labelsolicitud" style="font-weight: bold;" >Estado Solicitud</label>
                         <label id="idestadosol" >-</label>
                         <label id="idestadonombresol" >-</label>
                   </p>                        
                   <p>
                         <label id="labeldescripcionsolicitud" style="font-weight: bold;" >Descripcion Solicitud</label>
                         <textarea id="iddescripcionsolicitud" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p >
                         <label id="labeladjuntos" style="font-weight: bold;" >Archivos Adjuntos</label>
                         <label id="idadjuntos" >-</label>
                         <div id="link">

                         </div>
                   </p> 
                   <p>
                         <label id="labeldescripcionsolucion" style="font-weight: bold;" >Descripcion Solucion</label>
                         <textarea id="iddescripcionsolucion" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p>
                         <label id="labeldescripcionsolucion2" style="font-weight: bold;" >Descripcion Solucion Tecnica</label>
                         <textarea id="iddescripcionsolucion2" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p>
                         <label id="labelusuariohelp" style="font-weight: bold;" >Usuario SSG Asignado</label>
                         <label id="idusuariohelp" >-</label>
                         <label id="idnombrehelp" >-</label>
                          <button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="asignar_ticket_principal();" >&#160;Asignar</button>
                   </p> 
                   <p>
                         <label id="labelfechaini" style="font-weight: bold;" >Fecha Inicio Solucion</label>
                         <label id="idfechaini" >-</label>

                   </p> 
                    <p>
                         <label id="labelfechafin" style="font-weight: bold;" >Fecha Final Solucion</label>
                         <label id="idfechafin" >-</label>
                   </p> 
                   <p>
                         <label id="labeltiempo" style="font-weight: bold;" >Tiempo Solucion</label>
                         <label id="idtiempo" >-</label>
                   </p> 
                   <p>
                         <label id="labelanfa0" style="font-weight: bold;" >ANFA</label>
                         <label id="idanfa0" >-</label>
                         
                         <li  id="Linkanfa3"  >
                            <a id="Anfa0" runat="server" onclick="valida_anfa_detalle_t();">
                                <button id="linkanfa" > <i class="fa fa-search"></i> </button>
                                <label > <asp:Label ID="Labelanfa1" style="display: block !important" runat="server" Text="" ></asp:Label>Ir A Pagina.</label>
                            </a>

                        </li>
                   </p> 
                   <p>

                   <center><button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="agregar_ticketv()" >&#160;Agregar</button></center>
                   </p>

            </div>
            <div id="dialogp" title="Solicitud" style="display:none" >
                   <p>
                         <label id="labelidticketp" style="font-weight: bold;" >Ticket</label>
                         <label id="idticketp"  >-</label>

                   </p>
                   <p>
                         <label id="labelfechap" style="font-weight: bold;" >Fecha Solicitud</label>
                         <label id="idfechap" >-</label>
                   </p>
                   <p>
                         <label id="labelusuariop" style="font-weight: bold;" >Usuario Solicitud</label>
                         <label id="idusuariop" >-</label>
                         <label id="idnombrep" >-</label>
                   </p>
                   <p>
                         <label id="labellineap" style="font-weight: bold;" >Linea</label>
                         <label id="idlineap" >-</label>
                   </p>
                   <p>
                         <label id="labelmaquina" style="font-weight: bold;" >Maquina</label>
                         <label id="idmaquinap" >-</label>
                   </p>
                   <p>
                         <label id="labelproblemap" style="font-weight: bold;" >Problema / Vista</label>
                         <select id="idproblemap"  ></select> <!--<label id="idproblemap" >-</label>-->
                   </p> 
                <p>
                    <label id="labellistagp" style="font-weight: bold;" >Grupo Asignado</label>
                    <select id="idlistagp"  ></select>
                    </p>
                  <p>
                        <label id="labelsolicitudp" style="font-weight: bold;" >Estado Solicitud</label>
                        <input type="hidden" id="idlistamovp" />
                                 <select id="idlistamov"  ></select>
                                 
                       </p>
                                        
                   <p>
                         <label id="labeldescripcionsolicitudp" style="font-weight: bold;" >Descripcion Solicitud</label>
                         <textarea id="iddescripcionsolicitudp" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p >
                         <label id="labeladjuntosp" style="font-weight: bold;" >Archivos Adjuntos</label>
                         <label id="idadjuntosp" >-</label>
                         <div id="linkp">

                         </div>
                   </p> 
                   <p>
                         <label id="labeldescripcionsolucionp" style="font-weight: bold;" >Descripcion Solucion</label>
                          <button id="idchat" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="ver_chat();" data-toggle="tooltip" title="Chat" ><i class="fa fa-comments"></i></button> 
                         <textarea id="iddescripcionsolucionp" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p>
                         <label id="labeldescripcionsolicitudp2" style="font-weight: bold;" >Descripcion Solucion Tecnica</label>
                       
                         <textarea id="iddescripcionsolicitudp2" style="margin: 0px; width: 845px; height: 79px;" ></textarea>
                   </p> 
                   <p>
                         <label id="labelSolucionespecializada" style="font-weight: bold;" >Requiere Solucion especializada</label>
                         <select id="Solucionespecializada"  ></select>
                   </p> 
                   <p>
                         <label id="labelusuariohelpp" style="font-weight: bold;" >Usuario SSG Asignado</label>
                         <label id="idusuariohelpp" >-</label>
                         <label id="idnombrehelpp" >-</label>
                         <button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="Reasignar_ticket_propios();" >&#160;Reasignar</button>
                   </p> 
                   <p>
                         <label id="labelfechainip" style="font-weight: bold;" >Fecha Inicio Solucion</label>
                         <label id="idfechainip" >-</label>

                   </p> 
                    <p>
                         <label id="labelfechafinp" style="font-weight: bold;" >Fecha Final Solucion</label>
                         <label id="idfechafinp" >-</label>
                   </p> 
                   <p>
                         <label id="labeltiempop" style="font-weight: bold;" >Tiempo Solucion</label>
                         <label id="idtiempop" >-</label>
                   </p> 
                   <p>
                         <label id="labelanfa" style="font-weight: bold;" >ANFA</label>
                         <label id="idanfa" >-</label>
                         
                         <li  id="Linkanfa0"  >
                            <a id="Linkanfa1" runat="server" onclick="valida_anfa_detalle_m();">
                               <button id="linkanfa0" > <i class="fa fa-search"></i> </button>
                                <label > <asp:Label ID="Linkanfa2" style="display: block !important" runat="server" Text="" ></asp:Label>Ir A Pagina.</label>
                            </a>

                        </li>
                   </p> 
                <center><button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="update_ticket()" >&#160;Guardar</button></center>
            </div>
            <div id="dialogchat" title="Chat" style="display:none" >
                    <div class="col-sm-10 col-sm-offset-1 frame">
                        <ul id="ul2"></ul>
                        <div>
                            <div class="msj-rta macro">                        
                                <div class="text text-r" style="background:whitesmoke !important">
                                    <input type="text" id="mensajen" class="mytext" maxlength="1000" placeholder="Escribe un Mensaje" onkeypress="pulsar(event)" />
                                </div> 
                            </div>
                            <div style="padding:10px;">
                                <button id="envia_chat" runat="server"  style="height:35px; width:35px;text-align:left;color:black" class="btn btn-default" type="button"
                                        onclick="enviar_mensaje();" data-toggle="tooltip" title="Enviar" ><i class="glyphicon glyphicon-share-alt"></i></button>
                            </div>                
                        </div>
                    </div> 
                
         </div>
         <div id="dialogasignar" title="Asignar a Persona" style="display:none" >
                    <div class="col-sm-10 col-sm-offset-1">
                        <div>
                              <select id="persona_help"  ></select>   
                            <button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="asignar_ticket_principal2();" >&#160;Enviar</button>         
                        </div>
                    </div> 
                
         </div>
         <div id="dialogreasignar" title="Asignar a Persona" style="display:none" >
                    <div class="col-sm-10 col-sm-offset-1">
                        <div>
                              <select id="persona_helpp"  ></select>   
                            <button type="button" style="background-color:#0099CC;color: white; font-weight: bold;" class="btn btn-dark visible-lg visible-md visible-sm" onclick="reasignar_ticket2();" >&#160;Enviar</button>         
                        </div>
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

