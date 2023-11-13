using Helpdesk_Auto.Codigos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class Imagenes : System.Web.UI.Page
    {

        private static MyLogClass Log = new MyLogClass("Imagenes.aspx");

        protected void Page_Load(object sender, EventArgs e)
        {
            string imag = "";
            try
            {

                if (Request.QueryString["Imag"] == null)
                {

                }
                else
                {
                    imag = Request.QueryString["Imag"];
                  
                    imagenn.Src = "../Archivos/"+imag;
                }

                
            }
            catch (Exception y)
            {
                Log.write(MyLogClass.LogLevel.Info, "" + y);
               
            }

        }
    }
}