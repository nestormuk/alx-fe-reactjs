import React from 'react'
import { Outlet, Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/service" >Service</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar
