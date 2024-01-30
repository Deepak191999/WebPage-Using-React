import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>    {/*ab iske andr ka content change hota rhega, ye functionality 'outlet' vali 'react-router-dom' deta hai  */}
   <Footer/>
   </>
  )
}

export default Layout