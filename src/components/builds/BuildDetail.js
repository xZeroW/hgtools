import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useQuill } from 'react-quilljs';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { config } from 'config';
import Navbar from 'components/layout/Navbar';

export default function BuildDetail(props) {
  const { buildId } = props.match.params;
  const { quill, quillRef } = useQuill();
  const [isLoading, setIsLoading] = useState(true);
  // const [ delta, setDelta ] = useState([]);
  var delta = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get( `${config.API_URL}/builds/${buildId}`)
      .then((res) => {
        setData(res.data);
        // setDelta(res.data.content);
        setIsLoading(false);
      })
      .catch(function () {
        // handle error
      });
    
  }, []);

  delta = data.content;

  return (
    <>
      <Navbar />
      <div id="main">
        <MDBContainer className="text-left mt-5 pt-5">
          <MDBRow>
            {isLoading ? 
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div> : 
              (<>
                <MDBCol md="12">
                  <div className="user-detail float-right">
                    {data.creator.username}
                    <img src="http://via.placeholder.com/100" title={data.creator.username} className="ml-2 rounded-circle img-fluid" height="50px" width="50px" alt="avatar" />
                  </div>
                </MDBCol>
                <MDBCol md="12" className="mt-5">
                  <div>{data.title}</div>
                  <div ref={quillRef} />
                  {quill.setContents(delta)}
                </MDBCol>
              </>)}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

BuildDetail.propTypes = {
  match: PropTypes.object.isRequired
};