import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact';

import { config } from 'config';
import Navbar from 'components/layout/Navbar';
import Build from 'components/builds/Build';

export default function BuildList() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    Axios.get(`${config.API_URL}/builds/?limit=6&page=${page}`)
      .then((res) => {
        setIsLoading(false);
        setData(data.concat(res.data));
      })
      .catch(function () {
        // handle error
      });
  }, [page]);
  
  return(
    <React.Fragment>
      <Navbar />
        <MDBContainer className="text-left mt-5 pt-5">
          {isLoading ? 
            <MDBRow center>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </MDBRow>
            : 
            (<MDBRow>
              {data.map(build =>
                <Build title={build.title} key={build.id} id={build.id} createdAt={build.createdAt} creator={build.creator.username} />
              )}
                  
            </MDBRow>)
          }
          <MDBRow center md="4" middle><MDBBtn onClick={() => setPage(page + 1)}>Load more...</MDBBtn></MDBRow>
        </MDBContainer>
    </React.Fragment>
  );
}