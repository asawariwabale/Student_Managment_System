import React from 'react'
import NavbarDemor from './NavbarDemor';
import AdminStudentList from './AdminStudentList';
import Sidebar from './Sidebar';


export default function AdminDashBoard() {
  return (
     <div className="flex">
          <Sidebar />
          <NavbarDemor />
        
          <div className=" content flex-1 p-6">
            <h1 className="text-3xl font-bold mb-4">Student Management</h1>
            <AdminStudentList />
          </div>
        </div>
  );
} 