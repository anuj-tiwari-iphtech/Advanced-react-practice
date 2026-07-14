
import { useEffect, useState } from "react";
import axios from "axios";

import "./student.css";

import Sidebar from "../components/Sidebar";

import StudentCard from "../components/StudentCard";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("All");


  //filter by city
  const cities = [
    "All",
    ...new Set(students.map((student) => student.address.city)),
  ];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  
    const matchesCity =
      selectedCity === "All" ||
      student.address.city === selectedCity;
  
    return matchesSearch && matchesCity;
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

    
    <div className="students-container">

      {/* <Sidebar/> */}
      {/* <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      
      <input className="input-students-search"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select className="select-student-city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
        
      <h2 className="students-title">Students Table</h2>

      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student)  => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              
              
              <td>{student.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* //Student Card
        {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
        ))} */}
    </div>
  );
}

export default Students;

