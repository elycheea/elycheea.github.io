import * as React from "react"
import { graphql } from "gatsby"
import ContentColumn from "../../components/content-column";
import Page from "../../templates/page";

import "./style.scss";

const Work = ({ data }) => {
  return (
    <Page>
      <ContentColumn>
        <h1 className="site-name">Case studies</h1>
        <ul>
        {
          data.allMdx.nodes.map(node => (
            <li key={node.slug}>
              {node.frontmatter.title}
            </li>
          ))
        }
        </ul>
      </ContentColumn>
    </Page>
  )
}

export const query = graphql`
  query MdxCaseStudy {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`

export default Work
