package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.dto.ContactStatus;
import com.project.entity.Contact;
import com.project.exception.ContactException;
import com.project.service.ContactService;

@RestController
@CrossOrigin
public class ContactController {

	@Autowired
	private ContactService contactService;
	
	 @PostMapping("/api/contact")
	    public void saveContact(@RequestBody Contact contact) {
	        contactService.saveContact(contact);
	    }
	 
	 @GetMapping("/api/contacts")
	    public List<Contact> getAllContacts() {
	        return contactService.getAllContacts();
	   }
	 
	 @DeleteMapping("/api/contacts/{id}")
	    public void deleteContact(@PathVariable int id) {
	        contactService.deleteContact(id);
	    }
	 
}
