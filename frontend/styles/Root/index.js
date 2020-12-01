import { css } from 'styled-components'

const Root = css`
  :root {
    --font-size-base: 16px;
    --font-family-base: 'Libre Sans', Roboto, Helvetica, Arial, sans-serif;
    --font-family-secondary: 'Libre Baskerville', serif;
    --font-line-height-base: 1.5;

    --color-background: 255,255,255;
    --color-foreground: 0,0,0;

    --color-text: rgb(70, 70, 70);

    --grid-width: 80rem;
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
    background-color: rgb(var(--color-background));
    color: rgb(var(--color-text));
    overflow-x: hidden;
    width: 100%;
    max-width: var(--grid-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--grid-gutter) / 2);
    padding-right: calc(var(--grid-gutter) / 2);
  }
`

export default Root
