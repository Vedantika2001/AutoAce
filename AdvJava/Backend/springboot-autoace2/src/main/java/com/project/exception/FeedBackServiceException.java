package com.project.exception;

public class FeedBackServiceException extends RuntimeException {

	public FeedBackServiceException() {
		super();
	}

	public FeedBackServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public FeedBackServiceException(String message) {
		super(message);
	}

}