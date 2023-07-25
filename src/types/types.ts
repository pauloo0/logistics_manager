export type Driver = {
  id?: number
  name: string
  birthday: string
  country: string
  on_trip?: boolean
}

export type Truck = {
  id?: number
  plate: string
  make: string
  model: string
  year: number
  km: number
  buy_date: string
  last_maint: string
  next_maint_d: string
  next_maint_km: number
  available?: boolean
}
