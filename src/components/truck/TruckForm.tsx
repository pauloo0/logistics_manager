import React from 'react'
import { Truck } from '../../types/types'
import { FaChevronLeft } from 'react-icons/fa'

interface TruckFormProps {
  truck: Truck
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onGoBackClick: () => void
  onCancelClick: () => void
}

const TruckForm: React.FC<TruckFormProps> = (props) => {
  const { truck, onInputChange, onSubmit, onGoBackClick, onCancelClick } = props

  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='flex justify-between w-full'>
        <button
          onClick={onGoBackClick}
          className='flex items-center px-2 py-1 text-sm font-bold border rounded-lg bg-slate-100 border-slate-200'
        >
          <FaChevronLeft className='mr-2' /> Go back
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className='grid w-full grid-cols-12 gap-6 mt-12'
      >
        <div className='flex flex-col items-start justify-center col-span-6'>
          <label htmlFor='make'>Make</label>
          <input
            type='text'
            id='make'
            name='make'
            value={truck.make}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-6'>
          <label htmlFor='model'>Model</label>
          <input
            type='text'
            id='model'
            name='model'
            value={truck.model}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='plate'>License Plate</label>
          <input
            type='text'
            id='plate'
            name='plate'
            value={truck.plate}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='year'>Year</label>
          <input
            type='number'
            id='year'
            name='year'
            value={truck.year}
            min={1900}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-4'>
          <label htmlFor='km'>Km</label>
          <input
            type='number'
            id='km'
            name='km'
            value={truck.km}
            min={0}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='buy_date'>Buy date</label>
          <input
            type='date'
            id='buy_date'
            name='buy_date'
            value={truck.buy_date}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='last_maint'>Last maintenance</label>
          <input
            type='date'
            id='last_maint'
            name='last_maint'
            value={truck.last_maint}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='next_maint_d'>Next maintenance (Date)</label>
          <input
            type='date'
            id='next_maint_d'
            name='next_maint_d'
            value={truck.next_maint_d}
            onChange={onInputChange}
            className='w-full p-1 border-b border-slate-400'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full col-span-3'>
          <label htmlFor='next_maint_km'>Next maintenance (Km)</label>
          <input
            type='number'
            id='next_maint_km'
            name='next_maint_km'
            value={truck.next_maint_km}
            onChange={onInputChange}
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
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TruckForm
