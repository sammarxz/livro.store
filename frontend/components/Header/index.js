import React from 'react'
import Link from 'next/link'
import { FiBook, FiShoppingBag, FiUser } from 'react-icons/fi'
import Router from 'next/router'
import NProgress from 'nprogress'

import {
  Wrapper,
  Container,
  Logo,
  MenuActions,
  MenuAction
} from './styles'

import { BookSearch } from '..'

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
  <Wrapper className="pt--32 pb--32 p--relative">
    <Container className="d--flex ai--center jc--space-between">
      <Logo href="/">
        <div className="d--flex ai--center">
          <FiBook size="36px" className="c--primary mr--8" />
          <a href="/" className="c--secondary fs--big">
            livro
            <strong>.store</strong>
          </a>
        </div>
      </Logo>
      <MenuActions className="d--flex ai--center jc--space-between m--0 p--0">
        <MenuAction className="search">
          <BookSearch />
        </MenuAction>
        <MenuAction className="ml--32">
          <FiShoppingBag size="32px" className="c--secondary" />
        </MenuAction>
        <MenuAction className="ml--32">
          <Link href="/sign-in">
            <FiUser size="32px" className="c--secondary" />
          </Link>
        </MenuAction>
      </MenuActions>
    </Container>
  </Wrapper>
)

export { Header }
