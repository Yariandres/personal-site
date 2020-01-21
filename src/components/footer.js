
import React from 'react';
import { Link } from 'gatsby';


const Footer = () => 
  (
    <div>

      <footer>
        © {new Date().getFullYear()}, Built by 
        {` `}
        <a href="#">Yari</a>
      </footer> 
    </div>
  );


export default Footer;
