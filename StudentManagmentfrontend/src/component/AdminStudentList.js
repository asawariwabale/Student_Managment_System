/*import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminStudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8084/getAll')
      .then(response => {
        // Debug response to see structure
        console.log(response.data);

        // If response.data is object with students array
        const studentArray = Array.isArray(response.data) 
          ? response.data 
          : response.data.students || [];
        
        setStudents(studentArray);
      })
      .catch(error => console.error('Error fetching students', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8084/delete/${id}`)
      .then(() => {
        // Remove deleted student from state
        setStudents(prev => prev.filter(student => student.id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Student Id</th>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Student Mark</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) && students.length > 0 ? (
            students.map(stu => (
              <tr key={stu.id}>
                <td className="border px-4 py-2">{stu.id}</td>
                <td className="border px-4 py-2">{stu.name}</td>
                <td className="border px-4 py-2">{stu.marks}</td>
                <td className="border px-4 py-2">
                  <Link to={`/edit-student/${stu.id}`} className="text-blue-500 mr-4">Edit</Link>
                  <button 
                    onClick={() => handleDelete(stu.id)} 
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="4">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
*/
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminStudentList() {

  const [students, setStudents] = useState([]);

  // Fetch all students
  useEffect(() => {
    axios.get('http://localhost:8084/getAll')
      .then(response => {
        console.log("API Response:", response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  // Delete student
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8084/delete/${id}`)
      .then(() => {
        setStudents(prev => prev.filter(stu => stu.id !== id));
      })
      .catch(error => {
        console.error("Error deleting student:", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>

      <table className="w-full table-auto border-collapse border border-gray-300">
        
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Student Id</th>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Student Marks</th>
            <th className="border px-4 py-2">Student Email</th> {/* ✅ Added */}
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map(stu => (
              <tr key={stu.id}>
                <td className="border px-4 py-2">{stu.id}</td>
                <td className="border px-4 py-2">{stu.name}</td>
                <td className="border px-4 py-2">{stu.marks}</td>
                <td className="border px-4 py-2">
                  {stu.email ? stu.email : "No Email"}
                </td> {/* ✅ Email Display */}
                <td className="border px-4 py-2">
                  <Link 
                    to={`/edit-student/${stu.id}`} 
                    className="text-blue-500 mr-4"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleDelete(stu.id)} 
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border px-4 py-2 text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}