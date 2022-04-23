import React from 'react'
import Features from './Features'
import Footer from './Footer'

import Intro from './Intro'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Products from './Products'
import RequestDemo from './RequestDemo'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Products/>
       {/* <Features/> */}
    <Pricing/>
    <RequestDemo/>
    <Footer/>
        {children}
    </div>
  )
}

export default Layout