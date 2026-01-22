import React from 'react'
import HomeAddjobNavBar from './HomeAddjobNavBar'

const FindAdd = () => {
  return (
  <>
   
   <HomeAddjobNavBar />
  <div className='flex items-center justify-center mt-20'>
    <div className='bg-gray-200 text-indigo-900 w-120 ml-12 p-5 shadow-md rounded-lg'>
        <h2 className='font-bold text-xl py-3 '>For Employers</h2>
        <p className='font-normal text-md pb-5'> 
          Our platform makes it easy to find the perfect fit for your team.
          List available job vacancies to find a perfect employee.
          
        </p>
        <a href="" className='bg-indigo-700 w-30 text-white font-medium text-xl px-3 py-1 text-center rounded-xl
                              cursor-pointer hover:bg-black hover:text-white 
                              transition duration-300 ease-in-out'>Add Job</a>
      </div>

     <div className='bg-gray-100 text-indigo-900 w-120 ml-8 p-5 shadow-md rounded-lg'>
        <h2 className='font-bold text-xl py-3 '>For Job Seekers</h2>
        <p className='font-normal text-md pb-5'> 
            Looking for your next career opportunity?
          Find jobs that best fit your skills and aspirations.
        </p>
        <a href="" className='bg-black w-30 text-white font-medium text-xl px-3 py-1 text-center rounded-xl
                              cursor-pointer hover:bg-indigo-700 hover:text-white 
                              transition duration-300 ease-in-out'>Find Job</a>
      </div>
     </div> 
  </>
  )
}

export default FindAdd