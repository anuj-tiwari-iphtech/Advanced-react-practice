import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import { Loader } from "./components/loader"

import LogIn from "./pages/Login"
import Dashboard from "./pages/Dashboard"

// import AddStudents from "./pages/AddStudents"
// import Student from "./pages/Students"
// import Setting from "./pages/Setting"

const AddStudents = lazy(() => import("./pages/AddStudents"))
const Student = lazy(() => import("./pages/Students"))
const Setting = lazy(() => import("./pages/Setting"))

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Routes>
       
        <Route path="/" element={<LogIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/students/add" element={<AddStudents/>}/>
          <Route path="/students" element={<Student/>}/>
          <Route path="/setting" element={<Setting/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter> 
      
    </>
  )
}

export default App
