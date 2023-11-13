using Helpdesk_Auto.Codigos;
using Helpdesk_Auto.ConexionDB;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class ReporteTurning : System.Web.UI.Page
    {
        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("ReporteTurning.aspx");
        protected void Page_Load(object sender, EventArgs e)
        {


        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_usuarios(string month, string year)
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("month", month);
                parametros.Add("year", year);
                dt = objetoconexiones.metodolista_datos_d1("ObtenerUserPorMesYAnio", parametros);
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
        public static string lista_turno()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Lista_turnos]");
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
        public static string lista_años()
        {


            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos("[Helpdesk].[Años]");
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
        public static string ConsultarDatosDesdeBD(string month, string year)
        {
            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {
                Consultas objetoconexiones = new Consultas();
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("month", month);
                parametros.Add("year", year);
                dt = objetoconexiones.metodolista_datos_d1("ObtenerTurnosPorMesYAnio", parametros);
                ArrayList re = objetoconexiones.metodolista_datos1("ObtenerTurnosPorMesYAnio", parametros);
                if (re.Count <=0)
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";

                }
                else
                {
                    error = "1";
                }

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
        public static string consultarDetalleDia(int month, int year,int dia)
        {
            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {
                Consultas objetoconexiones = new Consultas();
                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("month", month);
                parametros.Add("year", year);
                parametros.Add("day", dia);
                dt = objetoconexiones.metodolista_datos_d1("ObtenerInterrupcionPorMesAnioYDia", parametros);
                ArrayList re = objetoconexiones.metodolista_datos1("ObtenerInterrupcionPorMesAnioYDia", parametros);
                if (re.Count <= 0)
                {
                    error_mensaje = "no hubo Resultados de la DB";
                    error = "-3";

                }
                else
                {
                    error = "1";
                }

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

     

