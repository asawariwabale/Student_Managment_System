import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarDemor from './NavbarDemor';

export default function AddStudent() {

     const navigate = useNavigate();
      const [student,setStudent]=useState({
                id:'',
                name:'',
                marks:'',
                email: ''
            })
        
              const handleChange = (e) => {
            const { name, value } = e.target;
            setStudent((prevStudent) => ({
              ...prevStudent,
              [name]: value
            }));
          };
    
          const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8084/add', student)
          .then((response) => {
            console.log('student added:', response.data);
            // Handle success (e.g., clear form, show success message)
            setStudent({ name: '', marks:'' });
              navigate('/admin-dashboard')
          })
          .catch((error) => {
            console.error('There was an error adding the product!', error);
            // Handle error (e.g., show error message)
          });
      };
    

  return (
    <div>
               <NavbarDemor />
          <div className="myDiv mt-5 pt-5">
          <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
              
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={student.name} onChange={handleChange} required />
              </div>
             
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={student.email} onChange={handleChange} required />
              </div>
              <div>
                <label>Marks:</label>
                <input type="number" step="0.01" name="marks" value={student.marks} onChange={handleChange} required />
              </div>
              <button type="submit">Add Student</button>
            </form>
          </div>
          </div>
     
  )
}