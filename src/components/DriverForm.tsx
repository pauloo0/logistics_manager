import React from 'react'
import { Driver } from '../types/Driver'
import { FaChevronLeft } from 'react-icons/fa'

interface DriverFormProps {
  driver: Driver
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onGoBackClick: () => void
  onCancelClick: () => void
}

const DriverForm: React.FC<DriverFormProps> = (props) => {
  const { driver, onInputChange, onSubmit, onGoBackClick, onCancelClick } =
    props

  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <button
          onClick={onGoBackClick}
          className='flex items-center px-2 py-1 bg-slate-100 border border-slate-200 rounded-lg text-sm font-bold'
        >
          <FaChevronLeft className='mr-2' /> Go back
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className='mt-12 w-full grid grid-cols-12 gap-6'
      >
        <div className='flex flex-col items-start justify-center col-span-full'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={driver.name}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='birthday'>Birthday</label>
          <input
            type='date'
            id='birthday'
            name='birthday'
            value={driver.birthday}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            name='country'
            value={driver.country}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div
          id='driverFormButtons'
          className='col-span-2 w-full flex items-center space-x-4'
        >
          <button
            type='submit'
            className='p-2 bg-green-600 text-white tracking-wider rounded-lg font-bold w-full'
          >
            Save
          </button>
          <button
            type='reset'
            className='p-2 bg-slate-100 border border-slate-200 rounded-lg font-bold w-full'
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default DriverForm
