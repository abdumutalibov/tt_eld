import React from 'react'
import Features from './Features'

import Intro from './Intro'
import Navbar from './Navbar'
import Products from './Products'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Products/>
       <Features/>
    
        {children}
    </div>
  )
}

export default Layout