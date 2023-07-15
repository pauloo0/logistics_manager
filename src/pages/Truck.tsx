import React, { useState } from 'react'
import { Truck } from '../types/types'
import { baseUri } from '../utils/api'
import TruckList from '../components/truck/TruckList'
import TruckForm from '../components/truck/TruckForm'
import { useLoaderData } from 'react-router-dom'

interface TruckProps {
  showForm: boolean
}

const Truck: React.FC<TruckProps> = (props) => {
  const trucks = useLoaderData() as Truck[]

  const [showForm, setShowForm] = useState<boolean>(props.showForm)
  const [newTruck, setNewTruck] = useState<Truck>({
    plate: '',
    make: '',
    model: '',
    year: 0,
    km: 0,
    buy_date: '',
    last_maint: '',
    next_maint_d: '',
    next_maint_km: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewTruck({ ...newTruck, [name]: value })
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
        body: JSON.stringify(newTruck),
      })
    }

    createTruck()
    setShowForm(false)
  }

  const handleCreateClick = () => {
    setShowForm(true)
  }
  const handleGoBackClick = () => {
    setShowForm(false)
  }
  const handleCancelClick = () => {
    setShowForm(false)
  }

  return (
    <div className='mx-auto w-[80vw]'>
      {showForm ? (
        <TruckForm
          truck={newTruck}
          onInputChange={handleInputChange}
          onSubmit={handleTruckSubmit}
          onGoBackClick={handleGoBackClick}
          onCancelClick={handleCancelClick}
        />
      ) : (
        <TruckList trucks={trucks} onCreateClick={handleCreateClick} />
      )}
    </div>
  )
}

export default Truck
