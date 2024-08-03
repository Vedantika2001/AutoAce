using System.ComponentModel.DataAnnotations;

namespace DemoRegAndLoginWithIdentity.Models
{
    public class Feedback
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter your Name")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage = "Name should have alphabets only")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Enter your email")]
        [EmailAddress(ErrorMessage = "Enter a valid email id")]
        public string   Email { get; set; }

        [Required(ErrorMessage = "Enter your phone number")]
        [MinLength(10, ErrorMessage = "Phone should not be less then 10 digits")]
        [MaxLength(10, ErrorMessage = "Phone should not be greater then 10 digits")]
        public string Mobile { get; set; }

        [Required(ErrorMessage = " Enter Service Center Name")]
        public string ServiceCenterName { get; set; }

        [Required(ErrorMessage = " Enter A Valid Comment")]
        public string Comments { get; set; }
    }
}
