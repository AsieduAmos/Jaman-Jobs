import React from 'react'




const Login = () => {
  

    return (
<>
    <div className='flex justify-center items-center  '>
      <div className='w-full sm:w-[450px] absolute top-[45%] left-[47%] translate-y-[-50%] 
                        flex justify-center items-center rounded-xl'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center '>
            <div className='bg-gray-500 rounded-lg shadow relative w-full mx-6'>
                <div className='flex justify-end p-2'>
                    <button
                    type='button'
                    className='bg-transparent rounded-sm text-lg hover:font-bold p-1 ml-auto inline-flex items-center
                     hover:bg-red-600 
                    hover:text-white text-white'>
                    X
                </button>
                </div>
  
    <form className='space-y-5 px-5 py-10 bg-gray-500 w-full h-130'>
         <h3 className='text-2xl font-bold text-white'>Sing In To find job</h3>
     <div>
           <label className='block mb-2 text-lg font-medium text-white'>Email</label>
           <input className='w-full p-2 border border-red-300 bg-white 
                        rounded-md focus:outline-none focus:ring-2'
                 type='email'
                 name='email'
                 id='email' 
                 required
                 placeholder='findJob@gmail.com'
           />
      </div>

      <div>
          <label className='block mb-2 text-lg font-medium text-white'>Password</label>
          <input className='w-full p-2 border border-red-300 bg-white
                   rounded-md focus:outline-none focus:ring-2 '
                type='password'
                name='Password'
                id='Password' 
                required
                 placeholder='Password'
           />
        </div>

        <div className='flex justify-center items-center'>
           <button
               type='submit' className=' text-white hover:text-indigo-900 font-bold
               bg-gray-900 hover:bg-white rounded-md cursor-pointer
               border-white px-15 py-2 mt-4 mb-2' >
               Log In
           </button>
        </div>
        

     <button className='flex justify-end w-full text-white hover:underline hover:text-white hover:font-bold'>
        <a href='' ></a>Forgot Password?
    </button>

     <div className='text-gray-900 '>Not Registered?
        <a href='/SignUp' className='hover:underline text-white text-lg font-bold'
        > Create Account</a>
       
     </div>
    
   </form> 
 </div>
        </div>
    </div>

     </div> 
   
</>
  )
}

export default Login