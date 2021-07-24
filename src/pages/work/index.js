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
            <li key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <span>{node.frontmatter.date}</span>
              <p>{node.frontmatter.intro}</p>
            </li>
          ))
        }
        </ul>
      </ContentColumn>
    </Page>
  )
}

export const query = graphql`
  query MdxCaseStudies {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        id
        frontmatter {
          title
          date(formatString: "MMMM YYYY")
          intro
        }
      }
    }
  }
`

export default Work
