import * as React from "react";

import "./style.scss";

const Aside = ({ children }) => {
  return (
    <aside class="column--aside">
      { children }
    </aside>
  )
}

export default Aside
