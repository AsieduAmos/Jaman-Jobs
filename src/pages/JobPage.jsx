
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
    
    <div className='bg-slate-100 font-bold text-3xl text-center text-indigo-800 p-4 mx-50 rounded-md mt-5'>Browse Jobs</div>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {jobs.map((job) => (
     <div className='w-90 px-5 py-5 rounded-md shadow-lg mt-10 ml-5'>
        <h2 className='text-2xl font-bold mb-5'>{job.title}</h2>
        <h4 className='font-thin mb-3'>{job.type}</h4>
        <p className='mb-3 font-medium'>{job.description}</p>
      <p className='font-thin text-indigo-500 mb-4'>{job.salary}</p>

        <div className='shadow-2xl py-3'>
          <h1 className='text-indigo-700 mb-4 ml-4 '>{job.location}</h1>
          <button className='bg-indigo-600 text-white px-30 rounded-md hover:bg-indigo-800 mx-4 py-2'>Apply</button>
        </div>
     </div>

      )) }
    
     </div>
   </>
  )
}

export default JobPage