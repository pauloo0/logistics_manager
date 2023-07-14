import React, { useState } from 'react'
import { Truck } from '../types/types'
import { baseUri } from '../utils/api'
import TruckList from '../components/truck/TruckList'
import TruckForm from '../components/truck/TruckForm'

interface TruckProps {
  showForm: boolean
}

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

const Truck: React.FC<TruckProps> = (props) => {
  const [truck, setTruck] = useState<Truck>(clearTruck)
  const [showForm, setShowForm] = useState<boolean>(props.showForm)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTruck({ ...truck, [name]: value })
  }

  const handleTruckSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const url = `${baseUri}/trucks`

    const createTruck = async () => {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(truck),
      })
    }

    createTruck()
    setTruck(clearTruck)
    setShowForm(false)
  }

  const handleCreateClick = () => {
    setShowForm(true)
  }
  const handleGoBackClick = () => {
    setShowForm(false)
  }
  const handleCancelClick = () => {
    setTruck(clearTruck)
    setShowForm(false)
  }

  return (
    <div className='mx-auto w-[80vw]'>
      {showForm ? (
        <TruckForm
          truck={truck}
          onInputChange={handleInputChange}
          onSubmit={handleTruckSubmit}
          onGoBackClick={handleGoBackClick}
          onCancelClick={handleCancelClick}
        />
      ) : (
        <TruckList onCreateClick={handleCreateClick} />
      )}
    </div>
  )
}

export default Truck
