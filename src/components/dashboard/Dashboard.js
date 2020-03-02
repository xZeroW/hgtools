/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';


import Sidebar from 'components/layout/Sidebar';
import Navbar from 'components/layout/Navbar';

export default class Dashboard extends React.Component {
  logout() {
    authenticationService.logout();
    history.go(0);
  }
  render() {
    document.body.classList.add('page-top');
    return (
      <React.Fragment>
        <div id="wrapper">

          <Sidebar />

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              <Navbar />

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
                  <span>This site is fan-made and not affiliated with Curacha Games in any way.</span>
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