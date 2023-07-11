import React, { useState } from 'react'
import DriverForm from '../components/DriverForm'
import { Driver } from '../types/Driver'
import { baseUri } from '../utils/api'
import DriverList from '../components/DriverList'

const clearDriver: Driver = {
  name: '',
  birthday: '',
  country: '',
}

const Driver: React.FC = () => {
  const [driver, setDriver] = useState<Driver>(clearDriver)
  const [showForm, setShowForm] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDriver({ ...driver, [name]: value })
  }

  const handleDriverSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const url = `${baseUri}/drivers`

    const createDriver = async () => {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
      })
    }

    createDriver()
    setDriver(clearDriver)
    setShowForm(false)
  }

  const handleCreateClick = () => {
    setShowForm(true)
  }
  const handleGoBackClick = () => {
    setShowForm(false)
  }
  const handleCancelClick = () => {
    setDriver(clearDriver)
    setShowForm(false)
  }

  return (
    <div className='mx-auto w-[80vw]'>
      {showForm ? (
        <DriverForm
          driver={driver}
          onInputChange={handleInputChange}
          onSubmit={handleDriverSubmit}
          onGoBackClick={handleGoBackClick}
          onCancelClick={handleCancelClick}
        />
      ) : (
        <DriverList onCreateClick={handleCreateClick} />
      )}
    </div>
  )
}

export default Driver
