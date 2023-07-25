import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const RootLayout: React.FC = () => {
  return (
    <div className='font-rubik'>
      <header className='bg-slate-900 text-slate-100'>
        <Navbar />
      </header>
      <main className='mt-16 mb-8'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
