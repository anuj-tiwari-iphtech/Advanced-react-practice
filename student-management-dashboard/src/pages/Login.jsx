
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./LogIn.css";

function LogIn(){

    const navigate = useNavigate()

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    useEffect(() => {
        const user = localStorage.getItem("user");
    
        if (!user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: "admin@gmail.com",
              password: "12345",
            })
          );
        }
      }, []);

    const handeleLogin =(e) => {
        e.preventDefault()

        // Get the stored user
        const storedUser = JSON.parse(localStorage.getItem("user"))

        if(!storedUser){
            alert('user not found please sign in')
            return
        }

        if(email === storedUser.email &&
            password === storedUser.password){
                localStorage.setItem("isLoggesIn", "true")
                navigate('/dashboard')
            }else{
                alert('Invalid email or password')
            }
    }

    return(
        <form className="login-form"
        
        onSubmit={handeleLogin}>
            
            <input className="login-input"
                type="text"
                placeholder = "Enter your Email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input className="login-input"
                type="password"
                placeholder="Enter your Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
            />

            <button className='btn-logiIn'>Login</button>

        </form>
    )
}

export default LogIn