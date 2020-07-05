const bodyContent = {
  html: {
    minHeight: '100%',
  },
  body: {
    margin: 0,
    minHeight: '100%',
  },
  '#root': {
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: 'white',
    color: 'white'
  },
  '#root > div': {
    display: 'flex',
    flexFlow: 'column'
  }
}

export default bodyContent