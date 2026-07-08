import { useState } from "react"

function LoginForm(){

    const [form, setForm] = useState({
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        setForm({
            email : "",
        password : "",
        })
    }

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="input-group">
                    <input
                        name = "email"
                        placeholder="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    </div>
                <br/>
                <div className="input-group">
                    <input 
                        type = "password"
                        name = "password"
                        placeholder="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button className="login-btn" type="submit">Submit</button>
            </form>

        </div>
    )
}
export default LoginForm