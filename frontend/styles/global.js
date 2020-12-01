import { injectGlobal } from 'styled-components'

import Reset from './Reset'
import Root from './Root'
import Typography from './Typography'

export default injectGlobal`
   ${Reset}
   ${Root}
   ${Typography}
`

