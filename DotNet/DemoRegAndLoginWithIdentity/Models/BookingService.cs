using System.ComponentModel.DataAnnotations;

namespace DemoRegAndLoginWithIdentity.Models
{
    public class BookingService
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "Enter your Name")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage = "Name should have alphabets only")]
        public string CustomerName { get; set; }

        [Required(ErrorMessage = " Enter Service Name")]
        public string ServiceName { get; set; }

        [Required(ErrorMessage = " Enter your Vehicle Name")]

        public string VehicleName { get; set; }

        [Required(ErrorMessage = " Enter your Vehicle Registartion Number")]
        public string VehicleRegistrationNumber { get; set; }

        public string Date { get; set; }
        public string ServiceCenter { get; set; }
        public string ServiceDesc { get; set; }

    }
}
