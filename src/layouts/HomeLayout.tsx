import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomeLayout: React.FC = () => {
  return (
    <div className='mx-auto w-[80vw] flex flex-col'>
      <Link to='/trips/create'>
        <button className='flex items-center px-2 py-1 text-sm font-bold text-green-900 bg-green-500 border border-green-700 rounded-lg'>
          Create trip
        </button>
      </Link>
      <section id='Dashboard' className='mt-6'>
        <Outlet />
      </section>
    </div>
  )
}

export default HomeLayout
