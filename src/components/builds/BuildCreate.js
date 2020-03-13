import React from 'react';

import Sidebar from 'components/layout/Sidebar';
import Navbar from 'components/layout/Navbar';
import Quill from 'components/quill/Quill';

const BuildCreate = () => {
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
              <h1 className="h3 mb-4 text-gray-800">Post a build</h1>
              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control bg-light border-0 small" placeholder="Build title" aria-describedby="basic-addon2" />
                    </div>
                    <div className="form-group">
                      <Quill />
                    </div>
                  </form>
                </div>
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

      {/* <!-- Logout Modal--> */}
    </React.Fragment>
  );
};

export default BuildCreate;