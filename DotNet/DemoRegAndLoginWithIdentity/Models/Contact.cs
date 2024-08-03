using System.ComponentModel.DataAnnotations;

namespace DemoRegAndLoginWithIdentity.Models
{
    public class Contact
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "Enter your Name")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage = "Name should have alphabets only")]
        public string name {  get; set; }

        [Required(ErrorMessage = "Enter your email")]
        [EmailAddress(ErrorMessage = "Enter a valid email id")]
        public string email { get; set; }


        [Required(ErrorMessage = "Enter your phone number")]
        [MinLength(10, ErrorMessage = "Phone should not be less then 10 digits")]
        [MaxLength(10, ErrorMessage = "Phone should not be greater then 10 digits")]
        public string mobile { get; set; }

        [Required(ErrorMessage = " Enter you Comment")]
        public string comment { get; set; }

    }
}
