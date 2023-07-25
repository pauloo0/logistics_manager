import React from 'react'
import { Driver } from '../types/types'
import { deleteDriver } from '../functions/drivers'
import { Link, useLoaderData } from 'react-router-dom'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

const DriverList: React.FC = () => {
  const drivers = useLoaderData() as Driver[]

  const handleDelete = async (id: number | undefined) => {
    if (!id) return

    await deleteDriver(id)
    window.location.reload()
  }

  return (
    <>
      <Link to='/drivers/create'>
        <button className='flex items-center px-2 py-1 text-sm font-bold text-green-900 bg-green-500 border border-green-700 rounded-lg'>
          <FaPlus className='mr-2' /> Create
        </button>
      </Link>

      <div className='mt-6 overflow-x-auto rounded'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='bg-sky-700 text-slate-100'>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Driver ID
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Driver Name
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Birthday
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Country
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Available
              </th>
              <th className='px-2 py-1 text-left border-r border-slate-100'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td className='px-2 py-1 text-left'>{driver.id}</td>
                <td className='px-2 py-1 text-left'>{driver.name}</td>
                <td className='px-2 py-1 text-left'>{driver.birthday}</td>
                <td className='px-2 py-1 text-left'>{driver.country}</td>
                <td className='px-2 py-1 text-left'>
                  {driver.on_trip ? 'No' : 'Yes'}
                </td>
                <td className='flex items-center px-2 py-1 justify-evenly'>
                  <Link to={`/drivers/edit/${driver.id}`}>
                    <FaEdit className='text-amber-500' />
                  </Link>
                  <button onClick={() => handleDelete(driver.id)}>
                    <FaTrash className='text-red-500' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to='/drivers/create'>
        <button className='w-full p-1 text-sm font-bold bg-slate-200'>
          Create driver
        </button>
      </Link>
    </>
  )
}

export default DriverList
