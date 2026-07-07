import './App.css';


import { useState } from "react"

import Button from "./components/button"
import Input from "./components/input"
import Card from "./components/card"
import Modal from "./components/Modal"
import Loader from "./components/loader"
import Badge from "./components/Badge"
import Avatar from "./components/Avatar"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import Search from "./components/SearchInput"


function App() {
  
  const[show, setShow] = useState(true)

  const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  ];

  const data = [
    { name: "John", age: 25 },
    { name: "Sara", age: 22 },
  ];

  const[search, setSearch] = useState()

  return (
    <>
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


    <h2>Buttons</h2>
      <Button>save</Button>
      <Button variant="Danger">Delete</Button>
      <Button>Save as</Button>
      <button disabled>there</button>

    <br/><br/>

    <h2>Input</h2>
      <Input
        label="Email "
        placeholder="Enter your Email"
      />
      <Input
        label="Name "
        placeholder="Enter your Name"
      />

    <h2>Card</h2>
      <Card title="React">
        <p>useful library for frontend</p>
      </Card>
      <Card title="Mongo DB">
        <p>Is a Database</p>
      </Card>

    <h2>Modal</h2>
      <Modal
        isOpen={show}
        onClosed={()=>setShow(false)}
        >
        Hello
      </Modal>

      <Modal
        isOpen={show}
        onClosed={()=>setShow(false)}
        >
        Your Computer have virus
      </Modal>

      <h2>Loader</h2>
        <Loader/>
        <Loader size="large"/>
      
      <h2>Badge</h2>
        <Badge color="red" text="chat"/>
        <Badge text="New"/>
        <Badge text="Pending" color="yellow" />

    <h2>Avatar</h2>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1KGUiR_B7VBIwb2PuahaxJoceqEtOV3b9r53-0Qrow&s"
          alt="user"
        />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqrUYVS9TzgQ4EuynKzPbC_izFFSB-e8gWjLrUOSvqQ&s"
          alter="blank"
        />

    <h2>Table</h2>

    <Table columns={columns} data={data} />

    <h2>Pagination</h2>

    <Pagination
      currentPage={1}
      totalPage={5}
      onChangePage={(page) =>
        console.log(page)
      }
    />

      
    </>
  
  
  )
}

export default App
