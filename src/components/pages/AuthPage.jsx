import React from 'react'
import NavBar from './NavBar'
import Auth from './Auth' 
import AuthModal from '../Modals/AuthModal'
import JobPage from './jobPage'



const AuthPage = () => {

  return (
    <>
    <div className='h-screen mx-auto relative '>
      <NavBar />
      <Auth />
     <JobPage /> 
     </div>
    </>
  )
}

export default AuthPage