import React from 'react'
import { Driver } from '../types/Driver'

const DriverList: React.FC = () => {
  const drivers: Driver[] = [
    {
      id: 1,
      name: 'Lewis Hamilton',
      birthday: '1985-01-07',
      country: 'United Kingdom',
    },
    {
      id: 2,
      name: 'Max Verstappen',
      birthday: '1997-09-30',
      country: 'Netherlands',
    },
    {
      id: 3,
      name: 'Lando Norris',
      birthday: '1999-11-13',
      country: 'United Kingdom',
    },
  ]

  return (
    <>
      <button className='bg-green-400'>Create</button>

      <table className='w-full'>
        <thead>
          <tr></tr>
          <tr>
            <th className='text-left'>DriverID</th>
            <th className='text-left'>Driver Name</th>
            <th className='text-left'>Birthday</th>
            <th className='text-left'>Country</th>
            <th className='text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.birthday}</td>
              <td>{driver.country}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='w-full p-1 text-sm font-bold text-white bg-slate-300 '>
        Create driver
      </button>
    </>
  )
}

export default DriverList
