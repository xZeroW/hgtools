import React, { useState } from 'react';
import Axios from 'axios';
import { useQuill } from 'react-quilljs';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

import 'quill/dist/quill.snow.css';

import { config } from 'config';
import Navbar from 'components/layout/Navbar';
import { authHeader } from '_helpers/auth-header';

export default function BuildCreate() {

  const [title, setTitle] = useState('');
  const { quill, quillRef } = useQuill();

  const saveBuild = (e) => {
    e.preventDefault();
    const content = quill.getContents();
    Axios.post(`${config.API_URL}/builds`, { title, content }, { headers: authHeader() })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div id="main">
        <MDBContainer className="text-left mt-5 pt-5">
          <MDBRow>
            <MDBCol>
              <form onSubmit={saveBuild}>
                <MDBInput name="title" onChange={e => setTitle(e.target.value)} label="Build title" />
                <div ref={quillRef} />
                <MDBBtn color="primary" type="submit">Post!</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </React.Fragment>
  );
}