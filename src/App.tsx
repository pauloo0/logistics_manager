import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

//pages
import NotFound from './pages/NotFound'

import Dashboard from './pages/home/Dashboard'
import TruckList from './pages/truck/TruckList'
import TruckForm from './pages/truck/TruckForm'
import DriverList from './pages/driver/DriverList'
import DriverForm from './pages/driver/DriverForm'
import TripForm from './pages/trip/TripForm'

//layouts
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'
import TruckLayout from './layouts/TruckLayout'
import DriverLayout from './layouts/DriverLayout'
import TripLayout from './layouts/TripLayout'

//utils
import {
  getTrucks,
  createTruck,
  updateTruck,
  getSingleTruck,
} from './functions/trucks'
import {
  getDrivers,
  getSingleDriver,
  createDriver,
  updateDriver,
} from './functions/drivers'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} errorElement={<NotFound />}>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='drivers' element={<DriverLayout />}>
          <Route index element={<DriverList />} loader={getDrivers} />
          <Route path='create' element={<DriverForm />} action={createDriver} />
          <Route
            path='edit/:id'
            element={<DriverForm />}
            loader={getSingleDriver}
            action={updateDriver}
          />
        </Route>
        <Route path='trucks' element={<TruckLayout />}>
          <Route index element={<TruckList />} loader={getTrucks} />
          <Route path='create' element={<TruckForm />} action={createTruck} />
          <Route
            path='edit/:id'
            element={<TruckForm />}
            loader={getSingleTruck}
            action={updateTruck}
          />
        </Route>
        <Route path='trips' element={<TripLayout />}>
          <Route index element={<TripForm />} />
          <Route path='create' element={<TripForm />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
