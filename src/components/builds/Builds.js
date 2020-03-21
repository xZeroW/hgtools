import React from 'react';
import { MDBRow, MDBContainer } from 'mdbreact';

import Navbar from 'components/layout/Navbar';
import BuildList from 'components/builds/BuildList';

const Builds = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="main">
        <MDBContainer className="text-left mt-5 pt-5">
          <MDBRow>
            <BuildList />
          </MDBRow>
        </MDBContainer>
      </div>
    </React.Fragment>
  );
};

export default Builds;