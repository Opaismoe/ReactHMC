import React, { Component } from 'react'
import Reboot from 'material-ui/Reboot'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import Header from './components/UI/Header'
import Navigation from './components/UI/Navigation'
import Loading from './components/UI/Loading'
import Routes from './routes'

const TitleFont =
  '"Bolts", Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

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
      fontFamily: TitleFont,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display1: {
      fontFamily: TitleFont,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display2: {
      fontFamily: TitleFont,
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
          <div className="App">
            <Navigation />
            <Loading />
            <Header />
            <Routes />
          </div>
        </Reboot>
      </MuiThemeProvider>
    )
  }
}

export default App
