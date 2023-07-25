import React from 'react'
import { Outlet } from 'react-router-dom'

const DriverLayout: React.FC = () => {
  return (
    <div className='mx-auto w-[80vw]'>
      <Outlet />
    </div>
  )
}

export default DriverLayout
