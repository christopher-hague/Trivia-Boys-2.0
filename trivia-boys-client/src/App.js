import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { fetchWords } from './api/index'

class App extends Component {
  render() {
    //loggin fetchWords() to ensure no CORS conflicts
    console.log(fetchWords())
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
