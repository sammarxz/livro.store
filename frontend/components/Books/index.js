import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import {
  List,
  Book,
  BookCover,
  BookInfo,
  BookTitle,
  BookPrice
} from './styles'

const Books = ({ books }) => (
  <List className="d--flex ai--center jc--space-between">
    { books.map(({
      id, title, author, cover, price
    }) => (
      <Book key={id}>
        <Link href={`/${id}`}>
          <>
            <BookCover>
              <div>
                <img src={cover} alt={title} />
              </div>
            </BookCover>
            <BookInfo className="d--flex ai--start jc--space-between">
              <BookTitle>
                { title }
                <span>
                  {' '}
                  por
                  {' '}
                  { author }
                </span>
              </BookTitle>
              <BookPrice>{ price }</BookPrice>
            </BookInfo>
          </>
        </Link>
      </Book>
    )) }
  </List>
)

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { Books }
