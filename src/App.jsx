import React from 'react'

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
import PageNotFound from './pages/PageNotFound'
import JobDetails, {jobLoader} from './pages/JobDetails'



const App = () => {

  const addJob = async (addNewJob) => {
    const res = await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewJob)
      
    })
    return;
  };
      

  const router = createBrowserRouter(
   createRoutesFromElements(
    

    <Route path='/' element={<MainLayout />} >
         <Route index element={<HomePage />} />
         <Route path='addjob' element={<AddJob submitJob={addJob}/>} />
         <Route path='jobpage' element={<JobPage/>} />
         <Route path='jobpage/:id' element={<JobDetails/>} loader={jobLoader}  />
         <Route path='*' element={<PageNotFound />} />
       
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