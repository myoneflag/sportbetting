import { createMuiTheme } from '@material-ui/core/styles'

const muiTheme = createMuiTheme({})

const AiTheme = {
  colorStyle: {
    yellow: '#fcd652',
    red: '#dd354d',
    white: 'white'
  },
  textStyle: {
    title: {
      fontSize: '48px',
      fontWeight: 'normal'
    },
    desc: {
      fontSize: '36px',
      fontWeight: 'normal'
    }
  }
}

const theme = {
  ...muiTheme,
  ...AiTheme
}

export default theme