import React from "react"

import Layout from "../components/layout";

import Info from "../components/info";
import Features from "../components/features";
import Services from "../components/services";
import Stories from "../components/stories";
import Book from "../components/book";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />        
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
    <Info/>
    <Features/>
    <Services/>
    <Stories/>
    <Book/>
  </Layout>
)

export default IndexPage;
