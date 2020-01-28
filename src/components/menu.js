import React from 'react';
import { Link } from 'gatsby';

const Menu = () => 
  (
    <div className="nav"> 
      <ul>
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__item">
          <Link to="/services">Services</Link>
        </li> 
        <li className="nav__item">
          <Link to="/blog">Blog</Link>
        </li>  
      </ul>      
    </div>
  );

export default Menu;
