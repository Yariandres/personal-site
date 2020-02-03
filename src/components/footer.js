import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Logo from "./logo";

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__logo--box">
        <Logo/>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="footer__link" to="/">Home</Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to="/about">About</Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to="/services">Portfolio</Link>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="footer__copyright">
            <p className="paragraph">Porfolio site built by <a href="#" className="footer__link">{data.site.siteMetadata.author}</a> - software engineer. Copyrights &copy; Yari Andres</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 


export default Footer;
