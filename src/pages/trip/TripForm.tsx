import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Form, Link, useLoaderData } from 'react-router-dom'

import { Driver, Truck, Trip } from '../../types/types'
import { baseUri } from '../../utils/api'

const TripForm: React.FC = () => {
  const loaderTrip = useLoaderData() as Trip

  const [drivers, setDrivers] = useState<Driver[]>([])
  const [trucks, setTrucks] = useState<Truck[]>([])
  const [trip, setTrip] = useState<Trip>(loaderTrip)

  useEffect(() => {
    const getDrivers = async () => {
      const res = await fetch(`${baseUri}/drivers`)
      const data = await res.json()

      setDrivers(data)
    }

    getDrivers()
  }, [])

  useEffect(() => {
    const getTrucks = async () => {
      const res = await fetch(`${baseUri}/trucks`)
      const data = await res.json()

      const filteredTrucks = data.filter(
        (truck: Truck) => truck.available === true
      )

      setTrucks(filteredTrucks)
    }

    getTrucks()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setTrip({
      ...trip,
      [name]: value,
    })
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    setTrip({
      ...trip,
      [name]: value,
    })
  }

  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <Link to='/trips'>
          <button className='flex items-center px-2 py-1 text-sm font-bold border rounded-lg bg-slate-100 border-slate-200'>
            <FaChevronLeft className='mr-2' /> Go back
          </button>
        </Link>
      </div>
      <Form
        method={trip ? 'PUT' : 'POST'}
        className='grid w-full grid-cols-12 gap-6 mt-12'
      >
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='driverId'>Driver</label>
          <select
            name='driverId'
            id='driverId'
            value={trip && trip.driverId}
            onChange={(e) => handleSelectChange(e)}
            className='w-full p-1 border-b border-slate-400 bg-transparent'
          >
            <option value={0} key={0}></option>
            {drivers.map((driver) => (
              <option value={driver.id} key={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='truckId'>Truck</label>
          <select
            name='truckId'
            id='truckId'
            value={trip && trip.truckId}
            onChange={(e) => handleSelectChange(e)}
            className='w-full p-1 border-b border-slate-400 bg-transparent'
          >
            <option value={0} key={0}></option>
            {trucks.map((truck) => (
              <option value={truck.id} key={truck.id}>
                {truck.plate}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='cargo'>Cargo</label>
          <input
            type='text'
            id='cargo'
            name='cargo'
            value={trip && trip.cargo}
            onChange={(e) => handleInputChange(e)}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>

        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='start'>Start Date</label>
          <input
            type='date'
            id='start'
            name='start'
            value={trip && trip.start}
            onChange={(e) => handleInputChange(e)}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='end'>End Date</label>
          <input
            type='date'
            id='end'
            name='end'
            value={trip && trip.end}
            onChange={(e) => handleInputChange(e)}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-4'>
          <label htmlFor='km'>Total Km's</label>
          <input
            type='number'
            id='km'
            name='km'
            value={trip && trip.km}
            onChange={(e) => handleInputChange(e)}
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
            value={trip && trip.from}
            onChange={(e) => handleInputChange(e)}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center col-span-6'>
          <label htmlFor='to'>Destination</label>
          <input
            type='text'
            id='to'
            name='to'
            value={trip && trip.to}
            onChange={(e) => handleInputChange(e)}
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
