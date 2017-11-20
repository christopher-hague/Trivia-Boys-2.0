import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

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
    console.log(this.state)

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
