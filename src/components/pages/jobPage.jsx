import React from 'react'

const JobPage = () => {
  return (
    <>
     <div className=' flex bg-slate-100 h-112 mx-20 mb-20 font-semibold text-lg text-center gap-5 rounded-xl '>
      <div className='bg-white  w-1/3 ml-15 my-10 p-2 shadow-md rounded-lg'>
        <h2 className='font-bold text-3xl text-indigo-900 my-10 '>For Employers</h2>
        <p className='text-indigo-800'> 
          List your job to find the perfect person for the role.
        </p>
        <a href="">
          Add Job
        </a>
      </div>
      <div className='bg-white w-1/3 ml-15 my-10 p-2 shadow-md rounded-lg'>
        <h2 className='font-bold text-3xl text-indigo-900 my-10 '>For Job Seekers</h2>
        <p className='text-indigo-800'> 
          Find the perfect job that matches your skills and interests.
        </p>
        <a href="">
          Find Job

        </a>
        
      </div>
     </div>
    </>
  )
}

export default JobPage