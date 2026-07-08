

import React from "react";

class EmployeeCard extends React.Component{

    render(){
        return(
            <>
                <h2> Name : {this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
            </>
        )
    }
}

export default EmployeeCard