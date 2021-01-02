import * as React from "react"
import Aside from "../../components/aside";
import ContentColumn from "../../components/content-column";
import Page from "../../templates/page";

import IconArrowUpRight from "../../components/icons/arrow-up-right";
import kaohsiung from "../../images/tree.png";

import "./style.scss";

// data
const experience = [
  {
    company: 'IBM',
    title: 'Front-end lead',
    org: 'Market Development & Insights',
    dateStart: '2020',
    dateEnd: 'present'
  },
  {
    company: 'IBM',
    title: 'Senior product designer',
    org: 'Market Development & Insights',
    dateStart: '2018',
    dateEnd: 'present'
  },
  {
    company: 'IBM',
    title: 'Product designer',
    org: 'Market Development & Insights',
    dateStart: '2016',
    dateEnd: '2018'
  },
  {
    company: 'CxAlloy',
    title: 'Web developer',
    dateStart: '2011',
    dateEnd: '2016'
  }
];

const speaking = [
  {
    title: 'Design principles for more impactful storytelling',
    event: 'MD&I summer learning series',
    timeframe: 'Jun–Aug 2020'
  },
  {
    title: 'Working with HTML tables',
    event: 'MD&I Converge',
    timeframe: 'Jan 2019'
  },
  {
    title: 'Gestalt principles for better design',
    event: 'MD&I Skills Summit',
    timeframe: 'Jan 2018'
  }
];

const awards = [
  {
    title: 'Nielsen Norman Group’s Intranet Design Annual 2019: The Year’s 10 Best Intranets',
    url: 'https://www.nngroup.com/articles/intranet-design-2019/',
    date: 'Jan 2019'
  },
  {
    title: 'Step Two Intranet and Digital Workplace – Silver Award (2018)',
    url: 'https://www.steptwo.com.au/award-winner/ibm-redesigning-a-collection-of-market-knowledge/',
    date: 'Sep 2018'
  }
];

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

        <img class="cover-img" src={kaohsiung} alt="Elysia sitting in front of a tree in Kaohsiung" />
      </ContentColumn>
      <Aside>
        <div className="content__section">
          <h2>Experience</h2>
          {experience.map(exp => (
            <div className="card--exp">
              <div className="card__header">
                <h4 className="job__title">{exp.title}</h4>
                <span className="metadata">{exp.dateStart} – {exp.dateEnd}</span>
              </div>
              {exp.org &&
                <>
                  <span className="job__org">{exp.org}, </span>
                </>
              }
              <span className="job__company">{exp.company}</span>
            </div>
          ))}
        </div>
        <div className="content__section">
          <h2>Speaking</h2>
          {speaking.map(session => (
            <div className="card--exp">
              <span className="session__title">{session.title}</span>
              <span className="session__details">
                {session.event}, {session.timeframe}
              </span>
            </div>
           ))}
        </div>
        <div className="content__section">
          <h2>Awards</h2>
          {awards.map(award => (
            <div className="card--exp">
              <a className="award__link award__title" href={award.url}>
                {award.title} <IconArrowUpRight size="18" className="award__icon" />
              </a>
            </div>
          ))}
        </div>
      </Aside>
    </Page>
  )
}

export default Info
