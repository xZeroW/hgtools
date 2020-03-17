import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow } from 'mdbreact';

import { config } from 'config';

export default function BuildList() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get( config.API_URL + '/builds')
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch(function () {
        // handle error
      });
  }, []);
  
  return(
    <React.Fragment>
      <MDBRow>
        {isLoading ? <ReactLoading type='spin' color="grey" /> : 
          (data.map(build =>
            <MDBCol key={build.id} md="4" className="mb-4">
              <MDBCard>
                <MDBCardBody className="d-flex flex-row">

                  <MDBCardImage src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle mr-3 img-fluid" height="50px" width="50px" alt="avatar" />

                  <div>
                    <Link to={'/builds/' + build.id}>
                      <MDBCardTitle className="font-weight-bold mb-2 text-truncate">{build.title}</MDBCardTitle>
                    </Link>
                    <p className="card-text">
                      <i className="far fa-clock pr-2"></i>
                      {build.createdAt}
                    </p>
                  </div>
                </MDBCardBody>
                
                <Link to={'/builds/' + build.id}>
                  <MDBCardImage className="card-img-top rounded-0 img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="" />
                  <div className="mask rgba-white-slight"></div>
                </Link>
                

                <MDBCardBody>
                  <div className="collapse-content">
                    <i className="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
                    <i className="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>
                  </div>
                </MDBCardBody>

              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </React.Fragment>
  );
}