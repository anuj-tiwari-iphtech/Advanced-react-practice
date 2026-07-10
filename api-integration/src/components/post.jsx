
import axios from "axios";
import { useState } from "react";

function Postrequest(){

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")

    const createUser = async(e) => {
        e.preventDefault()

        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                name,
                email,
            })
            
            console.log(response.data)
            alert("user Created")

            setName("")
            setEmail("")

        }catch(error){
            console.log(error)

        }

    }

    return(
        <div>
            <h1>Create User</h1>

            <form onSubmit={createUser}>

                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}

                />

                <br/>
                <br/>

                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <br/>
                <br/>

                <button type="submit">Create User</button>

            </form>

        </div>
    )
}

export default Postrequest