import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import About from './components/About'
import FiveLetterWord from './components/FiveLetterWord'

class App extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/FiveLetterWord" component={FiveLetterWord} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
