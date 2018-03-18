import React, { Component } from 'react';
import logo from './images/newlogo.png';
import './App.css';
import Horoscope from './Horoscope';

class App extends Component {

  render() {
    let now = new Date().toDateString()
    let d = now.split(' ')
    let datestr = `${d[0]}, ${d[1]} ${d[2]}, ${d[3]}`
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Daily Humorscope</h1>
          <h4 className="App-date">
          {datestr}
        </h4>
        </header>
        <Horoscope />
      </div>
    );
  }
}

export default App;
