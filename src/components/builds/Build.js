import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';

import avatar from './avatar.png';
import thumbnail from './thumbnail.png';

export default function Build({title, id, creator, createdAt}) {

  return(
    <MDBCol md="4" >
      <MDBCard className="mb-4">
        <MDBCardBody>
          <img src={avatar} title={creator} className="float-left rounded-circle img-fluid" height="50px" width="50px" alt="avatar" />
          <div style={{ paddingLeft: '60px'}}>
            <Link to={'/builds/' + id}>
              <MDBCardTitle title={title} className="text-truncate">{title}</MDBCardTitle>
            </Link>
            <p className="card-text text-truncate">
              <i className="far fa-clock pr-2"></i>
              {createdAt}
            </p>
          </div>
        </MDBCardBody>
                
        <Link to={'/builds/' + id}>
          <MDBCardImage className="img-fluid" src={thumbnail} alt="" />
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
  );
}

Build.propTypes = {
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};