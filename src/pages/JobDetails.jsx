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
        <div className='py-6 font-bold text-center text-white mt-24 bg-gray-600'>
         <Link 
           to='/jobpage'
           className=' flex items-center ml-140 text-lg ' 
           >
             <FaArrowLeft className='mr-1 text-lg' />
             Back to Browse Jobs
          </Link>
        </div>
    </section>
    
    <section className='bg-indigo-50'>
        <div className='container m-auto py-6 px-4'>  
            <div className='grid grid-cols-2 md:grid-cols-70/30 w-full gap-6'>
            <main>
                <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                    <div className='mb-4 font-thin text-gray-500'>{job.type}</div>
                    <h1 className='text-2xl text-gray-700 font-bold mb-4'>{job.title}</h1>
                    <div className='mb-3 flex align middle justify-center md:justify-start'>
                     <FaMapMarker className=' text-red-700 mr-1' />
                     <p className='text-orange-700'>{job.location}</p>
                    </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <h3 className='text-2xl text-gray-700 font-bold mb-4 mt-6'>Job Description</h3>
                    <p className='mb-3 text-gray-600 font-semibold'>
                        {job.description}
                    </p>
                    <h3 className='text-2xl text-gray-700 font-bold mb-2'>
                        Salary
                    </h3>
                    <p className='text-gray-700 mb-4'>{job.salary}</p>
                </div>
            </main>

            <aside>
                <div className='bg-white p-6 rounded-lg shadow-md '>
                    <h3 className='text-2xl text-gray-700 font-bold mb-4'>Company Information</h3>
                    <h2 className='mb-3 text-gray-700 font-bold'>{job?.company?.name}</h2>
                    <p className='mb-3 text-gray-600 font-semibold'>{job?.company?.description}</p>
                    <hr className='my-4' />
                    <h3 className='text-2xl text-gray-700 font-bold'>Contact Email</h3>
                    <p className=' my-2 bg-gray-300 font-bold p-2'>{job?.company?.email}</p>
                    <h3 className='text-2xl text-gray-700 font-bold'>Contact Phone</h3>
                    <p className='bg-gray-300 p-2 font-bold'>{job?.company?.phone}</p>
                </div>

                <div className='bg-white p-5 rounded-lg shadow-md mt-6'>
                    <h3 className='text-2xl text-gray-700 font-bold mb-6 ml-50'>Manage Job</h3>
                    <Link
                    to={`/addjob/edit/${job.id}`} className='bg-gray-800 hover:bg-gray-900
                     text-white text-center font-bold py-2 px-4 rounded-lg w-full focus:outline-none
                      focus:shadow-outline mt-6 block'>
                        Edit Job
                    </Link>
                    <button className='bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg w-full
                     focus:outline-none focus:shadow-outline mt-4 block'>
                        Delete Job
                    </button>
                </div>
            </aside>

            </div>
        </div>

    </section>
    <section>
        <div className='py-6 font-bold text-center text-white mb-6 bg-gray-600'>
         <Link 
           to='/jobpage'
           className=' flex items-center ml-140 text-lg ' 
           >
             <FaArrowLeft className='mr-1 text-lg' />
             Back to Browse Jobs
          </Link>
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