<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReporteTurning.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.ReporteTurning" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title> Solicitud turning</title>

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

    <script src="../Js_codigos/Reporte_turning.js"></script>
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


  
        <div class="header">
                    

                                <h1 class="page-title">Reporte de Personal Programado</h1>
                      

        </div>
         <div class="main-content">
             

             <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="panel panel-default">
                        
                    
                <div class="form-group">
                     <div class="col-sm-3"> 
                          </div>
                    <div class="col-sm-2" >
                        <select  class="form-control" id="month" name="month"   style="font-weight: bold;font-size:15px" >
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <select class="form-control" id="year" name="year"  style="font-weight: bold;font-size:20px" >
                            <%--@for (int i = DateTime.Now.Year - 10; i <= DateTime.Now.Year + 10; i++)
                            {
                                <option value="@i">@i</option>
                            }--%>
            
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="btn btn-primary" id="Buscador" onclick="displayCalendar()">Buscar</button>
                    </div>
                </div>
          
                <div class="form-group">
                            <div class="my-5">
                                <table class="table table-bordered" id="tablaCalendar">
                                    <thead>
                                        <tr>
                                            <th>Domingo</th>
                                            <th>Lunes</th>
                                            <th>Martes</th>
                                            <th>Miércoles</th>
                                            <th>Jueves</th>
                                            <th>Viernes</th>
                                            <th>Sábado</th>
                                        </tr>
                                    </thead>
                                    <tbody id="calendar-body">
                                    </tbody>
                                </table>
                            </div>
                     </div>

            <div class="row">
                <div class="col-md-3">
                    <h2>Help Desk</h2>
                    <table class="table table-bordered" id="tablon">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody id="trabajadores-body">
                        </tbody>
                    </table>
                </div>
                <div class="col-md-5">
                    <h2 id="txtH2"> Interrupciones Dia</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>linea</th>
                                <th>maquina</th>
                                <th>tiempo</th>
                            </tr>
                        </thead>
                        <tbody id="Interrupciones-body">
                        </tbody>
                    </table>
                </div>
                        </div>


                     </div>
                    </div>
                
                </div>           
            

             <footer>
               

           
                <p class="pull-right"> by <a >Automatizacion</a></p>
                <p>© 2023 <a >Tenaris Tubocaribe</a></p>
            </footer>

          </div>
       
            
    </form>
  <style>

#tablon {
  width: 70%;
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #ccc;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #555;
  color: #fff;
  font-weight: bold;
  padding: 4px;
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

