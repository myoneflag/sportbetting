import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { theme, bodyContent } from './helpers'
import { Layout } from './layout'

require('./components/styles/index.css')
require('dotenv').config()

const App = () => {
  return <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Global styles={bodyContent} />
          <Layout />
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  </BrowserRouter>
}

export default App