import { Link } from "react-router-dom"
import "./Sidebar.css";


// function SideBar(){

//     return (
//         <>
//         <aside className = "SideBar">
//            <ul>
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/students">Students</Link></li>
//                 <li><Link to="/students/add">Add Students</Link></li>
//                 <li><Link to="/setting">Setting</Link></li>
//             </ul> 
            
//         </aside>
//         </>
//     )
// }

// export default SideBar

function Sidebar({ open }) {
    return (
      <div className={`SideBar ${open ? "active" : ""}`}>
        <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/students">Students</Link></li>
               <li><Link to="/students/add">Add Students</Link></li>
              <li><Link to="/setting">Setting</Link></li>
            </ul> 
      </div>
    );
  }
  
  export default Sidebar;