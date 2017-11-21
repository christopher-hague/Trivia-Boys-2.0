import React from 'react'

class FiveLetterWord extends React.Component {
  constructor(props) {
    super()
    this.state = {
      words: []
    }
  }

  render() {
    console.log(this.state)
    
    return(
      <div>This is the FiveLetterWord Component!!!</div>
    )
  }
}

export default FiveLetterWord
