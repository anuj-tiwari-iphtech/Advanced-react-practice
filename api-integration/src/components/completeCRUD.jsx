
import { useState, useEffect } from "react";
import axios from "axios"

const API = "https://jsonplaceholder.typicode.com/users";

function CompleteCRUD(){

    const[user, setUser] = useState([])
    const[name, setName] = useState("")
    const[editId, setEditId] = useState(null)

    useEffect(() => {
        fetchUser()
    },[])

    const fetchUser= async() => {
        const response = await axios.get(API)

        setUser(response.data)
    }

    const createUser = async() => {
        const res = await axios.post(API,{
            name,
        })
        setUser([...user, res.data])
        setName("")
    }

    const updateUser = async (id) => {
        const res = await axios.put(`${API}/${id}`, {
        name: "Updated User",
        });
        
        setUser(
        user.map((u) => (u.id === id ? res.data : u))
        );
    };

    const deleteUser = async(id) => {
        await axios.delete(`${API}/${id}`)

        setUser(user.filter((user) => user.id !== id))
    }
 
    return(
        <div style={{ padding: "20px" }}>

            <h1>CRUD operation</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>setName(e.target.value)}
            />
            <button onClick={createUser}>Add User</button>

            <hr/>

            {user.map((user) => (
                <div key={user.id}
                style={{
                    border: "1px solid gray",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                    <h3>{user.name}</h3>

                    <button onClick={() => updateUser(user.id)}>
                        Update
                    </button>

                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    
                </div>
            ))}



        </div>
    )
}

export default CompleteCRUD