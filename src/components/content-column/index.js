import * as React from "react";

import "./style.scss";

const ContentColumn = ({ children }) => {
  return (
    <div className="column--main">
      { children }
    </div>
  )
}

export default ContentColumn
