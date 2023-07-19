import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

//pages
import Driver from './pages/Driver'
import TruckList from './components/truck/TruckList'
import TruckForm from './components/truck/TruckForm'

//layouts
import RootLayout from './layouts/RootLayout'
import TruckLayout from './layouts/TruckLayout'

//utils
import { getTrucks, createTruck, updateTruck } from './functions/trucks'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<h1>Home</h1>} />
      <Route path='drivers' element={<Driver />} />
      <Route path='trucks' element={<TruckLayout />}>
        <Route index element={<TruckList />} loader={getTrucks} />
        <Route path='create' element={<TruckForm />} action={createTruck} />
        <Route path='edit/:id' element={<TruckForm />} action={updateTruck} />
      </Route>
    </Route>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
