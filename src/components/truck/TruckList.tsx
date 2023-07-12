import React, { useEffect, useState } from 'react'
import { Truck } from '../../types/types'
import { baseUri } from '../../utils/api'

const TruckList: React.FC = () => {
  const url = `${baseUri}/trucks`
  const [trucks, setTrucks] = useState<Truck[]>([])

  useEffect(() => {
    const fetchTrucks = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setTrucks(data)
    }
    fetchTrucks()
  }, [url])

  return (
    <>
      <button className='bg-gradient-to-r from-green-700 from-[13%] via-yellow-300 via-[36%] to-red-600 to-60%'>
        Create
      </button>

      <table className='w-full'>
        <thead>
          <tr className='bg-slate-700 text-slate-100'>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Truck ID
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              License Plate
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Make
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Model
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Year
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Km
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Buy Date
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Last Maintenance
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Next Maintenance Date
            </th>
            <th className='text-left border-r border-slate-100 px-2 py-1'>
              Next Maintenance Km
            </th>
            <th className='text-left px-2 py-1'>Available</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck.id}>
              <td>{truck.id}</td>
              <td>{truck.plate}</td>
              <td>{truck.make}</td>
              <td>{truck.model}</td>
              <td>{truck.year}</td>
              <td>{truck.km}</td>
              <td>{truck.buy_date}</td>
              <td>{truck.last_maint}</td>
              <td>{truck.next_maint_d}</td>
              <td>{truck.next_maint_km}</td>
              <td>{truck.available ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='w-full p-1 text-sm font-bold bg-slate-200'>
        Create truck
      </button>
    </>
  )
}

export default TruckList
