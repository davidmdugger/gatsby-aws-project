import React from 'react'

const NavButton = props => {
  return (
    <div id="menuToggle" onClick={props.mouseClickHandler}>
      &#9776;
    </div>
  )
}

export default NavButton
