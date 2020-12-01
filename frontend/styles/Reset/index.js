import { css } from 'styled-components'

const Reset =  css`
   * {
    margin: 0; /* 1 */
    padding: 0; /* 1 */
    border: 0; /* 1 */
    background-repeat: no-repeat; /* 1 */
    box-sizing: inherit; /* 2 */
  }

  html {
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 1 */
    box-sizing: border-box; /* 2 */
    scroll-behavior: auto; /* 3 */
  }

  body {
    font-size: 16px; /* 1 */
    -moz-osx-font-smoothing: grayscale; /* 2 */
    -webkit-font-smoothing: antialiased; /* 2 */
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 1em;
    font-weight: normal;
  }

  a {
    text-decoration: none; /* 1 */
    color: inherit; /* 1 */
    display: inline-block; /* 2 */
    background-color: transparent; /* 3 */
  }

  ol,
  ul {
    list-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: visible;
    border: 0;
    outline: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    color: inherit;
    background: none;
    vertical-align: top;
  }

  option {
    background-color: inherit;
  }

  a:active,
  button:active {
    color: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  textarea {
    resize: none;
  }

  input[type="button"],
  button {
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  img {
    display: block; /* 1 */
    max-width: 100%; /* 2 */
    height: auto; /* 2 */
    border-style: none; /* 3 */
  }

  table {
    border-collapse: collapse;
  }
`

export default Reset