using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class ANFAR : System.Web.UI.Page
    {
        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("ANFAR.aspx");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["Ticket"] == null)
            {

            }
            else
            {
                codigobusqueda.Value = Request.QueryString["Ticket"].ToString();
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string Detalle_anfa(string idticket)
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ticket", idticket);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[ANFA].[Detalle_anfa]", parametros);
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
        public static string lista_personal_anfa(string idticket)
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

                error_mensaje = t.ToString();
                return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "No Hay Sesion Activa" });
            }


            try
            {
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("ticket", idticket);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[ANFA].[Lista_personal_apoyo_anfa]",parametros);
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
        public static string Detalle_archivos(string Idanfa)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("Id", Idanfa);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[ANFA].[Detalle_archivos]", parametros);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Detalle_imagenes Error:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }

    }
}