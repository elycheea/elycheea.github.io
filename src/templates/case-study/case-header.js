import * as React from "react";

import "./case-header.scss";

const CaseHeader = ({ post, children }) => {
  return (
    <div className="grid">
      <div className="case__header">
        <time dateTime={post.isoDate}>{post.date}</time>
        <h1>{post.title}</h1>
        <p className="case__intro">{post.intro}</p>
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
    </div>
  )
}

export default CaseHeader
