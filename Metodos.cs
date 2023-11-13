using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace Helpdesk_Auto.Codigos
{
    public class Metodos
    {
        //correo comprobar
        bool invalid = false;
        public static int conteo_solicitud = 0;
        public static string ipvisitante()
        {
            string ipv = "";

            try
            {

                
                System.Web.HttpContext context = System.Web.HttpContext.Current;
                string ip = context.Request.ServerVariables["HHTP_X_FORWARDED_FOR"];
                if (!string.IsNullOrEmpty(ip))
                {
                    string[] address = ip.Split(',');
                    if (address.Length != 0)
                    {
                        Debug.WriteLine("ip:" + address[0]);
                        return ipv = address[0];

                    }
                }

                Debug.WriteLine("ip:" + context.Request.ServerVariables["REMOTE_ADDR"]);
                return ipv = context.Request.ServerVariables["REMOTE_ADDR"];
            }
            catch (Exception)
            {
                ipv = "ERROR IP";
            }



            return ipv;
        }
        public bool IsValidEmail(string strIn)
        {
            invalid = false;
            if (String.IsNullOrEmpty(strIn))
                return false;

            // Use IdnMapping class to convert Unicode domain names.
            try
            {
                strIn = Regex.Replace(strIn, @"(@)(.+)$", this.DomainMapper,
                                      RegexOptions.None, TimeSpan.FromMilliseconds(200));
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }

            if (invalid)
                return false;

            // Return true if strIn is in valid e-mail format.
            try
            {
                return Regex.IsMatch(strIn,
                      @"^(?("")(""[^""]+?""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))" +
                      @"(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-\w]*[0-9a-z]*\.)+[a-z0-9]{2,24}))$",
                      RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250));
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }
        public bool IsValidpass(string strIn)
        {
            // Return true if strIn is in valid e-mail format.
            try
            {



                return Regex.IsMatch(strIn,
                       @"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$",
                       RegexOptions.None, TimeSpan.FromMilliseconds(250));

            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }

        }
        private string DomainMapper(Match match)
        {
            // IdnMapping class with default property values.
            IdnMapping idn = new IdnMapping();

            string domainName = match.Groups[2].Value;
            try
            {
                domainName = idn.GetAscii(domainName);
            }
            catch (ArgumentException)
            {
                invalid = true;
            }
            return match.Groups[1].Value + domainName;
        }
    }
}