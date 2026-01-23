import React from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const HomeAddjobNavBar = () => {
  return (
    <>
    <div className="flex h-24 bg-gray-300 items-center border-b border-indigo-400 ">
            <div className='pointer-events-none select-none ml-70'><img className='w-20' src={FJ} alt="" /></div> 
             
             <NavLink to="/FindAdd" className='bg-black  text-white font-bold text-xl ml-140 px-5 py-2 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                                Home
                              </NavLink>
             
             <NavLink to="/findadd" className='bg-white border border-indigo-300 text-indigo-900 font-bold text-xl px-3 py-2 ml-5 mr-5 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                                Add Job
                              </NavLink>
           
             <NavLink to="/jobpage" className='bg-white border border-indigo-300 text-indigo-900 font-bold text-xl px-6 py-2  text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                  Jobs
             </NavLink>
            
             
    </div>
    </>
  )
}

export default HomeAddjobNavBar