import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class TextBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "blue",
      clicked: false,
      text: this.props.word
    }
  }

  handleClick() {
    if(!this.state.clicked) {
      if(this.state.text.length === 5 && !this.state.clicked) {
        this.setState({
          color: "green",
          clicked: true
        })
      } else if(!this.state.clicked){
        this.setState({
          color: "red",
          clicked: true
        })
      }
    }
  }

  alterText() {
    this.setState({
      text: "#####"
    })
  }

  render() {
    console.log(this.props)
    // setTimeout(this.alterText, this.props.timeout)

    return (
      <div className="TextBox">
        <Button fluid
          color={this.state.color}
          size="small"
          onClick={this.handleClick.bind(this)}
        >
          {this.state.text}
        </Button>
      </div>
    )
  }
}

export default TextBox

/*
  1) Make background transparent
  2) Enable component to render either an animated, animated vertical or animated fade button at random
  3) Enable TextBox to remain hidden until a setTimeout() alters hidden state, unless it has no timeout (this will probaby be passed as a prop from FiveLetterWord. Try creating a shuffled array with a number that represents the amount of time the buttons text should remain hidden for each button, then pass that button as a prop. setTimeout to change state of button text).
*/
