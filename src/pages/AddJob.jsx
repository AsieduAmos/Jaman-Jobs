import React from 'react'

const AddJob = () => {
  return (
    <>
    <section> 
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'> 
           <form >
             <h3 className='text-2xl text-center font-semibold mb-5'>Add New Job</h3>
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
              <h2 className='text-2xl mb-4 text-center'>Company Details</h2>

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
               bg-indigo-600 text-white
               px-30 rounded-md
               hover:bg-indigo-800 mx-4 py-2 w-full'>
                Add Job
               </button>
           </form>
        </div>
      </div>
   </section>
    </>
  )
}

export default AddJob