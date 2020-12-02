import styled from 'styled-components'

const List = styled.section`
  flex-wrap: wrap;
  margin-top: 80px;

  @media (min-width: 630px) {
    margin-top: 40px;
  }
`

const Book = styled.article`
  width: 100%;
  margin-bottom: 2em;

  &::not(::last-of-type) {
    margin-bottom: 2em;
  }

  @media (min-width: 769px) {
    margin-bottom: 4em;
    width: calc(
      36% - (var(--grid-width) / var(--grid-column) - var(--grid-gutter)) / 3
    );
  }
`

const BookInfo = styled.div`
  width: 100%;

  .book__buy {
    flex-direction: column;

    @media (min-width: 769px) {
      flex-direction: row;
      align-items: center;
    }
  }
`

const BookCover = styled.div`
  img {
    max-width: 100px;
    max-height: 200px;
    filter: drop-shadow(0 5px 5px rgba(0,0,0,.2));
  }
`

const BookTitle = styled.h2``

const BookAuthor = styled.h4`
  border: 1px solid var(--color-lightGray);
  border-radius: 4px;
  padding: 4px;
  letter-spacing: 0.2px;
`

const BookPrice = styled.h3``

const AddToCart = styled.button`
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 4px 8px;
  width: 100%;
  transition: color .3s ease, background-color .3s ease;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
  }

  svg {
    transform: translateY(2px);
  }

  @media (min-width: 769px) {
    width: auto;
  }
`

export {
  List, Book, BookCover, BookInfo, BookTitle, BookAuthor, BookPrice, AddToCart
}
