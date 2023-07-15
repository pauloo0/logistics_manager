import React, { useEffect, useState } from 'react'
import { Truck } from '../../types/types'
import { baseUri } from '../../utils/api'

interface TruckListProps {
  onCreateClick: () => void
  trucks: Truck[]
}

const TruckList: React.FC<TruckListProps> = (props) => {
  const { onCreateClick, trucks: fetchedTrucks } = props

  const url = `${baseUri}/trucks`
  const [trucks, setTrucks] = useState<Truck[]>(fetchedTrucks)

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
      <button
        onClick={onCreateClick}
        className='bg-gradient-to-r from-green-700 from-[13%] via-yellow-300 via-[36%] to-red-600 to-60%'
      >
        Create
      </button>

      <table className='w-full'>
        <thead>
          <tr className='bg-slate-700 text-slate-100'>
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
            <th className='px-2 py-1 text-left'>Available</th>
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

      <button
        onClick={onCreateClick}
        className='w-full p-1 text-sm font-bold bg-slate-200'
      >
        Create truck
      </button>
    </>
  )
}

export default TruckList
