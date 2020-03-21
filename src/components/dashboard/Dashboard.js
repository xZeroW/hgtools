import React from 'react';
import { MDBContainer } from 'mdbreact';

import Navbar from 'components/layout/Navbar';

export default function Dashboard() {
  document.body.classList.add('white-skin');
  return (
    <React.Fragment>
      <Navbar />
      <div id="main">
        <MDBContainer className="text-center mt-5 pt-5">
          <h2>This will be a news page</h2>
          <h5>or something like that</h5>
        </MDBContainer>
      </div>
    </React.Fragment>
  );
}