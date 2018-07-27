import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';

import Header from '../components/header/main/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
