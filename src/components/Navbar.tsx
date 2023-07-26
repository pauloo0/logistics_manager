import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    //build a navbar with tailwindcss using NavLink
    // it should have 3 links: Home, Drivers, Trucks

    <nav className='flex items-center justify-between py-3 mx-auto w-[80%]'>
      <Link
        to='/'
        className='text-2xl font-semibold tracking-widest text-sky-400'
      >
        TruckPad
      </Link>
      <div className='box-border flex items-center space-x-6'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `px-2 py-3 tracking-wide hover:text-sky-400 font-medium ${
              isActive ? 'text-sky-400' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/drivers'
          className={({ isActive }) =>
            `px-2 py-3 tracking-wide hover:text-sky-400 font-medium ${
              isActive ? 'text-sky-400' : ''
            }`
          }
        >
          Drivers
        </NavLink>
        <NavLink
          to='/trucks'
          className={({ isActive }) =>
            `px-2 py-3 tracking-wide hover:text-sky-400 font-medium ${
              isActive ? 'text-sky-400' : ''
            }`
          }
        >
          Trucks
        </NavLink>
        <NavLink
          to='/trips'
          className={({ isActive }) =>
            `px-2 py-3 tracking-wide hover:text-sky-400 font-medium ${
              isActive ? 'text-sky-400' : ''
            }`
          }
        >
          Trips
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
