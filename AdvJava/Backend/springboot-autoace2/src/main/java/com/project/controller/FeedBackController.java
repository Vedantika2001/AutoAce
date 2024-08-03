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

import com.project.dto.FeedBackStatus;
import com.project.entity.FeedBack;
import com.project.exception.FeedBackServiceException;
import com.project.service.FeedBackService;

@RestController
@CrossOrigin
public class FeedBackController {

	
	@Autowired
	private FeedBackService feedbackService;
	
	//Spring can read the incoming json, parse it ans store the data
	//in an object for us
	@PostMapping("/feedback")
	public FeedBackStatus comments(@RequestBody FeedBack feedback) {
		try {
			feedbackService.comments(feedback);
			FeedBackStatus status = new FeedBackStatus();
			status.setStatus(true);
			status.setStatusMessage("FeedBack Added Succesfully");
			return status;
		}
		catch(FeedBackServiceException e) {
			FeedBackStatus status = new FeedBackStatus();
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			return status;
		}
		
	}
	@GetMapping("/fetchFeedback")
	public List<FeedBack> getAllFeedback() {
		return feedbackService.getAllFeedback();
	}
	
	 @DeleteMapping("/feedback/{id}")
	    public void deleteContact(@PathVariable int id) {
		 feedbackService.deleteContact(id);
	    }
}
	

	















