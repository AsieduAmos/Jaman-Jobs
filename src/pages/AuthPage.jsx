import React from 'react'
import findjob from '../images/findjob.png'



const AuthPage = () => {
  return (
  <> 
    
    <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center
           pointer-events-none select-none lg:mt-20 mt-15 mb-15'>
        <img className='lg:w-120 w-200 lg:ml-60 md:ml-40 ml-10' src={findjob} 
          alt=" black young man looking on mobile phone" />
        <div className=''>
          <h2 className='text-3xl text-indigo-800 font-bold mb-8'>
              Stay Home And Find<br /> Job
           </h2>
            <p className='text-xl font-semibold text-indigo-800'>Find Job With No Stress With Just A <br />Click
            <br />Find jobs that best fit your profession.</p>
        </div>
    </div>
               
    
  </>
  
  )
}

export default AuthPage