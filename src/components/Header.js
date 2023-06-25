import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [show, setshow] = useState(false);


  return (
    <header className='bg-blue-900 text-white flex justify-between px-7 py-3 items-end'>
      <div>

        <h1 className='text-xl'>Sample Web</h1>


        <nav className='space-x-7'>

          {/* <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>AddForm</NavLink>
          <NavLink to='/infoForm'> InfoForm</NavLink>
          <NavLink to='/view'> View</NavLink> */}




        </nav>

      </div>
      <button onClick={() => setshow(!show)}>
        <i className='fa-solid fa-xmark hidden sm:flex'></i>
        :<i className='fa-solid fa-bars hidden sm:flex'></i>


      </button>
      <nav className='sm:hidden'>
        <NavLink to='/infoForm'>AddForm</NavLink>
      </nav><nav></nav>


    </header>
  )
}

export default Header



