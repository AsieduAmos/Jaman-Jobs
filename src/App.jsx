import React from 'react'
import Authpage from './pages/AuthPage'
import { createBrowserRouter, createRoutesFromElements,
   Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import FindAdd from './pages/FindAdd'
import JobPage from './pages/JobPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import AuthModal from './pages/AuthModal'


const App = () => {

  const router = createBrowserRouter(
   createRoutesFromElements(
   
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Authpage />} />
      <Route path='findadd' element={<FindAdd />} />
      <Route path='jobpage' element={<JobPage/>} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='resetpassword' element={<ResetPassword />} />
      <Route path='authmodal' element={<AuthModal/>} />
            
   </Route>
   )
  )

  return (
   <RouterProvider router={router} />
   
  )
}

export default App