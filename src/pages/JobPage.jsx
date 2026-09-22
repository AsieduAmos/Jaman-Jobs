import React from 'react'
import { useState, useEffect } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobPage = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true) // Added loading state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_per_page=3' : '/api/jobs';
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error); // Added error handling
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [isHome]); // Added 'isHome' to dependency array since apiUrl depends on it

  return (
    <>
      <div className='bg-slate-100 mt-24'>
        <h2 className='font-bold text-4xl text-center text-white p-10 my-5 bg-gray-600'>
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        
        {loading ? (
          <div className="text-center py-10">Loading jobs...</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mb-10'>
            {jobs.map((job) => (
              <div key={job.id} className='px-5 pt-5 rounded-md shadow-lg bg-white'>
                <h2 className='text-2xl text-gray-700 font-bold mb-5'>{job.title}</h2>
                <h4 className='font-thin text-gray-500 mb-3'>{job.type}</h4>
                
                {/* Fixed the description slicing crash here */}
                <p className='mb-3 text-gray-700 font-semibold'>
                  {job.description?.slice(0, 80) || "No description available"}...
                </p>
                
                <p className='font-thin text-gray-500 mb-4'>{job.salary}</p>
                <div className='text-red-700 mb-3 ml-1'>
                  <FaMapMarker className='inline text-sm mr-1' /> {job.location}
                </div>
                <div className='shadow-2xl py-5 mb-5 border-t border-gray-300'>
                  <Link to={`/jobpage/${job.id}`} className='text-white py-3 px-5 rounded-md bg-gray-700 hover:bg-gray-600 text-md font-bold'>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default JobPage;
