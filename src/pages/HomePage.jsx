import React from 'react'
import{ NavLink } from 'react-router-dom' 
import findjob from '../images/findjob.png'
import employer from '../images/employer.jpg'




const HomePage = () => {
  return (
  <> 
  
     <div className='lg:text-xl md:text-5xl text-7xl lg:font-small md:font-light font-light 
               bg-gray-600 text-white lg:py-10 py-15 text-center lg:mt-24 md:mt-12 mt-18 lg:w-full w-6xl px-20'>
        <p>Your Gateway to Career Growth and Top Talent.
          Whether you are looking for your next exciting job opportunity 
          or searching for the perfect employee, our platform bridges the gap. 
          List your company's vacancies today and connect with the right talent instantly.</p>
      </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 items-center
              pointer-events-none select-none lg:mt-10 mt-15 mb-20 ml-30'>
           <div className='px-6 py-12 pb-30 border border-gray-300 rounded-lg shadow-md mt-10 lg:mr-10 mr-100'>
              <p className='text-xl font-small text-gray-800'>
                Find the right employee quickly and easily with our user-friendly platform.
                Streamline your hiring process and connect with qualified
                employees in just a few clicks.
              </p>
           </div>
           <img className='lg:ml-10 ml-100  w-100' src={employer} 
             alt=" black man sitting beside a laptop on a table." />
       </div>
       <div className='bg-gray-200 text-gray-900 lg:w-3xl md:w-5xl w-5xl lg:py-5 py-20 lg:px-5 px-15 pb-20 lg:ml-70 md:ml-90 ml-180
         lg:mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <p className='lg:font-normal font-light  lg:text-base md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-3 my-6'> 
          Our platform makes it easy to find the perfect fit for your team.
           Post your job vacancies in a minute  and connect with top-tier talent tailored to your business needs.
          
        </p>
        <NavLink to="/Addjob" className='bg-indigo-700 text-white lg:font-normal font-medium lg:text-lg md:text-4xl text-6xl 
           lg:px-10 px-15 lg:py-1 md:py-4 py-5 ml-70 text-center rounded-lg cursor-pointer hover:bg-black
           hover:text-white transition duration-300 ease-in-out'>Add Job</NavLink>
      </div>
      <div className='bg-gray-300 py-6 mt-4 shadow-md'>
        
      </div>       
       <div className='grid lg:grid-cols-2 grid-cols-1 items-center
              pointer-events-none select-none lg:mt-8 mt-15 mb-20'>
           <img className='ml-100 lg:ml-50 w-100' src={findjob} 
             alt=" black young man looking on mobile phone" />
           <div className='px-6 py-12 pb-30 border border-gray-300 rounded-lg shadow-md lg:mr-20 mr-100'>
            
               <p className='text-xl font-small text-gray-800'>
                Find your next job with a single click. 
                Skip the stress and let us match you with opportunities
                 that perfectly fit your profession</p>
           </div>
       </div>

     <div className='bg-gray-200 text-gray-900 lg:w-3xl md:w-5xl w-5xl lg:py-5 py-20 
           lg:px-5 px-15 lg:ml-70 md:ml-90 ml-180 mt-10 shadow-md lg:rounded-lg rounded-4xl'>
        <p className='lg:font-normal font-light lg:text-base md:text-4xl text-6xl lg:pb-2 pb-15 lg:my-3 my-6'> 
           Unlock your professional potential by aligning your core strengths and
            personal ambitions with roles where you can truly thrive.
        </p>
        <NavLink to="/jobpage" className='bg-black ml-70 text-white lg:font-normal font-medium lg:text-lg md:text-4xl text-6xl 
        lg:px-12 px-15 lg:py-1 md:py-4 py-5 text-center rounded-lg cursor-pointer hover:bg-indigo-700 
        hover:text-white transition duration-300 ease-in-out'>Find Job</NavLink>
     </div>
      
    
  </>
  )
}

export default HomePage