package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.FeedBack;

public interface FeedBackRepository extends JpaRepository<FeedBack, Integer>{
	public Optional<FeedBack> findByEmail(String email);
}
