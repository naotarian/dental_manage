import '../../styles/global/global.css'
import React from 'react'

import { ThemeProvider } from '@mui/material/styles'

import theme from '@/components/default'
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <style global jsx>
        {`
          html {
          }
          img {
          }
        `}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
