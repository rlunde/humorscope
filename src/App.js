import React, { Component } from 'react';
import logo from './images/newlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Daily Humorscope</h1>
        </header>
        <p className="App-date">
          {new Date(Date.now()).toLocaleString()}
        </p>
      </div>
    );
  }
}

export default App;
