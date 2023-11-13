<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Error.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Error" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <link rel="stylesheet" href="../Styles/Style.css" />
    <link href="../Styles/toasts.min.css" rel="stylesheet"/>
    <script src="../Script/jquery-1.7.2.min.js"></script>
    <script src="../Styles/toastr.min.js"></script>
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />
    <title>Error</title>
</head>
<body>
    <style>
     div{
     font-family:Tahoma;
     }
     .centrar_bordeer{
   
    position: absolute;
    /*nos posicionamos en el centro del navegador*/
    top:45%;
    left:50%;
    /*determinamos una anchura*/
    width:400px;
    /*indicamos que el margen izquierdo, es la mitad de la anchura*/
    margin-left:-250px;
    /*determinamos una altura*/
    height:500px;
    /*indicamos que el margen superior, es la mitad de la altura*/
    margin-top:-250px;
  
    padding:5px;
    opacity: 20;
    /*-moz-opacity: 20;*/
    filter: alpha(opacity=80);
    display: inline-block;
    padding: 5px 10px;
    
}
    </style>
    <form id="form1" runat="server">
    <div class="">
    

        <div class="centrar_bordeer">
         
             <img src="../Imagenes/error.png" style=" position: absolute;left:-220px;top:-100px;width:980px" />
             <h5><label style=" position: absolute;left:95px;top:510px;width:500px">No tiene permisos al lugar donde esta Ingresando </label></h5>
             <br />
             <h5><label style=" position: absolute;left:175px;top:532px">Tenaris Tubocaribe &copy; 2023 </label></h5> 
             <br />
              <h5><button id="entrar3" runat="server"  style="left: 232px; top: 553px; position: absolute" class="btn btn-default" type="button" onserverclick="inicio_Click" data-toggle="tooltip" title="Home" ><i class="fa fa-home fa-lg"></i></button>
             </h5> 
        </div>



    </div>
    </form>
</body>
</html>
