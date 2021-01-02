import { Link } from "gatsby";
import * as React from "react"
import ContentColumn from "../components/content-column";
import Page from "../templates/page";

import "./index.scss";

const Home = () => {
  return (
    <Page>
      <ContentColumn>
        <h2 className="tagline">
          <span className="rwd-line">Designer who loves code // </span>
          <span className="rwd-line">or developer who loves design</span>
        </h2>
        <p className="intro">
          I’m Elysia Hwang, a creative technologist with a growing interest in design and frontend&nbsp;ops. I’m based in Atlanta, GA.
        </p>
        <Link to="/info">+ Learn more</Link>
      </ContentColumn>
    </Page>
  )
}

export default Home
