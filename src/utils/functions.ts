import { Truck } from '../types/types'
import { baseUri } from '../utils/api'

export const getTrucks = async (): Promise<Truck[]> => {
  const url = `${baseUri}/trucks`
  const res = await fetch(url)

  return res.json()
}
