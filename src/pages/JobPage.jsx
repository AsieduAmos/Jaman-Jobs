
import React from 'react'
import { useState, useEffect } from 'react'
import JobList from '../components/JobList';


 

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
        <JobList key={job.id} job={job} />  
      )) }
    
     </div>
     </div>
   </>
  )
}

export default JobPage;