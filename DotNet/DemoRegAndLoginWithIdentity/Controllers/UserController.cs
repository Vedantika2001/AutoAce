using DemoRegAndLoginWithIdentity.Data;
using DemoRegAndLoginWithIdentity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DemoRegAndLoginWithIdentity.Controllers
{
    public class UserController : Controller
    {

        private readonly ILogger<UserController> _logger;

        private AppDbContext _dbContext;

        public UserController(ILogger<UserController> logger, AppDbContext context)
        {
            _logger = logger;

            _dbContext = context;
        }
        [Authorize(Roles = "User")]
        public IActionResult Index()
        {
            return View();
        }
        [Authorize(Roles = "User")]
        public IActionResult BookNow1()
        {
            return View();
        }

        [Authorize(Roles = "User")]
        public IActionResult GetBooking()
        {
            var booking = _dbContext.bookingService;
            return View(booking);
            
        }
        public IActionResult GetServiceCenter()
        {
            var servicecenter = _dbContext.ServiceCenter;
            return View(servicecenter);

        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _dbContext.bookingService== null)
            {
                return NotFound();
            }

            var student = await _dbContext.bookingService
                .FirstOrDefaultAsync(m => m.Id == id);
            if (student == null)
            {
                return NotFound();
            }

            return View();
        }


        // POST: Contacts/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_dbContext.bookingService == null)
            {
                return Problem("Entity set 'AppDbContext.Students'  is null.");
            }
            var student = await _dbContext.bookingService.FindAsync(id);
            if (student != null)
            {
                _dbContext.bookingService.Remove(student);
            }

            await _dbContext.SaveChangesAsync();
            return RedirectToAction("GetBooking");
        }

        [Authorize(Roles = "User")]
        [HttpGet]
        public IActionResult Feedback()
        {
            return View();
        }

        [Authorize(Roles = "User")]
        [HttpPost]
        public IActionResult Feedback(Feedback feedback)
        {
            _dbContext.Feedbacks.Add(feedback);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
           
        }

    }
}
