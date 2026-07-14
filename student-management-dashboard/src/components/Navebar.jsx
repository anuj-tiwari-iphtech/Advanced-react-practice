import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(){

    const navigation = useNavigate()

    const handleClick = () => {
        navigation('/')
    }

    return(
        <nav className="Navbar">
            <input className="search-input"
            type = "text"
            placeholder="Search..."
            />

            <button className="btn-logout"
                onClick={handleClick}
                >Log out</button>
        </nav>
    )
}

export default Navbar