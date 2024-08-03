using Microsoft.AspNetCore.Mvc;

namespace DemoRegAndLoginWithIdentity.Controllers
{
    public class HomeController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
