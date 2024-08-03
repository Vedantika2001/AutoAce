using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DemoRegAndLoginWithIdentity.Data;
using DemoRegAndLoginWithIdentity.Models;
using Microsoft.AspNetCore.Authorization;

namespace DemoRegAndLoginWithIdentity.Controllers
{
    public class AddServicesController : Controller
    {
        private readonly AppDbContext _context;

        public AddServicesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: AddServices
        public async Task<IActionResult> Index()
        {
              return _context.addService != null ? 
                          View(await _context.addService.ToListAsync()) :
                          Problem("Entity set 'AppDbContext.addService'  is null.");
        }

        [Authorize(Roles = "Admin")]
        // GET: AddServices/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.addService == null)
            {
                return NotFound();
            }

            var addService = await _context.addService
                .FirstOrDefaultAsync(m => m.Id == id);
            if (addService == null)
            {
                return NotFound();
            }

            return View(addService);
        }

        // GET: AddServices/Create
        [Authorize(Roles = "Admin")]
        public IActionResult Create()
        {
            return View();
        }

        // POST: AddServices/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ServiceName,Description,cost")] AddService addService)
        {
            if (ModelState.IsValid)
            {
                _context.Add(addService);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(addService);
        }

        // GET: AddServices/Edit/5
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.addService == null)
            {
                return NotFound();
            }

            var addService = await _context.addService.FindAsync(id);
            if (addService == null)
            {
                return NotFound();
            }
            return View(addService);
        }

        // POST: AddServices/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ServiceName,Description,cost")] AddService addService)
        {
            if (id != addService.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(addService);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AddServiceExists(addService.Id))
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
            return View(addService);
        }

        // GET: AddServices/Delete/5
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.addService == null)
            {
                return NotFound();
            }

            var addService = await _context.addService
                .FirstOrDefaultAsync(m => m.Id == id);
            if (addService == null)
            {
                return NotFound();
            }

            return View(addService);
        }

        // POST: AddServices/Delete/5
        [Authorize(Roles = "Admin")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.addService == null)
            {
                return Problem("Entity set 'AppDbContext.addService'  is null.");
            }
            var addService = await _context.addService.FindAsync(id);
            if (addService != null)
            {
                _context.addService.Remove(addService);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AddServiceExists(int id)
        {
          return (_context.addService?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
