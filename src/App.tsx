import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

//pages
import Driver from './pages/Driver'
import Truck from './pages/Truck'

//layouts
import RootLayout from './layouts/RootLayout'
import TruckLayout from './layouts/TruckLayout'

//utils
import { getTrucks } from './utils/functions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<h1>Home</h1>} />
      <Route path='drivers' element={<Driver />} />
      <Route path='trucks' element={<TruckLayout />}>
        <Route index element={<Truck showForm={false} />} loader={getTrucks} />
        <Route path='create' element={<Truck showForm={true} />} />
      </Route>
    </Route>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
