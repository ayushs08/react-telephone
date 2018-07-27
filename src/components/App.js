import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './app.css';
import Navbar from './navbar/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7d7d',
      main: '#ff5d5d',
      dark: '#b24141',
      contrastText: '#fff'
    },
    secondary: {
      light: '#5cace2',
      main: '#3498db',
      dark: '#246a99',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Oswald',
    htmlFontSize: '10px'
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: '#000',
        '$:hover': {
          background: 'orange'
        }
      }
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
