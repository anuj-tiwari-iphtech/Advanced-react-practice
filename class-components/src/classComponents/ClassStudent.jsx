import React from "react";

class StudentCard extends React.Component{

    render(){
        return(
            <>
                <h1>Student Details</h1>
                <h2> Name :{this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
            </>
        )
    }
}

export default StudentCard