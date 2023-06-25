import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='space-x-5'>

      <NavLink to='/about'>About Home</NavLink>
      <NavLink to='about2'>About Home2</NavLink>


      <Outlet />
    </div>
  )
}

export default About
