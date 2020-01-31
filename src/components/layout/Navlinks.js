import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/stats'>Stats</NavLink></li>
      <li><NavLink to='/tree'>Passive Tree</NavLink></li>
    </ul>
  );
};

export default Navlinks;