import * as React from "react";

import "./style.scss";

const ContentColumn = ({ children }) => {
  return (
    <div className="grid">
      <div class="column--main">
        { children }
      </div>
    </div>
  )
}

export default ContentColumn
