import React from 'react';
import { Link } from 'gatsby';

import img from '../images/logo-icon.png';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img className="logo__img" src={img} alt="Personal logo"/>
    </Link>
  </div>
);

export default Logo;