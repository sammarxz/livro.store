import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.header`
  background-color: rgb(var(--color-background));
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  padding-left: calc(var(--grid-gutter) / 2);
  padding-right: calc(var(--grid-gutter) / 2);
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1.125rem;
  z-index: 10;

  @media (min-width: 769px) {
    padding-left: calc(var(--grid-gutter) * 1.2);
    padding-right: calc(var(--grid-gutter) * 1.2);
  }
`

const Container = styled.div``

const Logo = styled(Link)``

const MenuActions = styled.ul`
  margin: 0;
  padding: 0;
`

const MenuAction = styled.li`
  list-style: none;
  margin-left: 16px;

  svg {
    transform: translateY(2px);
  }
`

export {
  Wrapper, Container, Logo, MenuActions, MenuAction
}
