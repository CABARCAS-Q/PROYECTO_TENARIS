<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Notificacion.aspx.cs" Inherits="Helpdesk_Auto.Helpdesk.Notificacion" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
       <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css" />

    <script src="../lib/jquery-1.11.1.min.js" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="../Styles/theme.css" />
    <link rel="stylesheet" type="text/css" href="../Styles/premium.css" />

     <script src="../lib/bootstrap/js/bootstrap.js"></script>
     <link href="../Styles/toasts.min.css" rel="stylesheet"/>
     <script src="../Styles/toastr.min.js"></script>
     <script src="../Js_codigos/Solicitudes_help.js"></script>

     <link rel="stylesheet" type="text/css" href="../Styles/jquery-confirm.min..css" />
    <script type="text/javascript" src="../Styles/jquery-confirm.min.js"></script>
    <script src="../Js_codigos/notificacion.js"></script>
    <title></title>
</head>
<body style="background:url(../Imagenes/alarma.gif) no-repeat center center fixed;background-size:auto" >
    <form id="form1" runat="server">
    <div>
        <audio id="musica" src="../Imagenes/alarma_5.mp3" preload="auto" ></audio> 
    <asp:Label runat="server" ID="texto" Text="HAY UNA NUEVA SOLICITUD" Style="position:absolute;width:450px;top:510px;left:30px;font-size:30px;font-weight:bold;color:coral"></asp:Label>
    </div>
    </form>
</body>
</html>
