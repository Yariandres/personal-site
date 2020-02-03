import React from 'react';
import { Link } from 'gatsby';

import Logo from "./logo";
import navStyles from "./menu.module.scss";

const Menu = () => {
 
  return (
    <header className="header">
      <div className="row">
        <div className="col-1-of-2">
          <Logo />
        </div>
        
        <div className="col-1-of-2">
          <div className={navStyles.navGroup}> 
            <ul className={navStyles.navList}>
              <li className="nav__item">
                <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/">Home</Link>
              </li>
              <li className="nav__item">
                <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/about">About</Link>
              </li>
              <li className="nav__item">
                <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/services">Portfolio</Link>
              </li> 
              <li className="nav__item">
                <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/blog">Blog</Link>
              </li>  
            </ul>      
          </div>
        </div>
      </div>      
    </header>
  );
}  

export default Menu;
