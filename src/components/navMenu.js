import React from 'react'
import Link from 'gatsby-link'

const NavMenu = props => {
  const visibilityClass = props.menuVisibility ? 'show' : 'hide'
  return (
    <nav className={visibilityClass} onClick={props.hideMenuHandler}>
      <span id="close">&times;</span>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/resources">
          <li>Resources</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavMenu
