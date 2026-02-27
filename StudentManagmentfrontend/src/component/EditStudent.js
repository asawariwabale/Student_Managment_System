/*import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarDemor from './NavbarDemor';


export default function EditStudent() {

  const {id}=useParams();
  const navigate=useNavigate();

  const[Student,setStudent]=useState({
    id:" ",
    name:"",
    marks:""
  })

   useEffect(() => {
            axios.get(`http://localhost:8084/getOne/${id}`)
              .then(response => setStudent(response.data))
              .catch(error => console.error('Error fetching product:', error));
          }, [id]);

  return (
     <div>
            <NavbarDemor />
       <div className="myDiv mt-5 pt-5">
       <h2>Edit Student</h2>
         <form onSubmit={handleSubmit}>
           
           <div>
             <label>Name:</label>
             <input type="text" name="name" value={student.name} onChange={handleChange} required />
           </div>
          
           <div>
             <label>Marks:</label>
             <input type="number" step="0.01" name="marks" value={student.marks} onChange={handleChange} required />
           </div>
           <button type="submit">Update Student</button>
         </form>
       </div>
       </div>
  )
}
*/
/*
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarDemor from './NavbarDemor';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: '',
    name: '',
    marks: ''
  });

   useEffect(() => {
            axios.get(`http://localhost:8084/getOne/${id}`)
              .then(response => setStudent(response.data))
              .catch(error => console.error('Error fetching product:', error));
          }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8084/update/${id}`, student)
      .then(() => {
        alert("Student updated successfully");
        navigate("/");
      })
      .catch(err => console.error("Error updating student:", err));
  };

  return (
    <div>
      <NavbarDemor />
      <div className="myDiv mt-5 pt-5">
        <h2>Edit Student</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Marks:</label>
            <input
              type="number"
              step="0.01"
              name="marks"
              value={student.marks}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Update Student</button>
        </form>
      </div>
    </div>
  );
}
*/

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarDemor from './NavbarDemor';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: '',
    name: '',
    marks: '',
    email:''
  });

 
  useEffect(() => {
    axios.get(`http://localhost:8084/getOne/${id}`)
      .then(response => {
        console.log("Student Data:", response.data);
        setStudent(response.data);
      })
      .catch(error => console.error('Error fetching student:', error));
  }, [id]);


  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8084/update/${id}`, student)
      .then(() => {
        alert("Student updated successfully");
        navigate("/");
      })
      .catch(err => console.error("Error updating student:", err));
  };

  return (
    <div>
      <NavbarDemor />
      <div className="myDiv mt-5 pt-5">
        <h2>Edit Student</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={student.name || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Marks:</label>
            <input
              type="number"
              step="0.01"
              name="marks"
              value={student.marks || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={student.email || ''}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Update Student</button>
        </form>
      </div>
    </div>
  );
}
