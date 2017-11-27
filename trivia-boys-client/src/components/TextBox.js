import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class TextBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <Button basic size="small">{this.props.word}</Button>
    )
  }
}

export default TextBox
