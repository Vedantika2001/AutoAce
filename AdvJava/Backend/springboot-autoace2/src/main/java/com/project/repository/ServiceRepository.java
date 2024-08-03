package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.ServiceTable;

public interface ServiceRepository extends JpaRepository<ServiceTable, Integer>{
	
}
