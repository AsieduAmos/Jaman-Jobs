import React from 'react'
import FJ from '../images/FJ.png'
import findjob from '../images/findjob.png'


const AuthPage = () => {
  return (
  <> 
    <div className='flex items-center justify-center mt-15 pointer-events-none select-none'>
        <img className='w-110' src={findjob} alt=" black young man looking on mobile phone" />
        <div>
          <h2 className='text-4xl text-indigo-900 font-bold mb-8'>
              Stay Home And <br />Find Job
           </h2>
            <p className='text-xl font-bold text-indigo-800'>Find Job With No Stress With Just A <br />Click</p>
        </div>
    </div>
               
    <div className='flex items-center justify-center mt-20 mb-30 pointer-events-none select-none'>
       <img className='w-18'src={FJ} alt="" />
    </div>
  </>
  
  )
}

export default AuthPage