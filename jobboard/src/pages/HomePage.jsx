import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
       <h1>Welcome to the Homepage</h1> 
       <Link to="/login">Login</Link>
       <button>Sign Up</button>
    </div>
  )
}

export default HomePage
