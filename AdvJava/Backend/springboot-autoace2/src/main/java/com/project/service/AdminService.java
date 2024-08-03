package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.entity.Admin;
import com.project.exception.AdminServiceException;
import com.project.repository.AdminRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	//Customer registration
	public int register(Admin admin) {
		
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPassword = bcrypt.encode(admin.getPassword());
		admin.setPassword(encryptedPassword);
		
		Long count = adminRepository.findIfAdminExists(admin.getEmail());
		System.out.println(count);
		if(count == 1)
			throw new AdminServiceException("Admin already registered!");
		else {
			adminRepository.save(admin);
			return admin.getId();
		}
	}
	
	
	//Admin Login
	public Admin loginv2(String email, String password) {
	    Admin admin = adminRepository.findByEmail(email).orElse(null); // Retrieve admin by email

	    if (admin == null) {
	        throw new AdminServiceException("Invalid Email/Password");
	    }

	    String dbPassword = admin.getPassword();
	    System.out.println("DB Password: " + dbPassword);
	    System.out.println("Login Password: " + password);
	    
	    BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	    
	    if (bcrypt.matches(password, dbPassword)) {
	        return admin;
	    } else {
	        throw new AdminServiceException("Invalid Email/Password");
	    }
	}

	

//	//Customer Login
//	public Admin loginv2(String email, String password) {
//		
////		Long count = adminRepository.findIfAdminIsPresent(email, password);
////		if(count == 0)
////			throw new AdminServiceException("Invalid Email/Password");
////		else {
//			Admin admin = adminRepository.findByEmail(email).get();
//			String pass = admin.getPassword();
//			System.out.println("DB PassWord : " + pass);
//			System.out.println("Login PassWord : " + password);
//			BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
//			if(bcrypt.matches(password, pass)) {
//				return admin;
//			}
//			else
//				throw new AdminServiceException("Invalid Email/Password");
//	}
	
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}
}
