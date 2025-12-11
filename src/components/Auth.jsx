import React from 'react'
import jobfind from '../assets/images/jobfind.png'
import FJ from '../assets/images/FJ.png'

const Auth = () => {
  return (
    <>
     <div className='flex items-center justify-center mt-15 pointer-events-none select-none'>
              <img className='w-110' src={jobfind} alt=" black young man looking on mobile phone" />
            <div>
                <h2 className='text-4xl text-indigo-900 font-bold mb-8'>
                Stay Home And <br />Find Job
              </h2>
              <p className='text-xl font-bold text-indigo-800'>Find Job With No Stress With Just A <br />Click</p>
            </div>
        </div>
           
        <div className='flex items-center justify-center mt-20 pointer-events-none select-none'>
            <img className='w-18' src={FJ} alt="" />
        </div>
           
        
       
    </>
  )
}

export default Auth