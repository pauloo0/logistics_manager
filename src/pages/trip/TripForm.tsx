import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Form, Link } from 'react-router-dom'

const TripForm: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <Link to='/'>
          <button className='flex items-center px-2 py-1 text-sm font-bold border rounded-lg bg-slate-100 border-slate-200'>
            <FaChevronLeft className='mr-2' /> Go back
          </button>
        </Link>
      </div>
      <Form method='POST' className='grid w-full grid-cols-12 gap-6 mt-12'>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='driver'>Driver</label>
          <select
            name='driver'
            id='driver'
            className='w-full p-1 border-b border-slate-400 bg-transparent'
          >
            <option value=''></option>
            <option value='1'>Driver 1</option>
            <option value='2'>Driver 2</option>
            <option value='3'>Driver 3</option>
          </select>
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='truck'>Truck</label>
          <select
            name='truck'
            id='truck'
            className='w-full p-1 border-b border-slate-400 bg-transparent'
          >
            <option value=''></option>
            <option value='1'>Truck 1</option>
            <option value='2'>Truck 2</option>
            <option value='3'>Truck 3</option>
          </select>
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='cargo'>Cargo</label>
          <input
            type='text'
            id='cargo'
            name='cargo'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>

        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='start'>Start Date</label>
          <input
            type='date'
            id='start'
            name='start'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='end'>End Date</label>
          <input
            type='date'
            id='end'
            name='end'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='km'>Total Km's</label>
          <input
            type='number'
            id='km'
            name='km'
            min={0}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>

        <div className='flex flex-col items-start justify-center col-span-6'>
          <label htmlFor='from'>Origin</label>
          <input
            type='text'
            id='from'
            name='from'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-6'>
          <label htmlFor='to'>Destination</label>
          <input
            type='text'
            id='to'
            name='to'
            className='w-full p-1 border-b border-slate-400'
          />
        </div>

        <div
          id='tripFormButtons'
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
            Clear
          </button>
        </div>
      </Form>
    </div>
  )
}

export default TripForm
