/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = () => (
  <React.Fragment>
    <h2 className="projectTitle">
      <img
        alt="Webiny - Serverless CMS"
        src="/img/webiny-orange-logo.svg"
        style={{ height: "100px" }}
      />
    </h2>
    <h3 className="projectTagline">
      {siteConfig.tagline}
      <small>{siteConfig.subTagline}</small>
    </h3>
  </React.Fragment>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="/docs/cms-guides/cms-overview">CMS Guides</Button>
            <Button href="/docs/developer-tutorials/installing-locally">
              Developer Tutorials
            </Button>
            <Button href="/docs/reference-manual/reference-manual-overview">
              Reference Manual
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <h3 className="section-title">{props.title}</h3>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn" background="light" title="Guides & Manuals">
    {[
      {
        content:
          "Learn the basics of Webiny CMS. How to build pages, add elements and change how they look.",
        title: "CMS Guides",
        image: imgUrl("documented-icon.svg"),
        imageAlign: "top",
        imageLink: "https://google.com/"
      },
      {
        content:
          "This is developer-focused section that describes how to build new APIs, themes and plugins for the Webiny CMS.",
        title: "Developer Guides",
        image: siteConfig.baseUrl + "img/oss_logo.png"
      },
      {
        content: "Dive deeper into the internal components of Webiny.",
        title: "Reference Manual",
        image: siteConfig.baseUrl + "img/oss_logo.png"
      }
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        {/*<div className="mainContainer">
          <Features />
        </div>
    */}
      </div>
    );
  }
}

module.exports = Index;
