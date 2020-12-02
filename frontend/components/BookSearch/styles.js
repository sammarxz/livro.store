import styled from 'styled-components'

const SearchWrapper = styled.div``

const SearchInput = styled.input`
  border-radius: 8px;
  border: 1px solid transparent;
  transition: border-color .3s ease;

  &:focus {
    border-color: var(--color-secondary);
  }
`

const SearchIcon = styled.div`
  top: 8px;
  right: 16px;
  z-index: 2;
`

export { SearchWrapper, SearchInput, SearchIcon }
