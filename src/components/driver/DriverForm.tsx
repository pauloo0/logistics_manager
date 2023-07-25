import React from 'react'
import { Driver } from '../../types/types'
import { FaChevronLeft } from 'react-icons/fa'

const DriverForm: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <button className='flex items-center px-2 py-1 text-sm font-bold border rounded-lg bg-slate-100 border-slate-200'>
          <FaChevronLeft className='mr-2' /> Go back
        </button>
      </div>
      <form className='grid w-full grid-cols-12 gap-6 mt-12'>
        <div className='flex flex-col items-start justify-center col-span-full'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='birthday'>Birthday</label>
          <input
            type='date'
            id='birthday'
            name='birthday'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            name='country'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div
          id='driverFormButtons'
          className='flex items-center w-full col-span-2 space-x-4'
        >
          <button
            type='submit'
            className='w-full p-2 font-bold tracking-wider text-white bg-green-600 rounded-lg'
          >
            Save
          </button>
          <button
            type='reset'
            className='w-full p-2 font-bold border rounded-lg bg-slate-100 border-slate-200'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default DriverForm
