/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Logo from "./logo";
import Menu from "./menu";
import Footer from "./footer";
import "../css/layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Logo />/
        <div className="main">

          <div className="row">            

            <div className="col-1-of-2">
              <main>{children}</main> 
            </div>

            <div className="col-1-of-2">
              <Menu /> 
            </div>

          </div>                  
        </div>
        
        
      <Footer/> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
