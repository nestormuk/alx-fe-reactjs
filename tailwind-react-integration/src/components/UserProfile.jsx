import React from 'react'

function UserProfile() {
  return (
    <div className='user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 p-10 rounded-lg shadow-lg hover:shadow-xl'>
      <img className='hover:scale-110 transition-transform duration-300 ease-in-out rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36  mx-auto' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />
      <h1 className='hover:text-blue-500 sm:text-lg md:text-xl text-blue-800 my-4'>John Doe</h1>
      <p className='text-gray-600 sm:text-sm md:text-base'>Developer at Example Co. Loves to write code and explore new technologies</p>
    </div>
  )
}

export default UserProfile
