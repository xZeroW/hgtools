import React from 'react';
import { Link } from 'react-router-dom';

function handleToggle(){
  document.body.classList.toggle('sidebar-toggle');
  document.getElementById('accordionSidebar').classList.toggle('toggled');
}

export default function Sidebar() {
  return(
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon">
          <i className="fas fa-tools"></i>
        </div>
        <div className="sidebar-brand-text mx-3">HGTools</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/" >
          <i className="fas fa-home"></i>
          <span>Home</span></Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Tools</span>
        </Link>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/stats">Status Calculator</Link>
            <Link className="collapse-item" to="/tree">Passive Tree Planner</Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Builds --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/builds">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Builds</span></Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" 
          onClick={handleToggle}>
        </button>
      </div>

    </ul>
  );
}