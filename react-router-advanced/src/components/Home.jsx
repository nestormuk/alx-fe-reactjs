import React from 'react'
import ProtectedRoute from './ProtectedRoute'
import Profile from './Profile'
function Home() {
  return (
    <div>
      <h1>This is the HomePage</h1>

      <ProtectedRoute />
        
    </div>
  )
}

export default Home
