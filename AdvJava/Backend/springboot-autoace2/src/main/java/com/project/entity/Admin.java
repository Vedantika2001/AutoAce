package com.project.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin_table")
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "admin_name" , nullable=false)
	private String adminName;
	
	@Column(name = "admin_email" , nullable=false)
	private String email;
	
	@Column(name = "admin_password", nullable=false)
	private String password;
	
	@Column(name="admin_mobile_no" , nullable= false)
	private long mobileNo;
	
	@OneToMany(mappedBy = "admin")
	@JsonBackReference
	private List<ServiceTable> serviceTable;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	public List<ServiceTable> getServiceTable() {
		return serviceTable;
	}
	
	public void setServiceTable(List<ServiceTable> serviceTable) {
		this.serviceTable = serviceTable;
	}
	
}
