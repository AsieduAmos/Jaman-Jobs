import React from 'react'
import FJ from '../images/FJ.png'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

  const navigate = useNavigate()
 
   
  return (
    <>
    
     <nav>
          <div className="flex justify-around h-24 bg-gray-300 items-center border-b  
                             border-indigo-400 ">
            <div className='pointer-events-none select-none'><img className='w-20' src={FJ} alt="" /></div> 
             <button className='bg-white w-30 text-indigo-900 font-bold text-2xl px-5 py-2 text-center rounded-lg
                              cursor-pointer hover:bg-indigo-900 hover:text-white 
                              transition duration-300 ease-in-out'
                            onClick={() => navigate('/login')}
                            >
                 Sign In
             </button>
           
          </div>
         </nav>
         
    </>
  )
}

export default NavBar