import * as React from "react";

import "./style.scss";

const ContentColumn = ({ children }) => {
  return (
    <div class="column--main">
      { children }
    </div>
  )
}

export default ContentColumn
