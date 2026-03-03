import React from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const NaviBar = () => {

  const activeStyle = ({ isActive }) => 
    isActive ? 
      'bg-red-700 text-white lg:font-semibold font-light lg:text-xl text-5xl px-5 lg:py-1 py-3 text-center rounded-md cursor-pointer hover:text-white transition duration-300 ease-in-out'
     : 
     'bg-black text-white lg:font-semibold font-light lg:text-xl text-5xl  px-5 lg:py-1 py-3 text-center rounded-md cursor-pointer hover:bg-gray-900 hover:text-whitetransition duration-300 ease-in-out';
  
  return (
    <>
    <div className="flex space-x-3 lg:h-20 md:h-50 h-60 lg:w-full w-6xl items-center border-t border-b border-indigo-600 shadow-lg">
          <div className='flex mr-130'>
            <img className='pointer-events-none select-none lg:ml-30 md:ml-10 ml-15 lg:w-16 md:w-27 w-30' src={FJ} alt="" />
            <div className='font-extrabold italic lg:text-xl text-5xl lg:ml-1 ml-3 lg:mt-3 md:mt-6 mt-8 text-indigo-800'>
              Find Job</div> 
          </div>
            
           
             <NavLink to="/Home" className= {activeStyle}  >
               Home
             </NavLink>
             
             <NavLink to="/addjob"className={activeStyle}   >
                 Add Job
             </NavLink>
           
             <NavLink to="/jobpage" className={activeStyle}  >
                  Jobs
             </NavLink>
            
             
    </div>
    </>
  )
}

export default NaviBar