import { Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Student from "./Components/Student";
import Products from "./Components/Products";
import StudentDetails from "./Components/StudentDetails";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Setting from "./Components/setting";
import LogIn from "./Components/Login";
import NotFound from "./Components/notFound";

function App() {
 

  return (
    <>
      <nav>
        <Link to="/"> Home </Link> {" | "}
        <Link to="/Contact">Contact</Link>{" | "}
        <Link to="/About">About</Link>{" | "}
        <Link to="/Student">Student</Link>{" | "}
        <Link to="/Products">Product</Link>{" | "}
        <Link to="/Student/101">StudentDetails</Link>{" | "}
        <Link to="/Dashboard">Dashboard</Link>{" | "}
        <Link to="/LogIn">LogIn</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Student" element={<Student/>}/>
        <Route path="/Product" element={<Products/>}/>
        <Route path="/Student/:id" element={<StudentDetails/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}>
            <Route path="/Dashboard/Profile" element={<Profile/>}/>
            <Route path="/Dashboard/Setting" element={<Setting/>}/>
        </Route>
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="*" element={<NotFound/>}/>
          
        

      </Routes>
    </>
  )
}

export default App
