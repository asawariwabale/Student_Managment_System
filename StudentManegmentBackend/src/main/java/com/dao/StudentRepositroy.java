package com.dao;

import java.util.List;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.model.Student;

public interface StudentRepositroy extends JpaRepository<Student,Integer> {
	
Student findByEmail(String email);
	
	List<Student> findByName(String name);
	
	//@Query Method
	
	
	
	@Query("select s from Student s where s.marks > 50")
	List<Student>findStudentByMarks1();
	

	
}
