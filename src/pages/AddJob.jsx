import React from 'react'
import Foot from '../components/Foot'

const AddJob = () => {
  return (
    <>
    <section className='bg-gray-50'> 
      <div className='container m-auto max-w-xl pt-15'>
        <div className='bg-white px-10 py-8 mb-4 shadow-xl rounded-t-xl  m-2 md:m-0'> 
           <form >
             <h3 className='text-2xl text-center text-gray-900 font-bold mb-6'>Add New Job</h3>
             
              <div className='mb-4'>
                <label htmlFor="type"
                className='block text-gray-700 font-bold mb-2'>
                  Job Type
                </label>
                <select 
                 id='type'
                 name="type" 
                 className='border rounded w-full py-2 px-3'
                 required
                 >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>

                </select>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>Job Title </label>
                <input
                 type="text"
                  id='title'
                 name='title'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. Store Keeper'
                 required
                />
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>Job Description </label>
                <textarea
                 id='description'
                 name='description'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. We are looking for a store keeper to manage inventory and ensure smooth operations.'
                 required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="type"
                 className='block text-gray-700 font-bold mb-2'>
                  Salary
                  </label>
                  <select name="salary" id="salary"
                   className='border rounded w-full py-2 px-3'
                   required>
                   
                    <option value="GH 1,000 - GH 2,0000">GH 1,000 - GH 2,000</option>
                    <option value="GH 2,000 - GH 4,000">GH 2,000 - GH 4,000</option>
                    <option value="GH 4,000 - GH 6,000">GH 4,000 - GH 6,000</option>
                    <option value="GH 7,000 - GH 9,000">GH 4,000 - GH 6,000</option>
                    <option value="Negotiable">Negotiable</option>
                  </select>
                
              </div>
              
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>Location </label>
                <input
                 type="text"
                  id='location'
                 name='location'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. Drobo'
                 required
                />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 text-center'>Company Details</h2>

              <div className='mb-4'>
                <label 
                className='block text-gray-700 font-bold mb-2'>
                  Company Name 
                </label>
                <input
                 type="text"
                  id='companyName'
                 name='companyName'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. ABC Company'
                 required
                />
              </div>

              <div className='mb-4'>
                <label 
                htmlFor='Email'
                className='block text-gray-700 font-bold mb-2'>
                  Email
                </label>
                <input
                 type="email"
                  id='email'
                 name='email'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. company@example.com'
                 required
                />
              </div>
              
              <div className='mb-4'>
                <label htmlFor='Phone'
                  className='block text-gray-700 font-bold mb-2'
                 >
                  Phone Number
                  </label>
                <input
                 type="tel"
                  id='phone'
                 name='phone'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='eg. +233 123 456 789'
                 required
                />
              </div>

              <button type='submit' 
              className='
               bg-indigo-700 text-white font-bold
               px-30 rounded-md
               hover:bg-indigo-800 mx-20 mt-4 py-3'>
                Add Job
               </button>
           </form>
        </div>
      </div>
       <Foot />
   </section>
   
    </>
  )
}

export default AddJob