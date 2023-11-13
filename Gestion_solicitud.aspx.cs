using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class Gestion_solicitud : System.Web.UI.Page
    {
        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("Gestion_solicitud.aspx");


        protected void Page_Load(object sender, EventArgs e)
        {
            int validaventana = 0;
            string validauser = "";
            int conteoventanas = 0;
            System.Text.StringBuilder sb = new System.Text.StringBuilder();

            try
            {


                validauser = Session["usuario"].ToString();

                Dictionary<string, Object> parametrosi = new Dictionary<string, object>();
                parametrosi.Add("Usuario", validauser);
                ArrayList re = objetoconexiones.metodolista_datos1("Sis_config.Lista_menu", parametrosi);
                if (re.Count > 0)
                {


                    Debug.WriteLine("valores:" + re.Count);
                    foreach (Object obj in re)
                    {
                        string[] valor = obj.ToString().Split('|');
                        Debug.WriteLine("menu:" + obj.ToString());

                        if (valor[5] == "1")
                        {
                            Debug.WriteLine("Activo el menu 1");
                            menu1.Style.Value = "display: normal";
                            menu1_1.Style.Value = "display: normal";
                            if (Label1.Text.Length < 1) { Li1.Style.Value = "display: normal"; Label1.Text = valor[3]; A1.HRef = "" + valor[4]; }
                            else if (Label2.Text.Length < 1) { Li2.Style.Value = "display: normal"; Label2.Text = valor[3]; A2.HRef = "" + valor[4]; }
                            else if (Label3.Text.Length < 1) { Li3.Style.Value = "display: normal"; Label3.Text = valor[3]; A3.HRef = "" + valor[4]; }
                            else if (Label4.Text.Length < 1) { Li4.Style.Value = "display: normal"; Label4.Text = valor[3]; A4.HRef = "" + valor[4]; }
                            else if (Label5.Text.Length < 1) { Li5.Style.Value = "display: normal"; Label5.Text = valor[3]; A5.HRef = "" + valor[4]; }
                            else if (Label6.Text.Length < 1) { Li6.Style.Value = "display: normal"; Label6.Text = valor[3]; A6.HRef = "" + valor[4]; }
                            else if (Label7.Text.Length < 1) { Li7.Style.Value = "display: normal"; Label7.Text = valor[3]; A7.HRef = "" + valor[4]; }
                            else if (Label8.Text.Length < 1) { Li8.Style.Value = "display: normal"; Label8.Text = valor[3]; A8.HRef = "" + valor[4]; }
                            else if (Label9.Text.Length < 1) { Li9.Style.Value = "display: normal"; Label9.Text = valor[3]; A9.HRef = "" + valor[4]; }
                            else if (Label10.Text.Length < 1) { Li10.Style.Value = "display: normal"; Label10.Text = valor[3]; A10.HRef = "" + valor[4]; }
                        }
                        if (valor[5] == "2")
                        {
                            menu2.Style.Value = "display: normal";
                            menu2_2.Style.Value = "display: normal";
                            if (Label11.Text.Length < 1) { Li11.Style.Value = "display: normal"; Label11.Text = valor[3]; A11.HRef = "" + valor[4]; }
                            else if (Label12.Text.Length < 1) { Li12.Style.Value = "display: normal"; Label12.Text = valor[3]; A12.HRef = "" + valor[4]; }
                            else if (Label13.Text.Length < 1) { Li13.Style.Value = "display: normal"; Label13.Text = valor[3]; A13.HRef = "" + valor[4]; }
                            else if (Label14.Text.Length < 1) { Li14.Style.Value = "display: normal"; Label14.Text = valor[3]; A14.HRef = "" + valor[4]; }
                            else if (Label15.Text.Length < 1) { Li15.Style.Value = "display: normal"; Label15.Text = valor[3]; A15.HRef = "" + valor[4]; }
                            else if (Label16.Text.Length < 1) { Li16.Style.Value = "display: normal"; Label16.Text = valor[3]; A16.HRef = "" + valor[4]; }
                            else if (Label17.Text.Length < 1) { Li17.Style.Value = "display: normal"; Label17.Text = valor[3]; A17.HRef = "" + valor[4]; }
                            else if (Label18.Text.Length < 1) { Li18.Style.Value = "display: normal"; Label18.Text = valor[3]; A18.HRef = "" + valor[4]; }
                            else if (Label19.Text.Length < 1) { Li19.Style.Value = "display: normal"; Label19.Text = valor[3]; A19.HRef = "" + valor[4]; }
                            else if (Label20.Text.Length < 1) { Li20.Style.Value = "display: normal"; Label20.Text = valor[3]; A20.HRef = "" + valor[4]; }
                        }
                        if (valor[5] == "3")
                        {
                            menu3.Style.Value = "display: normal";
                            menu3_3.Style.Value = "display: normal";
                            if (Label21.Text.Length < 1) { Li21.Style.Value = "display: normal"; Label21.Text = valor[3]; A21.HRef = "" + valor[4]; }
                            else if (Label22.Text.Length < 1) { Li22.Style.Value = "display: normal"; Label22.Text = valor[3]; A22.HRef = "" + valor[4]; }
                            else if (Label23.Text.Length < 1) { Li23.Style.Value = "display: normal"; Label23.Text = valor[3]; A23.HRef = "" + valor[4]; }
                            else if (Label24.Text.Length < 1) { Li24.Style.Value = "display: normal"; Label24.Text = valor[3]; A24.HRef = "" + valor[4]; }
                            else if (Label25.Text.Length < 1) { Li25.Style.Value = "display: normal"; Label25.Text = valor[3]; A25.HRef = "" + valor[4]; }
                            else if (Label26.Text.Length < 1) { Li26.Style.Value = "display: normal"; Label26.Text = valor[3]; A26.HRef = "" + valor[4]; }
                            else if (Label27.Text.Length < 1) { Li27.Style.Value = "display: normal"; Label27.Text = valor[3]; A27.HRef = "" + valor[4]; }
                            else if (Label28.Text.Length < 1) { Li28.Style.Value = "display: normal"; Label28.Text = valor[3]; A28.HRef = "" + valor[4]; }
                            else if (Label29.Text.Length < 1) { Li29.Style.Value = "display: normal"; Label29.Text = valor[3]; A29.HRef = "" + valor[4]; }
                            else if (Label30.Text.Length < 1) { Li30.Style.Value = "display: normal"; Label30.Text = valor[3]; A30.HRef = "" + valor[4]; }
                        }
                        if (valor[5] == "4")
                        {
                            menu4.Style.Value = "display: normal";
                            menu4_4.Style.Value = "display: normal";
                            if (Label31.Text.Length < 1) { Li31.Style.Value = "display: normal"; Label31.Text = valor[3]; A31.HRef = "" + valor[4]; }
                            else if (Label32.Text.Length < 1) { Li32.Style.Value = "display: normal"; Label32.Text = valor[3]; A32.HRef = "" + valor[4]; }
                            else if (Label33.Text.Length < 1) { Li33.Style.Value = "display: normal"; Label33.Text = valor[3]; A33.HRef = "" + valor[4]; }
                            else if (Label34.Text.Length < 1) { Li34.Style.Value = "display: normal"; Label34.Text = valor[3]; A34.HRef = "" + valor[4]; }
                            else if (Label35.Text.Length < 1) { Li35.Style.Value = "display: normal"; Label35.Text = valor[3]; A35.HRef = "" + valor[4]; }
                            else if (Label36.Text.Length < 1) { Li36.Style.Value = "display: normal"; Label36.Text = valor[3]; A36.HRef = "" + valor[4]; }
                            else if (Label37.Text.Length < 1) { Li37.Style.Value = "display: normal"; Label37.Text = valor[3]; A37.HRef = "" + valor[4]; }
                            else if (Label38.Text.Length < 1) { Li38.Style.Value = "display: normal"; Label38.Text = valor[3]; A38.HRef = "" + valor[4]; }
                            else if (Label39.Text.Length < 1) { Li39.Style.Value = "display: normal"; Label39.Text = valor[3]; A39.HRef = "" + valor[4]; }
                            else if (Label40.Text.Length < 1) { Li40.Style.Value = "display: normal"; Label40.Text = valor[3]; A40.HRef = "" + valor[4]; }
                        }
                        if (valor[5] == "5")
                        {
                            menu5.Style.Value = "display: normal";
                            menu5_5.Style.Value = "display: normal";
                            if (Label41.Text.Length < 1) { Li41.Style.Value = "display: normal"; Label41.Text = valor[3]; A41.HRef = "" + valor[4]; }
                            else if (Label42.Text.Length < 1) { Li42.Style.Value = "display: normal"; Label42.Text = valor[3]; A42.HRef = "" + valor[4]; }
                            else if (Label43.Text.Length < 1) { Li43.Style.Value = "display: normal"; Label43.Text = valor[3]; A43.HRef = "" + valor[4]; }
                            else if (Label44.Text.Length < 1) { Li44.Style.Value = "display: normal"; Label44.Text = valor[3]; A44.HRef = "" + valor[4]; }
                            else if (Label45.Text.Length < 1) { Li45.Style.Value = "display: normal"; Label45.Text = valor[3]; A45.HRef = "" + valor[4]; }
                            else if (Label46.Text.Length < 1) { Li46.Style.Value = "display: normal"; Label46.Text = valor[3]; A46.HRef = "" + valor[4]; }
                            else if (Label47.Text.Length < 1) { Li47.Style.Value = "display: normal"; Label47.Text = valor[3]; A47.HRef = "" + valor[4]; }
                            else if (Label48.Text.Length < 1) { Li48.Style.Value = "display: normal"; Label48.Text = valor[3]; A48.HRef = "" + valor[4]; }
                            else if (Label49.Text.Length < 1) { Li49.Style.Value = "display: normal"; Label49.Text = valor[3]; A49.HRef = "" + valor[4]; }
                            else if (Label50.Text.Length < 1) { Li50.Style.Value = "display: normal"; Label50.Text = valor[3]; A50.HRef = "" + valor[4]; }
                        }
                        if (valor[4] == "Gestion_solicitud.aspx")
                        {
                            validaventana = 1;
                        }

                        conteoventanas++;
                    }

                    //Debug.WriteLine("VALOR SESSION:"+Session[0]);
                }



                if (Session["cambio_clave"].ToString() == "auto")
                {

                    string men = "Recuerde Cambiar Su Password , Ya que el actual es el predeterminado del sistema";

                    sb.Append(@"<script type='text/javascript'>");
                    sb.Append(@"$(document).ready(function () {  toastr.warning('" + men + "','Info', {timeOut: 5000});}); ");
                    sb.Append(@"</script>");

                    Session["cambio_clave"] = "";
                    //Response.Redirect("Cambio_clave.aspx");
                    //Debug.WriteLine("VALOR SESSION:entro a validar la clave");
                }
                Session["cambio_clave"] = "";
                user.Text = Session["usuarionombre"].ToString();

            }
            catch (Exception t)
            {
                //Debug.WriteLine("Error menu:" + t);
                Log.write(MyLogClass.LogLevel.Info, "" + t);
                Response.Redirect("Error.aspx");

            }

            if (validaventana == 0)
            {
                Response.Redirect("Error.aspx");
            }
            else
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();

                parametros.Add("Usuario", Session["usuario"].ToString());
                ArrayList resultadopass = objetoconexiones.metodolista_datos1("Sis_config.Valida_password", parametros);

                if (resultadopass.Count > 0)
                {
                    string re = "";
                    foreach (Object obj in resultadopass)
                    {
                        string[] valor = obj.ToString().Split('|');
                        re = valor[0];
                    }

                    if (re == "1")
                    {
                        Session["passpredeterminada"] = "1";
                        Response.Redirect("Cambio_clave.aspx");
                    }
                    else
                    {
                        Session["passpredeterminada"] = "0";
                    }

                }
                else
                {


                }

            }

            fechabusqueda1.Value = DateTime.Now.ToString("yyyy-MM-dd");

            ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_Lineas()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[tuca].[Lista_lineas]");
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_Lineas Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_personal_help()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_personas_help_desk]");
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_personal_help Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_motivos()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_Estado_solicitudes]");
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_motivos Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_grupos()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_grupos]");
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_grupos Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_solicitudes(string fecha1, string fecha2, string linea, string estado, string usuarioh)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_solicitudes Error:" + t.ToString());
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "No Hay Sesion Activa" });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);
                parametros.Add("fechai", fecha1);
                parametros.Add("fechaf", fecha2);
                parametros.Add("linea", linea);

                if (estado != "0")
                {
                    parametros.Add("estado", estado);
                }
                if (usuarioh.Length > 0)
                {
                    parametros.Add("usuario_helpk", usuario);
                }

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Lista_solicitudes]", parametros);
                Metodos.conteo_solicitud=0;
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt, Resul_Conteo=dt.Rows.Count });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_solicitudes_auto(string fecha1, string fecha2, string linea, string estado, string usuarioh)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                Log.write(MyLogClass.LogLevel.Info, "lista_solicitudes Error:" + t.ToString());
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "No Hay Sesion Activa" });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);
                parametros.Add("fechai", fecha1);
                parametros.Add("fechaf", fecha2);
                parametros.Add("linea", linea);

                if (estado != "0")
                {
                    parametros.Add("estado", estado);
                }
                if (usuarioh.Length > 0)
                {
                    parametros.Add("usuario_helpk", usuario);
                }

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Lista_solicitudes]", parametros);
                //Metodos.conteo_solicitud = 0;
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt, Resul_Conteo = dt.Rows.Count });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Asignar_ticket(string ticket)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("ticket", ticket);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Asignacion_ticket]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "-2")
                        {
                            valor = "-2";
                        }
                        else if (valores[0] == "-4")
                        {
                            valor = "-4";
                        }
                        else if (valores[0] == "-5")
                        {
                            valor = "-5";
                        }
                        else if (valores[0] == "-3")
                        {
                            error_mensaje = "Error DB";
                            error = "-3";
                            valor = "-3";
                        }
                        else
                        {
                            error_mensaje = "Error DB Desconocido";
                            error = "-3";
                            valor = "-3";
                        }

                    }

                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Asignar_ticket Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            Log.write(MyLogClass.LogLevel.Info, "Asignar_ticket Resul:" + valor);
            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Asignar_ticket2(string ticket, string persona)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("ticket", ticket);
                parametros.Add("Usuariohp", persona);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Asignacion_ticket2]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "-2")
                        {
                            valor = "-2";
                        }
                        else if (valores[0] == "-4")
                        {
                            valor = "-4";
                        }
                        else if (valores[0] == "-5")
                        {
                            valor = "-5";
                        }
                        else if (valores[0] == "-6")
                        {
                            valor = "-6";
                        }
                        else if (valores[0] == "-7")
                        {
                            valor = "-7";
                        }
                        else if (valores[0] == "-3")
                        {
                            error_mensaje = "Error DB";
                            error = "-3";
                            valor = "-3";
                        }
                        else
                        {
                            error_mensaje = "Error DB Desconocido";
                            error = "-3";
                            valor = "-3";
                        }

                    }

                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Asignar_ticket2 Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            Log.write(MyLogClass.LogLevel.Info, "Asignar_ticket2 Resul:" + valor);
            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Reasignar_ticket(string ticket, string persona)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("ticket", ticket);
                parametros.Add("Usuariohp", persona);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Reasignar_ticket]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "-2")
                        {
                            valor = "-2";
                        }
                        else if (valores[0] == "-4")
                        {
                            valor = "-4";
                        }
                        else if (valores[0] == "-5")
                        {
                            valor = "-5";
                        }
                        else if (valores[0] == "-6")
                        {
                            valor = "-6";
                        }
                        else if (valores[0] == "-7")
                        {
                            valor = "-7";
                        }
                        else if (valores[0] == "-8")
                        {
                            valor = "-8";
                        }
                        else if (valores[0] == "-3")
                        {
                            error_mensaje = "Error DB";
                            error = "-3";
                            valor = "-3";
                        }
                        else
                        {
                            error_mensaje = "Error DB Desconocido";
                            error = "-3";
                            valor = "-3";
                        }

                    }

                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Reasignar_ticket Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            Log.write(MyLogClass.LogLevel.Info, "Reasignar_ticket Resul:" + valor);
            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Detalle_ticket(string idticket)
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ticket", idticket);
                
                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Detalle_ticket]", parametros);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Detalle_ticket Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string update_solicitud(string Idticket, string Estado, string Descripcion, string Grupo, string Descripciont, string Sol_especializada,string Idproblema)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }

            Debug.WriteLine("entraron aqui:"+Descripciont);

            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("Ticket", Idticket);
                parametros.Add("Estado", Estado);
                parametros.Add("Descripcion", Descripcion);
                parametros.Add("Grupo", Grupo);
                parametros.Add("Descripciont", Descripciont);
                parametros.Add("Sol_espec", Sol_especializada);
                parametros.Add("Idproblema", Idproblema);
                Debug.WriteLine("entraron aqui 2:" + Descripciont);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Update_solicitud]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "-2")
                        {
                            valor = "-2";
                        }
                        else if (valores[0] == "-4")
                        {
                            valor = "-4";
                        }
                        else if (valores[0] == "-3")
                        {
                            error_mensaje = "Error DB";
                            error = "-3";
                            valor = "-3";
                        }
                        else
                        {
                            error_mensaje = "Error DB Desconocido";
                            error = "-3";
                            valor = "-3";
                        }

                    }

                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "update_solicitud Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            Log.write(MyLogClass.LogLevel.Info, "update_solicitud Resul:" + valor);

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Estadistica_solicitudes()
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                Log.write(MyLogClass.LogLevel.Info, "Estadistica_solicitudes Error:" + t.ToString());
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "No Hay Sesion Activa" });
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);
               

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Estadistica_solicitudes]", parametros);
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt, Resul_Conteo = dt.Rows.Count });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string enviar_chat(string Idticket, string Mensaje, string Tipo)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }

            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("Ticket", Idticket);
                parametros.Add("Mensaje", Mensaje);
                parametros.Add("Tipo", Tipo);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Chat].[Insert_chat]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "-2")
                        {
                            valor = "-2";
                        }
                        else if (valores[0] == "-4")
                        {
                            valor = "-4";
                        }
                        else if (valores[0] == "-3")
                        {
                            error_mensaje = "Error DB";
                            error = "-3";
                            valor = "-3";
                        }
                        else
                        {
                            error_mensaje = "Error DB Desconocido";
                            error = "-3";
                            valor = "-3";
                        }

                    }

                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "enviar_chat Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            Log.write(MyLogClass.LogLevel.Info, "enviar_chat Resul:" + valor);
            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Detalle_chats(string ticket)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ticket", ticket);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Chat].[Detalle_chats]", parametros);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Detalle_chats Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Detalle_imagenes(string ticket)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ticket", ticket);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Detalle_imagenes]", parametros);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Detalle_imagenes Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Detalle_imagenes2(string id)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("idadjunto", id);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Detalle_imagenes2]", parametros);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Detalle_imagenes2 Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Notificacion()
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";

            try
            {
                valor = ""+ Metodos.conteo_solicitud;
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Notificacion Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }
            //Log.write(MyLogClass.LogLevel.Info, "enviar_chat Resul:" + valor);

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Valida_anfa(string ticket)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                usuario = HttpContext.Current.Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
            }

            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Ticket", ticket);
               
                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Valida_anfa]", parametros);
                if (re.Count > 0)
                {
                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                                 valor = valores[0];
                    }
                }
                else
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";
                    valor = "-3";
                }

            }
            catch (Exception er)
            {
                Debug.WriteLine("error:" + er);
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_problemas()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_motivos]");
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }
    }
}