import { Layout } from '../components'

// Global Styles
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
