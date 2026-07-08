
import { useForm } from "react-hook-form";

function Login(){

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm()

    const onSubmit =(data) =>{
        console.log(data)
        alert(`login success`)
        reset()
    }

    return(
        <div>
        <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="E-mail"
                    {...register("email",{
                        required:"Email is required",
                        pattern :{
                            value : /^\S+@\S+\.\S+$/,
                            message : "Invalid syntax"
                        }
                    })
                    }
                />
                <p>{errors.email?.message}</p>
                <br/>

                <input
                    type="password"
                    placeholder="password"
                    {...register("password",{
                        required:"password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 characters"
                            }
                        }
                    )}
                />
                <p>{errors.password?.message}</p>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login