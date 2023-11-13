using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Helpdesk_Auto.Codigos;

namespace Helpdesk_Auto.ConexionDB
{
    public class ConsultasN2
    {

        private static MyLogClass Log = new MyLogClass("conexionN2.cs");
        private Conexion cn0 = new Conexion();
        private ConexionN2 cn = new ConexionN2();
        protected SqlCommand cmd;


        public string insertar_log(string dato1)
        {
            string consulta = "DECLARE @resultado nvarchar (max)  EXEC  Sis_config.Insertar_log '" + dato1 + "', @resultado OUTPUT SELECT @resultado";


            Debug.WriteLine(consulta);
            string re = "";
            try
            {
                cn0.AbrirConexion();
                cmd = new SqlCommand(consulta);
                cmd.Connection = cn0.oConn;
                cmd.CommandType = CommandType.Text;
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        re = "" + reader.GetValue(0);

                    }
                }
                else
                {

                }
                reader.Close();
            }
            catch (Exception t)
            {
                Debug.WriteLine("" + t);
                cn0.CerrarConexion();
                Log.write(MyLogClass.LogLevel.Info, "" + t);

            }
            cn0.CerrarConexion();

            return re;

        }
        public DataTable metodolista_datos_d1(String dato1, Dictionary<String, Object> dato2)
        {
            //Debug.WriteLine("metodolista_datos1 "+dato1+" "+dato2);
            string consulta = "exec " + dato1;


            Debug.WriteLine(consulta);
            Log.write(MyLogClass.LogLevel.Info, "SP:" + consulta);
            DataTable dt = new DataTable();
            try
            {
                cn.AbrirConexion();
                cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = dato1;

                foreach (KeyValuePair<string, Object> element in dato2)
                {
                    cmd.Parameters.AddWithValue(element.Key, element.Value);
                    Log.write(MyLogClass.LogLevel.Info, element.Key + " - " + element.Value);
                }

                cmd.Connection = cn.oConn;
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                da.Fill(dt);

            }
            catch (Exception t)
            {
                cn.CerrarConexion();
                insertar_log("" + t);
                Log.write(MyLogClass.LogLevel.Info, "" + t);

            }
            cn.CerrarConexion();

            //Debug.WriteLine("valor menus:" + resultado.Count);

            return dt;
        }
        public DataTable metodolista_datos(String dato1)
        {
            //Debug.WriteLine("metodolista_datos1 "+dato1+" "+dato2);
            string consulta = "exec " + dato1;


            Debug.WriteLine(consulta);
            Log.write(MyLogClass.LogLevel.Info, "SP:" + consulta);
            DataTable dt = new DataTable();
            try
            {
                cn.AbrirConexion();
                cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = dato1;

                cmd.Connection = cn.oConn;
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                da.Fill(dt);

            }
            catch (Exception t)
            {
                cn.CerrarConexion();
                insertar_log("" + t);
                Log.write(MyLogClass.LogLevel.Info, "" + t);

            }
            cn.CerrarConexion();

            //Debug.WriteLine("valor menus:" + resultado.Count);

            return dt;
        }
        public ArrayList metodolista_datos1(String dato1, Dictionary<String, Object> dato2)
        {
            //Debug.WriteLine("metodolista_datos1 "+dato1+" "+dato2);
            string consulta = "exec " + dato1;


            Debug.WriteLine(consulta);
            Log.write(MyLogClass.LogLevel.Info, "SP:" + consulta);
            Debug.WriteLine("No parametros:" + dato2.Count);
            ArrayList resultado = new ArrayList();
            try
            {
                cn.AbrirConexion();
                cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = dato1;

                foreach (KeyValuePair<string, Object> element in dato2)
                {
                    Log.write(MyLogClass.LogLevel.Info, element.Key + " - " + element.Value);
                    cmd.Parameters.AddWithValue(element.Key, element.Value);
                }

                cmd.Connection = cn.oConn;
                SqlDataReader reader = cmd.ExecuteReader();


                if (reader.HasRows)
                {

                    while (reader.Read())
                    {

                        //Debug.WriteLine("Resultado:" + reader.GetValue(0) );
                        resultado.Add(reader.GetValue(0));
                    }


                }
                else
                {
                    //Debug.WriteLine("Resultado No Hay Datos");
                }

            }
            catch (Exception t)
            {
                cn.CerrarConexion();
                insertar_log("" + t);
                Log.write(MyLogClass.LogLevel.Info, "" + t);

            }
            cn.CerrarConexion();

            //Debug.WriteLine("valor menus:" + resultado.Count);

            return resultado;
        }
        public ArrayList metodolista_datos3(String dato1, String dato2, String dato3, String dato4)
        {
            //Debug.WriteLine("metodolista_datos1 "+dato1+" "+dato2);
            string consulta = "exec " + dato1 + "  " + dato2 + " , " + dato3 + " , " + dato4;


            Debug.WriteLine(consulta);
            ArrayList resultado = new ArrayList();
            try
            {
                cn.AbrirConexion();
                cmd = new SqlCommand(consulta);
                cmd.Connection = cn.oConn;
                SqlDataReader reader = cmd.ExecuteReader();


                if (reader.HasRows)
                {

                    while (reader.Read())
                    {

                        //Debug.WriteLine("Resultado:" + reader.GetValue(0) );
                        resultado.Add(reader.GetValue(0));
                    }


                }
                else
                {
                    //Debug.WriteLine("Resultado No Hay Datos");
                }

            }
            catch (Exception t)
            {
                cn.CerrarConexion();
                insertar_log("" + t);
                Log.write(MyLogClass.LogLevel.Info, "" + t);

            }
            cn.CerrarConexion();

            //Debug.WriteLine("valor menus:" + resultado.Count);

            return resultado;
        }
    }
}