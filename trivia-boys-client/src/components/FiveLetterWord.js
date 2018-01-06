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

  componentDidMount() {
    this.setState({
      words: this.props.words
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
    var words = this.shuffle(this.state.words)
    // create an arr of numbers that represent the timeout for each word. Pass each timeout as a prop to TextBox
      // 40 words are shown immediately. The remaining 60 words will appear every 200ms
      // pass a randomly generated timeout as timeout prop (timeout is currently hardcoded)
    var timeouts = this.shuffle(this.generateTimeouts())
    console.log(timeouts)
    return [
      words.slice(0,10).map(word => <td key={word.text}><TextBox word={word.text} timeout={5000} /></td>),
      words.slice(10,20).map(word => <td key={word.text}><TextBox word={word.text} timeout={7000} /></td>),
      words.slice(20,30).map(word => <td key={word.text}><TextBox word={word.text} timeout={2000} /></td>),
      words.slice(30,40).map(word => <td key={word.text}><TextBox word={word.text} timeout={8000} /></td>),
      words.slice(40,50).map(word => <td key={word.text}><TextBox word={word.text} timeout={4000} /></td>),
      words.slice(50,60).map(word => <td key={word.text}><TextBox word={word.text} timeout={3000} /></td>),
      words.slice(60,70).map(word => <td key={word.text}><TextBox word={word.text} timeout={9000} /></td>),
      words.slice(70,80).map(word => <td key={word.text}><TextBox word={word.text} timeout={7000} /></td>),
      words.slice(80,90).map(word => <td key={word.text}><TextBox word={word.text} timeout={3000} /></td>),
      words.slice(90,100).map(word => <td key={word.text}><TextBox word={word.text} timeout={5000} /></td>)
    ]
  }

  generateTimeouts() {
    var timeouts = []
    var time = 200

    for(var i = 0; i < 60; i++) {
      if(i < 40) {
        timeouts.push(0)
      }
      timeouts.push(time)
      time += 200
    }
    return timeouts
  }

  createBoard() {
    return this.createWordsRows().map((wordRow, i) => <tr key={i}>{wordRow}</tr>)
  }

  // invoking this function changes state of words, which rerender the board...
  deincrementTime() {
    if(this.state.remainingTime > 0) {
      setTimeout(() => this.setState({
        remainingTime: this.state.remainingTime - 1
      }), 1000)
    }
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

        <Timer time={this.state.remainingTime} />
      </div>
    )
  }
}

export default FiveLetterWord
