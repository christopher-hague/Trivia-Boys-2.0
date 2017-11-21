import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <Menu>
        <Menu.Item
          as={Link} to='/'
          name='welcome'
          active={activeItem === 'welcome'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link} to='/About'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link} to="/FiveLetterWord"
          name='Five Letter Game'
          active={activeItem === 'FiveLetterWord'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
