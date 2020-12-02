import { css } from 'styled-components'

const Typography = css`
  html {
    font-size: var(--font-size-base);
  }

  body {
    font-family: var(--font-family-primary);
    line-height: var(--font-line-height-base);
  }

  p {
    margin-bottom: 1.15rem;
    font-size: 1em;
  }

  a {
    color: currentColor;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2em 0 1.05em;
    font-weight: 400;
    line-height: var(--font-line-height-base);
  }

  h1 {
    font-size: 1.5em;
    line-height: 1.4;
  }

  h2 {
    font-size: 1.44em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    margin: 1em 0 1.05em;
  }

  small {
    font-size: 0.833em;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: normal;
  }

  li {
    list-style: disc;
  }

  ul {
    padding-left: 1.4em;
    margin-bottom: 1.4em;
  }

  hr {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    border: 1px solid #eee;
  }

  @media (min-width: 576px) {
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 2.75em 0 1.05em;
      line-height: var(--font-line-height-base);
    }

    h1 {
      font-size: 2.074em;
    }

    h2 {
      font-size: 1.728em;
    }

    h3 {
      font-size: 1.44em;
    }

    h4 {
      font-size: 1.2em;
    }

    h5 {
      margin: 1.25em 0 0.5em;
    }
  }
`

export default Typography
