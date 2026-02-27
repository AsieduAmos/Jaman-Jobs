import React from 'react'
import { Outlet } from 'react-router-dom'
import NaviBar from '../components/NaviBar'

const MainLayout = () => {
  return (
    <>
      <NaviBar />
      <Outlet />  
    </>
  )
}

export default MainLayout