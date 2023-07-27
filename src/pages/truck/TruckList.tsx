import React from 'react'
import { Truck } from '../../types/types'
import { deleteTruck, repairAndUpdateTruck } from '../../functions/trucks'
import { Link, useLoaderData } from 'react-router-dom'
import { FaEdit, FaPlus, FaTrash, FaWrench } from 'react-icons/fa'

const TruckList: React.FC = () => {
  const trucks = useLoaderData() as Truck[]

  const handleDelete = async (id: number | undefined) => {
    if (!id) return

    await deleteTruck(id)
    window.location.reload()
  }

  const handleRepair = async (truck: Truck) => {
    await repairAndUpdateTruck(truck)
    window.location.reload()
  }

  return (
    <>
      <Link to='/trucks/create'>
        <button className='flex items-center px-2 py-1 text-sm font-bold text-green-900 bg-green-500 border border-green-700 rounded-lg'>
          <FaPlus className='mr-2' /> Create
        </button>
      </Link>

      <div className='mt-6 overflow-x-auto rounded'>
        <table className='w-full text-sm '>
          <thead>
            <tr className='bg-sky-700 text-slate-100'>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Truck ID
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                License Plate
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Make
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Model
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Year
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Km
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Buy Date
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Last Maintenance
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Next Maintenance Date
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Next Maintenance Km
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Available
              </th>
              <th className='px-2 py-1 text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((truck) => (
              <tr key={truck.id}>
                <td className='px-2 py-1 text-left'>{truck.id}</td>
                <td className='px-2 py-1 text-left'>{truck.plate}</td>
                <td className='px-2 py-1 text-left'>{truck.make}</td>
                <td className='px-2 py-1 text-left'>{truck.model}</td>
                <td className='px-2 py-1 text-left'>{truck.year}</td>
                <td className='px-2 py-1 text-left'>{truck.km}</td>
                <td className='px-2 py-1 text-left'>{truck.buy_date}</td>
                <td className='px-2 py-1 text-left'>{truck.last_maint}</td>
                <td className='px-2 py-1 text-left'>{truck.next_maint_d}</td>
                <td className='px-2 py-1 text-left'>{truck.next_maint_km}</td>
                <td className='px-2 py-1 text-left'>
                  {truck.available ? 'Yes' : 'No'}
                </td>
                <td className='flex items-center px-2 py-1 justify-evenly'>
                  <Link to={`/trucks/edit/${truck.id}`}>
                    <FaEdit className='text-amber-500' />
                  </Link>
                  <button onClick={() => handleDelete(truck.id)}>
                    <FaTrash className='text-red-500' />
                  </button>
                  {!truck.available && (
                    <button onClick={() => handleRepair(truck)}>
                      <FaWrench className='text-blue-500' />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to='/trucks/create'>
        <button className='w-full p-1 text-sm font-bold bg-slate-200'>
          Create truck
        </button>
      </Link>
    </>
  )
}

export default TruckList
