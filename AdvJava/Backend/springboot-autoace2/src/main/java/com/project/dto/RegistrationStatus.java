//package com.project.dto;
//
//public class RegistrationStatus extends Status{
//	private int customerId;
//
//	public int getCustomerId() {
//		return customerId;
//	}
//
//	public void setCustomerId(int customerId) {
//		this.customerId = customerId;
//	}
//}

package com.project.dto;

public class RegistrationStatus extends Status{

	private boolean status;
	private String statusMessage;
	private int adminId;
	private int customerId;
	private int providerId;

	public int getProviderId() {
		return providerId;
	}
	public void setProviderId(int providerId) {
		this.providerId = providerId;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int customerId) {
		this.adminId = adminId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
			this.customerId = customerId;
		}
	}
