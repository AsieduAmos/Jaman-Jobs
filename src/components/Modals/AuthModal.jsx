import React from 'react'
import login from './Login'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword'
import Login from './Login'

const AuthModal = () => {
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
                <Login/>
            </div>
        </div>
    </div>

     </div> 
     
    </>
  )
}

export default AuthModal