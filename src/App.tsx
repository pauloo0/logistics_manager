import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

//pages
import TruckList from './components/truck/TruckList'
import TruckForm from './components/truck/TruckForm'
import DriverList from './components/driver/DriverList'
import DriverForm from './components/driver/DriverForm'

//layouts
import RootLayout from './layouts/RootLayout'
import TruckLayout from './layouts/TruckLayout'
import DriverLayout from './layouts/DriverLayout'

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
    <Route path='/' element={<RootLayout />}>
      <Route index element={<h1>Home</h1>} />
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
    </Route>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
