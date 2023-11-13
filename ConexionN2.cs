using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace Helpdesk_Auto.ConexionDB
{
    public class ConexionN2
    {

        public SqlConnection oConn;
        public static string Base = "";

        public void AbrirConexion()
        {

            try
            {

                string DB = HttpContext.Current.Session["DBN2"].ToString();

                //String DB = "data source=10.20.168.94;initial catalog=Turning;persist security info=True;user id=sa;password=auto_4dm1n;MultipleActiveResultSets=True;Integrated Security = true;Trusted_Connection=false";
                try
                {

                    if (DB.Length > 0)
                    {
                        Debug.WriteLine("DB:" + DB);
                    }
                    else
                    {
                        Debug.WriteLine("NOMBRE BASE DATOS:no hay" + DB);
                        //Log.write(MyLogClass.LogLevel.Info, "no hay cadena de conexion a base datos");
                        return;
                    }


                }
                catch (Exception e1)
                {
                    Debug.WriteLine("error 1:" + e1);
                    //Log.write(MyLogClass.LogLevel.Info, "" + e1);
                    return;
                }

                Debug.WriteLine("entro a conectar");

                oConn = new SqlConnection(DB);
                oConn.Open();
                //Console.WriteLine("entro correcto");
                //Debug.WriteLine("entro correcto");
            }
            catch (Exception e)
            {
                //oConn.Close();
                Debug.WriteLine("error conexion:" + e);
                //Log.write(MyLogClass.LogLevel.Info, "" + e);
            }
        }
        public void CerrarConexion()
        {
            try
            {
                Debug.WriteLine("cerro conexion correcto");
                oConn.Close();
            }
            catch (Exception e)
            {
                Debug.WriteLine("error cerrando conexion" + e);
                //Log.write(MyLogClass.LogLevel.Info, "" + e);
            }
        }
    }
}