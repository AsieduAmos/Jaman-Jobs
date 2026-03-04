import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const PageNotFound = () => {
  return (
    <>
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-4xl mb-6 ' />
        <h1 className='text-3xl font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl mb-5 '>This page does not exist</p>
        <Link to="/" className='text-white font-bold bg-gray-700 hover:bg-black rounded-lg px-3 py-3 mt-4 w-30'>Go Back</Link>
    </section>
    </>
  )
}

export default PageNotFound