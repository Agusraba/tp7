import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () =>
{
    return(
        <ul>
            <li><Link to='/' >HOME</Link></li>
            <li><Link to='/productos' >NUESTROS PRODUCTOS</Link></li>
        </ul>
    )
}
export default Navbar;
