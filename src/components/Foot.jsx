import React from 'react'
import FJ from '../images/FJ.png'

const Foot = () => {
  return (
    <> 
    
    <footer className='bg-indigo-500 text-white py-10 mt-10'>
        <div className='flex items-center justify-center mt-15 mb-15 pointer-events-none select-none'>
       <img className='w-18'src={FJ} alt="" />
    </div>
        <div className='container mx-auto px-4'>
            <p className='text-center'>© 2024 FindJobs. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Foot