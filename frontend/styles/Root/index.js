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

    --grid-width: 120rem;
    --grid-column: 1;
    --grid-gutter: 2.25rem;
  }

  @media (min-width: 576px) {
    :root {
      --grid-column: 6;
    }
  }

  @media (min-width: 769px) {
    :root {
      --grid-column: 12;
    }
  }

  body {
    background-color: rgb(var(--color-background));
    color: rgb(var(--color-text));
    overflow-x: hidden;
  }
`

export default Root
