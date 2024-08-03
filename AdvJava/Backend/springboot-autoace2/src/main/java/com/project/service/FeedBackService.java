package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Contact;
import com.project.entity.FeedBack;
import com.project.exception.ContactException;
import com.project.exception.FeedBackServiceException;
import com.project.repository.FeedBackRepository;



@Service
public class FeedBackService {
	
	@Autowired
	private FeedBackRepository feebackRepository;

	public void comments(FeedBack feedback) {
		
	Optional<FeedBack> feedbackCheck = feebackRepository.findByEmail(feedback.getEmail());
		if(feedbackCheck.isEmpty()) {
			feebackRepository.save(feedback);
		}
	
		else
			throw new FeedBackServiceException("Feedback given");

	}

	public List<FeedBack> getAllFeedback() {
		return feebackRepository.findAll();
	}

	public Optional<FeedBack> getFeedbackByEmail(String email) {
		return feebackRepository.findByEmail(email);
}

	public void deleteContact(int id) {
		// TODO Auto-generated method stub
		FeedBack existingContact = feebackRepository.findById(id)
                .orElseThrow(() -> new ContactException("Contact not found with id: " + id));
        // Delete the contact
		feebackRepository.delete(existingContact);
	}
}
	
