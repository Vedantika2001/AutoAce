using DemoRegAndLoginWithIdentity.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using DemoRegAndLoginWithIdentity.DTO;

namespace DemoRegAndLoginWithIdentity.Data
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Student> Students { get; set; }

        public DbSet<Contact> Contacts { get; set; }

        public DbSet<Feedback> Feedbacks { get; set; }

        public DbSet<BookingService> bookingService { get; set; }

        public DbSet<Booking> booking { get; set; }

        public DbSet<Invoice> invoice { get; set; }

        public DbSet<AddService> addService { get; set; }

        public DbSet<ServiceCenter> ServiceCenter { get; set; }
        public DbSet<DemoRegAndLoginWithIdentity.DTO.RoleStore>? RoleStore { get; set; }
        public object YourBookingServiceDbSet { get; internal set; }
    }
}
