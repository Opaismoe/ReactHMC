// src/App.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Reboot from 'material-ui/Reboot'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import muiTheme from './styles/theme'
import Navigation from './components/UI/Navigation'
import Routes from './routes'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
