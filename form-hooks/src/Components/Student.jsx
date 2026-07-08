

import { Controller, useForm } from "react-hook-form";

function StudentRegistrationForm(){

     const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
        name: "",
        rollNo: "",
        email: "",
        phone: "",
        course: "",
        year: "",
        gender: "",
        city: "",
        address: "",
        },
    });

     // Form Submit
    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        alert("Student Registered Successfully!");
    };

    // Get all values
    const showValues = () => {
        console.log(getValues());
        alert(JSON.stringify(getValues(), null, 2));
    };

    const clearForm = () => {
        reset()
    }

    return(
        <div>
        <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    placeholder="Name"
                    {...register("name", {
                        required : "Name is required",
                        minLength : {
                            value : 3,
                            message : "Minimum 3 length required"
                        }
                    })}
                />
                <p>{errors.name?.message}</p>
                
                <input
                    placeholder="Roll No"
                    {...register("rollNo", {
                        required:"Roll no* required",

                    })}
                />
                    <br/>
                    <br/>
                <input
                    placeholder="E-mail"
                    {...register("email", {
                        required:"Email is required",
                        pattern : {
                            value : /^\S+@\S+\.\S+$/,
                            message : "Enter correct Email",
                        }
                    })}
                />
                <p>{errors.email?.message}</p>

                <input
                    placeholder="Phone-No"
                    {...register("phone",{
                        required:"Phone is needed",
                        pattern :{
                            value : /^[0-9]{10}$/,
                            message : "Phone No should be 10 digit"
                        }
                    })}
                />
                <p>{errors.phone?.message}</p>

                <select
                    {...register("course",{
                        required:"Select Course"
                    })}
                >
                    <option value="">Select Course</option>
                    <option value="B.tech">B.tech</option>
                    <option value="Bca">Bca</option>
                    <option value="B.sc">B.sc</option>
                    <option value="M.sc">M.sc</option>
                </select>
                        {"  "}
                <input
                    placeholder="Which year"
                    {...register("year", {
                        min: {
                            value : 1,
                            message : "minimum year 1"
                        },
                        max: {
                            value : 4,
                            message : "Max year is 4"
                        }
                    })}
                />
                <p>{errors.year?.message}</p>

                <Controller
                    name="gender"
                    control={control}
                    rules={{
                        required:"Gender is required"
                    }}
                    render = {({field})  => (
                        <select {...field}>
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    )}
                />

                <input
                    placeholder="City"
                    {...register("city", {
                        required: "City is required",
                    })}
                />
                <p style={{ color: "red" }}>{errors.city?.message}</p>

                <textarea
                    placeholder="Address"
                    {...register("address", {
                        required: "Address is required",
                    })}
                />
                <p style={{ color: "red" }}>{errors.address?.message}</p>
                
                <button type="submit">Register</button>

                <button
                type="button"
                onClick={showValues}
                style={{ marginLeft: "10px" }}
                >
                Get Values
                </button>

                <button
                type="button"
                onClick={clearForm}
                style={{ marginLeft: "10px" }}
                >
                Reset
                </button>



            </form>
        </div>
    )
}

export default StudentRegistrationForm