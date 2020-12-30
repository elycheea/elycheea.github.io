import { Link } from "gatsby";
import React from "react";

import "./style.scss";

const Header = () => {
  return (
  <header>
    <nav className="navbar">
      <Link
        to="/"
        className="logomark">
          eh.
        </Link>
    </nav>
  </header>
  )
}

export default Header