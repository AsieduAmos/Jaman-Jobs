import React from 'react'
import Authpage from './pages/AuthPage'
import { createBrowserRouter, createRoutesFromElements,
   Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobPage from './pages/JobPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import HomePage from './pages/HomePage'



const App = () => {

  const router = createBrowserRouter(
   createRoutesFromElements(

     
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Authpage />} />
      <Route path='homepage' element={<HomePage />} />
      <Route path='jobpage' element={<JobPage/>} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='resetpassword' element={<ResetPassword />} />
    </Route>
   )
  )

  return (
   <RouterProvider router={router} />
   
  )
}

export default App