import * as React from "react"
import ContentColumn from "../../components/content-column";
import Page from "../../templates/page";

import "./style.scss";

const Info = () => {
  return (
    <Page>
      <ContentColumn>
        <h1 className="site-name">Elysia Hwang</h1>
        <p className="intro">
          I’m a creative technologist based in and native to Atlanta, GA.
        </p>
        <p className="intro">
          I’m currently at IBM as a senior product designer and front-end lead on <a href="https://www.nngroup.com/news/item/2019-intranet-design-awards/">an internal product on our intranet</a>.
          My growing interest in design and frontend ops stems from experiences collaborating with and acting as both designer and developer.
        </p>
      </ContentColumn>
    </Page>
  )
}

export default Info
