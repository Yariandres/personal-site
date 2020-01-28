import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />   

    <div className="hero">
      <div className="hero__box--1">
          <h1 className="hero__text">Designer</h1>
      </div>
      <br/>
      <div className="hero__box--1">
        <h2 className="hero__text">Developer</h2> 
      </div>    
    </div>

  </Layout>
)

export default IndexPage;
