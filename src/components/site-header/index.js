import { Link } from "gatsby";
import React from "react";

import "./style.scss";

const NavLink = props => (
  <li className="nav__item">
    <Link to={props.to} className="nav__link" title={props.title}>{props.children}</Link>
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
          <NavLink to="https://elycheea.github.io/2016" title="older work — updates soon">Work</NavLink>
          <NavLink to="/info" title="about Elysia">Info</NavLink>
        </ul>
    </nav>
  </header>
  )
}

export default Header
