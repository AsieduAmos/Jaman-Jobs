import React from 'react'

const ResetPassword = () => {
  return (
<>
    <form className='space-y-7 px-5 py-10 bg-gray-500 w-full h-130'>
        <h3 className='text-xl font-bold text-white'>Reset Password</h3>
        <p className='text-white'>
              Forgot your password? Enter your E-mail address below. 
              we will send an email to help  you reset it.
        </p>
     <div>
           <label className='block mb-2 text-lg font-medium text-white'> Provide your Email</label>
            <input className='w-full p-2 border border-red-300 bg-white 
                        rounded-md focus:outline-none focus:ring-2'
                type='email'
                name='email'
                id='email' 
                required
                placeholder='findJob@gmail.com'
           />
      </div>

     <div className='flex justify-center items-center'>
           <button
               type='submit' className=' text-white hover:text-indigo-900 font-bold
               bg-gray-900 hover:bg-white rounded-md cursor-pointer
               border-white px-15 py-2 mt-4 mb-2' >
               Reset Password
          </button>
    </div>
  </form> 

</>
  )
}

export default ResetPassword