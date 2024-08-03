package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.BookingStatus;
import com.project.entity.Booking;
import com.project.exception.BookingException;
import com.project.service.BookingService;

@RestController
@CrossOrigin
public class BookingController {
	
	@Autowired
	private BookingService bookingService;

//	@PostMapping("/bookService")
//    public BookingStatus bookService(@RequestBody Booking booking, @RequestParam int customerId, @RequestParam int serviceId) {
//       
//    	try {
//    		Booking savedAppointment = bookingService.bookService(booking, customerId, serviceId);
//    		BookingStatus status = new BookingStatus();
//    		status.setBookingId(savedAppointment.getId());
//    		status.setBookingStatus(true);
//    		status.setBookingStatusMessage("Booking Successful!");
//    		
//    		return status;
//    	} catch (BookingException e) {
//    		BookingStatus status = new BookingStatus();
//    		status.setBookingStatus(false);
//    		status.setBookingStatusMessage("Booking Failed!");
//    		return status;
//    	}
//    }
	
	@PostMapping("/bookService")
    public BookingStatus bookService(@RequestBody Booking booking, @RequestParam int customerId, @RequestParam int serviceId, @RequestParam int providerId) {
       
    	try {
    		Booking savedAppointment = bookingService.bookService(booking, customerId, serviceId, providerId);
    		BookingStatus status = new BookingStatus();
    		status.setBookingId(savedAppointment.getId());
    		status.setBookingStatus(true);
    		status.setBookingStatusMessage("Booking Successful!");
    		
    		return status;
    	} catch (BookingException e) {
    		BookingStatus status = new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Booking Failed!");
    		return status;
    	}
    }
	
	@GetMapping("/fetchBookedServices")
	public List<Booking> getAllBookedServices(){
		return bookingService.getAllBooking();
	}
	
	@GetMapping("/fetchBookedServicesById/{customerId}")
	public ResponseEntity<List<Booking>> getBookedServicesById(@PathVariable int customerId){
		try {
			return ResponseEntity.ok(bookingService.getBookingById(customerId));
		}
		catch(BookingException e) {
			BookingStatus status = new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Failed to fetch Booking Service by customer ID!");
    		return null;
		}
	}
	
	@GetMapping("/fetchBookedServiceByProviderId/{providerId}")
	public ResponseEntity<List<Booking>> getBookedServicesByProviderId(@PathVariable int providerId){
		try {
			return ResponseEntity.ok(bookingService.getBookingByProviderId(providerId));
		}
		catch(BookingException e) {
			BookingStatus status = new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Failed to fetch Booking Service by provider ID!");
    		return null;
		}
	}
	
	@DeleteMapping("/deleteService/{bookingId}")
    public BookingStatus deleteContact(@PathVariable int bookingId) {
		try {
			bookingService.deleteBookService(bookingId);
			
			BookingStatus status = new BookingStatus();
    		status.setBookingStatus(true);
    		status.setBookingStatusMessage("Deleted Successful!");
    		
    		return status;
		}catch(BookingException e) {
    		BookingStatus status = new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Deletion Failed!");
    		return status;
    	}
    }
}
