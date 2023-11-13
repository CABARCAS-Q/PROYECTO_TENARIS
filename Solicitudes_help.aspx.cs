using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{


    public partial class Solicitudes_help : System.Web.UI.Page
    {
        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("Solicitudes_help.aspx");
        //Upload_images ob = new Upload_images();



        protected void Page_Load(object sender, EventArgs e)
        {

            if (!this.IsPostBack) // to avoid reloading your control on postback
            {


                Page.Form.Attributes.Add("enctype", "multipart/form-data");
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
                            if (valor[4] == "Solicitudes_help.aspx")
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

                Usuario.Value = Session["usuarionombre"].ToString();

                ClientScript.RegisterStartupScript(this.GetType(), "JSScript", sb.ToString());

            }
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
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_motivos]");
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Max_solicitud()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Max_solicitud]");
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_maquinas(string linea)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("linea", linea);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[tuca].[Lista_maquinas]", parametros);
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string crear_solicitud(string linea, string maquina, string tipo, string observaciones)
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


                string imagenes = HttpContext.Current.Session["Imagenes"].ToString();

                Debug.WriteLine("Imag:" + imagenes);

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Usuario", usuario);
                parametros.Add("Linea", linea);
                parametros.Add("Maquina", maquina);
                parametros.Add("Tipo", tipo);
                parametros.Add("Observaciones", observaciones);
                parametros.Add("Imagenes", imagenes);

                Consultas objetoconexiones = new Consultas();
                ArrayList re = objetoconexiones.metodolista_datos1("[Helpdesk].[Generar_nueva_solicitud]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (valores[0] == "1")
                        {
                            valor = "1";
                            HttpContext.Current.Session["Imagenes"] = "";
                            Metodos.conteo_solicitud++;
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-2";
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
                Debug.WriteLine("error:" + er);
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        private static Boolean validaExtension(String sextension)
        {
            Boolean rel = false;
            switch (sextension.ToLower())
            {
                case ".png":
                    rel = true;
                    break;
                case ".jpeg":
                    rel = true;
                    break;
                default:
                    rel = false;
                    break;
            }

            return rel;
        }

        protected void UploadComplete(object sender, AjaxControlToolkit.AjaxFileUploadEventArgs e)
        {

            Debug.WriteLine("entro");
            try
            {

                var parsedFileName = Path.GetFileName(e.FileName);
                var fileName = string.Format(DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss_") + parsedFileName);
                //string path = Server.MapPath("~/Archivos/" + Session.SessionID.ToString()+""+e.FileName);
                var path = Path.Combine(Server.MapPath("~/Archivos/"), string.Format("{0}", fileName));
                AjaxFileUpload1.SaveAs(path);
                //AjaxFileUpload1.SaveAs(fileName);

                if (Session["Imagenes"].ToString().Length > 1)
                {
                    Session["Imagenes"] = Session["Imagenes"] + "|" + fileName.ToString();
                }
                else
                {
                    Session["Imagenes"] = fileName.ToString();
                }

            }
            catch (Exception im)
            {

                Log.write(MyLogClass.LogLevel.Info, "UploadComplete:" + im);
            }

        }

    }
}