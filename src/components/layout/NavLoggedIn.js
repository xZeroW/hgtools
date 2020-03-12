import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '_services/auth.service';

class NavLoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }
  render() { 
    const { currentUser } = this.state;
    return ( 
      <ul className="navbar-nav">
        <li className="nav-item dropdown no-arrow">
          <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentUser.username}</span>
            <i className="fas fa-user fa-lg"></i>
          </Link>
          {/* <!-- Dropdown - User Information --> */}
          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <Link className="dropdown-item" to="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
            </Link>
            <Link className="dropdown-item" to="/builds/create">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Post a build
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                My builds
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </Link>
          </div>
        </li>
      </ul>
    );
  }
}
 
export default NavLoggedIn;