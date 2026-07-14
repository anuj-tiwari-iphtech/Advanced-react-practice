
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./studentform.css";

const StudentForm = ({ setStudents, editingStudent, setEditingStudent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const emptyForm = { name: "", email: "", city: "", phone: "" };

  
  useEffect(() => {
    if (editingStudent) {
      reset({
        name: editingStudent.name,
        email: editingStudent.email,
        city: editingStudent.address.city,
        phone: editingStudent.phone,
      });
    }
  }, [editingStudent, reset]);

  const onSubmit = async (data) => {
    if (editingStudent) {
      
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingStudent.id ? { ...s, ...data } : s
        )
      );
      setEditingStudent(null);
      reset(emptyForm);
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        data
      );

      
      const newStudent = { ...data, id: Date.now() };

        setStudents((prev) => [...prev, newStudent]);
        alert("Student Added Successfully!");
        reset(emptyForm);
      } catch (error) {
        console.log(error);
        alert("Something went wrong!");
      }
  };

  const handleCancel = () => {
    setEditingStudent(null);
    reset(emptyForm);
  };

  return (
    <div className="form-container">
      <h1>{editingStudent ? "Edit Student" : "Add Student"}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <br />
          <input type="text" {...register("name", { required: "Name is required" })} />
          <p>{errors.name?.message}</p>
        </div>

        <br />

        <div className="form-group">
          <label>Email</label>
          <br />
          <input type="email" {...register("email", { required: "Email is required" })} />
          <p>{errors.email?.message}</p>
        </div>

        <br />

        <div className="form-group">
          <label>City</label>
          <br />
          <input type="text" {...register("city")} />
        </div>

        <br />

        <div className="form-group">
          <label>Phone</label>
          <br />
          <input type="text" {...register("phone")} />
        </div>

        <br />

        <div className="button-group">
          <button className="add-btn" type="submit">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
          <button className="reset-btn" type="button" onClick={handleCancel}>
            {editingStudent ? "Cancel" : "Reset"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;