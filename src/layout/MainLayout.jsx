import React from 'react'
import HomeAddjobNavBar from '../components/HomeAddjobNavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <HomeAddjobNavBar />
      <Outlet />  
    </>
  )
}

export default MainLayout