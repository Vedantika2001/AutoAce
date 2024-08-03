package com.project.exception;

public class ServiceProviderException extends RuntimeException {
	
	public ServiceProviderException() {
		super();
	}
	
	public ServiceProviderException(String message, Throwable cause){
		super(message, cause);
	}
	
	public ServiceProviderException(String message) {
		super(message);
	}
}
