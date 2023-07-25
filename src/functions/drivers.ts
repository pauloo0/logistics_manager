import { Driver } from '../types/types'
import type { ActionFunctionArgs } from 'react-router-dom'

import { redirect } from 'react-router-dom'

import { baseUri } from '../utils/api'

export const getDrivers = async (): Promise<Driver[]> => {
  const res = await fetch(`${baseUri}/drivers`)

  return res.json()
}

export const getSingleDriver = async ({
  params,
}: ActionFunctionArgs): Promise<Driver> => {
  const res = await fetch(`${baseUri}/drivers/${params.id}`)

  return res.json()
}

export const createDriver = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData()

  const submission = {
    name: data.get('name'),
    birthday: data.get('birthday'),
    country: data.get('country'),
  }

  await fetch(`${baseUri}/drivers`, {
    method: 'POST',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/drivers')
}

export const updateDriver = async ({ request, params }: ActionFunctionArgs) => {
  const data = await request.formData()

  const submission = {
    name: data.get('name'),
    birthday: data.get('birthday'),
    country: data.get('country'),
  }

  await fetch(`${baseUri}/drivers/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/drivers')
}

export const deleteDriver = async (id: number) => {
  const res = await fetch(`${baseUri}/drivers/${id}`, {
    method: 'DELETE',
  })

  const data = {
    message: 'Driver deleted',
    status: res.status,
    driver: res.json(),
  }

  return data
}
