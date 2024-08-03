using DemoRegAndLoginWithIdentity.Data;
using DemoRegAndLoginWithIdentity.DTO;
using DemoRegAndLoginWithIdentity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DemoRegAndLoginWithIdentity.Controllers
{

    
    public class AdminController : Controller
    { 
        private readonly RoleManager<IdentityRole> _roleManager;

        private AppDbContext _dbContext;

        public AdminController(RoleManager<IdentityRole> roleManager, AppDbContext context)
        {
            _roleManager = roleManager;
            _dbContext = context;
        }

        [HttpGet]
        //[Authorize(Roles = "Admin")]
        public IActionResult Create()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public IActionResult Index()
        {
            return View();
        }
        [Authorize(Roles = "Admin")]
        public IActionResult AddService()
        {
            return View();
        }
        [Authorize(Roles = "Admin")]
        public IActionResult GetBooking()
        {
            var booking=_dbContext.bookingService;
            return View(booking);
        }
        [Authorize(Roles = "Admin")]
        public IActionResult GetFeedback()
        {
            var getfeedback = _dbContext.Feedbacks;
            return View(getfeedback);
        }

        public IActionResult ViewCenter()
        {
            var getfeedback = _dbContext.ServiceCenter;
            return View(getfeedback);
        }

        [Authorize(Roles = "Admin")]
        public IActionResult GetContact()
        {
            var contact=_dbContext.Contacts;
            return View(contact);
        }


        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> Create(RoleStore rolestore)
        {
            var alreadyAdded = await _roleManager.RoleExistsAsync(rolestore.RoleName);

            if (!alreadyAdded)
            {
                await _roleManager.CreateAsync(new IdentityRole(rolestore.RoleName));
                return RedirectToAction("Index");
            }
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _dbContext.Contacts == null)
            {
                return NotFound();
            }

            var student = await _dbContext.Contacts
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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_dbContext.Contacts == null)
            {
                return Problem("Entity set 'AppDbContext.Students'  is null.");
            }
            var student = await _dbContext.Contacts.FindAsync(id);
            if (student != null)
            {
                _dbContext.Contacts.Remove(student);
            }

            await _dbContext.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        //Feedback Get
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete1(int? id)
        {
            if (id == null || _dbContext.Feedbacks == null)
            {
                return NotFound();
            }

            var student = await _dbContext.Feedbacks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (student == null)
            {
                return NotFound();
            }

            return View();
        }

        // POST: Feedback/Delete/5
        [HttpPost, ActionName("Delete1")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteConfirmed1(int id)
        {
            if (_dbContext.Feedbacks == null)
            {
                return Problem("Entity set 'AppDbContext.Students'  is null.");
            }
            var student = await _dbContext.Feedbacks.FindAsync(id);
            if (student != null)
            {
                _dbContext.Feedbacks.Remove(student);
            }

            await _dbContext.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        //////// GET: Feedbacks
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Details1()
        {
            return _dbContext.Feedbacks != null ?
                        View(await _dbContext.Feedbacks.ToListAsync()) :
                      Problem("Entity set 'AppDbContext.Feedbacks'  is null.");
        }
        //// GET: Students/Details/5
        ///
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _dbContext.Feedbacks == null)
            {
                return NotFound();
            }

            var student = await _dbContext.Feedbacks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }


        private bool ContactExists(int id)
        {
            return (_dbContext.Contacts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
