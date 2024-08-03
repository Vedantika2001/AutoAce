package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.ServiceStatus;
import com.project.dto.Status;
import com.project.entity.ServiceTable;
import com.project.exception.ServiceException;
import com.project.service.Services;

import jakarta.annotation.PostConstruct;

@RestController
@CrossOrigin
public class ServiceController {
	
	@Autowired
	private Services services;
	
	@PostMapping("/admin/addService")
	public Status addService(@RequestBody ServiceTable service) {
		try {
			ServiceTable s1 =  services.addService(service);
			
			ServiceStatus serviceStatus = new ServiceStatus();
			serviceStatus.setStatus(true);
			serviceStatus.setMessageIfAny("Service Added successfully!");
			
			return serviceStatus;
		}catch(ServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
//	@PostMapping("/adminaddService")
//	public Status addService(@RequestBody ServiceTable service , @RequestParam int adminId) {
//		try {
//			ServiceTable s1 =  services.addService(service , adminId);
//			
//			ServiceStatus serviceStatus = new ServiceStatus();
//			serviceStatus.setStatus(true);
//			serviceStatus.setMessageIfAny("Service Added successfully!");
//			
//			return serviceStatus;
//		}catch(ServiceException e) {
//			Status status = new Status();
//			status.setStatus(false);
//			status.setMessageIfAny(e.getMessage());
//			return status;
//		}
//	}
	
	//update service
	@PutMapping("/admin/update/{serviceId}")
    public ResponseEntity<ServiceTable> updateService(@PathVariable int serviceId, @RequestBody ServiceTable updatedService) {
        ServiceTable result = services.updateService(serviceId, updatedService);
        return ResponseEntity.ok(result);
    }	
	    
	//fetch all services
	@GetMapping("/admin/fetchAll")
	 public ResponseEntity<List<ServiceTable>> getAllServices() {
		try {
			System.out.println("fetch");
			List<ServiceTable> allServices = services.fetchAll();
			return ResponseEntity.ok(allServices);
			
		}
		catch(ServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return null;
		}
    }
	
	//delete by id
	@DeleteMapping("/admin/delete/{serviceId}")
//	public ResponseEntity<String> deleteServiceById(@PathVariable int serviceId) {
	public Status deleteServiceById(@PathVariable int serviceId) {
		try {
        services.deleteServiceById(serviceId);
        //return ResponseEntity.ok("Service with ID " + serviceId + " deleted successfully");
		
        ServiceStatus status = new ServiceStatus();
		status.setStatus(true);
		status.setMessageIfAny("Delete Successfully!!!");
		//ResponseEntity.ok("Service with ID " + serviceId + " deleted successfully");
		return status;
		}
		catch(ServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			//ResponseEntity.badRequest();
			return status;
		}
	}
	
}
