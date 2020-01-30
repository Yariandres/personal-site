import React from "react"

import Layout from "../components/layout";

import Menu from "../components/menu";
import Info from "../components/info";
import Features from "../components/features";
import Services from "../components/services";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <Menu/>   

      <div className="hero">
        <div className="row">          
          <div className="hero__box--1">
              <h1>
              <span className="hero__heading-primary--main">Hi, I am Yari - Web designer & Developer</span>
                <span className="hero__heading-primary--sub">For  Monetization and Growth of your Online Passion.</span>   
              </h1>
          </div>
        </div>      
      </div>
    </header>
    <Info/>
    <Features/>
    <Services/>
  </Layout>
)

export default IndexPage;
