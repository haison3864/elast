
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const All = ( {children} ) => {
  return (
    <div>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default All