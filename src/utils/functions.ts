import { redirect } from 'react-router-dom'
import { Truck } from '../types/types'
import { baseUri } from '../utils/api'

export const getTrucks = async (): Promise<Truck[]> => {
  const res = await fetch(`${baseUri}/trucks`)

  return res.json()
}

export const createTruck = async ({ request }: any) => {
  const data = await request.formData()

  const submission = {
    make: data.get('make'),
    model: data.get('model'),
    plate: data.get('plate'),
    year: data.get('year'),
    km: data.get('km'),
    buy_date: data.get('buy_date'),
    last_maint: data.get('last_maint'),
    next_maint_d: data.get('next_maint_d'),
    next_maint_km: data.get('next_maint_km'),
  }

  console.log(submission)

  return redirect('/trucks')
}

export const updateTruck = async ({ request }: any) => {
  const data = await request.formData()

  const submission = {
    make: data.get('make'),
    model: data.get('model'),
    plate: data.get('plate'),
    year: data.get('year'),
    km: data.get('km'),
    buy_date: data.get('buy_date'),
    last_maint: data.get('last_maint'),
    next_maint_d: data.get('next_maint_d'),
    next_maint_km: data.get('next_maint_km'),
  }

  console.log(submission)

  return redirect('/trucks')
}
