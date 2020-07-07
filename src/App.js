import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { theme } from './helpers'
import { Layout } from './layout'

require('dotenv').config()

const App = () => {
  return <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Layout />
      </StylesProvider>
    </MuiThemeProvider>
  </BrowserRouter>
}

export default App