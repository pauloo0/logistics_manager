import React from 'react'
import { Driver } from '../types/Driver'

interface DriverFormProps {
  driver: Driver
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

const DriverForm: React.FC<DriverFormProps> = (props) => {
  const { driver, onInputChange, onSubmit } = props

  return (
    <div className='flex flex-col items-start justify-center'>
      <h1>Driver Form</h1>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col items-start justify-center'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={driver.name}
            onChange={onInputChange}
          />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <label htmlFor='birthday'>Birthday</label>
          <input
            type='date'
            id='birthday'
            name='birthday'
            value={driver.birthday}
            onChange={onInputChange}
          />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            name='country'
            value={driver.country}
            onChange={onInputChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default DriverForm
