import React from 'react'
import FJ from '../images/FJ.png'

const Foot = () => {
  return (
    <> 
    
    <footer className='bg-indigo-500 text-white py-10 lg:mt-15 mt-30 lg:w-full w-6xl'>
        <div className='flex items-center justify-center lg:my-5 my-15 pointer-events-none select-none'>
       <img className='lg:w-18 w-30'src={FJ} alt="" />
    </div>
        <div className='container mx-auto lg:px-2 '>
            <p className='text-center lg:text-sm text-5xl'>© 2024 FindJobs. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Foot