

import { useState } from "react";

function ContactForm(){

    const[form, setForm] = useState({
        name:"",
        email:"",
        message:"",
    })

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form)
    }

    


    return(

        <>
            <form onSubmit={handleSubmit}>
                <h1>Contact form</h1>
                    <input
                        name = "name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    <br/>
                    <input
                        name="email"
                        placeholder="Enter your Email"
                        onChange={handleChange}
                    />
                        <br/>
                    <textarea
                        name="text"
                        placeholder="Enter your message"
                        onChange={handleChange}
                    />
                        <br/>
                    <button>Submit</button>
            </form>        
        </>
    )
}

export default ContactForm