import { css } from 'styled-components'

const Root = css`
  :root {
    --font-size-base: 16px;
    --font-family-base: 'Libre Sans', Roboto, Helvetica, Arial, sans-serif;
    --font-line-height-base: 1.5;

    --color-background: 255,255,255;
    --color-foreground: 0,0,0;
    --color-haze: rgb(70, 70, 70);
    --color-heading: rgb(6, 6, 6);

    --grid-width: 60rem;
    --grid-column: 1;
    --grid-gutter: 1.25rem;
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
    padding-left: calc(var(--grid-gutter) / 2);
    padding-right: calc(var(--grid-gutter) / 2);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--grid-width);
    overflow-x: hidden;
  }
`

export default Root