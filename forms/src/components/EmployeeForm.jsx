

import { useState } from "react";

function EmployeeForm(){
    const [form, setForm] = useState({
        name:"",
        department:"",
        salary:"",
        address: {
            city:"",
            state:""
        },
    })

    const handleChange =(e)=>{
        const{name, value} = e.target 

        if(name === "city" || name === "state"){
            setForm({...form,
                address: {
                    ...form.address,
                    [name] : value,
                }
            })
        }else{
            setForm({...form,[name]:value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form)

        setForm({
            name:"",
            department:"",
            salary:"",
            address: {
                city:"",
                state:""
            },
        })
    } 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Employee Registration</h1>

                    <input
                        name = "name"
                        value={form.name}
                        placeholder="name"
                        onChange={handleChange}
                    />
                        <br/>
                    <input
                        name="department"
                        value={form.department}
                        placeholder="Department"
                        onChange={handleChange}
                    />
                        <br/>
                    <input
                        name="salary"
                        value={form.salary}
                        placeholder="Salary"
                        onChange={handleChange}
                    />
                        <br/>
                    <input
                        name="city"
                        value={form.address.city}
                        placeholder="city"
                        onChange={handleChange}
                    />
                        <br/>
                    <input
                        name="state"
                        value={form.address.state}
                        placeholder="state"
                        onChange={handleChange}
                    />
        
                    <button>Register</button>
            </form>
        </>
    )
}

export default EmployeeForm