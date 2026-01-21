import React from 'react'

const FindAdd = () => {
  return (
  <>
    <div className='bg-gray-50 text-indigo-900 w-120 ml-12 p-5 shadow-md rounded-lg'>
        <h2 className='font-bold text-xl py-3 '>For Employers</h2>
        <p className='font-normal text-md pb-5'> 
          Our platform makes it easy to find the perfect fit for your team.
          List available job vacancies to find a perfect employee.
          
        </p>
        <a href="" className='bg-white w-30 text-indigo-900 font-medium text-xl px-2 py-2 text-center rounded-xl
                              cursor-pointer hover:bg-indigo-700 hover:text-white 
                              transition duration-300 ease-in-out'>Add Job</a>
      </div>

     <div className='bg-gray-50 text-indigo-900 w-120 ml-12 p-5 shadow-md rounded-lg'>
        <h2 className='font-bold text-xl py-3 '>For Job Seekers</h2>
        <p className='font-normal text-md pb-5'> 
            Looking for your next career opportunity?
          Find jobs that best fit your skills and aspirations.
        </p>
        <a href="" className='bg-white w-30 text-indigo-900 font-medium text-xl px-2 py-2 text-center rounded-xl
                              cursor-pointer hover:bg-indigo-700 hover:text-white 
                              transition duration-300 ease-in-out'>Add Job</a>
      </div>
  </>
  )
}

export default FindAdd