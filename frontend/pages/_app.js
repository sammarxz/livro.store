import { ThemeProvider } from 'styled-components'

import { Layout } from '../components'

import GlobalStyle from '../styles/global'

const theme = {
  colors: {
    primary: '#E2910E',
    secondary: '#194188',
    gray: '#7B7B7B',
    midGray: '#9E9E9E',
    lightGray: '#EFEFEF'
  },
  fonts: {
    primary: 'Inter'
  },
  baseMargin: '8px'
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
