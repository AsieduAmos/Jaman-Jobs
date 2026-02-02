import React from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const HomeAddjobNavBar = () => {
  return (
    <>
    <div className="flex h-20 items-center border-b border-indigo-800 ">
          <div className='flex'>
            <div className='pointer-events-none select-none ml-60'><img className='w-16' src={FJ} alt="" /></div>
            <div className='font-extrabold italic text-xl ml-1 mt-3 text-indigo-800'>Find Job</div> 
          </div>
            
             
             <NavLink to="/HomePage" className='bg-black  text-white font-bold text-xl ml-135 px-5 py-1 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                                Home
                              </NavLink>
             
             <NavLink to="/addjob" className='bg-white border border-indigo-300 text-indigo-900 font-bold text-xl px-3 py-1 ml-5 mr-5 text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                                Add Job
                              </NavLink>
           
             <NavLink to="/jobpage" className='bg-white border border-indigo-300 text-indigo-900 font-bold text-xl px-6 py-1  text-center rounded-md
                              cursor-pointer hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out'>
                  Jobs
             </NavLink>
            
             
    </div>
    </>
  )
}

export default HomeAddjobNavBar