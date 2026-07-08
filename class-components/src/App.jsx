
import Header from "./classComponents/ClassHeader"
import Navbar from "./classComponents/ClassNav"
import Footer from "./classComponents/ClassFooter"
import StudentCard from "./classComponents/ClassStudent"
import EmployeeCard from "./classComponents/EmployeeCard"
import ProductList from "./classComponents/ClassProducts"

import Counter from "./classComponents/Counter"



function App() {
  

  return (
    <>
      <Header/>
      <Navbar/>
      <hr/>

      <StudentCard
        name = "Anuj Tiwari"
        age = "21"
      />
      <StudentCard
        name ="Nayan"
        age = "23"
      />
      <hr/>

      <h1>Employee Details</h1>
        <EmployeeCard
          name = "Lalit"
          age = "20"
        />
        <EmployeeCard
          name = "Nitin"
          age = "23"
        />
        <hr/>

      <h1>Product List</h1>
        <ProductList
          name = "Laptop"
          price = "15000"
        />
        <ProductList
          name = "Pixel 8A"
          price = "40000"
        />
        <hr/>

      <Footer/>
        <hr/>

      <Counter/>
    </>
  )
}

export default App
