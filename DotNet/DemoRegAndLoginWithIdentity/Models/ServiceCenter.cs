using System.ComponentModel.DataAnnotations;

namespace DemoRegAndLoginWithIdentity.Models
{
    public class ServiceCenter
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter your Name")]
        public string FullName { get; set; }

        [Required(ErrorMessage = " Enter Your Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = " Enter your Mobile No")]
        public string MobileNo { get; set; }

        [Required(ErrorMessage = " Enter your Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = " Enter your Service Center Name")]
        public string ServiceCenterName { get; set; }
      
    }
}
