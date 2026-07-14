import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import Navbar from "../components/Navebar";
import SideBar from "../components/Sidebar";
import { Footer } from "../components/Footer";
import StudentCard from "../components/StudentCard";

import Students from "./Students";

// import "../components/Sidebar.css"

function Dashboard(){

  const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn")

        if(!loggedIn){
            navigate('/')
        }
    },[])

    // Student Card

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setStudents(data));
    }, []);

    return(


        <div className="dashboard">

        <Navbar />
        <Header />

      <div className="dashboard-body">

        
        {/* <SideBar /> */}
        <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <SideBar open={open} />

        
        <main className="main-content">

        <div className="student-container">
        {students.map((student) => (
            <StudentCard key={student.id} student={student} />
        ))}
        </div>

          <Students/>

          <div className="page-content">
            <Outlet />
          </div>

          <Footer />

        </main>

      </div>

    </div>
    )
}

export default Dashboard