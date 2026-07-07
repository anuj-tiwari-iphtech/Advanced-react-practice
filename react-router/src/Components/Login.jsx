
import { useNavigate } from "react-router-dom"

export default function LogIn(){

    const navigate = useNavigate()

    // const islogedin = true

    // if(islogedin){
    //     return <Navigate to="/Dashboard"/>
    // }

    const handleLogin = () =>{
        alert("login Successful")
        navigate("/Dashboard")
    }

    return(
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}