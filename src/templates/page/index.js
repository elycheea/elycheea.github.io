import * as React from "react"
import Layout from "../../components/layout";
import Header from "../../components/site-header";

import "./style.scss";

const Page = ({ children }) => {
  return (
    <Layout>
      <Header />
      { children }
    </Layout>
  )
}

export default Page
