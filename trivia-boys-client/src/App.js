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

    this.state = {
      words: []
    }
  }

  fetchWords() {
    var url = "http://localhost:3000/api/v1/words/"
    return fetch(url)
    .then( res => res.json() )
    .then( json => {
      if(json.error) {
        alert("Error")
      } else {
        this.setState({
          words: json
        })
      }
    })
  }


  componentDidMount() {
    this.fetchWords()
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
