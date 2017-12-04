import React from 'react'

import TextBox from './TextBox'
import Timer from './Timer'

class FiveLetterWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: this.props.words ? this.props.words : []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      words: nextProps.words
    })
  }

  shuffle(a) {
    for(let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  createWordsRows() {
    // wrap each element in a <tr> tag, then wrap each element of the subArr in a <td> tag
    var words = this.shuffle(this.state.words)
    return [
      words.slice(0,10).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(10,20).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(20,30).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(30,40).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(40,50).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(50,60).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(60,70).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(70,80).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(80,90).map(word => <td key={word.text}><TextBox word={word.text} /></td>),
      words.slice(90,100).map(word => <td key={word.text}><TextBox word={word.text} /></td>)
    ]
  }

  createBoard() {
    return this.createWordsRows().map((wordRow, i) => <tr key={i}>{wordRow}</tr>)
  }


  render() {
    if(this.state.words.length === 0) {
      return null
    }
    return(
      <div className="FiveLetterWord">
        <h1>This is the FiveLetterWord Component!!!</h1>
        <table className="gameBoard">
          <tbody>
            {this.createBoard()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FiveLetterWord
