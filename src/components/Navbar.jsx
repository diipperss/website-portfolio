import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="flex flex-wrap justify-between p-1 m-5">
      <NavLink to="/home" className={({ isActive }) => isActive ?
        'text-blue-950 w-20 h-10 rounded-lg bg-white flex items-center justify-center shadow-md ' : 'blue-gradient_text'}>
        Home
      </NavLink>
      <nav className="flex text-lg font-medium m-1">
        <NavLink to="/projects" className={({ isActive }) => isActive ?
          'text-blue-950 w-20 h-10 rounded-lg bg-white flex items-center justify-center shadow-md' : 'blue-gradient_text'}>
          Projects
        </NavLink>
      </nav>
      <nav className="flex text-lg font-medium m-1">
        <NavLink to="/contact" className={({ isActive }) => isActive ?
          'text-blue-950 w-20 h-10 rounded-lg bg-white flex items-center justify-center shadow-md' : 'blue-gradient_text'}>
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
