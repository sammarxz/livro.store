import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { FiShoppingCart, FiPlus } from 'react-icons/fi'

import {
  List,
  Book,
  BookCover,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookPrice,
  AddToCart
} from './styles'

const Books = ({ books }) => (
  <List className="d--flex ai--center jc--space-between">
    { books.map(({
      id, title, author, cover, price
    }) => (
      <Book key={id}>
        <div className="d--flex ai--center">
          <Link href={`/${id}`}>
            <BookCover className="mr--32">
              <img src={cover} alt={title} />
            </BookCover>
          </Link>
          <BookInfo>
            <Link href={`/${id}`}>
              <a href={`/${id}`}>
                <BookAuthor className="mt--0 mb--0 c--secondary tt--uppercase fw--700 fs--small">
                  { author }
                </BookAuthor>
                <BookTitle className="mb--0 mt--8 fs--big c--secondary">
                  { title }
                </BookTitle>
              </a>
            </Link>
            <div className="book__buy d--flex">
              <BookPrice className="c--primary fs--medium mt--8 mb--8 mr--16">{ price }</BookPrice>
              <AddToCart type="button" className="bc--primary c--primary">
                <FiPlus />
                <FiShoppingCart />
              </AddToCart>
            </div>
          </BookInfo>
        </div>
      </Book>
    )) }
  </List>
)

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { Books }
