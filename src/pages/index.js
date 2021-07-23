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
          <span className="rwd-line">Elysia Hwang is a <span className="highlight">UX engineer</span>&nbsp;/{' '}</span>
          <span className="rwd-line"><span className="highlight">design technologist</span> based in{' '}</span>
          <span className="rwd-line">Atlanta, GA</span>
        </h2>
        {/* <p className="intro">
          I’m Elysia Hwang, a creative technologist with a growing interest in design and frontend&nbsp;ops. I’m based in Atlanta, GA.
        </p> */}
        <Link to="/info">+ Learn more</Link>
      </ContentColumn>
    </Page>
  )
}

export default Home
