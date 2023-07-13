import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between w-[80vw] mx-auto'>
      <NavLink to='/'>
        <h1>Truckpad</h1>
      </NavLink>
      <ul className='flex items-center space-x-12'>
        <li>
          <NavLink to='drivers'>Drivers</NavLink>
        </li>
        <li>
          <NavLink to='trucks'>Trucks</NavLink>
        </li>
        <li>
          <NavLink to='trips'>Trips</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
