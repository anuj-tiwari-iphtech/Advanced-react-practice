import "./studentCard.css";
function StudentCard({student}){


    return(
        <div className="student-card">
            <h2>{student.name}</h2>

            <p><strong>UserName : </strong> {student.username}</p>
            <p><strong>Email : </strong>{student.email}</p>
            <p><strong>Phone : </strong>{student.phone}</p>
            <p><strong>City : </strong>{student.address.city}</p>
        </div>
    )
}

export default StudentCard