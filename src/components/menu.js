import React from 'react';
import { Link } from 'gatsby';

import Logo from "./logo";

const Menu = () => 
  (
    <header className="header">
      <div className="row">
        <div className="col-1-of-2">
          <Logo />
        </div>

        <div className="col-1-of-2">
          <div className="nav"> 
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav__item">
                <Link to="/services">Portfolio</Link>
              </li> 
              <li className="nav__item">
                <Link to="/blog">Blog</Link>
              </li>  
            </ul>      
          </div>
        </div>

      </div>
      
    </header>
  );

export default Menu;
