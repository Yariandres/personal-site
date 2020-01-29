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
    <header className="header">
      <div className="row">
        <div className="col-1-of-2">
          <Logo />
        </div>

        <div className="col-1-of-2">           
          <Menu />
        </div> 
      </div>
      
        <main>{children}</main>    
      
    
    </header>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
