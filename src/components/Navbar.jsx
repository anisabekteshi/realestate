import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/">Real Estate</Link>

                <ul className='flex items-center'>
                    <NavLink to="/">Home  </NavLink>
                    <NavLink to="/login">Log in  </NavLink>
                    <NavLink to="/register">Register  </NavLink>
                    <NavLink to="/addproperty">Add property  </NavLink>
                    <NavLink to="/dashboard">Dashboard  </NavLink>
                    <NavLink to="/myproperties">My properties  </NavLink>
                    <NavLink to="/properties">Properties  </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar