import React from 'react'
 

const JobPage = () => {
  return (
   <>
    
    <div className='bg-slate-100 font-bold text-3xl text-center text-indigo-800 p-4 mx-50 rounded-md mt-5'>Browse Jobs</div>
     <div className='w-90 px-5 py-5 rounded-md shadow-lg mt-10 ml-10'>
      <h2 className='text-2xl font-bold mb-5'>Store Keeper</h2>
      <h4 className='font-thin mb-3'>Full Time</h4>
      <p className='mb-3 font-medium'>Looking for a dedicated store keeper to manage inventory and maintain store cleanliness.
      Responsibilities include receiving shipments, organizing stock, and assisting customers.
      </p>
      <p className='font-thin text-indigo-500 mb-4'>$1000-1500/month</p>
      <div className='shadow-2xl py-3'>
        <h1 className='text-indigo-700 mb-4 ml-4 '>Magazine-Drobo</h1>
        <button className='bg-indigo-600 text-white px-30 rounded-md hover:bg-indigo-800 mx-4 py-2'>Apply</button>
      </div>
     </div>
   </>
  )
}

export default JobPage