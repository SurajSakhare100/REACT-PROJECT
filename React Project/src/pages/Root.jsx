import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root
