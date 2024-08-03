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
@Table(name = "customer_table")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "cust_name" , nullable=false)
	private String name;
	
	@Column(name = "cust_email" ,unique=true, nullable=false)
	private String email;
	
	@Column(name = "cust_password" , nullable=false)
	private String password;
	
	@Column(name = "cust_mobile_no" , nullable=false)
	private long mobileNo;
	
	@OneToMany(mappedBy = "customer")
	@JsonBackReference
	private List<Booking> booking;
	
	@OneToMany(mappedBy = "customer")
	//@JsonBackReference
	private List<FeedBack> feedBack;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
	public List<Booking> getBooking() {
		return booking;
	}
	
	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}
}
