import React from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const NaviBar = () => {

  const activeStyle = ({ isActive }) => 
    isActive ? 
      'bg-black text-white lg:font-semibold font-normal lg:text-xl text-5xl lg:px-5 px-8 lg:py-1 py-6 text-center lg:rounded-md rounded-2xl cursor-pointer hover:text-white transition duration-300 ease-in-out'
     : 
     ' text-black border border-gray-700 lg:font-semibold font-normal lg:text-xl text-5xl lg:px-5 px-8 lg:py-1 py-6 text-center lg:rounded-md rounded-2xl cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out';
  
  return (
    <>
    <div className="flex lg:space-x-4 space-x-6 lg:h-22 md:h-50 h-80 lg:w-full w-6xl items-center border-t border-b border-gray-400 shadow-lg">
          <div className='flex lg:mr-100  mr-27'>
            <img className='pointer-events-none select-none lg:ml-30 md:ml-10 ml-10 lg:w-16 md:w-27 w-30' src={FJ} alt="" />
            <div className='lg:font-extrabold font-bold italic lg:text-xl text-5xl lg:ml-1 ml-4 lg:mt-3 md:mt-6 mt-8 text-gray-800'>
              Find Job</div> 
          </div>
            
           
             <NavLink to="/" className= {activeStyle}  >
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