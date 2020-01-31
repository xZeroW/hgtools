import React from 'react'
import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/stats' className="nav-link">Stats</Link>
        </li>
        <li className="nav-item">
        <Link to='/tree' className="nav-link">Tree</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;