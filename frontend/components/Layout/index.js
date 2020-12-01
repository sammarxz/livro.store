import React from 'react'

// UI Components
import { Header, Meta } from '../'

// Global Styles
import '../../styles/global';

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    <p>Hey, I'm Layout component</p>
    { children }
  </>
)

export { Layout }
