import Footer from '@/Components/Footer'
import Naveber from '@/Components/Naveber'
import React from 'react'

const Layout = ({children}:any) => {
  return (
    <>
        <Naveber />
        <div>
            {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout