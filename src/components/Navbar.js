// Component that renders the navbar calling the Navigation component with the Links component as a child
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

function Navbar() {


    // Return the navbar with the logo and the Navigation component
    return (
        // Navbar with:
        // - Logo
        // - Navigation component (using Links component as a child)
        <nav className="navbar">

            <img src={logo} alt="Little Lemon" className="nav-image"></img>

            <Link className="navItem" to="/">
                <h1>Home</h1>
            </Link>

            <Link className="navItem" to="/about">
                <h1>About</h1>
            </Link>

            <Link className="navItem" to="/menu">
                <h1>Menu</h1>
            </Link>

            <Link className="navItem" to="/reservations">
                <h1>Reservations</h1>
            </Link>

            <Link className="navItem" to="/order">
                <h1>Order</h1>
            </Link>

            <Link className="navItem" to="/login">
                <h1>Login</h1>
            </Link>

        </nav>
    );
}

export default Navbar;