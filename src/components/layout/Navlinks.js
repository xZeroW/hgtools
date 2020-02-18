import React from 'react'
import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-lg-auto">
        <li className="nav-item">
          <Link to='/login' className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
        <Link to='/register' className="nav-link">Register</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link" href="/" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tools</a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
          <Link to='/stats' className="dropdown-item">Stats</Link>
          <Link to='/tree' className="dropdown-item">Passive Tree</Link>
        </div>
      </li>
      </ul>
    </div>
  );
};

export default Navlinks;