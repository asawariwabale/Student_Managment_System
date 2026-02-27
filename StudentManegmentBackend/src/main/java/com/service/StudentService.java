package com.service;

import java.util.List;

import com.model.Student;

public interface StudentService {
	
	public Student addStudent(Student s);
	
	public Student getOneStudent(int id);
	
	 public List<Student> getAllStudent();

	 public String deleteStudent(int id);
	 
	 public Student updateStudent(int id,Student student);
	 
	 public Student getOneStudentByEmail(String email);
		
		
		public List<Student> getStudentByName(String name);
	   
		public List<Student> getStudentByMarks();
	 
	 
	 

}
