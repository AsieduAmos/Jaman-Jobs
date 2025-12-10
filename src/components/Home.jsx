import React from 'react'
import FJ from '../assets/images/FJ.png'
import jobfind from '../assets/images/jobfind.png'

const Home = () => {
  return (
  <>  
    <div className=' h-screen mx-auto '>
     <nav>
      <div className="flex justify-around h-24 bg-slate-50 items-center border-b  
                         border-indigo-400">
         <img className='w-20' src={FJ} alt="" />
         <button className='bg-white w-30 text-indigo-900 font-bold text-2xl px-5 py-2 text-center rounded-xl
                          cursor-pointer hover:bg-indigo-900 hover:text-white 
                          transition duration-300 ease-in-out'>
             Sign In
         </button>
      
      </div>
     </nav>
        
        <div className='flex items-center justify-center mt-15 '>
              <img className='w-110' src={jobfind} alt=" black young man looking on mobile phone" />
            <div>
                <h2 className='text-4xl text-indigo-900 font-bold mb-8'>
                Stay Home And <br />Find Job
              </h2>
              <p className='text-xl font-bold text-indigo-800'>Find Job With A Single Click</p>
            </div>
        </div>

             <div className='flex items-center justify-center mt-20'>
              <img className='w-18' src={FJ} alt="" />
             </div>
    </div>

    </>
       
  )
}

export default Home