import * as React from "react";

import "./case-body.scss";

const CaseBody = ({ children }) => {
  return (
    <div className="case__body">
      { children }
    </div>
  )
}

export default CaseBody
