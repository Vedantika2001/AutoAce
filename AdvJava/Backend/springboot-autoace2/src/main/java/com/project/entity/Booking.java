package com.project.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking_table")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "vehicle_model_name" , nullable=false)
	private String vehicleModelName;
	
	@Column(name = "vehicle_registration_no" , nullable=false)
	private String vehicleRegistrationNo;
	
	@Column(name = "service_date" , nullable=false)
	private LocalDate serviceDate;
	
	@Column(name = "service_center" , nullable=false)
	private String serviceCenter;
	
	@Column(name = "extra_service_info" , nullable=false)
	private String extraServiceDesc;
	
	@ManyToOne
	@JoinColumn(name = "service_id")
	private ServiceTable serviceTable;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	@ManyToOne
	@JoinColumn(name = "provider_id")
	private ServiceProvider serviceProvider;
	

	public ServiceProvider getServiceProvider() {
		return serviceProvider;
	}

	public void setServiceProvider(ServiceProvider serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVehicleModelName() {
		return vehicleModelName;
	}

	public void setVehicleModelName(String vehicleModelName) {
		this.vehicleModelName = vehicleModelName;
	}

	public String getVehicleRegistrationNo() {
		return vehicleRegistrationNo;
	}

	public void setVehicleRegistrationNo(String vehicleRegistrationNo) {
		this.vehicleRegistrationNo = vehicleRegistrationNo;
	}

	public LocalDate getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(LocalDate serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getServiceCenter() {
		return serviceCenter;
	}

	public void setServiceCenter(String serviceCenter) {
		this.serviceCenter = serviceCenter;
	}

	public String getExtraServiceDesc() {
		return extraServiceDesc;
	}

	public void setExtraServiceDesc(String extraServiceDesc) {
		this.extraServiceDesc = extraServiceDesc;
	}

	public ServiceTable getServiceTable() {
		return serviceTable;
	}

	public void setServiceTable(ServiceTable serviceTable) {
		this.serviceTable = serviceTable;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
}
