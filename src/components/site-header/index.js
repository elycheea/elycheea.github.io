import { Link } from "gatsby";
import React from "react";

import "./style.scss";

const NavLink = props => (
  <li className="nav__item">
    <Link to={props.to} className="nav__link">{props.children}</Link>
  </li>
)

const Header = () => {
  return (
  <header>
    <nav className="navbar">
      <Link
        to="/"
        className="logomark">
          eh.
        </Link>

        <ul className="nav__menu">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
    </nav>
  </header>
  )
}

export default Header
