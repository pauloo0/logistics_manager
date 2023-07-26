import React from 'react'
import { Trip } from '../../types/types'
import { deleteTrip } from '../../functions/trips'
import { Link, useLoaderData } from 'react-router-dom'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

const TripList: React.FC = () => {
  const trips = useLoaderData() as Trip[]

  const handleDelete = async (id: number | undefined) => {
    if (!id) return

    await deleteTrip(id)
    window.location.reload()
  }

  return (
    <>
      <Link to='/trips/create'>
        <button className='flex items-center px-2 py-1 text-sm font-bold text-green-900 bg-green-500 border border-green-700 rounded-lg'>
          <FaPlus className='mr-2' /> Create
        </button>
      </Link>

      <div className='mt-6 overflow-x-auto rounded'>
        <table className='w-full text-sm '>
          <thead>
            <tr className='bg-sky-700 text-slate-100'>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Trip ID
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Driver ID
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Truck ID
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Origin
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Destination
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Departure Date
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Arrival Date
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Km's Driven
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Cargo
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td className='px-2 py-1 text-left'>{trip.id}</td>
                <td className='px-2 py-1 text-left'>{trip.driverId}</td>
                <td className='px-2 py-1 text-left'>{trip.truckId}</td>
                <td className='px-2 py-1 text-left'>{trip.from}</td>
                <td className='px-2 py-1 text-left'>{trip.to}</td>
                <td className='px-2 py-1 text-left'>{trip.start}</td>
                <td className='px-2 py-1 text-left'>{trip.end}</td>
                <td className='px-2 py-1 text-left'>{trip.km}</td>
                <td className='px-2 py-1 text-left'>{trip.cargo}</td>
                <td className='px-2 py-1 text-left'>
                  <div className='flex items-center px-2 py-1 justify-evenly'>
                    <Link to={`/trips/edit/${trip.id}`}>
                      <FaEdit className='mr-2 text-amber-500' />
                    </Link>
                    <button onClick={() => handleDelete(trip.id)}>
                      <FaTrash className='text-red-500' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to='/trips/create'>
        <button className='w-full p-1 text-sm font-bold bg-slate-200'>
          Create Trip
        </button>
      </Link>
    </>
  )
}

export default TripList
