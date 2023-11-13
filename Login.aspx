<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10,IE=11"/>
    <link rel="shortcut icon" href="../Imagenes/logo.png"/>
    <title>Login</title>
    <link rel="stylesheet" href="../Styles/Style.css" />
    <link href="../Styles/toasts.min.css" rel="stylesheet"/>
    <script src="../Script/jquery-1.7.2.min.js"></script>
    <script src="../Styles/toastr.min.js"></script>
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />

</head>

<body>
    <style>
.my_selector2 {
    /*
            border-radius: 3px;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            opacity: 20;
            -moz-opacity: 20;*/
            filter: alpha(opacity=80);
            display: inline-block;
            padding: 5px 10px;
            text-decoration: none;
            font-weight: bold;
            
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            -moz-box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            -webkit-box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
               
            margin: 3px;
            z-index: 1;
            left: 11px;
            top: 14px;
            position: absolute;
            width: 555px;
            height: auto;   
            font-size: large;
            
}

</style>
    <form id="form1" runat="server">
   
        <center> 
         <img src="../Imagenes/banner.jpg" alt="" style="position:relative"  />
            </center>
        <center> 
         <img src="../Imagenes/Logo-Tenaris.png" alt="" style="position:relative"  />
            </center>
        <center> 
        <img src="../Imagenes/logo.png" style="height:100px;height:100px" alt="" style="position:relative"  />
        </center>
            
        <div class="login-block">
            <center><h3 style="color:#000099;font-family:Arial;">Sistema Gestión de Soporte N2</h3></center>
          
            <input runat="server" maxlength="20" type="text" value="" placeholder="Usuario" id="username" />
            <input runat="server" maxlength="20" type="password" value="" placeholder="Password" id="password" />
            <button runat="server" style="background-color:#000099 !important;font-family:Arial;"  id="inicio" onserverclick="entrar_Click" >Ingresar</button> 
            <center><h3 style="color:#000099;font-family:Arial;font-size:small">By Automatizacion</h3></center>
        </div>
    </form>
</body>666
    <script type="text/javascript">
        $(document).ready(function () {

            
          
        });
       </script>
</html>
