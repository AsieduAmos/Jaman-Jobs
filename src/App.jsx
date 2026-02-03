import React from 'react'
import Authpage from './pages/AuthPage'
import { createBrowserRouter, createRoutesFromElements,
   Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobPage from './pages/JobPage'
import AddJob from './pages/AddJob'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import HomePage from './pages/HomePage'
import AuthLayout from './layout/AuthLayout'
import ModalLayout from './layout/ModalLayout'



const App = () => {

  const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<AuthLayout />} >
       <Route index element={<Authpage />} />

       <Route path='' element={<MainLayout />} >
         <Route path='home' element={<HomePage />} />
         <Route path='addjob' element={<AddJob />} />
         <Route path='jobpage' element={<JobPage/>} />
       
       </Route>
       <Route path='' element={<ModalLayout />} >
         <Route path='signup' element={<SignUp />} />
         <Route path='login' element={<Login />} />
         <Route path='resetpassword' element={<ResetPassword />} />
      </Route>

    </Route>
   )
  )

  return (
   <RouterProvider router={router} />
   
  )
}

export default App