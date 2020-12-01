import React from 'react'

// UI Components
import { Header, Meta } from '..'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    { children }
  </>
)

export { Layout }
