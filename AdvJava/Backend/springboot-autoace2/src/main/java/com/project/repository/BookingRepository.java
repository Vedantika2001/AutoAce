package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer>{
	
	List<Booking> findByCustomerId(int customerId);
	
	List<Booking> findByServiceProviderId(int providerId);

}
