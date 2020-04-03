import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import Navbar from 'components/layout/Navbar';
import panelImg from '../../assets/imgs/cpanel.jpg';

export default function Ceditor() {

  const panel = {
    backgroundImage: `url(${panelImg})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: '720px'
  };

  return(
    <React.Fragment>
      <Navbar />
      <MDBContainer className="text-left mt-5 pt-4">
        <MDBRow end style={panel}>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}