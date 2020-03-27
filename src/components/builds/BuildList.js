import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MDBContainer, MDBRow } from 'mdbreact';

import { config } from 'config';
import Navbar from 'components/layout/Navbar';
import Build from 'components/builds/Build';

export default function BuildList() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get( config.API_URL + '/builds')
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch(function () {
        // handle error
      });
  }, []);
  
  return(
    <React.Fragment>
      <Navbar />
      <div id="main">
        <MDBContainer className="text-left mt-5 pt-5">
          <MDBRow>
            {isLoading ? 
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div> : 
              (data.map(build =>
                <Build title={build.title} key={build.id} id={build.id} createdAt={build.createdAt} creator={build.creator.username} />
              ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </React.Fragment>
  );
}