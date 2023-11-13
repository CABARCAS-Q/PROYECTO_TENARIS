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
    public partial class Reportes_turnos : System.Web.UI.Page
    {
        private static MyLogClass Log = new MyLogClass("Reportes_turnos.aspx");

        protected void Page_Load(object sender, EventArgs e)
        {
            //string imag = "";
            try
            {

                if (Request.QueryString["Fecha"] == null)
                {

                }
                else
                {
                    turnos.InnerText = Request.QueryString["Turno"];
                    fechat.InnerText = Request.QueryString["Fecha"];
  
                }


            }
            catch (Exception y)
            {
                Log.write(MyLogClass.LogLevel.Info, "" + y);

            }

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_solicitudes_auto(string fecha, string turno)
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();

            /*
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
            }*/


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("fecha", fecha);
                parametros.Add("turno", turno);


                if (fecha.Length < 1)
                {
                    Log.write(MyLogClass.LogLevel.Info, "Reportes_turnos.aspx:no hay una fecha para el reporte");
                    error_mensaje = "Reportes_turnos.aspx:no hay una fecha para el reporte";
                    return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "Reportes_turnos.aspx:no hay una fecha para el reporte" });
                }
                if (turno.Length < 1)
                {
                    Log.write(MyLogClass.LogLevel.Info, "Reportes_turnos.aspx:no hay un turno para el reporte");
                    error_mensaje = "Reportes_turnos.aspx:no hay un turno para el reporte";
                    return JsonConvert.SerializeObject(new { IsCreated = 0, Error = "error", Mensaje_error = error_mensaje, Resul = "Reportes_turnos.aspx:no hay un turno para el reporte" });
                }

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Helpdesk].[Reportes_solicitud]", parametros);
                //Metodos.conteo_solicitud = 0;
            }
            catch (Exception er)
            {

                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt, Resul_Conteo = dt.Rows.Count });
        }

    }
}