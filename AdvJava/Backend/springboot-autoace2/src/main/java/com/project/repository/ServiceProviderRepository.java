package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.entity.ServiceProvider;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer> {
	
	@Query("select count(a) from ServiceProvider a where a.email = ?1")
	public Long findIfAServiceProviderExists(String email);
	
	@Query("select count(a) from ServiceProvider a where a.email = ?1 and a.password = ?2")
	public Long findIfServiceProviderIsPresent(String email, String password);

	public Optional<ServiceProvider> findByEmail(String email);
	
	
	public Optional<ServiceProvider> findByEmailAndPassword(String email, String password);
	
	public Optional<ServiceProvider> findByCenterName(String centerName);
}
