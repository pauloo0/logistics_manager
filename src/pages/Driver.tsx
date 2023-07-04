import React, { useState } from 'react'
import DriverForm from '../components/DriverForm'
import { Driver } from '../types/Driver'
import DriverList from '../components/DriverList'

const Driver: React.FC = () => {
  const [driver, setDriver] = useState<Driver>({
    name: '',
    birthday: '',
    country: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDriver({ ...driver, [name]: value })
  }

  const handleDriverSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(driver)
  }

  return (
    <div className='mx-auto w-[80vw]'>
      <DriverList />
      <hr className='my-10' />
      <DriverForm
        driver={driver}
        onInputChange={handleInputChange}
        onSubmit={handleDriverSubmit}
      />
    </div>
  )
}

export default Driver
