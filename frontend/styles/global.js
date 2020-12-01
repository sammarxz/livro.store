import { createGlobalStyle } from 'styled-components'

import Reset from './Reset'
import Root from './Root'
import Typography from './Typography'

import { Positions } from './Helpers'

const GlobalStyle = createGlobalStyle`
   /* BASE */
   ${Reset}
   ${Root}
   ${Typography}

   /* HELPERS */
   ${Positions}
`

export default GlobalStyle
