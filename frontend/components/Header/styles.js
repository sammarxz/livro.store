import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.header`
  background-color: rgb(var(--color-background));
  position: fixed;
  width: 100%;
  max-width: 100vw;
  padding: 1rem 2rem;
  font-size: 1.125rem;
`

export const Container = styled.div``

export const Logo = styled(Link)``

export const MenuActions = styled.ul`
  margin: 0;
  padding: 0;
`

export const MenuAction = styled.li`
  list-style: none;
  margin-left: 16px;

  svg {
    transform: translateY(2px);
  }
`
