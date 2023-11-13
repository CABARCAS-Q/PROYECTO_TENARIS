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
    public partial class Reporte_inventario_nuevo : System.Web.UI.Page
    {
        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("Reporte_inventario_nuevo.aspx");
        protected void Page_Load(object sender, EventArgs e)
        {

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
        public static string lista_accesory()
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();
            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                //parametros.Add("linea", linea);

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Inventory].[Lista_accesory]", parametros);
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
        public static string lista_reporte(string linea, string machine, string estado)
        {

            Dictionary<string, Object> parametros = new Dictionary<string, object>();

            if (machine != "0")
            {

                parametros.Add("maquina", machine);
            }
           
            if (estado != "0")
            {

                parametros.Add("estadodet", estado);
            }

            string error = "0";
            string error_mensaje = "";
            DataTable dt = new DataTable();

            try
            {
                Consultas objetoconexiones = new Consultas();


                parametros.Add("linea", linea);
              

                dt = objetoconexiones.metodolista_datos_d1("[Inventory].[Reporte_accesory]", parametros);

               // ArrayList re = objetoconexiones.metodolista_datos1("[Inventory].[Reporte_accesory]", parametros);

             
            }
            catch (Exception er)
            {
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt });
        }
    }
}
