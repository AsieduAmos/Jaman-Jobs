import React from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const NaviBar = () => {
  return (
    <>
    <div className="flex lg:h-20 md:h-50 h-60 lg:w-full w-6xl items-center border-t border-b border-indigo-600 shadow-lg">
          <div className='flex'>
            <img className='pointer-events-none select-none lg:ml-30 md:ml-10 ml-15 lg:w-16 md:w-27 w-30' src={FJ} alt="" />
            <div className='font-extrabold italic lg:text-xl text-5xl lg:ml-1 ml-3 lg:mt-3 md:mt-6 mt-8 text-indigo-800'>
              Find Job</div> 
          </div>
            
             
             <NavLink to="/Home" className='bg-black  text-white lg:font-bold font-light lg:text-xl text-5xl lg:ml-100 md:ml-40 ml-30
                       px-5 lg:py-1 py-3 text-center rounded-md cursor-pointer hover:bg-indigo-900 hover:text-white
                       transition duration-300 ease-in-out'>
                                Home
                              </NavLink>
             
             <NavLink to="/addjob" className='bg-white border border-indigo-300 text-indigo-900 font-bold lg:text-xl text-5xl px-3
                        lg:py-1 py-3 ml-5 mr-5 text-center rounded-md cursor-pointer hover:bg-indigo-900 hover:text-white 
                        transition duration-300 ease-in-out'>
                                Add Job
                              </NavLink>
           
             <NavLink to="/jobpage" className='bg-white border border-indigo-300 text-indigo-900 font-bold lg:text-xl text-5xl
              px-6 lg:py-1 py-3 text-center rounded-md cursor-pointer hover:bg-indigo-900 hover:text-white 
              transition duration-300 ease-in-out'>
                  Jobs
             </NavLink>
            
             
    </div>
    </>
  )
}

export default NaviBar