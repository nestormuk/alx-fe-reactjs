import React from 'react'

function LoginPage() {
  return (
    <div className="login-container">
        <h2 className="login-title">Login</h2>

        <form action="" className="login-form">
            <label htmlFor="" className="login-label">Email</label>
            <input type="email" className='login-input' required />

            <label htmlFor="" className="login-label">Password</label>
            <input type="password" className='login-input' required />

            <button type="submit" className='login-button'>Login</button>

        </form>
    </div>
  )
}

export default LoginPage
