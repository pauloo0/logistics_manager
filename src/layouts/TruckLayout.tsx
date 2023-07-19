import React from 'react'
import { Outlet } from 'react-router-dom'

const TruckLayout: React.FC = () => {
  return (
    <div className='mx-auto w-[80vw]'>
      <Outlet />
    </div>
  )
}

export default TruckLayout
