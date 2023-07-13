import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const RootLayout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
