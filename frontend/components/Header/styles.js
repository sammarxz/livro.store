import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.header``

const Container = styled.div``

const Logo = styled(Link)``

const MenuActions = styled.ul``

const MenuAction = styled.li`
  list-style: none;

  svg {
    transform: translateY(2px);
  }

  &.search {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;

    input {
      width: 100%;
    }

    @media (min-width: 630px) {
      position: relative;
      width: inherit;
      top: auto;

      input {
        width: inherit;
      }
    }
  } 
`

export {
  Wrapper, Container, Logo, MenuActions, MenuAction
}
