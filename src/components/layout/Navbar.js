import React from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">HGTools</Link>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;