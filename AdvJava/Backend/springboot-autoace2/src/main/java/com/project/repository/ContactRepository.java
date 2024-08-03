package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Contact;


public interface ContactRepository extends JpaRepository<Contact, Integer>{
	
}
		
	

