using Helpdesk_Auto.Codigos;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace Helpdesk_Auto.ConexionDB
{
    public class Conexion
    {
        private static MyLogClass Log = new MyLogClass("conexion.cs");

        public SqlConnection oConn;

        public void AbrirConexion()
        {

            try
            {

                string url = "";
                try
                {

                    url = WebConfigurationManager.AppSettings["DB"];

              
                    if (url.Length > 0)
                    {

                    }
                    else
                    {
                        //Debug.WriteLine("NOMBRE BASE DATOS:no hay" + url);
                        Log.write(MyLogClass.LogLevel.Info, "no hay cadena de conexion a base datos");
                        return;
                    }



                }
                catch (Exception e1)
                {
                    //Debug.WriteLine("error 1:" + e1);
                    Log.write(MyLogClass.LogLevel.Info, "" + e1);
                    return;
                }

                Debug.WriteLine("entro a conectar");

                oConn = new SqlConnection(url);
                oConn.Open();
                //Console.WriteLine("entro correcto");
                //Debug.WriteLine("entro correcto");
            }
            catch (Exception e)
            {
                //oConn.Close();
                Debug.WriteLine("error 1:" + e);
                Log.write(MyLogClass.LogLevel.Info, "" + e);
            }
        }
        public void CerrarConexion()
        {
            try
            {
                Debug.WriteLine("cerro conexion correcto" );
                oConn.Close();
            }
            catch (Exception e)
            {
                //Debug.WriteLine("error" + e);
                Log.write(MyLogClass.LogLevel.Info, "" + e);
            }
        }

    }
}