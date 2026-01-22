import React from 'react'
import FJ from '../images/FJ.png'

const HomeAddjobNavBar = () => {
  return (
    <>
    <div className="flex h-24 bg-gray-300 items-center border-b border-indigo-400 ">
            <div className='pointer-events-none select-none ml-70'><img className='w-20' src={FJ} alt="" /></div> 
             
             <button className='bg-black  text-white font-bold text-xl ml-140 px-5 py-2 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Home
             </button>
           <button className=' bg-white border border-indigo-300 text-black font-bold text-xl px-3 py-2 ml-5 mr-5 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Add Job
             </button>
             <button className='bg-white border border-indigo-300 text-black font-bold text-xl px-6 py-2  text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'
                               >
                 Jobs
             </button>
             
    </div>
    </>
  )
}

export default HomeAddjobNavBar