import React from 'react'
import NavBar from './NavBar'
import Auth from './Auth' 
import AuthModal from '../Modals/AuthModal'
import FindAdd from './FindAdd'
import JobPage from './JobPage'



const AuthPage = () => {

  return (
    <>
    <div className='h-screen mx-auto relative '>
      <NavBar />
      <Auth />
      <JobPage />
      <FindAdd />
     </div>
    </>
  )
}

export default AuthPage