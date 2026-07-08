
import { useState } from "react";

function RegistrationForm(){

    const[form, setForm] = useState({
        name : "",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        setForm({
            name : "",
            email:"",
            password:"",
            confirmPassword:"",
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                    <input
                        name = "name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />

                        <br/>

                    <input
                        name = "email"
                        placeholder="Enter you email"
                        onChange={handleChange}
                    />

                        <br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        onChange={handleChange}
                    />

                        <br/>

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                        <br/>
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm