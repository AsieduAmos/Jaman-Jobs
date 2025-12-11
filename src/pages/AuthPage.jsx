import React from 'react'
import Home from '../components/Home'
import AuthModal from '../components/Modal/Authmodal'


const AuthPage = () => {
  return (
    <>
     <div className='h-screen mx-auto relative '>
     < Home/> 
      < AuthModal/>
     </div>
     
    </>
   
  )
}

export default AuthPage