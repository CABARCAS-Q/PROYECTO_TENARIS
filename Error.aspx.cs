using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Helpdesk_Auto.Helpdesk
{
    public partial class Error : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void inicio_Click(object sender, EventArgs e)
        {
            string validauser = "";
            try
            {
                validauser = Session["usuario"].ToString();
            }
            catch (Exception t)
            {
                Console.WriteLine("Error:" + t);
                Response.Redirect("Login.aspx");

            }


            if (validauser.Length > 0)
            {
                Response.Redirect("Menu.aspx");
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
        }
    }
}