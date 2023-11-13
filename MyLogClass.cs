using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace Helpdesk_Auto.Codigos
{
    public class MyLogClass
    {

        public enum LogLevel
        {
            Info,
            Warn,
            Error,
            Fatal
        }

        string fecha1 = DateTime.Now.ToString("yyyy-MM-dd").ToString();

        //const string nombre= constante() + ;
        //const string tmpDataToSave1 = nombre;//
        const string LOG_FILE_NAME = "_helpdesk_log.txt";
        private readonly string _folderSave;
        private readonly string _logName;
        string url = WebConfigurationManager.AppSettings["log"];

        public MyLogClass(string logName)
        {

            _folderSave = url;
            _logName = logName;


            if (!_folderSave.EndsWith(@"\"))
                _folderSave += @"\";

            //if (!Directory.Exists(_folderSave))
            //    throw new DirectoryNotFoundException("Directory Not Found");
        }
        public void write(LogLevel loglevel, string dataToSave)
        {

            try
            {
                fecha1 = DateTime.Now.ToString("yyyy-MM-dd").ToString();

                //LOG_FILE_NAME = LOG_FILE_NAME 
                using (FileStream fs = new FileStream(_folderSave + fecha1 + LOG_FILE_NAME, FileMode.Append))
                {
                    using (StreamWriter sw = new StreamWriter(fs))
                    {
                        string tmpDataToSave = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + "";
                        tmpDataToSave += loglevel.ToString().PadRight(6).ToUpper();
                        tmpDataToSave += _logName.PadRight(15) + " - ";
                        tmpDataToSave += dataToSave.Replace(Environment.NewLine, "");
                        sw.WriteLine(tmpDataToSave);

                    }
                }

            }
            catch (Exception log)
            {
                Debug.WriteLine("ERROR LOG:" + log);
            }

        }

    }
}