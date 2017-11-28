import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class TextBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "grey",
      clicked: false
    }
  }

  handleClick() {
    if(!this.state.clicked) {
      console.log("clicked")
      if(this.props.word.length === 4) {
        this.setState({
          color: "green",
          clicked: true
        })
      } else {
        this.setState({
          color: "red",
          clicked: true
        })
      }
    }
  }

  render() {
    // enable onClick() functionality, e.g. it will change color accordingly
    return (
      <Button
        color={this.state.color}
        size="small"
        onClick={this.handleClick.bind(this)}
      >
        {this.props.word}
      </Button>
    )
  }
}

export default TextBox
