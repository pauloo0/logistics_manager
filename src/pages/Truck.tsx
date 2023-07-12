import React, { useState, useEffect } from 'react'
import { Truck } from '../types/types'
import TruckList from '../components/truck/TruckList'

const clearTruck: Truck = {
  plate: '',
  make: '',
  model: '',
  year: 0,
  km: 0,
  buy_date: '',
  last_maint: '',
  next_maint_d: '',
  next_maint_km: 0,
  available: true,
}

const Truck: React.FC = () => {
  const [truck, setTruck] = useState<Truck>(clearTruck)

  return (
    <div className='mx-auto w-[80vw]'>
      <TruckList />
    </div>
  )
}

export default Truck
