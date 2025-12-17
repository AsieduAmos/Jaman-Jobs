import React from 'react'
import NavBar from './NavBar'
import Auth from './Auth' 
import AuthModal from '../Modals/AuthModal'




const AuthPage = () => {

  return (
    <>
    <div className='h-screen mx-auto relative '>
      <NavBar />
      <Auth />
      
     </div>
    </>
  )
}

export default AuthPage