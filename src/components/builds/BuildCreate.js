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
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">Post a build</h1>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BuildCreate;