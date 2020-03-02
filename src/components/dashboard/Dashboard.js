import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from 'components/layout/Navbar';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  handleToggle() {
    document.body.classList.toggle('sidebar-toggle'); // $('body').toggleClass('sidebar-toggled');
    document.getElementById('accordionSidebar').classList.toggle('toggled');
    //$('.sidebar').toggleClass('toggled');
    // if ($('.sidebar').hasClass('toggled')) {
    //   $('.sidebar .collapse').collapse('hide');
    // }
  }

  logout() {
    authenticationService.logout();
    history.go(0);
  }

  render() {
    const { currentUser } = this.state;
    document.body.classList.add('page-top');
    return (
      <React.Fragment>
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
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
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i>
                <span>Home</span></Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
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
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            {/* <!-- Nav Item - Builds --> */}
            <li className="nav-item">
              <Link className="nav-link" to="/builds">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Builds</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <Link className="nav-link" to="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.handleToggle}></button>
            </div>

          </ul>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={this.handleToggle}>
                  <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
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
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <Link className="scroll-to-top rounded" to="#page-top">
          <i className="fas fa-angle-up"></i>
        </Link>

        {/* <!-- Logout Modal--> */}
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <Link className="btn btn-primary" onClick={this.logout} to="/">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}