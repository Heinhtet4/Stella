import React from 'react'
import Navigation from '../components/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <>
      <Toaster className="z-50" position="top-center" reverseOrder={false} />
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout