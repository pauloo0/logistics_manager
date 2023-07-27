//types
import { Trip, Truck } from '../types/types'
import type { ActionFunctionArgs } from 'react-router-dom'

import { redirect } from 'react-router-dom'

import { baseUri } from '../utils/api'

export const getTrips = async (): Promise<Trip[]> => {
  const res = await fetch(`${baseUri}/trips`)

  return res.json()
}

export const getSingleTrip = async ({
  params,
}: ActionFunctionArgs): Promise<Trip> => {
  const res = await fetch(`${baseUri}/trips/${params.id}`)

  return res.json()
}

export const createTrip = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData()

  let truckData = await getTruckById(Number(data.get('truckId')))
  truckData = await addKmToTruck(truckData, Number(data.get('km')))
  truckData = await setUnavailableIfKmOverdue(truckData)
  await updateTruck(truckData)

  const submission = {
    driverId: data.get('driverId'),
    truckId: data.get('truckId'),
    start: data.get('start'),
    end: data.get('end'),
    km: data.get('km'),
    from: data.get('from'),
    to: data.get('to'),
    cargo: data.get('cargo'),
  }

  await fetch(`${baseUri}/trips`, {
    method: 'POST',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/trips')
}

export const updateTrip = async ({ request, params }: ActionFunctionArgs) => {
  const data = await request.formData()

  const submission = {
    driverId: data.get('driverId'),
    truckId: data.get('truckId'),
    start: data.get('start'),
    end: data.get('end'),
    km: data.get('km'),
    from: data.get('from'),
    to: data.get('to'),
    cargo: data.get('cargo'),
  }

  await fetch(`${baseUri}/trips/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/trips')
}

export const deleteTrip = async (id: number) => {
  const res = await fetch(`${baseUri}/trips/${id}`, {
    method: 'DELETE',
  })
  const data = {
    message: 'Trip deleted successfully',
    status: res.status,
    trip: res.json(),
  }

  return data
}

const getTruckById = async (id: number): Promise<Truck> => {
  const res = await fetch(`${baseUri}/trucks/${id}`)

  return res.json()
}

const addKmToTruck = async (truck: Truck, km: number) => {
  truck.km += km
  return truck
}

const setUnavailableIfKmOverdue = async (truck: Truck) => {
  if (truck.km >= truck.next_maint_km) {
    truck.available = false
  }
  return truck
}

const updateTruck = async (truck: Truck) => {
  await fetch(`${baseUri}/trucks/${truck.id}`, {
    method: 'PUT',
    body: JSON.stringify(truck),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
