import React from 'react'
import{ NavLink } from 'react-router-dom' 
import AuthPage from './AuthPage'
import Head from './Head'
import Foot from '../components/Foot'


const HomePage = () => {
  return (
  <>
   <Head />
   <AuthPage />
  <div className='flex lg:flex-row flex-col items-center justify-center lg:mx-10 lg:my-4 my-15 lg:gap-6 gap-10  '>
    <div className='bg-gray-200 text-indigo-900 lg:w-3xl md:w-5xl w-5xl lg:py-2 py-20 lg:px-3 px-15 lg:ml-1 md:ml-90 ml-180 lg:mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <h2 className='lg:font-bold font-semibold lg:text-3xl md:text-5xl text-7xl py-2 '>For Employers</h2>
        <p className='lg:font-normal font-light lg:text-lg md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-2 my-6'> 
          Our platform makes it easy to find the perfect fit for your team.
          List available job vacancies to find a perfect employee.
          
        </p>
        <NavLink to="/HomePage" className='bg-indigo-700 text-white lg:font-normal font-medium lg:text-2xl md:text-4xl text-6xl 
           lg:px-4 px-15 lg:py-1 md:py-4 py-5 text-center rounded-xl cursor-pointer hover:bg-black
           hover:text-white transition duration-300 ease-in-out'>Add Job</NavLink>
      </div>

     <div className='bg-gray-100 text-indigo-900 lg:w-3xl md:w-5xl w-5xl lg:py-2 py-20 lg:px-3 px-15 lg:ml-1 md:ml-90 ml-180 mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <h2 className='lg:font-bold font-semibold lg:text-3xl md:text-5xl text-7xl py-2 '>For Job Seekers</h2>
        <p className='lg:font-normal font-light lg:text-lg md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-2 my-6'> 
            Looking for your next career opportunity?
          Find jobs that best fit your skills and aspirations.
        </p>
        <NavLink to="/HomePage" className='bg-black text-white lg:font-normal font-medium lg:text-2xl md:text-4xl text-6xl 
        lg:px-4 px-15 lg:py-1 md:py-4 py-5 text-center rounded-xl cursor-pointer hover:bg-indigo-700 
        hover:text-white transition duration-300 ease-in-out'>Find Job</NavLink>
      </div>
     </div> 
     <Foot />
  </>
  )
}

export default HomePage