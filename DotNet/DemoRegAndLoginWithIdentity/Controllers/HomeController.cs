using DemoRegAndLoginWithIdentity.Data;
using DemoRegAndLoginWithIdentity.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DemoRegAndLoginWithIdentity.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private AppDbContext _dbContext;



        public HomeController(ILogger<HomeController> logger,AppDbContext context)
        {
            _logger = logger;

            _dbContext = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(Contact contact)
        {
            if(ModelState.IsValid) { 

            _dbContext.Contacts.Add(contact);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");

            }
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
