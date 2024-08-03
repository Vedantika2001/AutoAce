using System.ComponentModel.DataAnnotations;

namespace DemoRegAndLoginWithIdentity.Models
{
    public class Booking
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "Enter your Name")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage = "Name should have alphabets only")]
        public string CustomerName { get; set; }

        [Required(ErrorMessage = "Enter your Email")]
        public string CustomerEmail { get; set; }

        [Required(ErrorMessage = "Enter your MobileNo")]
        public string MobileNo { get; set; }

        [Required(ErrorMessage = "Enter your Service Name")]
        public string ServiceName { get; set; }

        [Required(ErrorMessage = " Enter your Vehicle Name")]

        public string VehicleName { get; set; }

        [Required(ErrorMessage = " Enter your Vehicle Registartion Number")]
        public string VehicleRegistrationNumber { get; set; }

        [Required(ErrorMessage = " Enter your Date")]
        public string Date { get; set; }

        [Required(ErrorMessage = " Enter your Service Center")]
        public string ServiceCenter { get; set; }

        [Required(ErrorMessage = " Enter your Service Description")]
        public string ServiceDesc { get; set; }
    }
}
