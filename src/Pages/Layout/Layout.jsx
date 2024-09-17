import React from 'react'
import Naveber from '../../Components/Naveber'
import Footer from '../../Components/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Naveber/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout