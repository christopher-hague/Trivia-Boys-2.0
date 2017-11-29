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
          words: this.shuffle(json).slice(0, 100)
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

  createWordsRows() {
    // wrap each element in a <tr> tag, then wrap each element of the subArr in a <td> tag
    return [
      this.state.words.slice(0,10).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(10,20).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(20,30).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(30,40).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(40,50).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(50,60).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(60,70).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(70,80).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(80,90).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>),
      this.state.words.slice(90,101).map(word => <td className="TextBox" key={word.text}><TextBox word={word.text} /></td>)
    ]
  }

  createBoard() {
    return this.createWordsRows().map((wordRow, i) => <tr key={i}>{wordRow}</tr>)
  }

  makeButton(word, i) {
    return <td className="TextBox" key={i}><TextBox word={word.text} /></td>
  }

  render() {
    console.log("State: ", this.state)
    console.log("Props: ", this.props)
    console.log(this.createWordsRows())
    if(!this.state.words) {
      return null
    } else {
      var gameBoard = this.createBoard()

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
