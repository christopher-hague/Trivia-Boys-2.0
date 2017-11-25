import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const TextBox = (props) => {
  console.log(this.props)
  return (
    <Button basic size="small">{props.word}</Button>
  )
}

export default TextBox
