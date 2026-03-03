
import { useState, useEffect } from 'react'
import React from 'react'
 

const JobPage = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
     const response = await fetch('http://localhost:7000/jobs');
     const data = await response.json();
     setJobs(data);
    }

     fetchJobs();
   }, []);

  return (
   <>
    
    <div className=' bg-slate-100 px-8 '>
      <h2 className='font-bold text-4xl text-center text-gray-900 p-10 mb-15 '>Browse Jobs</h2>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {jobs.map((job) => (
     <div className=' px-5 pt-5 rounded-md shadow-lg bg-white'>
        <h2 className='text-2xl text-gray-700 font-bold mb-5'>{job.title}</h2>
        <h4 className='font-thin  text-gray-500 mb-3'>{job.type}</h4>
        <p className='mb-3 text-gray-700 font-semibold'>{job.description}</p>
      <p className='font-thin text-gray-500 mb-4'>{job.salary}</p>

        <div className='shadow-2xl py-5 px-4 mb-5 border-t border-gray-400'>
          <h1 className='text-red-700 mb-3 ml-2 '>{job.location}</h1>
          <button className='text-white px-30 py-3 py-2 mx-6 rounded-md bg-gray-900 hover:bg-gray-700 
           text-md font-semibold '>
            Apply</button>
        </div>
     </div>

      )) }
    
     </div>
     </div>
   </>
  )
}

export default JobPage