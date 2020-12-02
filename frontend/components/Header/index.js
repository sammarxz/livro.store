import React from 'react'
import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import Router from 'next/router'
import NProgress from 'nprogress'

import {
  Wrapper,
  Container,
  Logo,
  MenuActions,
  MenuAction
} from './styles'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.ouRouteChangeError = () => {
  NProgress.done()
}

const Header = () => (
  <Wrapper>
    <Container className="d--flex ai--center jc--space-between">
      <Logo href="/">
        <a href="/" className="ff--secondary">
          livro
          <strong>.store</strong>
        </a>
      </Logo>
      <MenuActions className="d--flex ai--center jc--space-between">
        <MenuAction>
          <FiShoppingBag size="1.6rem" />
        </MenuAction>
        <MenuAction>
          <Link href="/sign-in">
            Entrar
          </Link>
        </MenuAction>
      </MenuActions>
    </Container>
  </Wrapper>
)

export { Header }
