import React, { Component } from 'react'

import NavButton from './navButton'
import NavMenu from './navMenu'

class Header extends Component {
  state = {
    visible: false,
  }

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  mouseClickHandler = e => {
    this.toggleMenu()
  }

  hideMenuHandler = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <header className="navigation">
        <NavButton mouseClickHandler={this.mouseClickHandler} />
        <NavMenu
          menuVisibility={this.state.visible}
          hideMenuHandler={this.hideMenuHandler}
        />
      </header>
    )
  }
}

export default Header
