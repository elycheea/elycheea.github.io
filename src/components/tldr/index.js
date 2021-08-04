import * as React from "react";

import "./style.scss";

const TldrBlock = ({ children }) => {
  return (
    <aside class="aside--tldr">
      { children }
    </aside>
  )
}

export default TldrBlock
