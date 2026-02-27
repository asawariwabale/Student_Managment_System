import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import AdminDashBoard from './component/AdminDashBoard';
import EditStudent from './component/EditStudent';
import AddStudent from './component/AddStudent';
function App() {
  return (
   <>
    <BrowserRouter>
       
      <div className="container-fluid1">
        <Routes>
       
          <Route path="/" element={<Home />} />
          
             <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact/>} />
               
                <Route path="/login" element={<Login />} />

                <Route path="/admin-dashboard" element={<AdminDashBoard />} />

                <Route path="/edit-student/:id" element={<EditStudent />} />

                <Route path="/addstudent" element={<AddStudent />} />
        </Routes>
      </div>
    
    </BrowserRouter>
   </>
  );
}
export default App;
