import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import SecondNavbar from './SecondNavbar'

const Layout = ({ children }) => {
    return (
        <div className=''>
        {/* <Navbar /> */}
        <SecondNavbar />
        {children}
        </div>
  )
}

export default Layout