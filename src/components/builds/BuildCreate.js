import React from 'react';
import { useQuill } from 'react-quilljs';

import Navbar from 'components/layout/Navbar';
import Sidebar from 'components/layout/Sidebar';
import 'quill/dist/quill.snow.css';

const BuildCreate = () => {
  const { quillRef } = useQuill();
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
              {/* <!-- Content Row --> */}
              <div className="row">

                {/* <!-- Border Left Utilities --> */}
                <div className="col-12">
                  <div ref={quillRef} />
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
    </React.Fragment>
  );
};

export default BuildCreate;