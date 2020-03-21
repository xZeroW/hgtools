import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';

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
      {isLoading ? 
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div> : 
        (data.map(build =>
          <MDBCol key={build.id} md="4" >
            <MDBCard className="mb-4">
              <MDBCardBody>
                <img src="http://via.placeholder.com/100" className="float-left rounded-circle img-fluid" height="50px" width="50px" alt="avatar" />
                <div style={{ paddingLeft: '60px'}}>
                  <Link to={'/builds/' + build.id}>
                    <MDBCardTitle className="card-title text-truncate">{build.title}</MDBCardTitle>
                  </Link>
                  <p className="card-text text-truncate">
                    <i className="far fa-clock pr-2"></i>
                    {build.createdAt}
                  </p></div>
              </MDBCardBody>
                
              <Link to={'/builds/' + build.id}>
                <MDBCardImage className="card-img-top rounded-0 img-fluid" src="http://via.placeholder.com/1280x720" alt="" />
                <div className="mask rgba-white-slight"></div>
              </Link>
                

              <MDBCardBody>
                <div className="collapse-content">
                  <MDBIcon icon="share-alt" className="text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></MDBIcon>
                  <MDBIcon icon="thumbs-up" far className="text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></MDBIcon>                    
                </div>
              </MDBCardBody>

            </MDBCard>
          </MDBCol>
        ))}
    </React.Fragment>
  );
}