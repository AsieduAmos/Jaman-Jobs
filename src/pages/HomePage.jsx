import React from 'react'
import{ NavLink } from 'react-router-dom' 
import findjob from '../images/findjob.png'




const HomePage = () => {
  return (
  <> 
  
     <div className='lg:text-base md:text-5xl text-7xl lg:font-medium md:font-light font-light 
               bg-gray-800 text-white lg:py-8 py-15 text-center lg:mt-6 md:mt-12 mt-18 lg:w-full w-6xl px-8'>
        <p className=' '> Your Gateway to Exciting Job Opportunities And Aslo,The perfect Platform 
           to find the perfect employee by listing the job vacancies in your company or organization.</p>

     </div>

     <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center
              pointer-events-none select-none lg:mt-20 mt-15 mb-15'>
           <img className='lg:w-120 w-200 lg:ml-60 md:ml-40 ml-10' src={findjob} 
             alt=" black young man looking on mobile phone" />
           <div className=''>
             <h2 className='text-3xl text-gray-900 font-bold mb-8'>
                 Stay Home And Find<br /> Job
              </h2>
               <p className='text-xl font-semibold text-gray-800'>Find Job With No Stress With Just A <br />Click
               <br />Find jobs that best fit your profession.</p>
           </div>
       </div>

  <div className='flex lg:flex-row flex-col items-center justify-center lg:mx-10 lg:gap-6 gap-10  '>
    <div className='bg-gray-200 text-gray-900 lg:w-3xl md:w-5xl w-5xl lg:py-5 py-20 lg:px-5 px-15 lg:ml-1 md:ml-90 ml-180 lg:mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <h2 className='lg:font-bold font-extrabold 
         lg:text-2xl md:text-5xl text-7xl py-2 '>For Employers</h2>
        <p className='lg:font-normal font-light  lg:text-base md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-3 my-6'> 
          Our platform makes it easy to find the perfect fit for your team.
          List available job vacancies to find a perfect employee.
          
        </p>
        <NavLink to="/Addjob" className='bg-indigo-700 text-white lg:font-normal font-medium lg:text-lg md:text-4xl text-6xl 
           lg:px-4 px-15 lg:py-1 md:py-4 py-5 text-center rounded-lg cursor-pointer hover:bg-black
           hover:text-white transition duration-300 ease-in-out'>Add Job</NavLink>
      </div>

     <div className='bg-gray-100 text-gray-900 lg:w-3xl md:w-5xl w-5xl lg:py-5 py-20 lg:px-5 px-15 lg:ml-1 md:ml-90 ml-180 mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <h2 className='lg:font-bold font-semibold lg:text-2xl md:text-5xl text-7xl py-2 '>For Job Seekers</h2>
        <p className='lg:font-normal font-light lg:text-base md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-3 my-6'> 
            Looking for your next career opportunity?
          Find jobs that best fit your skills and aspirations.
        </p>
        <NavLink to="/jobpage" className='bg-black text-white lg:font-normal font-medium lg:text-lg md:text-4xl text-6xl 
        lg:px-4 px-15 lg:py-1 md:py-4 py-5 text-center rounded-lg cursor-pointer hover:bg-indigo-700 
        hover:text-white transition duration-300 ease-in-out'>Find Job</NavLink>
      </div>
     </div> 
    
  </>
  )
}

export default HomePage