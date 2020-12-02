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
    primary: '"Inter", sans-serif'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
