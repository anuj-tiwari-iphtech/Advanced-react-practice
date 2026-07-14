import { useEffect, useState } from "react";
import axios from "axios";

import StudentForm from "../components/StudentForm";

const AddStudents = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setStudents(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>

        {/* <StudentForm setStudents={setStudents}/> */}

        <StudentForm
          setStudents={setStudents}
          editingStudent={editingStudent}
          setEditingStudent={setEditingStudent}
        />

    <div className="table-live-container">
        <table className="students-live-table">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Edit Button</th>
            
            </tr>
        </thead>

        <tbody>
            {students.map((student) => (
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.city || student.address?.city}</td>
                <td>{student.phone}</td>
                <td><button 
                  onClick={() => setEditingStudent(student)}
                >Edit</button>
                <button  onClick={() =>
                    setStudents(prev =>
                        prev.filter(s => s.id !== student.id)
                    )
                }>Delete</button></td>
                
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  );
};

export default AddStudents;