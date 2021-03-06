import React, { Component } from 'react'
import Reboot from 'material-ui/Reboot'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import Header from './components/UI/Header'
import Navigation from './components/UI/Navigation'
import Error from './components/UI/Error'
import Loading from './components/UI/Loading'
import Routes from './routes'

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        background: 'linear-gradient(45deg, #ff1227 30%, #ff1227 90%)',
        borderRadius: 12,
        color: 'white',
        height: 32,
        padding: '0 10px',
        boxShadow: '0 2px 3px 1px rgba(38, 38, 38, 0.2)'
      }
    }
  },
  palette: {
    primary: {
      light: '#bedee8',
      main: '#0081aa',
      dark: '#136880',
      contrastText: '#cfc029'
    },
    secondary: {
      light: '#ffdc60',
      main: '#e6a435',
      dark: '#c19600',
      contrastText: '#000000'
    }
  },
  typography: {
    fontFamily:
      '"Roboto, "Helvetica Neue", Arial, sans-serif',
    headline: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display2: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    }
  }
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot>
          <div className="App" style={{ zIndex: 1}}>
            <Error />
            <Navigation />
            <div style={{ zIndex: 'auto', position: 'absolute', top: 10, left: 10 }} >
              <Loading/>
            </div>
            <Header />
            <Loading className='loading' />
            <Routes />
          </div>
        </Reboot>
      </MuiThemeProvider>
    )
  }
}

export default App
