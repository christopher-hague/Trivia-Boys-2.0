import React from 'react'

import TextBox from './TextBox'

class FiveLetterWord extends React.Component {
  constructor(props) {
    super()
    this.state = {
      words: []
    }
  }

  populateTableRows() {
    var result = []
    for(var i = 0; i < 10; i++) {
      result.push(<td className="TextBox"><TextBox word="test" /></td>)
    }
    return result
  }

  generateTableRows() {
    var result = []
    for(var i = 0; i < 10; i++) {
      result.push(<tr>{this.populateTableRows()}</tr>)
    }
    return result
  }

  render() {
    var gameBoard = this.generateTableRows()

    return(
      <div className="FiveLetterWord">
        <h1>This is the FiveLetterWord Component!!!</h1>
        <table className="gameBoard">
          {gameBoard}
        </table>
      </div>
    )
  }
}

export default FiveLetterWord
