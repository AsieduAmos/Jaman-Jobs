
import React from 'react'
import { useState, useEffect } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'



 
const JobPage = (job) => {

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
    <div className=' bg-slate-100  '>
      <h2 className='font-bold text-4xl text-center text-white p-10 my-5 bg-gray-600'>Browse Jobs</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mb-10'>
        {jobs.map((job) => (
            <div key={job.id} job={job} className=' px-5 pt-5 rounded-md shadow-lg bg-white' > 
               <h2 className='text-2xl text-gray-700 font-bold mb-5'>{job.title}</h2>
               <h4 className='font-thin  text-gray-500 mb-3'>{job.type}</h4>
               <p className='mb-3 text-gray-700 font-semibold'>{job.description.slice(0, 80)}...</p>
               <p className='font-thin text-gray-500 mb-4'>{job.salary}</p>

               <div className='text-red-700 mb-3 ml-1 '>
                        <FaMapMarker className='inline text-sm mr-1' />
                      {job.location}
                    </div>
                <div className='shadow-2xl py-5 mb-5 border-t border-gray-300'>
                 <NavLink to={`/jobs/${job.id}`} className='text-white py-3 px-5 ml-53 rounded-md bg-gray-700 
                 hover:bg-gray-600 text-md font-bold '>
                      Read More
                    </NavLink>
                </div>
            </div>
       )) }
      </div>
     </div>
  </>
  )
}

export default JobPage;