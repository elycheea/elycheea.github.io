import * as React from "react";

import "./case-header.scss";

const CaseHeader = ({ post, children }) => {
  return (
    <>
      <div className="case__header">
        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <p>{post.intro}</p>
      </div>
      <aside className="case__stack">
        {
          post.tags.map((tag, index) => (
            <li key={`tag-${index}`}>
              {tag}
            </li>
          ))
        }

        { post.stack && (
          <>
            <h4>Skills & stack</h4>
            { post.stack }
          </>
        )}
      </aside>
    </>
  )
}

export default CaseHeader