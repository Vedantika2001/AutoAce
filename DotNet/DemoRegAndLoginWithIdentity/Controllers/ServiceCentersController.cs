using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DemoRegAndLoginWithIdentity.Data;
using DemoRegAndLoginWithIdentity.Models;
using System.Net;
using System.Net.Mail;

namespace DemoRegAndLoginWithIdentity.Controllers
{
    public class ServiceCentersController : Controller
    {
        private readonly AppDbContext _context;

        private readonly ILogger<UserController> _logger;

        public ServiceCentersController(ILogger<UserController> logger,AppDbContext context)
        {


            _logger = logger;

            _context = context;


        }
        public IActionResult Create1()
        {
            return View();
        }
        public IActionResult SendMessage()
        {
            return View();
        }
        public IActionResult Showbooking()
        {
            var booking = _context.booking;
            return View(booking);

        }

        public IActionResult Viewfeedback()
        {
            var feedback = _context.Feedbacks;
            return View(feedback);

        }
       

        // GET: ServiceCenters
        public async Task<IActionResult> Index()
        {
                          return _context.ServiceCenter != null ? 
                          View(await _context.ServiceCenter.ToListAsync()) :
                          Problem("Entity set 'AppDbContext.ServiceCenter'  is null.");
        }

        // GET: ServiceCenters/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.ServiceCenter == null)
            {
                return NotFound();
            }

            var serviceCenter = await _context.ServiceCenter
                .FirstOrDefaultAsync(m => m.Id == id);
            if (serviceCenter == null)
            {
                return NotFound();
            }

            return View(serviceCenter);
        }

        // GET: ServiceCenters/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ServiceCenters/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,FullName,Email,MobileNo,Address,ServiceCenterName")] ServiceCenter serviceCenter)
        {
            if (ModelState.IsValid)
            {
                _context.Add(serviceCenter);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(serviceCenter);
        }

        // GET: ServiceCenters/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.ServiceCenter == null)
            {
                return NotFound();
            }

            var serviceCenter = await _context.ServiceCenter.FindAsync(id);
            if (serviceCenter == null)
            {
                return NotFound();
            }
            return View(serviceCenter);
        }

        // POST: ServiceCenters/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,FullName,Email,MobileNo,Address,ServiceCenterName")] ServiceCenter serviceCenter)
        {
            if (id != serviceCenter.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(serviceCenter);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ServiceCenterExists(serviceCenter.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(serviceCenter);
        }

        // GET: ServiceCenters/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.ServiceCenter == null)
            {
                return NotFound();
            }

            var serviceCenter = await _context.ServiceCenter
                .FirstOrDefaultAsync(m => m.Id == id);
            if (serviceCenter == null)
            {
                return NotFound();
            }

            return View(serviceCenter);
        }

        // POST: ServiceCenters/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.ServiceCenter == null)
            {
                return Problem("Entity set 'AppDbContext.ServiceCenter'  is null.");
            }
            var serviceCenter = await _context.ServiceCenter.FindAsync(id);
            if (serviceCenter != null)
            {
                _context.ServiceCenter.Remove(serviceCenter);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ServiceCenterExists(int id)
        {
          return (_context.ServiceCenter?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
