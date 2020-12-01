import React from 'react'
import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'

import {
  Wrapper,
  Container,
  Logo,
  MenuActions,
  MenuAction
} from './styles'

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
          <Link href="/entrar">
            Entrar
          </Link>
        </MenuAction>
      </MenuActions>
    </Container>
  </Wrapper>
)

export { Header }
