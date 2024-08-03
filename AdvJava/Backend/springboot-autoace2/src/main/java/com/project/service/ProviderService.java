package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.entity.Customer;
import com.project.entity.ServiceProvider;
import com.project.exception.CustomerServiceException;
import com.project.exception.ServiceProviderException;
import com.project.repository.ServiceProviderRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProviderService {
	
	@Autowired
	private ServiceProviderRepository serviceProviderRepository;
	
	//Service provider registration
	public int register(ServiceProvider serviceProvider) {
		
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPassword = bcrypt.encode(serviceProvider.getPassword());
		serviceProvider.setPassword(encryptedPassword);
		
		Long count = serviceProviderRepository.findIfAServiceProviderExists(serviceProvider.getEmail());
		System.out.println(count);
		if(count == 1)
			throw new CustomerServiceException("Customer already registered!");
		else {
			serviceProviderRepository.save(serviceProvider);
			return serviceProvider.getId();
		}	
	}
	
	//Service Provider Register Login
	public ServiceProvider loginv2(String email, String password) {
		
		ServiceProvider serviceProvider = serviceProviderRepository.findByEmail(email).orElse(null);
		
		if(serviceProvider == null) {
			throw new ServiceProviderException("Invalid Email/Password");
		}
		
		String dbPassword = serviceProvider.getPassword();
		
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	    
	    if (bcrypt.matches(password, dbPassword)) {
	        return serviceProvider;
	    } else {
	        throw new ServiceProviderException("Invalid Email/Password");
	    }
	}
	
	public List<ServiceProvider> getAllServiceProvider(){
		return serviceProviderRepository.findAll();
	} 
}
