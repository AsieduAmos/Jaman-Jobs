import React from 'react'
import FJ from '../images/FJ.png'

const FindAdd = () => {
  return (
  <>
   <div className="flex h-24 bg-slate-50 items-center border-b border-indigo-400 ">
            <div className='pointer-events-none select-none ml-70'><img className='w-20' src={FJ} alt="" /></div> 
             
             <button className='bg-black  text-white font-bold text-xl ml-140 px-5 py-2 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Home
             </button>
           <button className='border border-indigo-300 text-black font-bold text-xl px-3 py-2 ml-5 mr-5 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Add Job
             </button>
             <button className='border border-indigo-300 text-black font-bold text-xl px-6 py-2  text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Jobs
             </button>
             
          </div>
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

     <div className='bg-white text-indigo-900 w-120 ml-8 p-5 shadow-md rounded-lg'>
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