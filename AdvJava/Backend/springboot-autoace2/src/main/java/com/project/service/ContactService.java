package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Contact;
import com.project.exception.ContactException;
import com.project.repository.ContactRepository;
@Service
public class ContactService {

	@Autowired
	private ContactRepository contactRepository;
	
	 public void saveContact(Contact contact) {
	        contactRepository.save(contact);
	    }

	public List<Contact> getAllContacts() {
		// TODO Auto-generated method stub
		return contactRepository.findAll();
	}

	public void deleteContact(int id) {
        // Check if the contact exists
        Contact existingContact = contactRepository.findById(id)
                .orElseThrow(() -> new ContactException("Contact not found with id: " + id));

        // Delete the contact
        contactRepository.delete(existingContact);
	
}
}