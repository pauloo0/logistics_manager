//types
import { Trip } from '../types/types'
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
