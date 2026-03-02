import React from 'react'
import { Outlet } from 'react-router-dom'
import NaviBar from '../components/NaviBar'
import Foot from '../components/Foot'

const MainLayout = () => {
  return (
    <>
      <NaviBar />
      <Outlet /> 
      <Foot /> 
    </>
  )
}

export default MainLayout