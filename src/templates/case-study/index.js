import * as React from "react";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Header from "../../components/site-header";
import CaseHeader from "./case-header";

// import "./style.scss";

const CaseStudy = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Header />
      <div className="grid">
        <CaseHeader post={post.frontmatter}>
        </CaseHeader>
          {/* { children } */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MdxCaseStudy($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        intro
        tags
      }
    }
  }
`

export default CaseStudy
