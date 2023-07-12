import React, { useEffect, useState } from 'react'
import { Driver } from '../../types/types'
import { baseUri } from '../../utils/api'

interface DriverListProps {
  onCreateClick: () => void
}

const DriverList: React.FC<DriverListProps> = (props) => {
  const { onCreateClick } = props

  const url = `${baseUri}/drivers`
  const [drivers, setDrivers] = useState<Driver[]>([])

  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setDrivers(data)
    }
    fetchDrivers()
  }, [url])

  return (
    <>
      <button
        onClick={onCreateClick}
        className='bg-gradient-to-r from-green-700 from-[13%] via-yellow-300 via-[36%] to-red-600 to-60%'
      >
        Create
      </button>

      <table className='w-full'>
        <thead>
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

      <button
        onClick={onCreateClick}
        className='w-full p-1 text-sm font-bold text-white bg-gradient-to-r from-green-700 from-[13%] via-yellow-300 via-[36%] to-red-600 to-60%'
      >
        Create driver
      </button>
    </>
  )
}

export default DriverList
