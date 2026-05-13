import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    const user = null;
      const activeLink = ({ isActive }) =>
        isActive
            ? "bg-blue-600 text-white px-3 py-1 rounded"
            : "px-3 py-1 hover:text-gray-600"; 

    return (
        <header>
            <nav className='px-4 py-6 shadow-sm sticky top-0 z-50'>
               <div className='flex items-center justify-between max-w-6xl mx-auto'>
                 <Link to="/" className='text-2xl text-blue-900 font-bold'> <span className='text-blue-600'>Real</span>Estate</Link>
               

                <ul className='flex justify-between gap-6'>
                    <li> 
                        <NavLink to="/" className={activeLink}>Home  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/properties" className={activeLink}>Properties  </NavLink>
                    </li>
                    {!user &&(
                        <>
                            <li>
                        <NavLink to="/login" className={activeLink}>Log in  </NavLink>
                    </li>
                     <li>
                        <NavLink to="/register" className={`${activeLink} bg-blue-500 text-blue-50 p-2 rounded-sm`} >Register  </NavLink>
                     </li>
                        </>
                    )}

                    {user &&(
                        <>
                             <li>
                        <NavLink to="/dashboard" className={activeLink}>Dashboard  </NavLink>
                     </li>

                     <li>
                        <NavLink to="/myproperties" className={activeLink}>My properties  </NavLink>
                     </li>

                     <li>
                        <NavLink to="/addproperty" className={activeLink}>Add property  </NavLink>
                     </li>

                    <li>
                        <NavLink to="/" className={activeLink}>Log Out</NavLink>
                    </li>
                        </>
                    )
                    }
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar