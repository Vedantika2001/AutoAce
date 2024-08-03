package com.project.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LoginDetails;
import com.project.dto.LoginStatus;
import com.project.dto.RegistrationStatus;
import com.project.dto.Status;
import com.project.entity.Admin;
import com.project.entity.Customer;
import com.project.exception.AdminServiceException;
import com.project.repository.CustomerRepository;
import com.project.service.AdminService;
import com.project.service.CustomerService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private CustomerService customerService;
	
//	@Value("${JWTSecret}")
//	private String jwtSecret;
//	
//	@Value("${JWTExpiration}")
//	private long jwtExpiration;

//	public String generateJwtToken(Admin admin) {
//        Map<String, Object> claims = new HashMap()<>();
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(admin.getEmail())
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
//                .signWith(SignatureAlgorithm.HS512, jwtSecret)
//                .compact();
//    }
	
	//add new admin
	@PostMapping("/admin/register")
	public Status register(@RequestBody Admin admin){
		try {
			int id = adminService.register(admin);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			return status;
		}catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/admin/registerv2")
	public ResponseEntity<Status> registerv2(@RequestBody Admin admin) {
		try {
			
			
			int id = adminService.register(admin);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			
			return new ResponseEntity<Status>(status, HttpStatus.OK);
				
		}
		catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status, responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/admin/login")
		public ResponseEntity<Status> login(@RequestBody LoginDetails loginDetails) {
		try {
			
			
			
			Admin admin = adminService.loginv2(loginDetails.getEmail(), loginDetails.getPassword());
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setMessageIfAny("Login Successfull");
			status.setAdminId(admin.getId());
			status.setName(admin.getAdminName());
			
			//return status;
			return new ResponseEntity<Status>(status, HttpStatus.OK);
			
//			String token = generateJwtToken(loginDetails);
//			
//			LoginStatus status = new LoginStatus();
//			status.setLoginId(pt.getId());
//			status.setLoginName(pt.getName());
//			status.setLoginPhone(pt.getPhone());
//			status.setLoginEmail(pt.getEmail());
//			status.setLoginGender(pt.getGender());
//			status.setLoginCity(pt.getCity());
//			status.setLoginStatus(true);
//			status.setToken(token);
//			status.setLoginStatusMessage("Login Successfully!");
//			System.out.println("ttoken to be genertated  "+token);
//			
//			return status;
			
		}catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status, responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	
	@GetMapping("/admin/fetch")
	public List<Admin> getAllAdmin(){
		return adminService.getAllAdmin();
	}
	
	
	@GetMapping("/admin/fetchAllCustomer")
	public List<Customer> getAllCust(){
		return customerService.getAllCustomers();
	}
	
}
