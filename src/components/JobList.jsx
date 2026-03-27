import React from 'react'
import { FaMapMarker } from 'react-icons/fa'

const JobList = (job) => {
  return (
    <>

    <div className=' px-5 pt-5 rounded-md shadow-lg bg-white'>
        <h2 className='text-2xl text-gray-700 font-bold mb-5'>{job.title}</h2>
        <h4 className='font-thin  text-gray-500 mb-3'>{job.type}</h4>
        <p className='mb-3 text-gray-700 font-semibold'>{job.description}</p>
        <p className='font-thin text-gray-500 mb-4'>{job.salary}</p>
        <div className='shadow-2xl py-5 px-4 mb-5 border-t border-gray-300'>
            <div className='text-red-700 mb-3 ml-1 '>
              <FaMapMarker className='inline text-sm mr-1' />
            {job.location}
            </div>
          <button className='text-white px-30 py-3 py-2 mx-6 rounded-md bg-gray-900 hover:bg-gray-600 
           text-md font-semibold '>
            Apply</button>
        </div>
     </div>
     
    
    </>
  )
}

export default JobList