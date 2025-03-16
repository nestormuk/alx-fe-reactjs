import React from 'react'

function Navbar() {
  return (
    <div className='p-4 flex'>
      <a className='text-lg sm:text-2xl font-bold text-primary' 
      href="#">Nestor</a>

      <a className='m-2  text-sm  hover:border-b border-black ml-auto' href="#">About Me</a>

      <a className='m-2  text-sm  hover:border-b border-black ' href="#">My work</a>

      <a className='m-2  text-sm  hover:border-b border-black ' href="#">Contact me</a>
    </div>
  )
}

export default Navbar
