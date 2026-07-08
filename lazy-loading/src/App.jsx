import { BrowserRouter, Routes, Route } from 'react-router'

import { lazy, Suspense } from 'react'
import './App.css'

import Loader from './components/loader'

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Home = lazy(() => import("./pages/Home"))
const Product = lazy(() => import("./pages/Product"))
const Students = lazy(() => import("./pages/Student"))

function App() {
 

  return (
    <>
      


      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/students" element={<Students/>}/>
          </Routes>
        </Suspense>  
      </BrowserRouter>

    </>
      
  )
}

export default App
