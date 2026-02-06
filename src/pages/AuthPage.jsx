import React from 'react'
import findjob from '../images/findjob.png'



const AuthPage = () => {
  return (
  <> 
    
    <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center
           pointer-events-none select-none mt-15 mx-30'>
        <img className='w-120 md:w-140 lg:w-100 lg:ml-50 md:ml-40 ml-10' src={findjob} 
          alt=" black young man looking on mobile phone" />
        <div className='py-10 px-5'>
          <h2 className='text-3xl text-indigo-900 font-bold mb-8'>
              Stay Home And <br />Find Job
           </h2>
            <p className='text-xl font-bold text-indigo-800'>Find Job With No Stress With Just A <br />Click
            <br />Find jobs that best fit your profession.</p>
        </div>
    </div>
               
    
  </>
  
  )
}

export default AuthPage