import styled from 'styled-components'

const List = styled.section`
  padding-top: 70vh;
  flex-wrap: wrap;
`

const Book = styled.article`
  width: 100%;
  margin-bottom: 2em;
  cursor: pointer;

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

const BookCover = styled.div`
  background-color: #eee;
  padding: 90px 0;

  &:hover {
    div {
      filter: grayscale(0);

      img {
        filter: drop-shadow(0 5px 5px rgba(0,0,0,.6));
        transform: scale(.98);
      }
    }
  }

  div, div img {
    transition: all .3s ease;
  }

  div {
    padding-bottom: 300px;
    filter: grayscale(100%);
    position: relative;
    width: 100%;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      max-height: 300px;
      min-height: 300px;
      filter: drop-shadow(0 20px 15px rgba(0,0,0,.2));
      z-index: 2;
    }
  }
`

const BookInfo = styled.div`
 margin-top: 16px;
`

const BookTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;

  span {
    font-size: .8rem;
    display: block;
  }
`

const BookPrice = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`

export {
  List, Book, BookCover, BookInfo, BookTitle, BookPrice
}
