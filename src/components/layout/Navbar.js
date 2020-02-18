import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-light headroom bg-primary">
      <div className="container">
      <Link className="navbar-brand mr-lg-5" to="/">HGTools</Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a href="../../../index.html">
                <img src="../assets/img/brand/blue.png" alt="" />
              </a>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
          <li className="nav-item dropdown">
            <a href="/" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-ui-04 d-lg-none"></i>
              <span className="nav-link-inner--text">Tools</span>
            </a>
            <div className="dropdown-menu dropdown-menu-xl">
              <div className="dropdown-menu-inner">
                <a href="/stats" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                    <i className="ni ni-spaceship"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Stats</h6>
                    <p className="description d-none d-md-inline-block mb-0">Learn how to use compiling Scss, change brand colors and more.</p>
                  </div>
                </a>
                <a href="/tree" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                    <i className="ni ni-palette"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Passive Tree</h6>
                    <p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography, icons and the grid system we used for .</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-collection d-lg-none"></i>
              <span className="nav-link-inner--text">Examples</span>
            </a>
            <div className="dropdown-menu">
              <a href="../examples/landing.html" className="dropdown-item">Landing</a>
              <a href="../examples/profile.html" className="dropdown-item">Profile</a>
              <a href="../examples/login.html" className="dropdown-item">Login</a>
              <a href="../examples/register.html" className="dropdown-item">Register</a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
          <li className="nav-item d-none d-lg-block ml-lg-4">
            <a href="/register" className="btn btn-neutral btn-icon">
              <span className="btn-inner--icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
              <span className="nav-link-inner--text"> Register</span>
            </a>
            <a href="/" className="btn btn-neutral btn-icon">
              <span className="btn-inner--icon">
                <i className="fa fa-cloud-download mr-2"></i>
              </span>
              <span className="nav-link-inner--text">Login</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
