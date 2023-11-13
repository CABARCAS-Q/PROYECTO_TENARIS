<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Imagenes.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Imagenes" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <link rel="stylesheet" href="../Styles/Style.css" />
    <link href="../Styles/toasts.min.css" rel="stylesheet"/>
    <script src="../Script/jquery-1.7.2.min.js"></script>
    <script src="../Styles/toastr.min.js"></script>
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />
    <title>Imagenesr</title>
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
    <div>
      <div class="centrar_bordeer">
             <img id="imagenn" runat="server" src="#" style=" position: absolute;left:0px;top:0px;width: 550px" />
      </div>
    </div>
    </form>
</body>
</html>
