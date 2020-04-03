import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import Navbar from 'components/layout/Navbar';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Navbar />
      <MDBContainer className="text-left mt-5 pt-5">
        <MDBRow>
          <MDBCol md="8"><h5>or something like that</h5></MDBCol>
          <MDBCol md="4"><h2>This will be a news page</h2></MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}