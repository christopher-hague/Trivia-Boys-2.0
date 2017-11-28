import React from 'react'

import TextBox from './TextBox'

class FiveLetterWord extends React.Component {
  constructor(props) {
    super()
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    this.fetchWords()
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
          words: this.shuffle(json).slice(0, 99)
        })
      }
    })
  }

  // Fisher-Yates shuffle
  shuffle(a) {
    for(let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // if i % 10 === 0, then it will be the first <td> in a new <tr>
  // if (i + 1) % 10 === 0, then we are at the tenth <td> in the <tr> and can close the <tr>
  // else make a <td> for the word


  makeButton(word, i) {
    return <td className="TextBox" key={i}><TextBox word={word.text} /></td>
  }

  populateTableRows() {
    var result = []
    for(var i = 0; i < this.state.words.length; i++) {
      result.push(<td className="TextBox" key={i}><TextBox word={this.state.words[i].text} /></td>)
    }
    return result
  }

  generateTableRows() {
    var result = []
    for(var i = 0; i < 10; i++) {
      result.push(<tr key={i}>{this.populateTableRows()}</tr>)
    }
    return result
  }

  render() {
    console.log("State: ", this.state)
    console.log("Props: ", this.props)
    if(!this.state.words) {
      return null
    } else {
      var gameBoard = this.generateTableRows()

      return(
        <div className="FiveLetterWord">
          <h1>This is the FiveLetterWord Component!!!</h1>
          <table className="gameBoard">
            <tbody>
              {gameBoard}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default FiveLetterWord
