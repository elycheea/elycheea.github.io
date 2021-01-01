import * as React from "react";

import "./index.scss";

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
