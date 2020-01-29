import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <div className="hero">
        <div className="row">          
          <div className="hero__box--1">
              <h1>
                <span className="hero__heading-primary--main">Designer</span>
                <span className="hero__heading-primary--sub">Developer</span>
              </h1>
          </div>
        </div>      
      </div>    

  </Layout>
)

export default IndexPage;
