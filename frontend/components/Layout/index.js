import React from 'react'

// Global Styles
import GlobalStyle from '../../styles/global';

// UI Components
import { Header, Meta } from '../'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Meta />
    <Header />
    { children }
  </>
)

export { Layout }
