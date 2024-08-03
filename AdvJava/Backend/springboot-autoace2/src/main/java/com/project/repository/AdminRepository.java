package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	@Query("select count(a) from Admin a where a.email = ?1")
	public Long findIfAdminExists(String email);
	
	@Query("select count(a) from Admin a where a.email = ?1 and a.password = ?2")
	public Long findIfAdminIsPresent(String email, String password);

	public Optional<Admin> findByEmail(String email);
	
	
	public Optional<Admin> findByEmailAndPassword(String email, String password);

}
