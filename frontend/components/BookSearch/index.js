import React from 'react'
import { FiSearch } from 'react-icons/fi'

import { SearchWrapper, SearchInput, SearchIcon } from './styles'

const BookSearch = () => (
  <SearchWrapper className="p--relative">
    <SearchInput type="text" placeholder="Buscar livro..." className="c--gray bg--lightGray pt--8 pb--8 pl--16 pr--16" />
    <SearchIcon className="p--absolute">
      <FiSearch className="c--secondary" size="16px" />
    </SearchIcon>
  </SearchWrapper>
)

export { BookSearch }
