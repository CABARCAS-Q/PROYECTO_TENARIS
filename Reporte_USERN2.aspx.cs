using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using Newtonsoft.Json;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class Reporte_USERN2 : System.Web.UI.Page
    {

        Consultas objetoconexiones = new Consultas();
        ConsultasN2 objetoconexiones2 = new ConsultasN2();

        private static MyLogClass Log = new MyLogClass("Reporte_USERN2.aspx");


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
                        if (valor[4] == "Reporte_USERN2.aspx")
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

                    Debug.WriteLine("resul pass:" + re);

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


                try
                {

                    if (Request.QueryString["Val"] == null)
                    {

                    }
                    else
                    {
                        codigobusqueda.Value = Request.QueryString["Val"].ToString();
                        fechabusqueda1.Value = DateTime.Now.ToString("yyyy-MM-dd");
                        fechabusqueda2.Value = DateTime.Now.ToString("yyyy-MM-dd");
                    }

                }
                catch (Exception t)
                {
                    //Debug.WriteLine("Error menu:" + t);
                    Log.write(MyLogClass.LogLevel.Info, "" + t);

                }

            }

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

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string carga_Lineas(String Linea)
        {

            String error = "0";
            String error_mensaje = "";
            try{
            HttpContext.Current.Session["DBN2"] = "" + Linea;
            Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er){
                error_mensaje = er.ToString();
                error = "-3";
            }

           
            DataTable dt = new DataTable();
            try
            {

                ConsultasN2 objetoconexiones = new ConsultasN2();
                dt = objetoconexiones.metodolista_datos("[Security].[GetGroups]");
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
        public static string lista_reporte(string ID, string Nombres, string Perfil, string Estado)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            //String usuario = "";

            //try
            //{
            //    int sess = HttpContext.Current.Session["usuario"].ToString().Length;
            //    usuario = HttpContext.Current.Session["usuario"].ToString();
            //}
            //catch (Exception t)
            //{

             //   error_mensaje = t.ToString();
               // return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "No Hay Sesion Activa" });
           // }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();

                if (ID.Length > 0)
                {
                        parametros.Add("Identification",ID);
                }

                if (Nombres.Length > 0)
                {
                    parametros.Add("Nombres", Nombres);
                }

                if (Perfil.Length > 0)
                {
                    if (Perfil != "0")
                    {
                        parametros.Add("Perfiles", Perfil);
                    }
                }

                if (Estado.Length > 0)
                {
                    if (Estado != "Todos")
                    {
                        parametros.Add("Estado", Estado);
                    }
                }

                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + ConexionN2.Base);

                ConsultasN2 objetoconexiones = new ConsultasN2();
                dt = objetoconexiones.metodolista_datos_d1("[Security].[GetAllUser02]", parametros);
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_reportedet(string ID)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String valor = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }

            try
            {
               // HttpContext.Current.Session["DBN2"] = "" + Linea;
                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-3";
            }


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();

                if (ID.Length > 0)
                {
                    parametros.Add("ID", ID);
                }

              

                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + ConexionN2.Base);

                ConsultasN2 objetoconexiones = new ConsultasN2();
                dt = objetoconexiones.metodolista_datos_d1("[Security].[GetAllUser03]", parametros);
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_reportedet2(string ID)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();

            String valor = "";
            //String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor  = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }

            try
            {
                // HttpContext.Current.Session["DBN2"] = "" + Linea;
                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-3";
            }

            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();

                if (ID.Length > 0)
                {
                    parametros.Add("ID", ID);
                }



                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + ConexionN2.Base);

                ConsultasN2 objetoconexiones = new ConsultasN2();
                dt = objetoconexiones.metodolista_datos_d1("[Security].[GetAllUser03]", parametros);
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Agregar_perfil(string id, string idperfil)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            //String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }

            try
            {
                // HttpContext.Current.Session["DBN2"] = "" + Linea;
                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-3";
            }

            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
               // parametros.Add("Usuario", usuario);              
                if (id.Length > 0)
                {
                    parametros.Add("ID", id);

                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay usuario para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }
                if (idperfil.Length > 0)
                {
                    parametros.Add("Idperfil", idperfil);
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay perfiles para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }

                parametros.Add("Accion", '1');


                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[UpdateUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');

                        Log.write(MyLogClass.LogLevel.Info, "Resul:" + valores[0]);
                        if (Int64.Parse(valores[0]) >0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "ya hay un usuario con este mismo idperfil";
                            error = "-2";
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

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Eliminar_perfil(string id, string idperfil)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            int val = 0;
            //String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }

            try
            {
                // HttpContext.Current.Session["DBN2"] = "" + Linea;
                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-3";
            }
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                // parametros.Add("Usuario", usuario);              
                if (id.Length > 0)
                {
                    parametros.Add("ID", id);
                    val++;
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay usuario para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }
                if (idperfil.Length > 0)
                {
                    val++;
                    parametros.Add("Idperfil", idperfil);
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay perfiles para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }

                if (val == 2)
                {
                    parametros.Add("Accion", '2');
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay perfiles para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }


                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[UpdateUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');

                        Log.write(MyLogClass.LogLevel.Info, "Resul:" + valores[0]);
                        if (Int64.Parse(valores[0]) > 0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "No hay usuario con este mismo idperfil";
                            error = "-2";
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

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Reset_perfil(string id)
        {

            String valor = "0";
            String error = "0";
            String error_mensaje = "";
            //String usuario = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
               return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }

            try
            {
                // HttpContext.Current.Session["DBN2"] = "" + Linea;
                Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-1";
            }
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                // parametros.Add("Usuario", usuario);              
                if (id.Length > 0)
                {
                    parametros.Add("ID", id);
                    parametros.Add("Accion", '3');
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay usuario para consultar";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }
                

                


                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[UpdateUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');

                        Log.write(MyLogClass.LogLevel.Info, "Resul:" + valores[0]);
                        if (Int64.Parse(valores[0]) > 0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "no hay un usuario con este mismo ID";
                            error = "-2";
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

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
        }



        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string guardar_actualizado(int id, string lo_estado, string lo_tenaris, string lo_resetp)
        {

            String valor = "0";
            
            String error = "0";
            String error_mensaje = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }


            try
            {

                Debug.WriteLine("DATOS:" + id);
                Debug.WriteLine("DATOS:" + lo_estado);
                Debug.WriteLine("DATOS:" + lo_tenaris);
                Debug.WriteLine("DATOS" + lo_resetp);

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ID",id);
                parametros.Add("Accion", 4);
                parametros.Add("istenaris",lo_tenaris );
                parametros.Add("isreset",lo_resetp );
                parametros.Add("active", lo_estado);




                try
                {
                    // HttpContext.Current.Session["DBN2"] = "" + Linea;
                    Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
                }
                catch (Exception er)
                {
                    error_mensaje = er.ToString();
                    error = "-3";
                }



                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[UpdateUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (Int64.Parse(valores[0]) > 0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "no hay un usuario con este mismo ID";
                            error = "-2";
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


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Enviar_creacion_usuario(string identificacion, string FistName, string LastName, string IS_tenaris , string resetp_tenaris, string selectElement)
        {

            String valor = "0";

            String error = "0";
            String error_mensaje = "";

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }


            try
            {

                Debug.WriteLine("DATOS:" + identificacion);
                Debug.WriteLine("DATOS:" + FistName);
                Debug.WriteLine("DATOS:" + LastName);
                Debug.WriteLine("DATOS" + IS_tenaris);
                Debug.WriteLine("DATOS" + resetp_tenaris);
                Debug.WriteLine("DATOS" + selectElement);

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Identification", identificacion);
                parametros.Add("FirstName", FistName);
                parametros.Add("LastName", LastName);
                parametros.Add("istenaris", IS_tenaris);
                parametros.Add("isreset", resetp_tenaris);
                parametros.Add("Perfiles", selectElement);




                try
                {
                    // HttpContext.Current.Session["DBN2"] = "" + Linea;
                    Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
                }
                catch (Exception er)
                {
                    error_mensaje = er.ToString();
                    error = "-3";
                }



                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[InsUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (Int64.Parse(valores[0]) > 0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "no hay un usuario con este mismo ID";
                            error = "-2";
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


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string set_password(string password ,string idd)
        {
            
           

            String valor = "0";

            String error = "0";
            String error_mensaje = "";

            String passmd5 = GetMD5(password);

            try
            {
                int sess = HttpContext.Current.Session["usuario"].ToString().Length;
                //usuario = httpcontext.current.session["usuario"].tostring();
            }
            catch (Exception t)
            {
                valor = "-1";
                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { error = error, mensaje_error = error_mensaje, resul = valor });
            }


            try
            {

                Debug.WriteLine("DATOS:" + passmd5);
          

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                
              


                if (idd.Length > 0 && passmd5.Length > 5)
                {
                    parametros.Add("@ID", idd);
                    parametros.Add("@pass", passmd5.ToUpper());
                    parametros.Add("@Accion", '5');
                }
                else
                {
                    valor = "-1";
                    error_mensaje = "no hay usuario para consultar o pass vacia o menor que 5 digitos";
                    return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = valor });
                }
                



                try
                {
                    // HttpContext.Current.Session["DBN2"] = "" + Linea;
                    Log.write(MyLogClass.LogLevel.Info, "DB consulta:" + HttpContext.Current.Session["DBN2"].ToString());
                }
                catch (Exception er)
                {
                    error_mensaje = er.ToString();
                    error = "-3";
                }



                ConsultasN2 objetoconexiones = new ConsultasN2();
                ArrayList re = objetoconexiones.metodolista_datos1("[Security].[UpdateUser02]", parametros);
                if (re.Count > 0)
                {

                    foreach (Object obj in re)
                    {
                        string[] valores = obj.ToString().Split('|');
                        if (Int64.Parse(valores[0]) > 0)
                        {
                            valor = "1";
                        }
                        else if (valores[0] == "0")
                        {
                            valor = "-3";
                        }
                        else if (valores[0] == "-2")
                        {
                            error_mensaje = "no hay un usuario con este mismo ID";
                            error = "-2";
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


        public static string GetMD5(string str)
        {
            MD5 md5 = MD5CryptoServiceProvider.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = md5.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }

    }



}

    


      
    
