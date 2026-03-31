import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker} from 'react-icons/fa'


const JobDetails = () => {

    const { id } = useParams();
    const job = useLoaderData();

  return (
    <>
    <section>
        <div className='container m-auto py-6 px-6'>
         <Link className='text-gray-700 hover:text-gray-900 flex items-center' 
           to='/jobpage'
           >
             <FaArrowLeft className='mr-2' />
             Back to Browse Jobs
          </Link>
        </div>
    </section>
    
    <section className='bg-indigo-50'>
        <div className='container m-auto py-6 px-6'>  
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
                <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                    <div className='text-gray-500 mb-4'>{job.type}</div>
                    <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                    <div className='text-gray-500 mb-4 flex align middle justify-center md:justify-start'>
                     <FaMapMarker className=' text-orange-700 mr-2' />
                     <p className='text-orange-700'>{job.location}</p>
                    </div>

                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 mt-6'>Job Description</h2>
                    <p className='mb-4'>
                        {job.description}
                    </p>
                    <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                        salary
                    </h3>
                    <p className='text-gray-700 mb-4'>{job.salary}</p>
                </div>
            </main>
            <section>
                <div className='bg-white p-6 rounded-lg shadow-md '>

                    <h3 className='text-2xl font-bold mb-4'>Company Information</h3>
                    <h2 className='mb-4'>{job.company.name}</h2>
                    <p className='mb-4'>{job.company.description}</p>
                    <hr className='my-4' />
                    <h3 className='text-2xl font-bold mb-4'>Contact Email</h3>
                    <p className='text-gray-700 mb-4 p-2'>{job.company.email}</p>
                    <h3 className='text-2xl font-bold mb-4'>Contact Phone</h3>
                    <p className='text-gray-700 mb-4 p-2 font-bold'>{job.company.phone}</p>
                </div>

                <div>
                    <Link
                    to='/addjob' className='bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none mt-6 block'>
                        edit Job
                    </Link>
                    <button className='bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none mt-4 block'>
                        Delete Job
                    </button>
                </div>
            </section>

            </div>
        </div>

    </section>
    </>
  )
}

const jobLoader = async ({ params }) => {
    const response = await fetch(`http://localhost:7000/jobs/${params.id}`);   
    const data = await response.json();
    return data;
};
 

export { JobDetails as default, jobLoader };