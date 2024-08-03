namespace DemoRegAndLoginWithIdentity.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public string Email { get; set; }
        public string ServiceCenterName { get; set; }
        public string ServiceCenterAddress { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public string VehicleName { get; set; }
        public string VehicleRegistrationNumber { get; set; }
        public DateTime InvoiceDate { get; set; }
        public DateTime InvoiceDueDate { get; set; }
        public string MobileNo { get; set; }
    }
}
