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
    public partial class Mapa_monitoreo : System.Web.UI.Page
    {

        Consultas objetoconexiones = new Consultas();
        private static MyLogClass Log = new MyLogClass("Mapa_monitoreo.aspx");

        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string carga_informacion()
        {

            String error = "0";
            String error_mensaje = "";
            DataTable dt = new DataTable();


            String usuario = "";

           


            try
            {

                Dictionary<string, Object> parametros = new Dictionary<string, object>();
                parametros.Add("usuario", usuario);
                parametros.Add("estado", '1');

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


    }
}