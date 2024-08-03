package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LoginDetails;
import com.project.dto.LoginStatus;
import com.project.dto.RegistrationStatus;
import com.project.dto.Status;
import com.project.entity.ServiceProvider;
import com.project.exception.ServiceProviderException;
import com.project.repository.ServiceProviderRepository;
import com.project.service.ProviderService;

@RestController
@CrossOrigin
public class ProviderController {
	
	@Autowired
	private ProviderService providerService;
	
	@Autowired
	private ServiceProviderRepository serviceProviderRepository;
	
	@PostMapping("/provider/register")
	public Status register(@RequestBody ServiceProvider serviceProvider) {
		try {
			int id = providerService.register(serviceProvider);
			
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registered Successfully!");
			status.setProviderId(id);
			return status;
		}
		catch(ServiceProviderException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/provider/registerv2")
	public ResponseEntity<Status> registerv2(@RequestBody ServiceProvider serviceProvider){
		try {
			int id = providerService.register(serviceProvider);
			
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registered Successfully!");
			status.setProviderId(id);
			return new ResponseEntity<Status>(status, HttpStatus.OK);
		}
		catch(ServiceProviderException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status,responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/provider/login2")
	public ResponseEntity<Status> login2(@RequestBody LoginDetails loginDetails) {
		try {
			ServiceProvider serviceProvider = providerService.loginv2(loginDetails.getEmail(), loginDetails.getPassword());
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setMessageIfAny("Login Successfull");
			status.setProviderId(serviceProvider.getId());
			status.setName(serviceProvider.getName());
			
			return new ResponseEntity<Status>(status , HttpStatus.OK);
		}
		catch(ServiceProviderException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status, responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/provider/fetch")
	public List<ServiceProvider> getAllServiceProvider(){
		return providerService.getAllServiceProvider();
	}
	
}
