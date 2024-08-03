package com.project.entity;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Service_Table")
public class ServiceTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="service_id")
	private int id;
	
	@Column(name = "service_name" , nullable=false)
	private String name;
	
	@Column(name="service_desc")
	private String serviceDesc;
	
	@Column(name="service_price" , nullable=false)
	private double price;
	
	
	@ManyToOne
	@JoinColumn(name ="admin_id")
	private Admin admin;
	
	@OneToMany(mappedBy = "serviceTable")
	@JsonBackReference
	private List<Booking> booking;
	
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
	public String getServiceDesc() {
		return serviceDesc;
	}
	public void setServiceDesc(String serviceDesc) {
		this.serviceDesc = serviceDesc;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	
	public List<Booking> getBooking() {
		return booking;
	}
	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}
	
	
	@Override
	public String toString() {
		return "Service [id=" + id + ", name=" + name + ", serviceDesc=" + serviceDesc + ", price=" + price + "]";
	}
}
