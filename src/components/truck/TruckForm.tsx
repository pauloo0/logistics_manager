import React, { useEffect, useState } from 'react'
import { Truck } from '../../types/types'
import { FaChevronLeft } from 'react-icons/fa'
import { Form, Link, useParams } from 'react-router-dom'
import { baseUri } from '../../utils/api'

const TruckForm: React.FC = () => {
  const { id } = useParams()
  const [truck, setTruck] = useState<Truck>()

  useEffect(() => {
    const getTruck = async (id: number) => {
      const res = await fetch(`${baseUri}/trucks/${id}`)
      const data = await res.json()

      setTruck(data)
    }

    if (id) {
      getTruck(parseInt(id))
    }
  }, [id])

  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <Link to='/trucks'>
          <button className='flex items-center px-2 py-1 text-sm font-bold border rounded-lg bg-slate-100 border-slate-200'>
            <FaChevronLeft className='mr-2' /> Go back
          </button>
        </Link>
      </div>
      <Form
        method='POST'
        action='/trucks/create'
        className='grid w-full grid-cols-12 gap-6 mt-12'
      >
        <div className='flex flex-col items-start justify-center col-span-6'>
          <label htmlFor='make'>Make</label>
          <input
            type='text'
            id='make'
            name='make'
            value={truck && truck.make}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='model'>Model</label>
          <input
            type='text'
            id='model'
            name='model'
            value={truck && truck.model}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='plate'>License Plate</label>
          <input
            type='text'
            id='plate'
            name='plate'
            value={truck && truck.plate}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='year'>Year</label>
          <input
            type='number'
            id='year'
            name='year'
            value={truck && truck.year}
            min={1900}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='km'>Km</label>
          <input
            type='number'
            id='km'
            name='km'
            value={truck && truck.km}
            min={0}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='buy_date'>Buy date</label>
          <input
            type='date'
            id='buy_date'
            name='buy_date'
            value={truck && truck.buy_date}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='last_maint'>Last maintenance</label>
          <input
            type='date'
            id='last_maint'
            name='last_maint'
            value={truck && truck.last_maint}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='next_maint_d'>Next maintenance (Date)</label>
          <input
            type='date'
            id='next_maint_d'
            name='next_maint_d'
            value={truck && truck.next_maint_d}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='next_maint_km'>Next maintenance (Km)</label>
          <input
            type='number'
            id='next_maint_km'
            name='next_maint_km'
            value={truck && truck.next_maint_km}
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
            Clear
          </button>
        </div>
      </Form>
    </div>
  )
}

export default TruckForm
