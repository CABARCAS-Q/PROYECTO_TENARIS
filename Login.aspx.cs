using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class Login : System.Web.UI.Page
    {
        private static MyLogClass Log = new MyLogClass("Index.aspx");
        Consultas objetoconexiones = new Consultas();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack) // to avoid reloading your control on postback
            {

                //int y = 0;
                //while (y < 2)
                //{
                //    string re = objeto.enviar_correo("","","");

                //    if (re == "CORRECTO")
                //    {
                //        y = 2;
                //    }
                //    else
                //    {
                //        y++;
                //    }

                //    Debug.WriteLine("Respuesta envio:" + re);

                //}



                try
                {
                    Session.RemoveAll();
                }
                catch (Exception E)
                {
                    Log.write(MyLogClass.LogLevel.Info, "" + E);
                    //Debug.WriteLine("Error Controller" + E);
                }
                

            }
        }
        protected void entrar_Click(object sender, EventArgs e)
        {

            //Se genera el código javascript que se quiere ejecutar

            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            


            if (username.Value.Length > 0 && password.Value.Length > 0)
            {
                string usuario = username.Value.ToUpper();
                string pass = password.Value;

                Debug.WriteLine("user: " + usuario + " pas: " + pass);

              
                string ip = Metodos.ipvisitante();

       

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);
                parametros.Add("clave_anterior", pass);
                parametros.Add("Ip1",ip);
                ArrayList resul = objetoconexiones.metodolista_datos1("Sis_config.Inicio_sesion",parametros);
                //verifia usuario contraseña
                Debug.WriteLine("resul: " + resul.Count);
                if (resul.Count > 0)
                {

                    string re_consulta = "";
                    string re_nombre = "";
                    foreach (Object obj in resul)
                    {
                        string[] valor = obj.ToString().Split('|');

                        re_consulta = valor[0];
                        re_nombre = valor[1];
                    }

                    Session["usuario"] = usuario;
                    Session["usuarionombre"] = re_nombre;
                    Session["cambio_clave"] = "" + pass;

                    if (re_consulta == "1")
                    {
                        string mensaje = "Bienvenido "+re_nombre;

                        sb.Append(@"<script language='javascript'>");
                        sb.Append(@"$(document).ready(function () {  toastr.success('" + mensaje + "');});");
                        sb.Append(@"</script>");
                        ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());

                        Thread.Sleep(500);
                        Session["inicio"] = "1";
                        Response.Redirect("Menu.aspx");


                    }else if (re_consulta == "-1")
                    {

                    string mensaje = "Usuario o Clave Incorrecta Verifique";

                    sb.Append(@"<script language='javascript'>");
                    sb.Append(@"$(document).ready(function () {  toastr.warning('" + mensaje + "');});");
                    sb.Append(@"</script>");
                    ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());
                    }
                    else
                    {

                        string mensaje = "Error DB:" + re_consulta;
                        sb.Append(@"<script language='javascript'>");
                        sb.Append(@"$(document).ready(function () {    toastr.error('" + mensaje + "','ERROR DB');   });");
                        sb.Append(@"</script>");
                        ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());

                    }

                }
                else
                {
                    
                    string mensaje = "Error DB:sin resultados:" + resul.Count;
                    sb.Append(@"<script language='javascript'>");
                    sb.Append(@"$(document).ready(function () {    toastr.error('"+mensaje+"','ERROR DB');   });");
                    sb.Append(@"</script>");
                    ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());
                    
                }

               

            }
            else
            {
               
                sb.Append(@"<script language='javascript'>");
                sb.Append(@"$(document).ready(function () {  toastr.warning('Campos Vacios');});");
                sb.Append(@"</script>");
                ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());
            }


            username.Value = "";


        }

    }
}