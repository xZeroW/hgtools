import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

const LogoutModal = () => {
  function logout() {
    authenticationService.logout();
    history.go(0);
  }
  return ( 
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <Link className="btn btn-primary" onClick={logout} to="/">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default LogoutModal;