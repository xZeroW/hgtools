import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.go(0);
  }

  handleToggle(){
    document.body.classList.toggle('sidebar-toggle');
    document.getElementById('accordionSidebar').classList.toggle('toggled');
  }
  render(){
    const { currentUser } = this.state;
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={this.handleToggle}>
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search builds..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <Link className="nav-link dropdown-toggle" to="/" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw"></i>
            </Link>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* <!-- Nav Item - User Information --> */}
          {currentUser ? 
            (
              <ul className="navbar-nav">
                <li className="nav-item dropdown no-arrow">
                  <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentUser.username}</span>
                    <i className="fas fa-user fa-lg"></i>
                  </Link>
                  {/* <!-- Dropdown - User Information --> */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to="/">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
    Profile
                    </Link>
                    <Link className="dropdown-item" to="/">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
    My builds
                    </Link>
                    <Link className="dropdown-item" to="/">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
    Activity Log
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
    Logout
                    </Link>
                  </div>
                </li>
              </ul>
            ):(
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/register" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm mr-2">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Login</Link>
                </li>
              </ul>
            )}
        </ul>

      </nav>
    );
  }
}
