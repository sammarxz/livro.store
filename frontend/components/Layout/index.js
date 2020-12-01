import React from 'react'

// UI Components
import Meta from '../Meta'
import Header from '../Header'

const Layout = ({ children }) => (
 <div className="container">
   <Meta />
   <Header />
   <p>Hey, I'm Layout component</p>
   { children }
 </div>
)

export default Layout
