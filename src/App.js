// src/App.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Reboot from 'material-ui/Reboot'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import muiTheme from './styles/theme'
import Navigation from './components/UI/Navigation'
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
      dark: '#0c2830',
      contrastText: '#b1ac7a'
    },
    secondary: {
      light: '#ffdc60',
      main: '#e6a435',
      dark: '#ab8500',
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
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot>
          <div className="App">
            <Navigation />
            <Routes />
          </div>
        </Reboot>
      </MuiThemeProvider>
    )
  }
}

export default App
