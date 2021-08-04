import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/layout";
import Header from "../../components/site-header";
import CaseHeader from "./case-header";
import CaseBody from "./case-body";
import TldrBlock from "../../components/tldr";

// import "./style.scss";

const shortcodes = { TldrBlock };

const CaseStudy = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Header />
      <article>
        <CaseHeader post={post.frontmatter}>
        </CaseHeader>
        <CaseBody>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </CaseBody>
      </article>
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
        isoDate: date(formatString: "YYYY-MM")
        intro
        tags
      }
      body
    }
  }
`

export default CaseStudy
