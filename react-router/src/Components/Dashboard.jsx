

import {Outlet, Link}  from "react-router-dom"


export default function Dashboard(){

    return(
        <>
            <h1>Dashboard Menu</h1>

            <Link to="/dashboard/profile">Profile</Link>{"  | "}
            <Link to="/dashboard/setting">Setting</Link>{"  | "}
            <Link>New User</Link>

            <hr/>
            <Outlet/>


        </>
    )
}