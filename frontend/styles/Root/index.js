import { css } from 'styled-components'

const Root = css`
  :root {
    --font-size-base: 16px;
    --font-family-primary: ${({ theme }) => theme.fonts.primary};
    --font-line-height-base: 1.5;

    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-gray: ${({ theme }) => theme.colors.gray};
    --color-midGray: ${({ theme }) => theme.colors.midGray};
    --color-lightGray: ${({ theme }) => theme.colors.lightGray};

    --color-text: ${({ theme }) => theme.colors.gray};

    --grid-width: 60rem;
    --grid-column: 1;
    --grid-gutter: 3.25rem;
  }

  @media (min-width: 576px) {
    :root {
      --grid-column: 2;
    }
  }

  @media (min-width: 769px) {
    :root {
      --grid-column: 6;
    }
  }

  body {
    color: rgb(var(--color-text));
    overflow-x: hidden;
    width: 100%;
    max-width: var(--grid-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--grid-gutter) / 2);
    padding-right: calc(var(--grid-gutter) / 2);
  }

  a {
    cursor: pointer;
  }
`

export default Root
