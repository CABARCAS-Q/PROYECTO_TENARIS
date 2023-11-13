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
    public partial class Mapa_monitoreo_detalles : System.Web.UI.Page
    {

        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("Mapa_monitoreo_detalles.aspx");

    

        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string lista_reporte(string fecha1, string fecha2, string linea, string estado)
        {

            
            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String usuario = "";

           


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);

                if(estado=="1"){
                      parametros.Add("estado", estado);
                }

                if(linea!="0"){

                     parametros.Add("linea", linea);
                }

             

                Consultas objetoconexiones = new Consultas();
                dt = objetoconexiones.metodolista_datos_d1("[Monitor].[Lista_reportes_server]", parametros);

                Log.write(MyLogClass.LogLevel.Info, "Mapa_monitoreo:" + dt.Rows.Count);
            }
            catch (Exception er)
            {
                Log.write(MyLogClass.LogLevel.Info, "Mapa_monitoreo:" + er.ToString());
                error_mensaje = er.ToString();
                error = "-3";
            }

            return JsonConvert.SerializeObject(new { IsCreated = 1, Error = error, Mensaje_error = error_mensaje, Resul = dt });
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

       

      
        }
    
}