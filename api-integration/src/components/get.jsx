
import {useState, useEffect} from "react"
import axios from "axios";

function Getrequest(){

    const[user, setUser] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState("")


    useEffect(() => {
        fetchUser()
    },[])

    const fetchUser = async () => {
        try{
            setLoading(true)

            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            setUser(response.data)
        }catch (err){
            setError("Failed to fetch User ..")
        } finally {
            setLoading(false)
        }

    }

    if(loading) return <h2>loading....</h2>
    if(error) return <h2>{error}</h2>

    return(
        <div>
            <h2>User List</h2>

            {user.map((user) => (
                <div key={user.id}
                style={{
                    border: "1px solid gray",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                    <h3>Name: {user.name}</h3>
                    <p>Email :{user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default Getrequest