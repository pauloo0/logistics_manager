//types
import { Truck } from '../types/types'
import type { ActionFunctionArgs } from 'react-router-dom'

import { redirect } from 'react-router-dom'

import { baseUri } from '../utils/api'

export const getTrucks = async (): Promise<Truck[]> => {
  const res = await fetch(`${baseUri}/trucks`)

  return res.json()
}

export const getSingleTruck = async ({
  params,
}: ActionFunctionArgs): Promise<Truck> => {
  const res = await fetch(`${baseUri}/trucks/${params.id}`)

  return res.json()
}

export const createTruck = async ({ request }: ActionFunctionArgs) => {
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

  await fetch(`${baseUri}/trucks`, {
    method: 'POST',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/trucks')
}

export const updateTruck = async ({ request, params }: ActionFunctionArgs) => {
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

  await fetch(`${baseUri}/trucks/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/trucks')
}

export const deleteTruck = async (id: number) => {
  const res = await fetch(`${baseUri}/trucks/${id}`, {
    method: 'DELETE',
  })
  const data = {
    message: 'Truck deleted successfully',
    status: res.status,
    truck: res.json(),
  }

  return data
}

export const getTruckById = async (id: number): Promise<Truck> => {
  const res = await fetch(`${baseUri}/trucks/${id}`)

  return res.json()
}

export const repairAndUpdateTruck = async (truck: Truck) => {
  truck.available = true
  truck.last_maint = new Date().toISOString().slice(0, 10)
  truck.next_maint_d = new Date(new Date().setDate(new Date().getDate() + 365))
    .toISOString()
    .slice(0, 10)
  truck.next_maint_km = truck.km + 10000

  await fetch(`${baseUri}/trucks/${truck.id}`, {
    method: 'PUT',
    body: JSON.stringify(truck),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
