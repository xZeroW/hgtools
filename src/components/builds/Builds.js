/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';
import Sidebar from 'components/layout/Sidebar';
import Navbar from 'components/layout/Navbar';
import BuildList from 'components/builds/BuildList';

export default class Builds extends React.Component {

  constructor()  {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    this.setState({ isLoading: false });
  }

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
                <h1 className="h3 mb-4 text-gray-800">Builds</h1>
                <div>
                  {this.state.isLoading ? <ReactLoading type='spin' color="grey" /> : <BuildList />}
                </div>

              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>
                    This site is fan-made and not affiliated with Curacha Games in any way.<br /> <br />
                    <a className="copyrighted-badge" title="Copyrighted.com Registered &amp; Protected" rel="noopener noreferrer" target="_blank" href="https://www.copyrighted.com/website/BaN86VhfErI9Rli6"><img alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcSet="https://static.copyrighted.com/badges/125x25/04_1_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/04_1.png" /></a><script src="https://static.copyrighted.com/badges/helper.js"></script>
                  </span>
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