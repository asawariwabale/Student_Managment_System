package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Student;
import com.service.StudentService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
//@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;
    
    
    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student s)
    {
        Student stu=service.addStudent(s);
        return ResponseEntity.status(HttpStatus.CREATED).header("add","adding record").body(stu);
    }
    
  /* @GetMapping("/getOne/{id}")  
    public Student getOneStudent(@PathVariable int id) {
	   
	   return service.getOneStudent(id);
   }*/
   
   @GetMapping("/getOne/{id}")
   public ResponseEntity<Student> getOneStudent(@PathVariable int id) {
       
        Student s=  service.getOneStudent(id);
        
        return ResponseEntity.status(HttpStatus.OK).header("get","get one record").body(s);
   }
   
    @GetMapping("/getAll")
    public ResponseEntity<List<Student>> getAllStudent() {
        
         List<Student> s=  service.getAllStudent(); 
         
         return ResponseEntity.status(HttpStatus.OK).header("get","get one record").body(s);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable int id) {
        
         String msg=  service.deleteStudent(id);
         
         return ResponseEntity.status(HttpStatus.OK).body(msg);
    }

	    
    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id,@RequestBody Student s) {
        
         Student stu=  service.updateStudent(id, s);
         
         return ResponseEntity.status(HttpStatus.OK).body(stu);
    }
	    
    @GetMapping("/getOneEmail/{email}")
    public ResponseEntity<Student> getOneStudentByEmail(@PathVariable String email) {

        Student s = service.getOneStudentByEmail(email);

        return ResponseEntity
                .status(HttpStatus.OK)
                .header("get", "get one record")
                .body(s);
    } 
    
    @GetMapping("/getAllName/{name}")
    public ResponseEntity<List<Student>> getOneStudentByName(@PathVariable String name) {

       List <Student> s=service.getStudentByName(name);

        return ResponseEntity
                .status(HttpStatus.OK)
                .header("get", "get one record")
                .body(s);
    }   
    
    @GetMapping("/getStudentByMarks/{marks}")
    public ResponseEntity<List<Student>> findAllStudentByMarks() {

       List <Student> s=service.getStudentByMarks();

        return ResponseEntity.status(HttpStatus.OK).header("get", "get one record").body(s);
    }   
    
}