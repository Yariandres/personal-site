import React from 'react';
import { Link } from 'gatsby';

import Logo from "./logo";
import navStyles from "./menu.module.scss";

const Nav = () => {
  return (
    <div className="navigation">
    <Logo />
      <nav className={navStyles.navGroup}> 
        <ul className={navStyles.navList}>
          <li className="nav__item">
            <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/portfolio">Portfolio</Link>
          </li> 
          <li className="nav__item">
            <Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to="/blog">Blog</Link>
          </li>  
        </ul>      
      </nav>
    </div>     
  )
}

export default Nav;