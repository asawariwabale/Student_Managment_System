package com.service;

import java.util.List;
import java.util.Optional;

import org.aspectj.apache.bcel.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import com.model.Student;
import com.dao.StudentRepositroy;
@Service  
public class StudentServiceImplemention implements StudentService {

	@Autowired
    private StudentRepositroy studentRepo;
    
  
	@Override
    public Student addStudent(Student s) {
        
        return studentRepo.save(s);
    }	
	/*
	@Override
    public Student getOneStudent(int id) {
        
          Optional<Student> optStu=studentRepo.findById(id);
          
          Student s=optStu.get();
          
          
        return s;
        
    }*/


	@Override
	public Student getOneStudent(int id) {
		// TODO Auto-generated method stub
		return null;
	}


	/*@Override
	public List<Student> getAllStudent() {
	
	/	return studentRepo.findAll(name);
	}*/


	@Override
	public String deleteStudent(int id) {
		if(studentRepo.existsById(id))
		{
			studentRepo.deleteById(id);
			return "student deleted";	
		}
		return "student not deleted";
	}


	@Override
	public Student updateStudent(int id, Student student) {
		
     if(studentRepo.existsById(id)) {
            
            student.setId(id);
        }
        return studentRepo.save(student); 
	}


	@Override
	public Student getOneStudentByEmail(String email) {
		
		return studentRepo.findByEmail(email);
	}
	@Override
	public List<Student> getStudentByName(String name) {
		
		return studentRepo.findByName(name);
		
	}
	@Override
	public List<Student> getStudentByMarks() {
		
		return studentRepo.findStudentByMarks1();
	}


	@Override
	public List<Student> getAllStudent() {
	
		return studentRepo.findAll();
	}
	
  

	
	

}