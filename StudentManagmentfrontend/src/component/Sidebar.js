import React from 'react'
import { Link } from 'react-router-dom';
import '../component/dashbord.css';
import '../component/Sidebar.css';

export default function Sidebar() {
  return (
     <div className="sidebar">
        <h2 className="text-center text-white mt-5">Dashboard</h2>
      
    
        <Link to="/addstudent">Add Student</Link>
        </div>  
  )
}
